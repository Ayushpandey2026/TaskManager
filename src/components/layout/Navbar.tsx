import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import NotificationBell from "../notifications/NotificationBell";
import Button from "../common/Button";

export default function Navbar() {
  const { logout, isLogoutLoading, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="h-14 bg-white border-b px-4 flex items-center justify-between">
      <Link to="/" className="font-bold text-lg">
        TaskManager
      </Link>

      <div className="flex items-center gap-4">
        <NotificationBell />
        <Link to="/profile" className="text-sm font-medium">
          {user?.name || "Profile"}
        </Link>
        <Button
          onClick={handleLogout}
          isLoading={isLogoutLoading}
          variant="secondary"
          className="text-sm px-3 py-1"
        >
          Logout
        </Button>
      </div>
    </nav>
  );
}
