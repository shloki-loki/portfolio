import type { Metadata } from "next";
import { Rich } from "@/lib/rich";
import { achievements, education, experience, leadership, profile, projects, skills, socials } from "@/lib/content";

export const metadata: Metadata = { title: `Resume — ${profile.name}` };

export default function ResumePage() {
  return (
    <article className="resume">
      <header className="resume-head">
        <div>
          <h1>{profile.name}</h1>
          <p className="resume-contact">
            <a href={socials.email}>{profile.email}</a>
            <span aria-hidden="true">·</span>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span aria-hidden="true">·</span>
            <span>{profile.location}</span>
          </p>
        </div>
        <a className="button primary" href={profile.resumePdf} download="Shlok Agrawal Resume.pdf">Download PDF</a>
      </header>

      <section className="resume-section">
        <h2 className="section-label">Education</h2>
        <div className="resume-item">
          <div className="resume-item-head"><h3>{education.school}</h3><span className="row-meta">{education.period}</span></div>
          <p className="row-sub">{education.degree}</p>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="section-label">Experience</h2>
        {experience.map((job) => (
          <div key={job.company} className="resume-item">
            <div className="resume-item-head"><h3>{job.company}</h3><span className="row-meta">{job.period}</span></div>
            <p className="row-sub">{job.role} · {job.location}</p>
            <ul className="points">{job.bullets.map((b) => <li key={b}><Rich text={b} /></li>)}</ul>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2 className="section-label">Projects</h2>
        {projects.map((p) => (
          <div key={p.name} className="resume-item">
            <div className="resume-item-head">
              <h3>{p.link ? <a href={p.link} target="_blank" rel="noopener noreferrer">{p.name} <span aria-hidden="true" className="ext">↗</span></a> : p.name}</h3>
              {p.period && <span className="row-meta">{p.period}</span>}
            </div>
            {p.bullets ? (
              <ul className="points">{p.bullets.map((b) => <li key={b}><Rich text={b} /></li>)}</ul>
            ) : (
              <p className="row-text"><Rich text={p.description} /></p>
            )}
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2 className="section-label">Positions of responsibility</h2>
        <div className="resume-item">
          <div className="resume-item-head"><h3>{leadership.role}</h3><span className="row-meta">{leadership.period}</span></div>
          <p className="row-sub">{leadership.org}</p>
          <ul className="points">{leadership.bullets.map((b) => <li key={b}><Rich text={b} /></li>)}</ul>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="section-label">Achievements</h2>
        <ul className="achievements">
          {achievements.map((a) => (
            <li key={a.text}><span className="row-meta">{a.year}</span><span><Rich text={a.text} /></span></li>
          ))}
        </ul>
      </section>

      <section className="resume-section">
        <h2 className="section-label">Skills</h2>
        <dl className="skills">
          {skills.map((s) => (
            <div key={s.group}><dt>{s.group}</dt><dd>{s.items}</dd></div>
          ))}
        </dl>
      </section>
    </article>
  );
}
