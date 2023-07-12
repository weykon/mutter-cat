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
    <div className=" flex-col justify-start items-center min-w-full min-h-full flex z-[1]">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-10 lg:max-w-6xl w-xl sm:w-2xl bg-base-200">
        {children}
      </div>
    </div>
  )
}