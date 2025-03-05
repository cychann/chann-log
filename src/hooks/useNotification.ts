import { useState, useCallback, useEffect } from "react";

type UseNotificationOptions = {
  duration?: number;
  autoClose?: boolean;
};

export function useNotification({
  duration = 3000,
  autoClose = true,
}: UseNotificationOptions) {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  const showNotification = useCallback((newMessage: string) => {
    setMessage(newMessage);
    setIsVisible(true);

    return () => {
      setIsVisible(false);
    };
  }, []);

  const hideNotification = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isVisible && autoClose) {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isVisible, duration, autoClose]);

  return {
    isVisible,
    message,
    showNotification,
    hideNotification,
  };
}
