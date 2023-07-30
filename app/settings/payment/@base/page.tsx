import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default function ProfileBasePage() {

  const supabase = createServerComponentClient({cookies})
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    'use server'
    // use Object.entries to get the form data
    const { user_name } = Object.fromEntries(new FormData(e.currentTarget));
    await supabase.auth.updateUser({ data: { user_name } })
  }

  return (
    <div>
      <form className="flex justify-start py-10 px-8">

        {/* block */}
        <div className="flex flex-col w-8/12 items-start">
          <div className="flex flex-col items-start justify-start">
            <p className="text-md mb-2">
              Name
            </p>
            <input className="w-26 h-18 rounded-lg" type="text" name="user_name" />

          </div>

          <button className="btn-md btn-primary rounded-lg mt-5">
            Update
          </button>
        </div>


      </form>
    </div>
  );
}