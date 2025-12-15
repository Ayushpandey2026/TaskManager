import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import TaskList from "../components/tasks/TaskList";
import { useSocket } from "../hooks/useSocket";

export default function Dashboard() {
  useSocket(); // activate realtime

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4">
          <h1 className="text-xl font-semibold mb-4">My Dashboard</h1>
          <TaskList />
        </main>
      </div>
    </div>
  );
}
