import React from "react";
import eratani from '../eratani.png'
const Navbar = () => {
  return (
    <nav className="navbar" style={{justifyContent: "space-evenly", padding: "5px 10px"}}>
      <div className="logo"><img src={eratani} alt="Eratani Logo"></img></div>
      <ul className="nav-links" style={{gap: "45px", marginRight: "100px", justifyContent: "space-between"}}>
        <li><a href="#features">Beranda</a></li>
        <li><a href="#testimonials">Tentang Kami</a></li>
        <li><a href="#partners">Tips & Berita Pertanian</a></li>
        <li><a href="#contact">Kegiatan</a></li>
      </ul>
      <button className="cta-button">Mitra Petani</button>
    </nav>
  );
};

export default Navbar;
