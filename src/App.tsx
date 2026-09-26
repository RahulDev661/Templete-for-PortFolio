import "./index.css";

type Project = {
  year: string;
  title: string;
  desc: string;
  stack: string[];
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    year: "2026",
    title: "Ledger",
    desc: "A minimal expense tracker for freelancers, with CSV import and monthly summaries.",
    stack: ["React", "SQLite", "Fly.io"],
    links: [
      { label: "Live site", href: "#" },
      { label: "Source", href: "#" },
    ],
  },
  {
    year: "2025",
    title: "Fieldnote",
    desc: "Offline-first note app for researchers doing fieldwork with spotty connectivity.",
    stack: ["Svelte", "IndexedDB"],
    links: [
      { label: "Live site", href: "#" },
      { label: "Source", href: "#" },
    ],
  },
  {
    year: "2024",
    title: "Portside",
    desc: "Internal dashboard for a small shipping brokerage, tracking cargo and routes.",
    stack: ["Vue", "Postgres"],
    links: [{ label: "Case study", href: "#" }],
  },
];

export default function App() {
  return (
    <div id="root">
      <header>
        <span className="wordmark">alex.dev</span>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" style={{ borderTop: "none" }}>
          <span className="tag">Portfolio</span>
          <h1>Alex Rivera</h1>
          <p className="lede">
            I build small, considered web tools — mostly frontend,
            occasionally backend when a project needs it.
          </p>
        </section>

        <section id="work">
          <h2>Selected work</h2>
          <div className="projects">
            {projects.map((p) => (
              <article className="project" key={p.title}>
                <div className="year">{p.year}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p className="desc">{p.desc}</p>
                  <div className="stack">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="links">
                    {p.links.map((l) => (
                      <a href={l.href} key={l.label}>
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about">
          <h2>About</h2>
          <p>
            I'm a frontend-leaning developer based in the Bay Area. I like
            small tools that solve one problem well, and I try to keep every
            project I ship legible to the next person who opens the code —
            including future me.
          </p>
        </section>

        <section id="contact" style={{ textAlign: "center" }}>
          <h2>Get in touch</h2>
          <p>Best reached by email at hello@alex.dev</p>
          <div id="social">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">X / Twitter</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Alex Rivera</span>
        <span>Built with React &amp; Tailwind</span>
      </footer>
    </div>
  );
}