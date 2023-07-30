'use client'
import { Auth } from '@supabase/auth-ui-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'
export default function MeowUpPage() {
  const supabase = createClientComponentClient()
  return (
    <div className='w-auto h-auto rounded-lg relative bg-white flex p-5 shadow-lg '>
      <Auth
        supabaseClient={supabase}
        providers={['google', 'github']}
        appearance={{ theme: ThemeSupa }}
      />
    </div>
  );
}