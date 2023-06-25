import Image from "next/image";

export const metadata = {
  title: 'Mutter',
  description: 'SEO Title',
};
export default function MutterLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-10 lg:max-w-6xl">
      {children}
    </div>
  )

}