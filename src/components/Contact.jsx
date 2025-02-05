import { useState } from 'react';
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${name}`);
    setName('');
    setEmail('');
    setMessage('');
    };

return (
    <section id="contact">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            />
            <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        />
        <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        required
        />
        <button type="submit">Send</button>
        </form>
    </section>
);
}

export default Contact;