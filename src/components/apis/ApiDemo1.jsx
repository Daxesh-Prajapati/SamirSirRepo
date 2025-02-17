import React from 'react';
import axios from 'axios';

export const ApiDemo1 = () => {
  const getUserData = async () => {
    const res = await axios.get('https://node5.onrender.com/user/user');
    console.log(res.data);
  };
  return (
    <div>
      <h1>API Demo 1</h1>
      <button
        onClick={() => {
          getUserData();
        }}
      >
        Get Api
      </button>
    </div>
  );
};
