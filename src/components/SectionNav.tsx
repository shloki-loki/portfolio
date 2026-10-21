"use client";

import { useEffect, useState } from "react";

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
];

// In-page nav for the sticky left column; highlights the section in view.
export default function SectionNav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="section-nav" aria-label="On this page">
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={active === id ? "true" : undefined}>
              <span className="nav-line" aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
