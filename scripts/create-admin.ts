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

async function createAdminAccount() {
  const email = 'alexionescu870@gmail.com';
  const password = 'WebForm2024!Admin#Secure$Pass';

  console.log('Creating admin account...');
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('---');

  // Create the user
  const { data: userData, error: signUpError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true, // Auto-confirm email
    user_metadata: {
      name: 'Admin',
    }
  });

  if (signUpError) {
    console.error('Error creating user:', signUpError);
    return;
  }

  console.log('✓ User created successfully');
  console.log('User ID:', userData.user.id);

  // Create/update profile with admin role
  const { error: profileError } = await supabase
    .from('profiles')
    .upsert({
      id: userData.user.id,
      email: email,
      name: 'Admin',
      role: 'admin',
    });

  if (profileError) {
    console.error('Error creating profile:', profileError);
    return;
  }

  console.log('✓ Admin profile created successfully');
  console.log('---');
  console.log('Admin account is ready!');
  console.log('You can now log in with:');
  console.log('Email:', email);
  console.log('Password:', password);
}

createAdminAccount();
