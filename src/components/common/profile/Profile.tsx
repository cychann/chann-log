import React from "react";
import Image from "next/image";

export default function Profile() {
  return (
    <section className="flex justify-between items-center">
      <div className="">
        <h1 className="text-2xl font-bold mb-2">Welcome to channn-log 👋</h1>
        <p>안녕하세요🤗 프론트엔드 개발자 최유찬입니다. </p>

        <div></div>
      </div>
      <Image src="/avatar.png" alt="avatar" width={112} height={112} />
    </section>
  );
}
