type ListPageHeaderProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function ListPageHeader({
  title,
  description,
  children,
}: ListPageHeaderProps) {
  return (
    <section className="mx-auto mt-12 w-full max-w-[960px] px-4">
      <h1 className="text-4xl font-extrabold mb-2">{title}</h1>
      <p className="text-text-primary mb-6 whitespace-pre-line">
        {description}
      </p>
      {children}
    </section>
  );
}
