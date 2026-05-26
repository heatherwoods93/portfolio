import SystemsShowcase from '../components/SystemsShowcase'
import WorkflowSwitcher from '../components/WorkflowSwitcher'

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
              I turn complex content, CMS structures, and evolving workflows into frontend systems that are easier to use, easier to manage, and easier to scale.            
            </p>

            <div className="hero__actions" aria-label="Hero actions">
              <a className="button button--primary" href="#work">
                View Selected Work
              </a>
              <a className="button button--secondary" href="#systems">
                Explore My Process
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section systems-showcase"
        id="systems"
        aria-labelledby="systems-showcase-title"
      >
        <div className="section__inner">
          <div className="systems-showcase__header">
            <p className="section__eyebrow">My Work</p>
            <h2 className="section__title" id="systems-showcase-title">
              Structured for clarity, usability, and flexibility.              
            </h2>
            <p className="section__description">
              Organizing content, clarifying user paths, and streamlining complex needs into client-first systems.
            </p>
          </div>

          <SystemsShowcase />
        </div>
      </section>

      <section className="section workflow-section" aria-labelledby="workflow-title">
        <div className="section__inner">
          <div className="workflow-section__intro">
            <p className="section__eyebrow">Structured Workflows</p>
            <h2 className="section__title" id="workflow-title">
              Workflows for collaboration and quality assurance
            </h2>
            <p className="section__description">
              I design and improve the systems, processes, and documentation
              that keep projects moving forward with consistency and
              transparency.
            </p>
          </div>
          <WorkflowSwitcher />
        </div>

      </section>
    </main>
  )
}

export default Home
