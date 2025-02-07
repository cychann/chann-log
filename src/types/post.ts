export type BasePost = {
  title: string;
  description: string;
  date: string;
  tags?: string;
  readingMinutes: number;
  category: string;
  url: string;
  type: PostType;
};

export type PostType = "articles" | "logs";

export type SearchResult = Pick<BasePost, "title" | "description"> & {
  type: PostType;
  category: string;
};

export type PostHeader = Pick<
  BasePost,
  "title" | "date" | "category" | "readingMinutes"
>;

export type PostHeatMap = Pick<BasePost, "title" | "url" | "category" | "type">;

export type ArticlePost = BasePost & {
  type: "articles";
  content: string;
  thumbnail: string;
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
  | "url"
  | "category"
>;

export type LogPost = BasePost & {
  type: "logs";
  content: string;
};

export type LogPreview = Pick<
  LogPost,
  | "title"
  | "description"
  | "tags"
  | "date"
  | "readingMinutes"
  | "type"
  | "url"
  | "category"
>;

export type PostMapping = {
  articles: ArticlePost;
  logs: LogPost;
};

export type PreviewMapping = {
  articles: ArticlePreview;
  logs: LogPreview;
};
