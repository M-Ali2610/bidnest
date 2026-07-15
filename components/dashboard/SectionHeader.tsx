interface SectionHeaderProps {
  title: string;
  description?: string;
}

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-[#010F28]">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}