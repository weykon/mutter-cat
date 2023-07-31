import Image from "next/image"

export default async function Home() {
  return (
    <main className=" bg-base-100  dark:bg-base flex min-h-screen flex-col items-center justify-between p-24">
        <Auth />
    </main>
  )
}

const Auth = () => (
  <div className="w-full max-w-5xl justify-between font-mono text-sm lg:flex">
    <Left />
    <Divider />
    <Right />
  </div>
)

function Left() {
  return (
    <div className=" grow-[0] flex gap-x-2 p-2 w-56 ">
      <div className="avatar ">
        <div className="w-[100px] h-[100px] rounded-full">
          <Image width={200} height={200} src="/avatar.png" alt={"Loading"} loading='lazy' />
        </div>
      </div>
      <div className="flex-col flex text-base-content">
        <p>weykon</p>
        <p>I'm learning...</p>
      </div>
    </div>
  )
}

function Right() {
  return (
    <div className="grow-[3] flex justify-center flex-col items-center relative">
      <Image
        width={200} height={200}
        src={'/cat.svg'}
        priority
        alt="Follow us on Twitter"
        className="stroke-primary fill-slate-400"
      />
      <div className="pt-10 text-lg text-center text-base-content">
        <p className="text-2xl pb-5">Meow!</p>
        <p>I'm Weykon's Mutter Cat</p>
        <p>I know all about weykon</p>
      </div>
    </div>
  )
}


const Divider = () => <div className="divider lg:divider-horizontal dark:divide-slate-100" />