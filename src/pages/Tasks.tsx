import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";
import Modal from "../components/common/Modal";
import Button from "../components/common/Button";
import { useTasks } from "../hooks/useTasks";

export default function Tasks() {
  const [open, setOpen] = useState(false);
  const { createTask } = useTasks();

  const handleCreateTask = (data: any) => {
    createTask(data);
    setOpen(false);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Tasks</h1>
            <Button onClick={() => setOpen(true)}>➕ Create Task</Button>
          </div>

          <TaskList />

          <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Create Task"
          >
            <TaskForm onSubmit={handleCreateTask} />
          </Modal>
        </main>
      </div>
    </div>
  );
}
