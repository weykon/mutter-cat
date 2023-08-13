import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

type Props = { params: { id: string } };

export default async function MutterOnePage(props: Props) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.from('mutters').select('*').eq('id', props.params.id).single();

  return (
    <div>
      <h1>Hello Page Mutter</h1>
      <p>{data?.content}</p>
    </div>
  );
}