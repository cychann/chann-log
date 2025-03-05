import React from "react";

type NotificationPosition =
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left";

interface NotificationProps {
  message: string;
  isVisible: boolean;
  position?: NotificationPosition;
}

export default function Notification({
  message,
  isVisible,
  position = "bottom-right",
}: NotificationProps) {
  const positionStyles: Record<NotificationPosition, string> = {
    "bottom-right": "fixed bottom-4 right-4",
    "bottom-left": "fixed bottom-4 left-4",
    "top-right": "fixed top-4 right-4",
    "top-left": "fixed top-4 left-4",
  };

  return (
    <div
      className={`transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${
        positionStyles[position]
      } bg-white text-text-primary font-bold text-[14px] px-6 py-6 rounded shadow-lg z-50 border border-border`}
    >
      {message}
    </div>
  );
}
