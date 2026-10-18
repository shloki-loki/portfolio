import { profile, experience, projects, socials } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <header className="intro">
        <div className="intro-top"><p className="name">{profile.name}</p><span className="availability"><span aria-hidden="true" />{profile.availability}</span></div>
        <h1>Building playful products.<br /><span>Connecting code &amp; business.</span></h1>
        <p className="intro-copy">IIT Guwahati grad, turning curiosity into useful things. From business operations to experiments with AI, I like making ideas work in the real world.</p>
        <div className="contact-links"><a href={socials.email}>Let’s talk <span aria-hidden="true">↗</span></a><a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href={socials.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a></div>
      </header>
      <section className="section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience</h2>
        <ol className="experience-list">
          {experience.map((job) => (
            <li key={job.company} className="job">
              <p className="period">{job.period}</p>
              <div><h3>{job.company}</h3><p className="role">{job.role} <span>· {job.location}</span></p><ul className="job-points">{job.bullets.map((point) => <li key={point}>{point}</li>)}</ul></div>
            </li>
          ))}
        </ol>
      </section>
      <section className="section" aria-labelledby="projects-heading">
        <h2 id="projects-heading">Selected projects</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <article key={project.name} className="project"><span className="project-number" aria-hidden="true">0{index + 1}</span><div><h3>{project.name}</h3><p>{project.description}</p><a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} source on GitHub`}>View source <span aria-hidden="true">↗</span></a></div></article>
          ))}
        </div>
      </section>
      <footer><div><h2>Have something in mind?</h2><p>I’m open to work and interesting conversations.</p><a className="email" href={socials.email}>{profile.email} <span aria-hidden="true">↗</span></a></div><div className="footer-bottom"><span>{profile.name}</span><div><a href={socials.twitter} target="_blank" rel="noopener noreferrer">X ↗</a><a href={socials.peerlist} target="_blank" rel="noopener noreferrer">Peerlist ↗</a></div></div></footer>
    </>
  );
}
