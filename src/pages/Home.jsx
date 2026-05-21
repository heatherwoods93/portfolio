const systemItems = [
  {
    label: 'CMS architecture',
    detail: 'Structured content models',
    strength: 'system-panel__bar--strong',
  },
  {
    label: 'QA workflows',
    detail: 'Repeatable review systems',
    strength: 'system-panel__bar--medium',
  },
  {
    label: 'Component systems',
    detail: 'Reusable front-end patterns',
    strength: 'system-panel__bar--strong',
  },
  {
    label: 'Accessibility checks',
    detail: 'Clearer, more trusted releases',
    strength: 'system-panel__bar--short',
  },
]

function Home() {
  return (
    <main className="page home">
      <section className="hero section--dark" aria-labelledby="hero-title">
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
          <a className="button button--light hero__resume" href="/resume.pdf">
            Download Résumé
          </a>
        </header>

        <div className="hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow">Webflow Developer &amp; Systems Builder</p>
            <h1 className="hero__title" id="hero-title">
              I build clear, maintainable websites and scalable front-end
              systems.
            </h1>
            <p className="hero__text">
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
            <p className="hero__status">
              Currently focused on Webflow, CMS architecture, accessibility, QA
              systems, and workflow improvement.
            </p>
          </div>

          <div className="hero__visual">
            <article className="system-panel" aria-labelledby="system-panel-title">
              <div className="system-panel__header">
                <p className="system-panel__label" id="system-panel-title">
                  System Snapshot
                </p>
                <span className="system-panel__status">Active</span>
              </div>

              <div className="system-panel__list">
                {systemItems.map((item) => (
                  <div className="system-panel__item" key={item.label}>
                    <div>
                      <h2>{item.label}</h2>
                      <p>{item.detail}</p>
                    </div>
                    <div className="system-panel__signal" aria-hidden="true">
                      <span className={`system-panel__bar ${item.strength}`} />
                      <span className="system-panel__dot" />
                    </div>
                  </div>
                ))}
              </div>
            </article>
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
