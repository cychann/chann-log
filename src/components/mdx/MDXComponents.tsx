import { Image } from "./Image";
import { Link } from "./Link";
import { MDXComponents } from "mdx/types";

export const MdxComponents: MDXComponents = {
  a: Link,
  Image,
};
