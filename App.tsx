import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import TerminalContact from './components/TerminalContact';

const footerSections = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

function App() {
  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <Navbar />

      <main id="content">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <TerminalContact />
      </main>

      <footer className="foot">
        <div className="container foot__grid">
          <div>
            <p className="foot__name">Davin S Thomas</p>
            <p className="foot__line">Software engineer at <span className="nowrap">Mercedes-Benz R&amp;D</span>, India.</p>
          </div>

          <div className="foot__col">
            <p className="foot__label">Sections</p>
            <ul>
              {footerSections.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot__col">
            <p className="foot__label">Elsewhere</p>
            <ul>
              <li><a href="https://github.com/Davin07" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/davinsthomas/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="mailto:davin.sthomas07@gmail.com">Email</a></li>
              <li><a href="/DavinSThomas-SWE.pdf" target="_blank" rel="noreferrer">Resume</a></li>
            </ul>
          </div>
        </div>

        <div className="container foot__base">
          <p>© {new Date().getFullYear()} Davin S Thomas. Built with coffee and AI.</p>
          <p>Familjen Grotesk, IBM Plex Sans, JetBrains Mono.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
