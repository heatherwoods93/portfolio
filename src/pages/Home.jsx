import {
  Bot,
  Boxes,
  ClipboardCheck,
  Database,
  FileText,
  Network,
  Workflow,
} from 'lucide-react'
import SystemsShowcase from '../components/SystemsShowcase'

const systems = [
  {
    title: 'Design Systems',
    description:
      'Evolving frontend standards, reusable component patterns, and scalable implementation systems for consistent Webflow builds.',
    tags: ['Client-First', 'Relume', 'Components'],
    icon: Boxes,
  },
  {
    title: 'Review Workflows',
    description:
      'Structured QA and review processes that clarify ownership, improve feedback quality, and reduce missed launch issues.',
    tags: ['QA', 'Accessibility', 'Launch Checks'],
    icon: ClipboardCheck,
  },
  {
    title: 'Automation Systems',
    description:
      'Internal automations that connect project status, review stages, and team notifications to reduce manual coordination.',
    tags: ['Monday.com', 'Slack', 'Process'],
    icon: Workflow,
  },
  {
    title: 'Documentation & SOPs',
    description:
      'Clear implementation notes, development standards, and process documentation that make systems easier to maintain and hand off.',
    tags: ['Notion', 'SOPs', 'Team Enablement'],
    icon: FileText,
  },
  {
    title: 'CMS Architecture',
    description:
      'Structured content systems for resource libraries, member-focused pages, filtered content, and maintainable site architecture.',
    tags: ['Webflow CMS', 'Filtering', 'UX'],
    icon: Database,
  },
  {
    title: 'AI-Assisted Development',
    description:
      'Exploring practical AI-supported workflows for documentation, development planning, content structure, and internal process improvements.',
    tags: ['AI Workflows', 'Research', 'Tooling'],
    icon: Bot,
  },
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
        className="section systems"
        id="systems"
        aria-labelledby="systems-title"
      >
        <div className="section__inner">
          <div className="systems__header">
            <p className="section__eyebrow">Systems &amp; Solutions</p>
            <h2 className="section__title" id="systems-title">
              I build web-based systems that solve real-world problems.
            </h2>
            <p className="section__description">
              From CMS architecture and reusable frontend standards to review
              workflows and automation, I focus on the structures that help
              teams build clearer, more maintainable websites.
            </p>
          </div>

          <div className="systems__grid">
            {systems.map(({ title, description, tags, icon: Icon }) => (
              <article className="systems-card" key={title}>
                <div className="systems-card__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="systems-card__tags" aria-label={`${title} tools and focus areas`}>
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section systems-showcase featured-work"
        id="work"
        aria-labelledby="featured-work-title"
      >
        <div className="section__inner">
          <div className="featured-work__header">
            <p className="section__eyebrow">Featured Work</p>
            <h2 className="section__title" id="featured-work-title">
              Selected work and implementation examples
            </h2>
            <p className="section__description">
              Larger examples of content structure, CMS planning, navigation,
              and interface decisions that turn complex website needs into
              maintainable systems.
            </p>
          </div>

          <SystemsShowcase />
        </div>
      </section>

      <section className="section about-contact" id="about" aria-labelledby="about-title">
        <div className="section__inner">
          <div className="about-contact__grid">
            <div className="about-contact__content">
              <p className="section__eyebrow">About</p>
              <h2 className="section__title" id="about-title">
                Frontend systems with practical roots.
              </h2>
              <p className="section__description">
                My work sits between design implementation, CMS architecture,
                process improvement, and documentation. I like building the
                structures that make websites easier to understand, launch, and
                keep improving after handoff.
              </p>
            </div>

            <div className="about-contact__card" id="contact">
              <Network aria-hidden="true" size={24} strokeWidth={1.8} />
              <h3>Let&apos;s talk systems.</h3>
              <p>
                Interested in Webflow implementation, CMS planning, frontend
                standards, or workflow cleanup?
              </p>
              <a className="button button--primary" href="/resume.pdf">
                <FileText aria-hidden="true" size={17} strokeWidth={1.8} />
                View resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
