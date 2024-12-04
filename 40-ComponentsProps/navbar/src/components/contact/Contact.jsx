// import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left">
        <h2>Get In Touch</h2>
        <h3>Contact Me</h3>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email address" />
          <textarea
            cols="30"
            rows="10"
            placeholder="Write your message"
          ></textarea>
          <button type="submit" className="send-button">
            Send Message
          </button>
        </form>
      </div>
      <div className="right">
        <h3>Need to know more on details. Get In Touch</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
          distinctio! Harum quibusdam nisi, illum nulla aspernatur aut quidem
          aperiam, quae non tempora recusandae voluptatibus fugit impedit.
        </p>
        <button className="get-started">Get Started</button>
      </div>
    </div>
  );
};

export default Contact;
