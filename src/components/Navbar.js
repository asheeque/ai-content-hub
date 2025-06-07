import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
    <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</Link>
    <Link to="/video/1" style={{ color: '#fff', marginRight: '1rem' }}>Video</Link>
    <Link to="/profile" style={{ color: '#fff' }}>Profile</Link>
  </nav>
);

export default Navbar; 