import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section id="contact">
        <div className="contact container">
          <div className="row">
            <div className="row subheading">
              <h1 className="text-center">
                CONT<span style={{ color: "blue" }}>ACT</span>
              </h1>
            </div>
          </div>
          <div className="container-fluid contacts">
            <div className="contact-items">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-4">
                  <div className="contact-item">
                    <div className="icon">
                      <img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="" />
                    </div>
                    <div className="contact-info">
                      <h1>Phone</h1>
                      <p>+6281233623106</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact-item">
                    <div className="icon">
                      <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt="" />
                    </div>
                    <div className="contact-info">
                      <h1>Email</h1>
                      <p>sajadhijir@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact-item">
                    <div className="icon">
                      <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt="" />
                    </div>
                    <div className="contact-info">
                      <h1>Address</h1>
                      <p>RT 09/RW 03 Dasan Anyar, Jereweh, KSB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
