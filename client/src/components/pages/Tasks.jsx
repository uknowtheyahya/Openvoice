import React, { useState, useEffect } from 'react';
import TaskList from '../TaskList';
import TaskForm from '../TaskForm';

const Tasks=()=> {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    setTasks(data);
  };
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/task/${id}`, {
      method: 'DELETE',
    });
    fetchTasks();
  };

  const handleEdit = (task) => {
    setEditingTask(task._id);
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedTask = { title, description, status };

    await fetch(`http://localhost:5000/task/${editingTask}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });

    setEditingTask(null);
    setTitle('');
    setDescription('');
    setStatus(false);
    fetchTasks();
  };
  return (
    <div className="py-4">
     

      {/* table */}
      <div>
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <TaskForm setTasks={setTasks} />
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td className="border px-4 py-2">{task.title}</td>
              <td className="border px-4 py-2">{task.description}</td>
              <td className="border px-4 py-2">{task.status ? 'Completed' : 'Incomplete'}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleEdit(task)} className="bg-yellow-500 text-white px-2 py-1 mr-2">Edit</button>
                <button onClick={() => handleDelete(task._id)} className="bg-red-500 text-white px-2 py-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingTask && (
        <form onSubmit={handleUpdate} className="mt-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2"
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 ml-2"
            required
          />
          <label className="ml-2">
            <input
              type="checkbox"
              checked={status}
              onChange={(e) => setStatus(e.target.checked)}
            />
            Completed
          </label>
          <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">Update Task</button>
        </form>
      )}
    </div>
      
    </div>
  );
 
}

export default Tasks;
