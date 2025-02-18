import React from "react";
import Image from "next/image";
import Contact from "./Contact";

export default function Profile() {
  return (
    <section className="flex justify-center items-center gap-[18px]">
      <div className="w-[130px] h-[130px] rounded-full overflow-hidden text-center relative">
        <Image src="/avatar.JPG" alt="avatar" fill className="object-cover" />
      </div>
      <div className="">
        <h1 className="text-[30px] font-semibold">최유찬</h1>
        <p className="my-[9px]">
          안녕하세요 🤗 프론트엔드 개발자 최유찬입니다.
        </p>
        <Contact />
      </div>
    </section>
  );
}
