function Home() {
  return (
    <main className="page home">
      <section className="section section--dark hero" aria-labelledby="hero-title">
        <header className="hero__header">
          <a className="hero__brand" href="/">
            Heather Woods
          </a>

          <nav className="hero__nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#systems">Systems</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="button button--light" href="/resume.pdf">
            Download R&eacute;sum&eacute;
          </a>
        </header>

        <div className="hero__layout">
          <div className="hero__content">
            <p className="text-tagline">Webflow Developer &amp; Systems Builder</p>

            <h1 className="text-display" id="hero-title">
              I build clear, maintainable websites and scalable frontend
              systems.
            </h1>

            <p className="hero__summary text-body is-muted">
              I help mission-driven teams turn complex content, CMS structures,
              and internal workflows into web experiences that are easier to use,
              easier to manage, and easier to trust.
            </p>

            <div className="hero__actions" aria-label="Hero actions">
              <a className="button button--primary" href="#work">
                View Selected Work
              </a>
              <a className="button button--secondary" href="#systems">
                Explore My Process
              </a>
            </div>

            <p className="hero__status text-small is-muted">
              Currently focused on Webflow, CMS architecture, accessibility, QA
              systems, and workflow improvement.
            </p>
          </div>
        </div>
      </section>

      <section className="section home__next" aria-labelledby="next-section-title">
        <div className="section__inner">
          <p className="section__eyebrow">Next Section</p>
          <h2 className="section__title" id="next-section-title">
            Selected Work &amp; Systems
          </h2>
        </div>
      </section>
    </main>
  )
}

export default Home
