import React from "react";
import "./Footer.css";
import { Facebook, Instagram, Twitter, Whatsapp } from "react-bootstrap-icons";

function Footer() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <footer className="footer">
        <div className="footer__social">
          <ul className="social mb-0 list-inline">
            <li className="list-inline-item">
              <button onClick={() => openInNewTab("https://www.instagram.com/Jirjatss/")} className="social-link me-3">
                <Instagram color="whitesmoke" />
              </button>
              <button onClick={() => openInNewTab("https://wa.me/6281233623106")} className="social-link me-3">
                <Whatsapp color="whitesmoke" background="transparent" />
              </button>
              <button onClick={() => openInNewTab("https://twitter.com/jirjatss")} className="social-link me-3">
                <Twitter color="whitesmoke" />
              </button>
              <button onClick={() => openInNewTab("https://www.facebook.com/profile.php?id=100076359733301")} className="social-link">
                <Facebook color="whitesmoke" />
              </button>
            </li>
          </ul>
        </div>
        <div className="footer__copy">&#169; Coppyright © 2022 - Jirjatss. All Rights Reserved.</div>
      </footer>
    </>
  );
}

export default Footer;
