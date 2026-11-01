import React from 'react';

const groups = [
  {
    title: 'Languages',
    items: ['Java', 'SQL (Postgres, MySQL)', 'JavaScript', 'C', 'HTML and CSS'],
  },
  {
    title: 'Technologies',
    items: ['Spring Boot', 'REST APIs', 'JPA and Hibernate', 'Microservices', 'Apache Kafka', 'MyBatis', 'Quartz'],
  },
  {
    title: 'Developer tools',
    items: ['Git', 'Docker and Kubernetes', 'Maven', 'DataDog', 'OpenSearch', 'JMeter', 'GitHub Copilot', 'IntelliJ', 'VS Code'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section stack" aria-labelledby="stack-head">
      <div className="container">
        <div className="head">
          <h2 id="stack-head">What the work is written in</h2>
          <p className="lead">Java and SQL, on Spring Boot and Postgres.</p>
        </div>

        <div className="stack__cols">
          {groups.map((group) => (
            <div className="stack__col" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
