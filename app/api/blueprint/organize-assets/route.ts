import { NextResponse } from "next/server";
import { supabaseServerAdmin } from "@/lib/supabase/server";

/**
 * Moves uploaded assets from session folder to blueprint folder
 * and returns updated URLs
 */
export async function POST(request: Request) {
  try {
    const { sessionId, blueprintId, assetUrls } = await request.json();

    if (!sessionId || !blueprintId || !assetUrls || !Array.isArray(assetUrls)) {
      return NextResponse.json(
        { ok: false, error: "Missing required parameters" },
        { status: 400 }
      );
    }

    if (assetUrls.length === 0) {
      return NextResponse.json({ ok: true, updatedUrls: [] });
    }

    const supabase = supabaseServerAdmin();
    const updatedUrls: string[] = [];

    for (const url of assetUrls) {
      try {
        // Extract the filename from the URL
        // URL format: https://.../blueprint-assets/session-xxx/filename.jpg
        const urlParts = url.split("/blueprint-assets/");
        if (urlParts.length !== 2) {
          console.error("Invalid URL format:", url);
          updatedUrls.push(url); // Keep original if format is unexpected
          continue;
        }

        const oldPath = urlParts[1]; // e.g., "session-xxx/filename.jpg"
        const filename = oldPath.split("/").pop(); // e.g., "filename.jpg"

        if (!filename) {
          console.error("Could not extract filename from:", url);
          updatedUrls.push(url);
          continue;
        }

        const newPath = `blueprints/${blueprintId}/${filename}`;

        // Download the file from old location
        const { data: fileData, error: downloadError } = await supabase.storage
          .from("blueprint-assets")
          .download(oldPath);

        if (downloadError) {
          console.error(`Error downloading ${oldPath}:`, downloadError);
          updatedUrls.push(url); // Keep original URL if download fails
          continue;
        }

        // Upload to new location
        const { error: uploadError } = await supabase.storage
          .from("blueprint-assets")
          .upload(newPath, fileData, {
            contentType: fileData.type,
            cacheControl: "3600",
          });

        if (uploadError) {
          console.error(`Error uploading to ${newPath}:`, uploadError);
          updatedUrls.push(url); // Keep original URL if upload fails
          continue;
        }

        // Delete old file
        const { error: deleteError } = await supabase.storage
          .from("blueprint-assets")
          .remove([oldPath]);

        if (deleteError) {
          console.error(`Error deleting ${oldPath}:`, deleteError);
          // Don't fail - new file is uploaded, old file can be cleaned up later
        }

        // Get new public URL
        const { data: { publicUrl } } = supabase.storage
          .from("blueprint-assets")
          .getPublicUrl(newPath);

        updatedUrls.push(publicUrl);
      } catch (error) {
        console.error("Error processing asset:", url, error);
        updatedUrls.push(url); // Keep original URL on error
      }
    }

    return NextResponse.json({ ok: true, updatedUrls });
  } catch (error) {
    console.error("Organize assets error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to organize assets" },
      { status: 500 }
    );
  }
}
