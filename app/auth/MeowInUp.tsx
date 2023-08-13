'use client'
import { Auth } from '@supabase/auth-ui-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import { useRouter } from 'next/navigation';
export default function MeowInUpPage() {
  const router = useRouter();
  const supabase = createClientComponentClient()
  return (
    <div className='w-auto h-auto rounded-lg relative bg-white flex p-5 shadow-lg '>
      <Auth
        supabaseClient={supabase}
        providers={['google', 'github']}
        appearance={{ theme: ThemeSupa }}
        onlyThirdPartyProviders={true}
        redirectTo={`${'http://localhost:3000'}/auth/callback`}
      />
    </div>
  );
}
