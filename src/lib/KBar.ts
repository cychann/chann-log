import { ExtendedAction } from "@/types/Kbar";
import { PreviewMapping } from "@/types/post";

export function createKbarAction<T extends keyof PreviewMapping>(
  post: PreviewMapping[T],
  section: string
): ExtendedAction {
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
