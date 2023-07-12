import ImgComp from "./image";
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
export default function MutterPage() {
  return (
    <>
      {
      imgs.map(e => (
        <ImageFromUrl url={e} key={e} />
      ))
    }
    </>
  );

  function ImageFromUrl({ url }: { url: string }) {
    return (
      <div className=" card w-auto lg:max-w-[400px] bg-base-100 dark:bg-slate-700 shadow-xl image-full">
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

