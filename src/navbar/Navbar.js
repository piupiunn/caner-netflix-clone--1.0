import React, { useEffect, useState } from "react";

//style
import "./Navbar.css";

export default function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav-black"}`}>
      <img
        className="navbar-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        alt="logo"
      />
      <img
        className="navbar-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="logo"
      />
      <div className="navbar-sections">
        <p>Ana Sayfa</p>

        <p>Diziler</p>
        <p>Filmler</p>
        <p>Yeni ve Popüler</p>
        <p>Listem</p>
      </div>
    </div>
  );
}
