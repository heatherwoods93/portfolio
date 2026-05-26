import { useState } from 'react'

import SystemsShowcase from '../components/SystemsShowcase'

import automationDashboardImage from '../assets/artifacts/automation-artifact.png'
import documentationDashboardImage from '../assets/artifacts/documentation-artifact.png'
import reviewDashboardImage from '../assets/artifacts/reviews-artifact.png'

const workflowFeatures = [
  {
    id: 'review-board',
    title: 'Role-based reviews',
    text: 'Dedicated responsibilities ensure complete coverage and clear accountability.',
    image: reviewDashboardImage,
    imageAlt: 'Review board dashboard showing role-based internal review assignments',
  },
  {
    id: 'automation',
    title: 'Automation where it helps',
    text: 'Streamlined handoffs, notifications, and status updates reduce manual work.',
    image: automationDashboardImage,
    imageAlt: 'Automation dashboard showing review workflow automation rules',
  },
  {
    id: 'documentation',
    title: 'Documentation that scales',
    text: 'SOPs and guides keep teams aligned and onboarding smooth.',
    image: documentationDashboardImage,
    imageAlt: 'Documentation dashboard showing centralized process documentation',
  },
]

function Home() {
  const [activeWorkflowId, setActiveWorkflowId] = useState(workflowFeatures[0].id)
  const activeWorkflow = workflowFeatures.find(
    (feature) => feature.id === activeWorkflowId,
  ) ?? workflowFeatures[0]

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
            <div className="section-layout__grid">
              <div className="workflow-section__content">
  
              <div
                className="workflow-section__features workflow-switcher__controls"
                role="tablist"
                aria-label="Workflow system examples"
              >
                {workflowFeatures.map((feature) => (
                  <button
                    className={`workflow-feature workflow-switcher__button${
                      feature.id === activeWorkflow.id ? ' is-active' : ''
                    }`}
                    id={`${feature.id}-tab`}
                    key={feature.id}
                    type="button"
                    role="tab"
                    aria-selected={feature.id === activeWorkflow.id}
                    aria-controls="workflow-switcher-panel"
                    onClick={() => setActiveWorkflowId(feature.id)}
                  >
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </button>
                ))}
              </div>
            </div>
  
              <div
                className="workflow-section__media workflow-switcher__media"
                id="workflow-switcher-panel"
                role="tabpanel"
                aria-labelledby={`${activeWorkflow.id}-tab`}
              >
                {workflowFeatures.map((feature) => (
                  <img
                    className={`workflow-switcher__image${
                      feature.id === activeWorkflow.id ? ' is-active' : ''
                    }`}
                    key={feature.id}
                    src={feature.image}
                    alt={feature.id === activeWorkflow.id ? feature.imageAlt : ''}
                    aria-hidden={feature.id === activeWorkflow.id ? undefined : 'true'}
                  />
                ))}
              </div>
            </div>
          </div>

      </section>
    </main>
  )
}

export default Home
