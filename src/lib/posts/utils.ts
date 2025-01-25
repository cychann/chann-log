import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { sync } from "glob";
import { Post } from "@/types/post";
import readingTime from "reading-time";

const BASE_PATH = path.join(process.cwd(), "/posts");

export const getPostsByDate = async (): Promise<
  Array<{ date: string; count: number }>
> => {
  const allPaths = sync(`${BASE_PATH}/**/**/*.mdx`);
  const posts = await Promise.all(
    allPaths.map(async (postPath) => {
      const file = fs.readFileSync(postPath, "utf8");
      const { data } = matter(file);
      return new Date(data.date).toISOString().split("T")[0];
    })
  );

  const groupedByDate = posts.reduce((acc, date) => {
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(groupedByDate)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date));
};

export const parseMdx = async (
  postPath: string,
  type: string
): Promise<Post> => {
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
  } as Post;
};
