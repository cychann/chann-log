import React from "react";
import Image from "next/image";
import Contact from "./Contact";

export default function Profile() {
  return (
    <section className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-[18px] px-4 sm:px-0">
      <div className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden text-center relative">
        <Image src="/avatar.JPG" alt="avatar" fill className="object-cover" />
      </div>
      <div className="flex flex-col items-center sm:items-start  mt-3 sm:mt-0">
        <h1 className="text-[24px] sm:text-[28px] md:text-[30px] font-semibold">
          최유찬
        </h1>
        <p className="my-2 sm:my-[9px] text-sm sm:text-base">
          안녕하세요 🤗 프론트엔드 개발자 최유찬입니다.
        </p>
        <Contact />
      </div>
    </section>
  );
}
