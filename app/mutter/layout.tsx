import Link from "next/link";

export const metadata = {
  title: 'Mutter',
  description: 'mutter mutter!~',
};
export default function MutterLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex-col justify-start items-center min-w-full min-h-full flex z-[1] bg-base-200">
      <Link href={'/mutter/edit'} className="btn btn-lg btn-primary mt-8">
        Mutter one second
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-10 lg:max-w-6xl w-xl sm:w-2xl ">

        {children}
      </div>
    </div>
  )
}