import projectImage1 from '../assets/project1.jpg';
import projectImage2 from '../assets/project2.jpg';
import projectImage3 from '../assets/project3.jpg';

function Projects() {
    const projectList = [
{ name: 'Project 1', description: 'Description of project 1', image:
projectImage1 },
{ name: 'Project 2', description: 'Description of project 2', image:
projectImage2 },
{ name: 'Project 3', description: 'Description of project 3', image:
projectImage3 },
];

return (
    <section id="projects">
        <h2>Projects</h2>
        <ul>
            {projectList.map((project, index) => (
            <li key={index}>
            <h3>{project.name}</h3>
            <img src={project.image} alt={project.name}
            className="project-image" />
            <p>{project.description}</p>
            </li>
            ))}
        </ul>
    </section>
);
}
export default Projects;