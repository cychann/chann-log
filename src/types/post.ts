export type PostBase = {
  title: string;
  date: string;
};

export type PostHeaderInfo = PostBase & {
  category: string;
  readingMinutes: number;
};

export type PostBodyInfo = {
  content: string;
};

export type PostPreviewInfo = PostBase &
  PostHeaderInfo & {
    description: string;
    content: string;
    thumbnail: string;
    tags?: string;
    url: string;
  };

export type Post = {
  title: string;
  description: string;
  content: string;
  thumbnail: string;
  date: string;
  category: string;
  tags?: string;
  url: string;
  readingMinutes: number;
};

export interface HeadingItem {
  text: string;
  link: string;
  indent: number;
}
