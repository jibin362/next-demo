import React from "react";
import { data } from "@/data/data";
import BlogCard from "@/components/BlogCard";

export default async function Page() {
  return (
    <div>
      Blog
      <div className="flex flex-wrap gap-8">
        {data.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}
