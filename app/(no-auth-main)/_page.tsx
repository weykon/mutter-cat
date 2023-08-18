import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import MeowInUpPage from "../auth/MeowInUp";
export const dynamic = 'force-dynamic'
export default async function Unauthenticated() {

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    redirect('')
  }

  return (
    <div className={`flex min-h-full min-w-full flex-col justify-start items-center
    md:flex-row md:items-center md:px-10 md:py-10
    `}>
      <div className="flex max-w-[1000px] w-1/2">
        <div className=" justify-center font-mono text-sm lg:flex text-center mt-8 md:mt-32 flex flex-col items-center md:p-10 ">
          <p className=" text-lg sm:text-xl md:text-2xl"> Hi! </p>
          <p className="px-2 md:px-10 text-lg sm:text-lg md:text-xl md:max-w-[600px]"> Hello there, this is the gathering place of <b>thinkers</b>, where <b>wisdom</b> and <b>cuteness</b> reside. It&apos;s positively delightful to see you here!  </p>
          <img width={400} src="daycat.png" alt="" />
        </div>
      </div>
      <MeowInUpPage />
    </div>
  );
}