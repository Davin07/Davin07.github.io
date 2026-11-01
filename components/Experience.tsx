import React from 'react';

const rows = [
  { system: 'Critical API, 15,000 items', result: 'Fifteen minutes in, eighteen seconds out.' },
  { system: 'Daily logs', result: '1.35 million lines down to 150,000.' },
  { system: 'Batch engine', result: '36 times the throughput, 97% faster.' },
  { system: 'Database access', result: '4,000+ lines from MyBatis to JPA.' },
  { system: 'Secrets', result: 'Out of config, into Kubernetes mounts.' },
  { system: 'Delivery', result: 'End to end: design docs, 100% on time, zero critical issues.' },
  { system: 'Microservices', result: 'Features, fixes and reviews.' },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section record" aria-labelledby="record-head">
      <div className="container">
        <h2 id="record-head">Software Development Engineer</h2>
        <p className="record__meta"><span className="nowrap">Mercedes-Benz R&amp;D</span>, India, Aug 2022 to present</p>

        <dl className="record__list">
          {rows.map((row) => (
            <div className="record__row" key={row.system}>
              <dt>{row.system}</dt>
              <dd>{row.result}</dd>
            </div>
          ))}
        </dl>

        <p className="record__edu">
          <span><b>B.Tech in Computer Science</b>, Dayananda Sagar University</span>
          <span>Aug 2018 to Jun 2022, CGPA 8.98</span>
        </p>
      </div>
    </section>
  );
};

export default Experience;
