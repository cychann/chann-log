import { HeadingItem } from "@/types/TOC";

export const parseToc = async (content: string): Promise<HeadingItem[]> => {
  const regex = /^(#|##) (.*$)/gim;
  const headingList = content.match(regex);
  return (
    headingList?.map((heading: string) => ({
      text: heading.replace("##", "").replace("#", ""),
      link:
        "#" +
        heading
          .replace("# ", "")
          .replace("#", "")
          .replace(/[\[\]:!@#$/%^&*()+=,.]/g, "")
          .replace(/ /g, "-")
          .toLowerCase()
          .replace("?", ""),
      indent: heading.match(/#/g)?.length || 2,
    })) || []
  );
};
