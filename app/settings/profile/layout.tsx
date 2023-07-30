export default function ProfileLayout({
  children,
  base,
  status
}: {
  children: React.ReactNode;
  base: React.ReactNode;
  status: React.ReactNode;
}) {
  return (
    <div className="py-10 px-8">
      <Block>
        {children}
      </Block>
      <Block>
        {base}
      </Block>
      <Block>
        {status}
      </Block>
    </div>
  );
}

function Block({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5">
      {children}
    </div>
  )
}