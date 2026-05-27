import {
  Bot,
  Boxes,
  ClipboardCheck,
  Database,
  FileText,
  LayoutTemplate,
  Network,
} from 'lucide-react'
import SystemsShowcase from '../components/SystemsShowcase'

const systems = [
  {
    title: 'Frontend Standards',
    description:
      'Scalable implementation standards, naming conventions, accessibility expectations, and responsive development patterns designed to improve consistency across projects and teams.',
    tags: ['Client-First', 'Accessibility', 'Responsive Design'],
    icon: Boxes,
  },
  {
    title: 'Component Libraries',
    description:
      'Reusable sections, interaction patterns, and modular frontend resources designed to accelerate development and support more maintainable Webflow builds.',
    tags: ['Relume', 'Reusable Components', 'UI Systems'],
    icon: LayoutTemplate,
  },
  {
    title: 'CMS Architecture',
    description:
      'Structured content systems for resource libraries, searchable content, member-focused pages, and maintainable CMS-driven website experiences.',
    tags: ['Webflow CMS', 'Content Systems', 'Filtering', 'Finsweet'],
    icon: Database,
  },
  {
    title: 'Review Workflows',
    description:
      'Structured QA and review systems that improve accountability, clarify ownership, and reduce missed issues during implementation and launch.',
    tags: ['QA', 'Team Workflows', 'Launch Validation'],
    icon: ClipboardCheck,
  },
  {
    title: 'AI Workflows & Automation',
    description:
      'Practical AI-supported workflows and automation systems designed to reduce manual coordination, improve visibility, and support scalable internal processes.',
    tags: ['AI', 'Automation', 'Zapier', 'Monday.com', 'Make.com'],
    icon: Bot,
  },
  {
    title: 'Documentation & SOPs',
    description:
      'Clear implementation documentation, development standards, and operational resources that make systems easier to maintain, scale, and hand off across teams.',
    tags: ['SOPs', 'Notion', 'Docs', 'Internal Resources'],
    icon: FileText,
  },
]

const toolGroups = [
  {
    title: 'Frontend & CMS',
    items: ['HTML / CSS / JavaScript', 'React', 'Webflow', 'Finsweet', 'Relume'],
  },
  {
    title: 'Workflow & Operations',
    items: ['Monday.com', 'Notion', 'Hubspot', 'Basecamp', 'Clickup'],
  },
  {
    title: 'Development & Deployment',
    items: ['Git/GitHub', 'VS Code', 'Vite', 'Cloudflare', 'Claude Code'],
  },
  {
    title: 'AI & Automation',
    items: [
      'Claude Integrations',
      'Make.com',
      'Zapier',
      'Webflow AI',
      'Monday automations',
    ],
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
        className="section featured-work"
        id="work"
        aria-labelledby="featured-work-title"
      >
        <div className="section__inner">
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

            <div className="about-contact__card">
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

          <div className="about-tools">
            <div className="about-tools__header">
              <p className="section__eyebrow">Tools &amp; Technologies</p>
              <p>
                A selection of the platforms, workflows, and tools I regularly
                work with across frontend development, CMS architecture,
                documentation, and operational systems.
              </p>
            </div>

            <div className="about-tools__grid">
              {toolGroups.map((group) => (
                <section className="about-tools__group" key={group.title}>
                  <h3 className="about-tools__title">{group.title}</h3>
                  <ul className="about-tools__list">
                    {group.items.map((item) => (
                      <li className="about-tools__item" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <aside
              className="ai-workflow-note"
              aria-labelledby="ai-workflow-note-title"
            >
              <div>
                <h3
                  className="ai-workflow-note__title"
                  id="ai-workflow-note-title"
                >
                  AI-Integrated Workflows
                </h3>
                <p className="ai-workflow-note__text">
                  I use AI-assisted tools to support frontend planning, CMS organization, implementation review, documentation, and workflow automation throughout the development process.

                </p>
                <p className="ai-workflow-note__text">
                  This includes reducing repetitive implementation work, reviewing content for human errors and inconsistencies, organizing complex client information into clearer structures, and accelerating tasks like CMS setup, wireframe exploration, SOP drafting, and operational planning.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <div className="contact__inner">
          <p className="contact__eyebrow">Contact</p>
          <h2 className="contact__title" id="contact-title">
            Clearer systems start with clearer structure.
          </h2>
          <p className="contact__text">
            I specialize in frontend systems, CMS organization, documentation, and operational workflows designed to be easier to manage and maintain.
          </p>

          <div className="contact__actions" aria-label="Contact links">
            <a className="button button--primary" href="mailto:hello@example.com">
              Email me
            </a>
            <a className="button button--secondary" href="https://www.linkedin.com/">
              LinkedIn
            </a>
            <a className="button button--secondary" href="https://github.com/">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <a className="site-footer__brand" href="/">
            Heather Woods
          </a>
          <p className="site-footer__text">
            Webflow Developer &amp; Frontend Systems Builder
          </p>
          <nav className="site-footer__links" aria-label="Footer links">
            <a href="mailto:hello@example.com">Email</a>
            <a href="https://www.linkedin.com/">LinkedIn</a>
            <a href="https://github.com/">GitHub</a>
          </nav>
          <p className="site-footer__meta">
            &copy; 2026 Heather Woods. Built with React.
          </p>
        </div>
      </footer>
    </main>
  )
}

export default Home
