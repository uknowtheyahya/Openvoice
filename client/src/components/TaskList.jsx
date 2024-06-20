import React from 'react';

function TaskList({ tasks, setTasks }) {
  const handleDelete = (id) => {
    fetch(`/task/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(() => setTasks(prevTasks => prevTasks.filter(task => task._id !== id)))
      .catch(error => console.error('Error deleting task:', error));
  };

  const handleUpdate = (id, updatedTask) => {
    fetch(`/task/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    })
    .then(response => response.json())
    .then(() => {
      setTasks(prevTasks => prevTasks.map(task => task._id === id ? { ...task, ...updatedTask } : task));
    })
    .catch(error => console.error('Error updating task:', error));
  };

  return (
    <div>
      {tasks.map(task => (
        <div key={task._id} className="border p-2 mb-2">
          <h3 className="text-xl">{task.title}</h3>
          <p>{task.description}</p>
          <div>
            <label>
              <input
                type="checkbox"
                checked={task.status}
                onChange={() => handleUpdate(task._id, { status: !task.status })}
              />
              Completed
            </label>
            <button onClick={() => handleDelete(task._id)} className="ml-2 p-2 bg-red-500 text-white">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
