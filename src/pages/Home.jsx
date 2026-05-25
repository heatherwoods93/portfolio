import SystemsShowcase from '../components/SystemsShowcase'

import reviewDashboardImage from '../assets/case-studies/review_dashboard.png'

const workflowFeatures = [
  {
    title: 'Role-based reviews',
    text: 'Dedicated responsibilities ensure complete coverage and clear accountability.',
  },
  {
    title: 'Automation where it helps',
    text: 'Streamlined handoffs, notifications, and status updates reduce manual work.',
  },
  {
    title: 'Documentation that scales',
    text: 'SOPs and guides keep teams aligned and onboarding smooth.',
  },
]

const reviewRoles = [
  'Webflow Settings',
  'Content',
  'Integrations & Systems',
  'Designer Audit',
  'UI/UX',
]

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
            <div className="workflow-section__content">
              <p className="workflow-section__number" aria-hidden="true">
                03
              </p>
              <p className="section__eyebrow">Structured Workflows</p>
              <h2 className="section__title" id="workflow-title">
                Structured Workflows for Collaborative Teams
              </h2>
              <p className="section__description">
                I design and improve the systems, processes, and documentation
                that keep projects moving forward with consistency and
                transparency.
              </p>

              <div className="workflow-section__features" aria-label="Workflow system strengths">
                {workflowFeatures.map((feature) => (
                  <article className="workflow-feature" key={feature.title}>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="workflow-section__media">
              <img
                src={reviewDashboardImage}
                alt="Anonymized Website Reviews dashboard showing review tasks, reviewer roles, and workflow status."
              />
            </div>
          </div>

          <div className="workflow-proof-grid" aria-label="Workflow support systems">
            <article className="workflow-proof-card">
              <div className="workflow-proof-card__visual workflow-proof-card__visual--checklist" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <h3>QA Checklist</h3>
              <p>
                Standardized checks help reviews stay consistent across design,
                content, accessibility, settings, and launch readiness.
              </p>
            </article>

            <article className="workflow-proof-card">
              <div className="workflow-proof-card__visual workflow-proof-card__visual--roles" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <h3>Review Roles</h3>
              <p>
                Focused reviewer roles clarify ownership and make sure each
                build is checked from multiple angles.
              </p>
              <ul className="tag-list" aria-label="Review role examples">
                {reviewRoles.map((role) => (
                  <li className="tag" key={role}>
                    {role}
                  </li>
                ))}
              </ul>
            </article>

            <article className="workflow-proof-card">
              <div className="workflow-proof-card__visual workflow-proof-card__visual--docs" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <h3>Documentation &amp; SOPs</h3>
              <p>
                Centralized resources keep repeatable processes clear,
                findable, and easier to maintain.
              </p>
            </article>
          </div>

          <div className="workflow-cta">
            <div>
              <h3>Systems. Standards. Workflows.</h3>
              <p>
                Everything connected to create better websites — and a better
                way to build them.
              </p>
            </div>
            <a className="button button--light" href="#work">
              See Selected Work
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
