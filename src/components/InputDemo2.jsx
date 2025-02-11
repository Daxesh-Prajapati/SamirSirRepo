import React, { useState } from 'react';

export const InputDemo2 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div
      style={{
        textAlign: 'center',
        // backgroundImage: `url("https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/07/Best-Of-Arijit-Singh-in-2023.webp")`,
        backgroundSize: '100% 100%', // Adjusting the image size dynamically
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Keeps the background fixed while scrolling
        width: '100vw',
        height: '100vh',
        paddingTop: '20px',
        color: 'white',
      }}
    >
      <h1>INPUT DEMO 2</h1>

      <div>
        <label>NAME</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>{name}</p>
      </div>

      <div>
        <label>EMAIL</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{email}</p>
      </div>

      <div>
        <label>AGE</label>
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>{age}</p>
      </div>

      <div>
        <label>PHONE</label>
        <input
          type="tel"
          placeholder="Enter phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p>{phone}</p>
      </div>

      <div>
        <label>ADDRESS</label>
        <input
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <p>{address}</p>
      </div>
    </div>
  );
};
