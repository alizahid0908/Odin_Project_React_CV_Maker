import React, { useState } from 'react';

function GeneralInfo() {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');

 return (
    <div>
      <h2>General Information</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" />
    </div>
 );
}

export default GeneralInfo;