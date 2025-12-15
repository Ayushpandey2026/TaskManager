import { useNotifications } from "../../hooks/useNotifications";

export default function NotificationBell() {
  const { notifications, unreadCount } = useNotifications();

  return (
    <div className="relative cursor-pointer">
      🔔
      {unreadCount > 0 && (
        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
          {unreadCount}
        </span>
      )}

      {/* Dropdown (basic version) */}
      <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-md">
        {notifications.length === 0 ? (
          <p className="p-2 text-sm text-gray-500">No notifications</p>
        ) : (
          notifications.map((n) => (
            <div
              key={n.id}
              className="p-2 border-b last:border-none text-sm"
            >
              {n.message}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
