import { Check } from 'lucide-react'

import { DesignSystemCard } from '../components/DesignSystemCard'
import ReviewWorkflowArtifact from '../components/ReviewWorkflowArtifact'
import SystemsShowcase from '../components/SystemsShowcase'

const problemSnippets = [
  'Translate messy requests into clear content, CMS, and interaction decisions.',
  'Balance UX clarity with maintainable implementation.',
  'Choose practical tools, including AI-assisted workflows, when they reduce repetitive operational friction.',
]

const problemFlow = [
  'observe',
  'structure',
  'build',
  'refine',
]

const designFoundationPoints = [
  'Reusable components',
  'Consistent UI patterns',
  'Implementation standards',
  'Scalable foundations',
]

const reviewWorkflowPoints = [
  'Structured QA workflows',
  'Clear review ownership',
  'Documentation standards',
  'Consistent launch processes',
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
            <p className="section__eyebrow">How it scales</p>
            <h2 className="section__title" id="workflow-title">
              Systems that support consistency as projects evolve.
            </h2>
            <p className="section__description">
            Reusable systems, implementation standards, and structured workflows that help projects stay consistent as they evolve.            
            </p>
          </div>

          <div className="workflow-section__layout">
            <article className="workflow-subsection">
              <div className="workflow-subheader">
                <div className="workflow-subheader__copy">
                  <p className="workflow-subheader__number">01</p>
                  <h3 className="text-heading">Design standards and strong foundations</h3>
                  <p className="text-body is-muted">
                  A shared foundation for building pages that stay consistent, maintainable, and easy to extend.                  
                  </p>
                </div>

                <ul className="workflow-subsection__annotation" aria-label="Design standards principles">
                  {designFoundationPoints.map((point) => (
                    <li className="workflow-subsection__annotation-item text-small" key={point}>
                      <Check aria-hidden="true" size={14} strokeWidth={1.8} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="workflow-subsection__visual">
                <DesignSystemCard />
              </div>
            </article>

            <article className="workflow-subsection">
              <div className="workflow-subheader">
                <div className="workflow-subheader__copy">
                  <p className="workflow-subheader__number">02</p>
                  <h3 className="text-heading">Structured workflows for collaborative teams</h3>
                  <p className="text-body is-muted">
                    Structured QA, documentation, and review processes that reduce ambiguity and help projects stay cohesive as they evolve.
                  </p>
                </div>
              </div>

              <div className="workflow-subsection__visual">
                <ReviewWorkflowArtifact />
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
