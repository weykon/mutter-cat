import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { supabase } from "@supabase/auth-ui-shared";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
  title: 'Mutter',
  description: 'mutter mutter!~',
};
export default async function MutterLayout({
  children
}: {
  children: React.ReactNode;
}) {

  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase.from('mutters').select('*');
  if(error) {
    console.log('error',error);
  }else { 
    console.log('data',data);
  }
  

  return (
    <div className=" flex-col justify-start items-center min-w-full min-h-full flex z-[1] bg-base-200">
      <Link href={'/mutter/edit'} className="btn btn-lg btn-primary mt-8">
        Mutter one second
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-10 lg:max-w-6xl w-xl sm:w-2xl ">
        {children}
      </div>
    </div>
  )
}