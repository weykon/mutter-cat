'use client'
import { Auth } from '@supabase/auth-ui-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export const dynamic = 'force-dynamic'

export default function MeowInUpPage() {
  const supabase = createClientComponentClient();

  const location = useRef<any>(null);

  useEffect(() => {
    location.current = window.location;
    console.log(location.current);
  }, [])

  return (
    <div className='w-auto h-auto rounded-lg relative bg-white flex p-5 shadow-lg '>
      <Auth
        supabaseClient={supabase}
        providers={['google', 'github']}
        appearance={{ theme: ThemeSupa }}
        onlyThirdPartyProviders={true}
        redirectTo={`${location.current?.origin ?? ''}/auth/callback`}
      />
    </div>
  );
}
