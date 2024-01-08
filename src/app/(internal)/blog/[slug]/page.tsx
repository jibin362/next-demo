import React from "react";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <div>
      Blog Page <p>Page slug is: {slug}</p>
      <p>You can have your BE/API polled to get data</p>
    </div>
  );
}
