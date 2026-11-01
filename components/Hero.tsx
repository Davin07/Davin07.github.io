import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="hero" aria-labelledby="hero-head">
      <div className="container hero__inner">
        <div className="hero__text">
          <h1 id="hero-head">Fifteen minutes. Eighteen seconds.</h1>
          <p className="hero__lede">
            Software engineer at <span className="nowrap">Mercedes-Benz R&amp;D</span>. I rewrote a critical query.
          </p>
          <div className="hero__actions">
            <a className="key key--primary" href="mailto:davin.sthomas07@gmail.com">Email Davin</a>
            <a
              className="key"
              href="/DavinSThomas-SWE.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume (PDF)
            </a>
          </div>
        </div>

        <figure className="run">
          <figcaption className="run__cap">15,000 records a run.</figcaption>

          <div className="run__row">
            <span className="run__label">Before</span>
            <div className="run__track">
              <div className="run__bar" />
            </div>
            <span className="run__value">{'15\u00A0minutes'}</span>
          </div>

          <div className="run__row">
            <span className="run__label">After</span>
            <div className="run__track">
              <div className="run__bar run__bar--after" />
              <span className="run__note">50× faster</span>
            </div>
            <span className="run__value">{'18\u00A0seconds'}</span>
          </div>

          <div className="run__axis" aria-hidden="true">
            <span />
            <div className="run__ticks">
              <span>0</span>
              <span>5 min</span>
              <span>10 min</span>
              <span>15 min</span>
            </div>
            <span />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
