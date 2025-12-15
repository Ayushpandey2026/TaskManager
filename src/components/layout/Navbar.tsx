import { Link } from "react-router-dom";
import NotificationBell from "../notifications/NotificationBell";

export default function Navbar() {
  return (
    <nav className="h-14 bg-white border-b px-4 flex items-center justify-between">
      <Link to="/" className="font-bold text-lg">
        TaskManager
      </Link>

      <div className="flex items-center gap-4">
        <NotificationBell />
        <Link to="/profile" className="text-sm font-medium">
          Profile
        </Link>
      </div>
    </nav>
  );
}
