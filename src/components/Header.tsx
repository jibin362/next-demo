import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="flex gap-4">
        <Link href="/about">About</Link>
        <Link href="/blog">Blogs</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
