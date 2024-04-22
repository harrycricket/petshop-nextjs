'use client'
import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('harry@gmail.com');
  return (
    <div style={{ color: 'red' }}>
      Login <br />
      Email: {email}
    </div>
  );
}
