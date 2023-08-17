import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import MD from "./mdPreview";

type Props = { params: { id: string } };

export default async function MutterOnePage(props: Props) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.from('mutters').select('*').eq('id', props.params.id).single();

  return (
    <div className="relative w-1/2 mx-auto p-10">
      <MD data={data} />
    </div>
  );
}