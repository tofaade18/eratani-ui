import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'green', color: 'white', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/* Left Section */}
        <div style={{ maxWidth: '40%' }}>
          <h2 style={{ fontWeight: 'bold' }}>Eratani</h2>
          <p>
            A Centennial Jaya Blok A6, Pondok Cabe, Kota Tangerang Selatan <br />
            Provinsi Banten 15418, Indonesia <br />
            Telp: +62 21 1234 5678
          </p>
          <p>Email: <a href="mailto:halo@eratani.co.id" style={{ color: 'white', textDecoration: 'underline' }}>halo@eratani.co.id</a></p>
        </div>

        {/* Middle Section */}
        <div>
          <h3>Menu</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#tentang-kami" style={{ color: 'white', textDecoration: 'none' }}>Tentang Kami</a></li>
            <li><a href="#hubungi" style={{ color: 'white', textDecoration: 'none' }}>Hubungi Kami</a></li>
            <li><a href="#karir" style={{ color: 'white', textDecoration: 'none' }}>Karir</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div style={{ textAlign: 'right' }}>
          <div style={{ marginBottom: '1rem' }}>
            <button
              style={{
                backgroundColor: '#FFA500',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
              }}
              title="Scroll to Top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span style={{ fontSize: '1.5rem', color: 'green', fontWeight: 'bold' }}>↑</span>
            </button>
          </div>
          <div>
            <a href="#in" style={{ color: 'white', margin: '0 0.5rem', textDecoration: 'none' }}>IN</a>
            <a href="#en" style={{ color: 'white', margin: '0 0.5rem', textDecoration: 'none' }}>EN</a>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <a href="#facebook" style={{ color: 'white', margin: '0 0.5rem', fontSize: '1.5rem' }}>🌐</a>
            <a href="#instagram" style={{ color: 'white', margin: '0 0.5rem', fontSize: '1.5rem' }}>📸</a>
            <a href="#youtube" style={{ color: 'white', margin: '0 0.5rem', fontSize: '1.5rem' }}>▶</a>
            <a href="#whatsapp" style={{ color: 'white', margin: '0 0.5rem', fontSize: '1.5rem' }}>💬</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem' }}>
        Copyright © 2024 PT Eratani Teknologi Nusantara
      </div>
    </footer>
  );
};

export default Footer;
