import CustomMDX from "@/components/mdx/CustomMDX";
import React from "react";

type PostContentProps = {
  content: string;
};

export default function PostContent({ content }: PostContentProps) {
  return (
    <section className="mt-14">
      <CustomMDX source={content} />
    </section>
  );
}
