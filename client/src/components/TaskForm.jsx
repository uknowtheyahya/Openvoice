import React, { useState } from 'react';

function TaskForm({ setTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, status };

    try {
      const response = await fetch('http://localhost:5000/upload-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setTasks(prevTasks => [...prevTasks, data]);

      // Clear the form fields
      setTitle('');
      setDescription('');
      setStatus(false);

      // Show success message
      setSuccessMessage('Task successfully submitted!');
      setTimeout(() => setSuccessMessage(''), 3000); // Clear the message after 3 seconds
    } catch (error) {
      console.error('Error uploading task:', error);
    }
  };

  return (
    <div>
      <div className=' '>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className='flex flex-col lg:space-x-4  lg:flex-row '>

          <div>
            <h2 className=' text-lg font-semibold'>Title of task</h2>
          <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
          required
        />
          </div>

          <div>
          <h2 className=' text-lg font-semibold'>Description of task</h2>
          <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 "
          required
        />

          </div>
          <div className=' lg:px-10 '>
          <h2 className=' text-lg font-semibold py-1'>Status</h2>
          
          <label>
          <input
            type="checkbox"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
          />
          Completed
        </label>
          </div>
          <div className='pt-4'>
         
         <button type="submit" className="ml-2 bg-blue-500 text-white rounded-full px-4 py-2">Add Task</button>
         </div>
         

         


         
        </div>

        <div className='pt-4 '>

        
         

        </div>
       
        
       
       
        
        
      </form>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      </div>
      
    </div>
  );
}

export default TaskForm;
