'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function ProfileBasePage() {

  const supabase = createClientComponentClient()
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // use Object.entries to get the form data
    const { user_name } = Object.fromEntries(new FormData(e.currentTarget));
    await supabase.auth.updateUser({ data: { user_name } })
  }

  return (
    <div className=" py-10 px-8">
      <p className="text-2xl ">Security</p>
      <span className="divider"></span>
      <form className="flex justify-start">

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