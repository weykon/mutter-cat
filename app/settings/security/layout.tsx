import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default function SecurityLayout({
  children,
  base
}: {
  children: React.ReactNode;
  base: React.ReactNode;
}) {
  return (
    <div className="py-10 px-8">
      <p className="text-2xl ">Security</p>
      <span className="divider"></span>
      {base}
    </div>
  );
}