import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { sync } from "glob";
import { Post } from "@/types/post";
import readingTime from "reading-time";
import { cache } from "react";

const BASE_PATH = "/posts";

export class PostService {
  protected type: string;
  protected basePath: string;

  constructor(type: string) {
    this.type = type;
    this.basePath = path.join(process.cwd(), BASE_PATH, type);
  }

  protected async parsePost(postPath: string): Promise<Post> {
    const file = fs.readFileSync(postPath, "utf8");
    const { data, content } = matter(file);

    const dateString = new Date(data.date).toLocaleDateString();
    const readingMinutes = Math.ceil(readingTime(content).minutes);
    const category = path.dirname(postPath).split(path.sep).slice(-1)[0];
    const postUrl = `/${this.type}/${category}/${path.basename(
      postPath,
      ".mdx"
    )}`;

    return {
      ...data,
      date: dateString,
      content,
      url: postUrl,
      readingMinutes,
      category,
    } as Post;
  }

  protected getPostPaths(category?: string) {
    const folder = category || "**";
    return sync(`${this.basePath}/${folder}/**/*.mdx`);
  }

  public async getList(category?: string): Promise<Post[]> {
    const postPaths = this.getPostPaths(category);
    return Promise.all(postPaths.map((postPath) => this.parsePost(postPath)));
  }

  public getCategoryList(): string[] {
    const categoryPaths = sync(`${this.basePath}/*`);
    return categoryPaths.map((p) => p.split(path.sep).slice(-1)?.[0]);
  }

  public async getDetail(category: string, slug: string): Promise<Post> {
    const filePath = `${this.basePath}/${category}/${slug}.mdx`;
    return this.parsePost(filePath);
  }

  public filterByCategory(posts: Post[], category?: string): Post[] {
    return posts.filter((post) => {
      return !category || category === "All" || post.category === category;
    });
  }

  public getCategoryCounts(
    posts: Post[],
    categories: string[]
  ): Record<string, number> {
    const counts = categories.reduce((acc, category) => {
      acc[category] = posts.filter((post) => post.category === category).length;
      return acc;
    }, {} as Record<string, number>);

    counts["All"] = posts.length;
    return counts;
  }

  public async getCount(category?: string): Promise<number> {
    const posts = await this.getList(category);
    return posts.length;
  }
}
