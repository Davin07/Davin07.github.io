import React from 'react';
import Field from './Field';

const sql: Array<[string, string]> = [
  ['t-comment', '-- per row, 15,000 times'],
  ['t-plain', 'SELECT payload FROM records WHERE id = $1;'],
  ['t-blank', '\u00A0'],
  ['t-comment', '-- once, for the whole batch'],
  ['t-key', 'SELECT r.id, r.payload'],
  ['t-key', 'FROM records r'],
  ['t-key', 'JOIN batches b ON b.id = r.batch_id'],
  ['t-key', "WHERE b.state = 'open';"],
];

const Projects: React.FC = () => {
  return (
    <>
      <section id="projects" className="section case" aria-labelledby="case-head">
        <div className="container case__grid">
          <div className="case__text">
            <h2 id="case-head">Legacy API Overhaul</h2>
            <p className="lead">
              15,000 records went through a loop. One set-based query replaced it.
            </p>
            <ul className="tags">
              <li>Spring Boot</li>
              <li>PostgreSQL</li>
              <li>Query tuning</li>
            </ul>
          </div>

          <figure className="proof">
            <pre className="code">
              {sql.map(([kind, line]) => (
                <span className={kind} key={`${kind}-${line}`}>
                  {line}
                </span>
              ))}
            </pre>
            <figcaption>15,000 round trips, one statement.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--band field" aria-labelledby="logs-head">
        <div className="container">
          <div className="head">
            <h2 id="logs-head">Log volume, cut by 89%</h2>
            <p className="lead">
              <b>Observability Pipeline.</b> Raw text logs became MDC-enriched JSON, so OpenSearch indexes what is worth keeping.
            </p>
          </div>

          <figure
            className="field__fig"
            role="img"
            aria-label="Log volume: a dense field of characters on the left, 1,350,000 lines a day, and a sparse field on the right, 150,000 lines a day"
          >
            <Field />
            <div className="field__labels">
              <span>1,350,000 lines a day</span>
              <span>150,000 lines a day, 89% fewer</span>
            </div>
          </figure>

          <ul className="tags">
            <li>OpenSearch</li>
            <li>MDC</li>
            <li>Kibana</li>
          </ul>
        </div>
      </section>

      <section className="section batch" aria-labelledby="batch-head">
        <div className="container batch__grid">
          <div>
            <h2 id="batch-head">Parallel Batch Engine</h2>
            <p className="lead">OS threads across every core, built for bulk ingestion.</p>
            <ul className="tags">
              <li>Java concurrency</li>
              <li>Batch processing</li>
              <li>OS threads</li>
            </ul>
          </div>
          <div className="batch__figure">
            <p className="batch__value">36×</p>
            <p className="batch__value-note">Throughput, batch engine</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
