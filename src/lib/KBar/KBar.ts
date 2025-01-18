import { ExtendedAction } from "@/types/Kbar";
import { Post } from "@/types/post";

export function createKbarAction(post: Post, section: string): ExtendedAction {
  return {
    id: post.url,
    name: post.title,
    subtitle: post.description,
    keywords: `${post.title} ${post.category}`,
    section,
    metadata: {
      category: post.category,
      path: `${post.url}`,
    },
  };
}
