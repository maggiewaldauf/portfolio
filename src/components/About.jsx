import profileImage from '../assets/profile.jpg'; // Add a profile image in the src folder

function About() {
return (
    <section id="about">
        <h2>About Me</h2>
        <img src={profileImage} alt="Profile" className="profile-image" />
        <p>Hello! I'm a web developer with a passion for creating beautiful
        and functional websites.</p>
    </section>
);
}

export default About;