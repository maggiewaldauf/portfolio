function Skills() {
    const skillsList = ['HTML', 'CSS', 'JavaScript', 'React'];
    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
            {skillsList.map((skill, index) => (
            <li key={index}>{skill}</li>
            ))}
            </ul>
        </section>
    );
    }

    export default Skills;