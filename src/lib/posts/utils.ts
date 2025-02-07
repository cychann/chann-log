import { sync } from "glob";
import path from "path";
import { BasePost, PostType, PostMapping } from "@/types/post";
import { parseMdx } from "./mdx";
import { POSTS_PATH } from "./path";

export const getPostPaths = (basePath: string, category?: string): string[] => {
  const folder = category || "**";
  return sync(`${basePath}/${folder}/**/*.mdx`);
};

export const sortByDate = <T extends BasePost>(posts: T[]): T[] => {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const filterByCategory = <T extends BasePost & { category: string }>(
  posts: T[],
  category?: string
): T[] => {
  return posts.filter(
    (post) => !category || category === "All" || post.category === category
  );
};

export const getCategoryCounts = <T extends BasePost & { category: string }>(
  posts: T[],
  categories: string[]
): Record<string, number> => {
  const counts = categories.reduce((acc, category) => {
    acc[category] = posts.filter((post) => post.category === category).length;
    return acc;
  }, {} as Record<string, number>);

  counts["All"] = posts.length;
  return counts;
};

export const getPostList = async <T extends PostType>(
  basePath: string,
  type: T,
  category?: string
): Promise<Array<PostMapping[T]>> => {
  const postPaths = getPostPaths(basePath, category);
  const posts = await Promise.all(
    postPaths.map((postPath) => parseMdx<T>(postPath, type))
  );
  return sortByDate(posts);
};

export const getPostDetail = async <T extends PostType>(
  basePath: string,
  type: T,
  category: string,
  slug: string
): Promise<PostMapping[T]> => {
  const filePath = `${basePath}/${category}/${slug}.mdx`;
  return parseMdx(filePath, type);
};

export const getCategoryList = async (
  basePath: string,
  includeAll: boolean = false
): Promise<string[]> => {
  const categoryPaths = sync(`${basePath}/*`);
  const categories = categoryPaths.map((p) => p.split(path.sep).slice(-1)?.[0]);
  return includeAll ? ["All", ...categories] : categories;
};

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
  const allPaths = sync(`${POSTS_PATH}/**/**/*.mdx`);
  const posts = await Promise.all(
    allPaths.map(async (postPath) => {
      const type = postPath.split("/posts/")[1].split("/")[0] as PostType;
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
