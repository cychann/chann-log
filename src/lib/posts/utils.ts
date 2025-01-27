import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { sync } from "glob";
import { Post } from "@/types/post";
import readingTime from "reading-time";

const BASE_PATH = path.join(process.cwd(), "/posts");

export const getPostsByDate = async (): Promise<
  Array<{
    date: string;
    count: number;
    posts: Array<{
      title: string;
      url: string;
      category: string;
      type: string;
    }>;
  }>
> => {
  const allPaths = sync(`${BASE_PATH}/**/**/*.mdx`);
  const posts = await Promise.all(
    allPaths.map(async (postPath) => {
      const type = postPath.split("/posts/")[1].split("/")[0];
      const post = await parseMdx(postPath, type);
      return {
        date: post.date,
        title: post.title,
        url: post.url,
        category: post.category,
        type,
      };
    })
  );

  const groupedByDate = posts.reduce((acc, post) => {
    if (!acc[post.date]) {
      acc[post.date] = {
        date: post.date,
        count: 0,
        posts: [],
      };
    }
    acc[post.date].count += 1;
    acc[post.date].posts.push({
      title: post.title,
      url: post.url,
      category: post.category,
      type: post.type,
    });
    return acc;
  }, {} as Record<string, { date: string; count: number; posts: Array<{ title: string; url: string; category: string; type: string }> }>);

  return Object.values(groupedByDate).sort((a, b) =>
    a.date.localeCompare(b.date)
  );
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
    type,
  } as Post;
};
