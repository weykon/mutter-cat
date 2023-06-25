export const metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
};
export default function RealDoLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello Root and MetaData RealDo</h1>
    </div>
  );
}