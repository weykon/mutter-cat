import Modal from "@/clientComponent/modal"
import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

type Props = { params: { id: string } };
export default async function MutterModal(props: Props) {

    const supabase = createServerComponentClient<Database>({ cookies });
    const { data } = await supabase.from('mutters').select('*').eq('id', props.params.id).single();

    return (
        <Modal>
            <div>123</div>
            <p>{data?.content}</p>
        </Modal>
    )
}