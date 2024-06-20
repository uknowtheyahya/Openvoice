import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="py-4">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <div className='flex flex-col lg:flex-row  lg:space-x-4 py-4'>

        <div>
        <h2 className=' text-lg font-semibold'>Name</h2>
        <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mt-2"
        required
      />

        </div>

        <div>
        <h2 className=' text-lg font-semibold'>Email adress</h2>
        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mt-2"
        required
      />

        </div>

        <div>
        <h2 className=' text-lg font-semibold'>Entre message</h2>
        <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 mt-2"
        required
      />
        </div>
        <div className=' pt-4  '>

            <button type="submit" className=" bg-blue-500 rounded-full py-2 px-4 text-white">Submit</button>
        </div>

      </div>
      
     
    
      
    </form>
  );
}

export default Contact;
