import React from "react";
import {
  Info,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Bug,
  Terminal,
  BookOpenCheck,
  HelpCircle,
  Ban,
} from "lucide-react";

export type CalloutType =
  | "info"
  | "success"
  | "warning"
  | "error"
  | "tip"
  | "bug"
  | "example"
  | "note"
  | "question";

interface CalloutProps {
  type?: CalloutType;
  children: React.ReactNode;
}

const iconMap = {
  info: <Info className="w-6 h-6" />,
  success: <CheckCircle className="w-6 h-6" />,
  warning: <AlertTriangle className="w-6 h-6" />,
  error: <Ban className="w-6 h-6" />,
  tip: <Lightbulb className="w-6 h-6" />,
  bug: <Bug className="w-6 h-6" />,
  example: <BookOpenCheck className="w-6 h-6" />,
  note: <Terminal className="w-6 h-6" />,
  question: <HelpCircle className="w-6 h-6" />,
};

const backgroundColorMap = {
  info: "bg-blue-50 dark:bg-blue-950",
  success: "bg-green-50 dark:bg-green-950",
  warning: "bg-amber-50 dark:bg-amber-950",
  error: "bg-red-50 dark:bg-red-950",
  tip: "bg-purple-50 dark:bg-purple-950",
  bug: "bg-rose-50 dark:bg-rose-950",
  example: "bg-teal-50 dark:bg-teal-950",
  note: "bg-gray-50 dark:bg-gray-900",
  question: "bg-indigo-50 dark:bg-indigo-950",
};

const borderColorMap = {
  info: "border-blue-300 dark:border-blue-800",
  success: "border-green-300 dark:border-green-800",
  warning: "border-amber-300 dark:border-amber-800",
  error: "border-red-300 dark:border-red-800",
  tip: "border-purple-300 dark:border-purple-800",
  bug: "border-rose-300 dark:border-rose-800",
  example: "border-teal-300 dark:border-teal-800",
  note: "border-gray-300 dark:border-gray-700",
  question: "border-indigo-300 dark:border-indigo-800",
};

const textColorMap = {
  info: "text-blue-800 dark:text-blue-200",
  success: "text-green-800 dark:text-green-200",
  warning: "text-amber-800 dark:text-amber-200",
  error: "text-red-800 dark:text-red-200",
  tip: "text-purple-800 dark:text-purple-200",
  bug: "text-rose-800 dark:text-rose-200",
  example: "text-teal-800 dark:text-teal-200",
  note: "text-gray-800 dark:text-gray-200",
  question: "text-indigo-800 dark:text-indigo-200",
};

export default function Callout({ type = "info", children }: CalloutProps) {
  const icon = iconMap[type];
  const bgColor = backgroundColorMap[type];
  const borderColor = borderColorMap[type];
  const textColor = textColorMap[type];

  return (
    <div
      className={`my-6 rounded-lg border p-4 ${bgColor} ${borderColor} not-prose`}
    >
      <div className="flex items-start space-x-3">
        <div className={`flex h-6 items-center justify-center ${textColor}`}>
          {icon}
        </div>
        <div className={`flex-1 leading-6 ${textColor}`}>{children}</div>
      </div>
    </div>
  );
}
