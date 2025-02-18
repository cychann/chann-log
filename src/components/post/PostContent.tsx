import CustomMDX from "@/components/mdx/CustomMDX";
import React from "react";
import Tags from "../common/display/Tags";

type PostContentProps = {
  content: string;
  tags: string;
};

export default function PostContent({ content, tags }: PostContentProps) {
  return (
    <section className="mt-14">
      <CustomMDX source={content} />
      <div className="mt-20 mb-4">
        <Tags tags={tags?.split(",") || []} />
      </div>
    </section>
  );
}
