import styles from '../Skills.module.css'; // Import CSS module

function Skills() {
    const skillsList = ['HTML', 'CSS', 'JavaScript', 'React'];
    return (
        <section id="skills" className={styles.container}>
            <h2 className={styles.heading}>Skills</h2>
            <ul className={styles.skillsList}>
            {skillsList.map((skill, index) => (
            <li key={index}>{skill}</li>
            ))}
            </ul>
        </section>
    );
    }

    export default Skills;