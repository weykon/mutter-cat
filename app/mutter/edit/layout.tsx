
export const metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
};
export default function MutterEditLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello Root and MetaData MutterEdit</h1>
    </div>
  );
}