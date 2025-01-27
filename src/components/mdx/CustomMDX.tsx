import { MDXRemote } from "next-mdx-remote/rsc";

import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";

import { MdxComponents } from "./MDXComponents";

type CustomMDXProps = {
  source: string;
};

export default function CustomMDX({ source }: CustomMDXProps) {
  return (
    <div className="prose dark:prose-invert">
      {/* @ts-expect-error Async Server Component */}
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkBreaks],
            rehypePlugins: [
              [rehypePrettyCode, { theme: "slack-dark" }],
              rehypeSlug,
            ],
          },
        }}
        components={MdxComponents}
      />
    </div>
  );
}
