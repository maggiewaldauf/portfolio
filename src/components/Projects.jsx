import projectImage1 from '../assets/project1.jpg';
import projectImage2 from '../assets/project2.jpg';
import projectImage3 from '../assets/project3.jpg';
import styles from '../Projects.module.css'; // Import CSS module

function Projects() {
    const projectList = [
        { name: 'Project 1', description: 'Description of project 1', image: projectImage1 },
        { name: 'Project 2', description: 'Description of project 2', image: projectImage2 },
        { name: 'Project 3', description: 'Description of project 3', image: projectImage3 },
    ];

    return (
        <section id="projects" className={styles.container}>
            <h2 className={styles.heading}>Projects</h2>
            <ul className={styles.projectList}>
                {projectList.map((project, index) => (
                    <li key={index} className={styles.card}>
                        <img src={project.image} alt={project.name} className={styles.image} />
                        <div className={styles.content}>
                            <h3 className={styles.title}>{project.name}</h3>
                            <p className={styles.description}>{project.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;