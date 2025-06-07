import React from 'react';
import { Link } from 'react-router-dom';

// TODO: Add this to your index.html <head> for Spline Sans:
// <link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;700&display=swap" rel="stylesheet">

const Navbar = () => (
  <header style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 3rem',
    height: 65,
    borderBottom: '1px solid #e5e8eb',
    background: '#0f1a24',
    fontFamily: 'Spline Sans, sans-serif',
    color: '#fff',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <span style={{ fontWeight: 700, fontSize: 18 }}>AI Content Hub</span>
      <nav style={{ display: 'flex', gap: 24 }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: 14 }}>Home</Link>
        <Link to="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: 14 }}>Trending</Link>
        <Link to="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: 14 }}>Categories</Link>
        <Link to="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: 14 }}>Channels</Link>
      </nav>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', background: '#21364a', borderRadius: 12, height: 40, padding: '0 16px', color: '#8fadcc' }}>
        <span role="img" aria-label="search" style={{ marginRight: 8 }}>🔍</span>
        <input
          type="text"
          placeholder="Search"
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#8fadcc',
            fontSize: 16,
            width: 100,
            fontFamily: 'inherit',
          }}
        />
      </div>
      <button style={{ background: '#0d80f2', color: '#fff', border: 'none', borderRadius: 12, height: 40, width: 84, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
        Upload
      </button>
      <div style={{ width: 40, height: 40, borderRadius: 20, background: '#ccc', overflow: 'hidden' }}>
        <img src="https://placehold.co/40x40" alt="Profile" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  </header>
);

export default Navbar; 