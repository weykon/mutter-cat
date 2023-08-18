import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import MeowInUpPage from "../auth/MeowInUp";

export default async function Unauthenticated() {

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    redirect('/')
  }

  return (
    <div className=" flex justify-between items-center min-w-full min-h-screen flex-row p-10">
      <div className="flex w-1/2 flex-1">
        <div className="w-full max-w-5xl justify-center font-mono text-sm lg:flex text-center mt-32 flex flex-col items-center p-10">
          <p className=" text-lg sm:text-xl md:text-2xl"> Hi! </p>
          <p className="px-10 text-sm sm:text-md md:text-xl"> Hello there, this is the gathering place of <b>thinkers</b>, where <b>wisdom</b> and <b>cuteness</b> reside. It&apos;s positively delightful to see you here!  </p>
          <img width={400} src="daycat.png" alt="" />
        </div>
      </div>
      <MeowInUpPage />
    </div>
  );
}