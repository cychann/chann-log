import fs from "fs";
import { PostMapping, PostType } from "@/types/post";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export const parseMdx = async <T extends PostType>(
  postPath: string,
  type: T
): Promise<PostMapping[T]> => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  const category = path.dirname(postPath).split(path.sep).slice(-1)[0];
  const postUrl = `/${type}/${category}/${path.basename(postPath, ".mdx")}`;

  return {
    ...data,
    date: new Date(data.date).toISOString().split("T")[0],
    content,
    url: postUrl,
    readingMinutes: Math.ceil(readingTime(content).minutes),
    category,
    type,
  } as PostMapping[T];
};
