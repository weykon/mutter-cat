import Image from "next/image"

export default function Home() {
  return (
    <main className=" bg-slate-50 dark:bg-slate-800 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-5xl justify-between font-mono text-sm lg:flex">
        <Left />
        <Divider />
        <Right />
      </div>
    </main>
  )
}

function Left() {
  return (
    <div className=" grow-[0] flex gap-x-2 p-2 w-56 ">
      <div className="avatar ">
        <div className="w-[100px] h-[100px] rounded-full">
          <Image width={200} height={200} src="/avatar.png" alt={"Loading"} priority={true} />
        </div>
      </div>
      <div className="flex-col flex">
        <p>weykon</p>
        <p>I'm learning...</p>
      </div>
    </div>
  )
}

function Right() {
  return (
    <div className="grow-[3] flex justify-center flex-col items-center">
      <Image
        width={200} height={200}
        priority
        src={'/cat.svg'}
        alt="Follow us on Twitter"
        className="  fill-red-200 outline-green-500"
      />
      <div className="pt-10 text-lg text-center">
        <p className="text-2xl pb-5">Meow!</p>
        <p>I'm Weykon's Mutter Cat</p>
        <p>I know all about weykon</p>
      </div>
    </div>
  )
}
const Divider = () => <div className="divider lg:divider-horizontal dark:divide-slate-100" />