import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  blog: {
    title: string;
    image: string;
    slug: string;
  };
}

export default function BlogCard({ blog: { title, image, slug } }: CardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <div className="relative w-[200px] h-[150px]">
        <Image src={image} fill sizes="100%" alt={`image-${slug}`} />
      </div>
      <p className={`mt-3 mb-3 text-2xl font-semibold text-center`}>{title}</p>
    </Link>
  );
}
