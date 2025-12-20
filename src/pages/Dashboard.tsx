import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import TaskList from "../components/tasks/TaskList";
import { useSocket } from "../hooks/useSocket";
import { useTasks } from "../hooks/useTasks";

export default function Dashboard() {
  useSocket(); // activate realtime
  const { categorizedTasks, isLoading } = useTasks();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4">
          <h1 className="text-xl font-semibold mb-6">My Dashboard</h1>

          <div className="space-y-8">
            {/* Tasks Assigned to Me */}
            <section>
              <h2 className="text-lg font-medium mb-3">Tasks Assigned to Me ({categorizedTasks.assigned.length})</h2>
              <TaskList tasks={categorizedTasks.assigned} showFilters={true} />
            </section>

            {/* Tasks Created by Me */}
            <section>
              <h2 className="text-lg font-medium mb-3">Tasks Created by Me ({categorizedTasks.created.length})</h2>
              <TaskList tasks={categorizedTasks.created} showFilters={true} />
            </section>

            {/* Overdue Tasks */}
            <section>
              <h2 className="text-lg font-medium mb-3 text-red-600">Overdue Tasks ({categorizedTasks.overdue.length})</h2>
              <TaskList tasks={categorizedTasks.overdue} showFilters={true} />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
