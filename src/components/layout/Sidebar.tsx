import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/tasks", label: "Tasks" },
  { to: "/profile", label: "Profile" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-50 border-r min-h-screen p-4">
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `px-3 py-2 rounded ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
