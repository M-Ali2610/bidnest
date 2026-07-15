import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  icon: LucideIcon;
}

export default function EmptyState({
  title,
  description,
  buttonText,
  buttonHref,
  icon: Icon,
}: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#3356F0]/10">
        <Icon
          size={30}
          className="text-[#3356F0]"
        />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-[#010F28]">
        {title}
      </h3>

      <p className="mx-auto mt-3 max-w-md leading-7 text-slate-600">
        {description}
      </p>

      <Link
        href={buttonHref}
        className="mt-8 inline-flex rounded-xl bg-[#3356F0] px-6 py-3 font-semibold text-white transition hover:bg-[#2948D8]"
      >
        {buttonText}
      </Link>
    </div>
  );
}