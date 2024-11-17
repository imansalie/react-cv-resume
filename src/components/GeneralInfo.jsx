import React, { useState } from 'react';
import './styles/GeneralInfo.css';

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {isEditing ? (
        <form>
          <input name="name" value={info.name} onChange={handleChange} placeholder="Name" />
          <input name="email" value={info.email} onChange={handleChange} placeholder="Email" />
          <input name="phone" value={info.phone} onChange={handleChange} placeholder="Phone" />
          <button type="button" onClick={() => setIsEditing(false)}>Submit</button>
        </form>
      ) : (
        <div>
          <p>{info.name}</p>
          <p>{info.email}</p>
          <p>{info.phone}</p>
          <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;
