import { createClient } from '@supabase/supabase-js';

// Load environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function resetPassword() {
  const email = 'alexionescu870@gmail.com';
  const newPassword = 'Admin123!';

  console.log('Resetting password for:', email);
  console.log('New password:', newPassword);
  console.log('---');

  // Get the user first
  const { data: users, error: listError } = await supabase.auth.admin.listUsers();

  if (listError) {
    console.error('Error listing users:', listError);
    return;
  }

  const user = users.users.find(u => u.email === email);

  if (!user) {
    console.error('User not found!');
    return;
  }

  console.log('User found, ID:', user.id);

  // Update the password
  const { data, error } = await supabase.auth.admin.updateUserById(
    user.id,
    { password: newPassword }
  );

  if (error) {
    console.error('Error updating password:', error);
    return;
  }

  console.log('✓ Password updated successfully!');
  console.log('---');
  console.log('You can now log in with:');
  console.log('Email:', email);
  console.log('Password:', newPassword);
}

resetPassword();
