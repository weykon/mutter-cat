
export default function MeowUpLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex justify-between items-center min-w-full min-h-screen flex-row p-10">
      <div className="flex w-1/2 flex-1">

      </div>
      {children}
    </div>
  );
}