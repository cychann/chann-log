import { MDXRemote } from "next-mdx-remote/rsc";

import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

type CustomMDXProps = {
  source: string;
};

export default function CustomMDX({ source }: CustomMDXProps) {
  return (
    <div className="prose">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              [rehypePrettyCode, { theme: "slack-dark" }],
              rehypeSlug,
            ],
          },
        }}
      />
    </div>
  );
}
