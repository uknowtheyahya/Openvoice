import React from 'react';

function Home() {
  return (
    <div className="py-4">
      <h1 className="text-2xl font-bold">Welcome to Task Management Application</h1>
      <p className="pt-2">Our Task Management Application is designed to help you organize, manage, and track your tasks efficiently. Whether you’re managing personal to-dos, team projects, or business tasks, our app provides the tools you need to stay on top of your workload.</p>
      <h2 className=' text-lg font-bold py-4'>Key Features:</h2>
      <div>
        <ul class="list-disc  pl-4 ">
    <li> <span className=' font-bold'>Task Creation:</span> Easily add new tasks with titles, descriptions, and status indicators. Organize your tasks based on priority and deadlines to ensure timely completion.</li>
    <li><span className=' font-bold'>Task List:</span> View all your tasks in a neatly organized table format. Quickly scan through your tasks to check their status and manage your to-dos effectively.</li>
    <li><span className=' font-bold'>Edit and Update:</span> Modify task details with ease. Update the title, description, and status of your tasks to keep your task list current and relevant.</li>
    <li><span className=' font-bold'>Delete Tasks:</span> Remove completed or irrelevant tasks from your list to keep your workspace clutter-free and focused on what matters.</li>
    <li><span className=' font-bold'>Real-time Updates:</span> Experience seamless real-time updates as tasks are added, edited, or deleted, ensuring that your task list is always up-to-date.</li>
  </ul></div>
    </div>
  );
}

export default Home;
