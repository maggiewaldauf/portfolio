import { useState } from "react";
import styles from "../Contact.module.css"; // Import CSS Module

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${name}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.heading}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className={styles.input}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className={styles.input}
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
            className={styles.textarea}
          />
          <button type="submit" className={styles.button}>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;