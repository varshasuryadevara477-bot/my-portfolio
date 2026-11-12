
import React, { useState } from "react";
import "./app.css";

// TECHNICAL SKILLS
const techSkills = [
  ["HTML5", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"],
  ["CSS3", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"],
  ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
  ["React", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"],
  ["Node.js", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"],
  ["Express.js", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"],
  ["MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"],
  ["Java", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"],
  ["Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"],
  ["SQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"],
  ["Postman", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"],
];

// TOOLS
const tools = [
  ["Git", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"],
  ["GitHub", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"],
  ["VS Code", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"],
];

// EDUCATION
const education = [
  {
    year: "2026",
    title: "Java Full Stack with Generative AI",
    institute: "NxtWave Intensive, Hyderabad",
    detail:
      "Practical learning in frontend development, React, Node.js, Java and Generative AI.",
  },
  {
    year: "2023 – 2026",
    title: "B.Sc. Mathematics, Statistics & Computer Science",
    institute: "St. Francis College for Women, Hyderabad",
    detail: "CGPA: 7.35",
  },
  {
    year: "2021 – 2023",
    title: "Intermediate – MPC",
    institute: "Sri Amogha Junior College, Hyderabad",
    detail: "CGPA: 7.7",
  },
  {
    year: "2021",
    title: "SSC",
    institute: "Nachiketa Vidhya Mandir",
    detail: "CGPA: 9.8",
  },
];

// PROJECTS
const projects = [
  {
    title: "IRP LMS Website",
    description:
      "A Learning Management System website featuring a homepage, course listings, and video tutorials. It provides a structured interface for users to explore learning resources.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/irp-home.png",
    github:
      "https://github.com/varshasuryadevara477-bot/IRP-LMS-Website",
    live: "https://irp-lms-website-red.vercel.app/",
    status: "Completed",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const githubUsername = "varshasuryadevara477-bot";

  const githubProfile =
    "https://github.com/varshasuryadevara477-bot";

  const linkedinProfile =
    "https://www.linkedin.com/in/varsha-suryadevara-283bb6379/";

  const navItems = [
    ["Home", "#home"],
    ["About Me", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  const closeMenu = () => setMenuOpen(false);

  // CONTACT FORM
  function sendMessage(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(
      `Portfolio message from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:varshasuryadevara477@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand">
          Varsha<span>.</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([name, link]) => (
            <a key={name} href={link} onClick={closeMenu}>
              {name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Resume ↗
          </a>
        </nav>
      </header>

      <main>

        {/* HOME */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I AM</p>

            <h1>
              Suryadevara
              <span>Varsha</span>
            </h1>

            <h2>Frontend Developer</h2>

            <p className="hero-description">
              Computer Science graduate with a background in Mathematics
              and Statistics. I have proficiency in HTML and CSS, a sound
              understanding of JavaScript, and a growing knowledge of React.
              I enjoy creating responsive web experiences and continuously
              improving my development skills.
            </p>

            <div className="hero-buttons">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button primary-button"
              >
                View Resume ↗
              </a>

              <a
                href="/resume.pdf"
                download="Suryadevara_Varsha_Resume.pdf"
                className="button secondary-button"
              >
                Download Resume ↓
              </a>
            </div>

            <div className="hero-socials">
              <a
                href={githubProfile}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href={linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-photo-area">
            <div className="photo-decoration"></div>

            <img
              src="/profile.png"
              alt="Suryadevara Varsha"
              className="profile-photo"
            />

            <div className="photo-caption">
              <span>✦</span> Always learning. Always building.
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">DISCOVER MY JOURNEY</p>
            <h2>
              About <span>Me</span>
            </h2>
            <p>A little about my background and learning journey.</p>
          </div>

          <div className="about-description">
             <p>
               I am a Computer Science graduate with a background in Mathematics and Statistics, 
               passionate about building responsive, user-friendly web applications and exploring new technologies.
             </p>
            <p>
              I have developed a foundation in HTML, CSS, JavaScript, React, and Node.js, along with knowledge of Java and SQL.
              I enjoy turning ideas into practical applications, working on hands-on projects, and continuously improving my programming 
              and problem-solving skills.
            </p>
            <p>
              Beyond technology, I have been actively involved in volunteering activities with NGO Nachiketa Tapovan, 
              participating in tree plantation drives, public awareness initiatives, and community service. 
              These experiences have helped me develop teamwork, communication, and a sense of social responsibility.

            </p>
            <p>
              I am eager to begin my professional journey in software development, contribute to meaningful projects,
              and grow as a developer.

            </p>

          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-icon">⌨</span>
              <h3>Learning</h3>
              <p>Consistent coding practice</p>
            </div>

            <div className="highlight-card">
              <span className="highlight-icon">💻</span>
              <h3>Projects</h3>
              <p>Practical development</p>
            </div>

            <div className="highlight-card">
              <span className="highlight-icon">🎯</span>
              <h3>Focus</h3>
              <p>Software development</p>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="education-area">
            <div className="section-heading">
              <p className="eyebrow">MY QUALIFICATIONS</p>
              <h2>
                Education <span>Journey</span>
              </h2>
            </div>

            <div className="timeline">
              {education.map((item, index) => (
                <div className="timeline-item" key={item.title}>
                  <div className="timeline-marker">
                    {index + 1}
                  </div>

                  <div className="timeline-content">
                    <span className="timeline-year">
                      {item.year}
                    </span>
                    <h3>{item.title}</h3>
                    <h4>{item.institute}</h4>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">MY TECH STACK</p>
            <h2>
              Skills & <span>Technologies</span>
            </h2>
            <p>
              The technologies and tools I am learning and working with.
            </p>
          </div>

          <h3 className="skill-group-title">
            Technical Skills
          </h3>

          <div className="skills-grid">
            {techSkills.map(([name, icon]) => (
              <div className="skill-card" key={name}>
                <img src={icon} alt={name} />
                <span>{name}</span>
              </div>
            ))}
          </div>

          <h3 className="skill-group-title tools-title">
            Tools
          </h3>

          <div className="skills-grid tools-grid">
            {tools.map(([name, icon]) => (
              <div className="skill-card" key={name}>
                <img src={icon} alt={name} />
                <span>{name}</span>
              </div>
            ))}
          </div>

          <div className="additional-skills">
            <h3>Additional Knowledge</h3>

            <div className="tag-list">
              {[
                "DBMS",
                "Excel",
                "Power BI",
                "Data Analytics",
                "C Fundamentals",
                "Generative AI",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">WHAT I HAVE BUILT</p>
            <h2>
              Featured <span>Projects</span>
            </h2>
            <p>
              A selection of my development work and projects.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>

                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} homepage`}
                  />

                  <span className="project-status">
                    {project.status}
                  </span>
                </div>

                <div className="project-details">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* GITHUB STATS */}
        <section className="section github-section">
          <div className="section-heading">
            <p className="eyebrow">MY CODING ACTIVITY</p>
            <h2>
              GitHub <span>Statistics</span>
            </h2>
            <p>
              Explore my repositories and coding contributions.
            </p>
          </div>

          <div className="github-profile-link">
            <h3>Explore my GitHub profile</h3>
            <p>
              Find my projects, repositories and contributions.
            </p>

            <a
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="button primary-button"
            >
              Visit GitHub ↗
            </a>
          </div>

          <div className="github-stats-image">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=tokyonight&hide_border=true`}
              alt="GitHub statistics"
            />

            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=tokyonight&hide_border=true`}
              alt="Most used programming languages"
            />
          </div>

          <div className="contribution-calendar">
            <h3>Contribution Activity</h3>

            <img
              src={`https://ghchart.rshah.org/8b5cf6/${githubUsername}`}
              alt="GitHub contribution calendar"
            />
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>
              Let's <span>Connect</span>
            </h2>
            <p>
              Open to learning, collaboration and software development
              opportunities.
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-information">
              <h3>Let's talk about opportunities!</h3>

              <p>
                Feel free to contact me for professional opportunities,
                collaborations or just to connect.
              </p>

              <a
                href={linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>in</span> LinkedIn ↗
              </a>

              <a
                href={githubProfile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>⌘</span> GitHub ↗
              </a>

              <a
                href="https://leetcode.com/u/Varsha_Suryadevara/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>⌨</span> LeetCode ↗
              </a>

              <a href="mailto:varshasuryadevara477@gmail.com">
                <span>✉</span> varshasuryadevara477@gmail.com
              </a>
            </div>

            <form className="contact-form" onSubmit={sendMessage}>
              <h3>Send a Message</h3>

              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
              />

              <button
                type="submit"
                className="button primary-button"
              >
                Send Message ↗
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="brand">
          Varsha<span>.</span>
        </a>

        <p>
          Designed and developed by Suryadevara Varsha.
        </p>

        <a href="#home">
          Back to top ↑
        </a>
      </footer>

    </div>
  );
}

export default App;
