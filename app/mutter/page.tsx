import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import ImgComp from "./image";
import { cookies } from "next/headers";
import { Database } from "@/lib/database.types";
import Pagination from "./pagination";
import Link from "next/link";
import MutterEditor from "./(component)/MutterEditor";
const width = 600;
const height = 400;
const imgs = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
]
type Props = {
  params: {
  },
  searchParams: {
    p: string,
  }
}
const perPage = 9;
export default async function MutterPage(props: Props) {
  let current = isNaN(Number(props.searchParams.p)) ? 1 : Number(props.searchParams.p);
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const getPagination = (page: number, size: number) => {
    const limit = size ? +size : 3
    const from = page ? page * limit : 0
    const to = page ? from + size - 1 : size - 1
    return { from, to }
  }

  const { from, to } = getPagination(current - 1, perPage);

  const { data, error, count } = await supabase
    .from('mutters')
    .select('author_id,created_at,id,is_private,summary,title,updated_at', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to);

  if (error) {
    console.log('error', error);
  } else {
    // console.log('data', data);
  }

  return (
    <div className=" transition-all flex flex-col items-center">
      <MutterEditor />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-10 lg:max-w-6xl w-xl sm:w-2xl transition-all">
        {
          data?.map(e => (
            <div key={e.id} className=" card w-auto lg:max-w-[400px] bg-neutral dark:bg-neutral-400 shadow-xl image-full">
              <div className="card-body">
                <h2 className="card-title">{e.title}</h2>
                <p>{e.summary}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Ai</button>
                  <Link href={'/mutter/' + e.id} className="btn btn-primary w-32">Read</Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <Pagination
        current={current}
        count={count ?? 0}
        perPage={perPage}
      />
    </div>
  );

  function ImageFromUrl({ url }: { url: string }) {
    return (
      <div className=" card w-auto lg:max-w-[400px] bg-neutral dark:bg-neutral-400 shadow-xl image-full">
        {/* <ImgComp url={url}/>  */}
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Ai</button>
            <button className="btn btn-primary w-32">Read</button>
          </div>
        </div>
      </div>
    )
  }
}

