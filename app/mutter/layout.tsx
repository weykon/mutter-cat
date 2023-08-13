import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { supabase } from "@supabase/auth-ui-shared";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

// export const metadata = {
//   title: 'Mutter',
//   description: 'mutter mutter!~',

// };

export default async function MutterLayout({
  children,modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className=" flex-col justify-start items-center min-w-full min-h-screen flex z-[1] bg-base-200">
      <Link href={'/mutter/edit'} className="btn btn-lg btn-primary mt-8">
        Mutter one second
      </Link>
      {children}
      {modal}
    </div>
  )
}