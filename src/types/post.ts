export type BasePost = {
  title: string;
  description: string;
  date: string;
  tags?: string;
  readingMinutes: number;
};

export type PostType = "articles" | "logs";

export type SearchResult = Pick<BasePost, "title" | "description"> & {
  type: PostType;
  category: string;
};

export type ArticlePost = BasePost & {
  type: "articles";
  content: string;
  thumbnail: string;
  category: string;
  url: string;
};

export type ArticlePreview = Pick<
  ArticlePost,
  | "title"
  | "description"
  | "thumbnail"
  | "tags"
  | "date"
  | "readingMinutes"
  | "type"
>;

export type LogPost = BasePost & {
  type: "logs";
  content: string;
  category: string;
  url: string;
};

export type LogPreview = Pick<
  LogPost,
  "title" | "description" | "tags" | "date" | "readingMinutes" | "type"
>;

export type PostMapping = {
  articles: ArticlePost;
  logs: LogPost;
};
