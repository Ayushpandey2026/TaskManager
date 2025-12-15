import { useAuth } from "../hooks/useAuth";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4">
          <h1 className="text-xl font-semibold mb-4">Profile</h1>

          <div className="border p-4 rounded max-w-sm">
            <p>
              <strong>Name:</strong> {user?.name}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
