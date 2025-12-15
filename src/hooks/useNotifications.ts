import { useState } from "react";

interface Notification {
  id: string;
  message: string;
  isRead: boolean;
}

export const useNotifications = () => {
  const [notifications] = useState<Notification[]>([]);
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return {
    notifications,
    unreadCount,
  };
};
