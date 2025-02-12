import profileImage from '../assets/profile.jpg'; // Add a profile image in the src folder
import styles from "../About.module.css"; // Import CSS Module

function About() {
return (
    <section id="about" className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>
        <img className={styles.profileImage} src={profileImage} alt="Profile"/>
        <p>Hello! I'm a web developer with a passion for creating beautiful
        and functional websites.</p>
    </section>
);
}

export default About;