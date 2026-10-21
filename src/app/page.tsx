import Link from "next/link";
import SectionNav from "@/components/SectionNav";
import Socials from "@/components/Socials";
import { Rich } from "@/lib/rich";
import { about, achievements, experience, highlights, leadership, profile, projects, socials } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="home">
      <aside className="sidebar">
        <div>
          <h1>{profile.name}</h1>
          <p className="title">{profile.title}</p>
          <p className="tagline">{profile.tagline}</p>
          <div className="cta-row">
            <a className="button primary" href={socials.email}>Get in touch</a>
            <Link className="button" href="/resume">View resume</Link>
          </div>
          <SectionNav />
        </div>
        <Socials />
      </aside>

      <div className="content">
        <section id="about" className="section" aria-labelledby="about-heading">
          <h2 id="about-heading" className="section-label">About</h2>
          {about.map((p) => <p key={p} className="prose"><Rich text={p} /></p>)}
          <dl className="highlights">
            {highlights.map((h) => (
              <div key={h.label} className="highlight">
                <dt>{h.label}</dt>
                <dd>{h.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="experience" className="section" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="section-label">Experience</h2>
          <ol className="rows">
            {experience.map((job) => (
              <li key={job.company} className="row">
                <p className="row-meta">{job.period}</p>
                <div>
                  <h3>{job.role} <span className="at">· {job.company}</span></h3>
                  <p className="row-sub">{job.summary}</p>
                  <ul className="points">
                    {job.bullets.slice(0, 3).map((b) => <li key={b}><Rich text={b} /></li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <Link className="arrow-link" href="/resume">View full resume <span aria-hidden="true">→</span></Link>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="section-label">Projects</h2>
          <ol className="rows">
            {projects.map((p) => (
              <li key={p.name} className="row">
                <p className="row-meta">{p.period ?? "Side project"}</p>
                <div>
                  <h3>
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="stretched">
                        {p.name} <span aria-hidden="true" className="ext">↗</span>
                      </a>
                    ) : p.name}
                  </h3>
                  <p className="row-text"><Rich text={p.description} /></p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="achievements" className="section" aria-labelledby="achievements-heading">
          <h2 id="achievements-heading" className="section-label">Achievements &amp; leadership</h2>
          <ul className="achievements">
            <li>
              <span className="row-meta">2023–24</span>
              <span><Rich text={`**${leadership.role}**, ${leadership.org} — led **280+** executives; revenue up **30%**, footfall **150,000+**`} /></span>
            </li>
            {achievements.map((a) => (
              <li key={a.text}>
                <span className="row-meta">{a.year}</span>
                <span><Rich text={a.text} /></span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <h2>Have something in mind?</h2>
          <p>I’m open to roles in strategy, operations and founder’s office teams, and always happy to talk.</p>
          <a className="email" href={socials.email}>{profile.email} <span aria-hidden="true">↗</span></a>
          <p className="fine">Built with Next.js, deployed on Vercel.</p>
        </footer>
      </div>
    </div>
  );
}
