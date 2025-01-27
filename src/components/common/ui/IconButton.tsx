import React, { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function IconButton({ icon, className, onClick }: Props) {
  const buttonClass = `cursor-pointer hover:bg-slate-100 transition-all duration-200 p-2 rounded-md ${
    className || ""
  }`;

  return (
    <button onClick={onClick} className={buttonClass}>
      {icon}
    </button>
  );
}
