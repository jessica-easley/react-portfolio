import React from 'react';

export default function Navbar() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div style={linkStyle}>
          <a href="#">Home</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Projects</a>
        </div>
        <div style={linkStyle}>
          <a href="#">About</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact</a>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;