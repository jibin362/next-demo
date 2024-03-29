import Link from "next/link";
import React from "react";

interface CardProps {
  href: string;
  label: string;
  content?: string;
}

export default function Card({ href, label, content }: CardProps) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>{label}</h2>
      {!!content && (
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{content}</p>
      )}
    </Link>
  );
}
