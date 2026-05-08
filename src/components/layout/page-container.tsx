type Props = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: Props) {
  return (
    <main className="mx-auto max-w-7xl px-6 lg:px-8">
      {children}
    </main>
  );
}

