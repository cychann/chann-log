// context/PostContext.tsx
"use client";

import { createContext, ReactNode, useState } from "react";

type PostContextType = {
  title: string;
  setTitle: (title: string) => void;
};

const PostContext = createContext<PostContextType | undefined>(undefined);

export function PostProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState("");

  return (
    <PostContext.Provider value={{ title, setTitle }}>
      {children}
    </PostContext.Provider>
  );
}
