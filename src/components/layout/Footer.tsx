import React from "react";
import Contact from "../common/profile/Contact";

export default function Footer() {
  return (
    <footer className="mb-16 mt-20 flex flex-col items-center justify-center gap-4 text-center print:hidden">
      <Contact />
      <div>
        © 2025. <span className="font-semibold">최유찬</span> All right
        reserved.
      </div>
    </footer>
  );
}
