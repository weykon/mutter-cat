import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default function AccountLayout({
  children,
  base
}: {
  children: React.ReactNode;
  base: React.ReactNode;
}) {
  return (
    <div className="py-10 px-8">
      <p className="text-2xl ">Account</p>
      <span className="divider"></span>
      {base}
    </div>
  );
}