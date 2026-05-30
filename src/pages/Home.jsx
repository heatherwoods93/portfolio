import {
  Bot,
  Boxes,
  ClipboardCheck,
  Database,
  FileText,
  LayoutTemplate,
} from 'lucide-react'
import SystemsShowcase from '../components/SystemsShowcase'
import WebsiteExamplesSlider from '../components/WebsiteExamplesSlider'
import ibewImage from '../assets/examples/ibew11-about.jpg'
import ikonImage from '../assets/examples/ikon-collection.jpg'
import napoImage from '../assets/examples/napo-hero.jpg'
import nassauImage from '../assets/examples/nassau-hero.jpg'
import socalImage from '../assets/examples/socal-hero-cropped.jpg'
import yumaImage from '../assets/examples/yuma-hero1.jpg'

const systems = [
  {
    title: 'Frontend Standards',
    description:
      'Shared implementation standards that improve consistency and support accessible, maintainable websites.',
    tags: ['Client-First', 'Accessibility', 'Responsive Design'],
    icon: Boxes,
  },
  {
    title: 'Component Libraries',
    description:
      'Reusable components and interaction patterns that speed up development and create more consistent builds.',
    tags: ['Relume', 'Webflow Libraries'],
    icon: LayoutTemplate,
  },
  {
    title: 'CMS Architecture',
    description:
      'Organized content systems that make large websites easier to manage and navigate.',
    tags: ['Webflow CMS', 'Attributes v2 by Finsweet'],
    icon: Database,
  },
  {
    title: 'Review Workflows',
    description:
      'Clear review processes that improve accountability, reduce missed issues, and support smoother launches.',
    tags: ['QA', 'Internal Review', 'Launch Checks'],
    icon: ClipboardCheck,
  },
  {
    title: 'AI Workflows & Automation',
    description:
      'Practical automation and AI-assisted workflows that streamline repetitive tasks, support planning, and improve day-to-day efficiency.',
    tags: ['AI-Assisted Planning', 'Workflow Automation'],
    icon: Bot,
  },
  {
    title: 'Documentation & SOPs',
    description:
      'Clear documentation that helps teams maintain, support, and improve their work over time.',
    tags: ['Notion', 'Internal Resources'],
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
    title: 'Automation Technologies',
    items: [
      'Claude Integrations',
      'Make.com',
      'Zapier',
      'Webflow AI',
      'Monday automations',
    ],
  },
]

const websiteExamples = [
  {
    title: 'SoCal Propane LLC',
    category: 'Propane Delivery & Commercial Services',
    description:
      'Commercial website focused on clear service communication and responsive visual implementation.',
    image: socalImage,
    alt: 'SoCal Propane LLC website screenshot showing a commercial propane services hero section',
    url: 'https://www.socalp.com/',
  },
  {
    title: 'iKon Art Gallery',
    category: 'Art Gallery & Ecommerce Experience',
    description:
      'Gallery website balancing curated collections, brand storytelling, and online purchasing.',
    image: ikonImage,
    alt: 'iKon Art Gallery website screenshot showing an art collection browsing experience',
    url: 'https://www.ikonag.com/',
  },
  {
    title: 'IBEW Local 11',
    category: 'Labor Organization & Membership Services',
    description:
      'Large-scale membership website supporting resources, recruitment, and organizational communication.',
    image: ibewImage,
    alt: 'IBEW Local 11 website screenshot showing an informational content page',
    url: 'https://www.ibew11.org/',
  },
  {
    title: 'Nassau County PBA',
    category: 'Law Enforcement Association',
    description:
      'Brand-forward association website with strong visual identity and member-focused resources.',
    image: nassauImage,
    alt: 'Nassau County PBA website screenshot showing a brand-forward hero section',
    url: 'https://www.nassaupba.org/',
  },
  {
    title: 'NAPO',
    category: 'National Professional Association',
    description:
      'National organization website supporting advocacy, events, resources, and communication.',
    image: napoImage,
    alt: 'NAPO website screenshot showing organizational content and advocacy messaging',
    url: 'https://www.napo.org/',
  },
  {
    title: 'United Yuma Firefighters',
    category: 'Firefighter Association',
    description:
      'Community-focused association website with bold typography and strong visual direction.',
    image: yumaImage,
    alt: 'United Yuma Firefighters website screenshot showing a welcome section',
    url: 'https://www.yumafirefighters.org/',
  },
]

function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <main className="page home" id="main-content">
      <section className="section section--dark hero" aria-labelledby="hero-title">
        <header className="hero__header">
          <a className="hero__brand" href="/">
            Heather Woods
          </a>

          <nav className="hero__nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="button button--light"
            href="/resume/Resume.pdf"
            aria-label="View Resume, opens in a new tab"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </header>

        <div className="hero__layout">
          <div className="hero__content">
            <p className="text-tagline is-hero">
              WEBFLOW PARTNER &bull;
              <span className="hero__eyebrow-break"> Frontend Developer</span>
            </p>

            <h1 className="text-display" id="hero-title">
I build websites that bring clarity to complexity.
            </h1>
            <p className="hero__summary text-body is-muted">
Systems-minded frontend developer focused on solving problems, improving processes, and creating websites that are easier to manage long after launch.          </p>
            <div className="hero__actions" aria-label="Hero actions">
              <a className="button button--primary" href="#work">
                View My Work
              </a>
              <a className="button button--secondary hero__action-contact" href="#contact">
                Contact
              </a>
              <a
                className="button button--secondary hero__action-resume"
                href="/resume/Resume.pdf"
                aria-label="Download Resume, opens in a new tab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download R&eacute;sum&eacute;
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
Better websites start with better foundations.
            </h2>
            <p className="section__description">
Whether it's organizing content, improving internal processes, or streamlining repetitive tasks, I look for opportunities to reduce friction and create clearer paths forward.          </p>
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
        className="section website-examples"
        id="work"
        aria-labelledby="website-examples-title"
      >
        <div className="section__inner">
          <div className="website-examples__header">
            <p className="section__eyebrow">Selected Website Examples</p>
            <h2 className="section__title" id="website-examples-title">
              Visual implementation across real website builds
            </h2>
            <p className="section__description">
              A small collection of website examples showing responsive layouts, visual polish, content clarity, and maintainable Webflow implementation.
            </p>
          </div>

          <WebsiteExamplesSlider examples={websiteExamples} />
        </div>
      </section>

      <section
        className="section systems-practice"
        aria-labelledby="systems-practice-title"
      >
        <div className="section__inner">
          <SystemsShowcase />
        </div>
      </section>

      <section className="section about-contact" id="about" aria-labelledby="about-title">
        <div className="section__inner">
          <div className="about-contact__content">
            <p className="section__eyebrow">About</p>
            <h2 className="section__title" id="about-title">
              Building clearer paths through complex work.
            </h2>
            <p className="section__description">
              I enjoy untangling complexity and building things that are easier to use, maintain, and improve. My work spans frontend development, CMS architecture, and process improvement, with a focus on creating clearer paths through complex work.
            </p>
          </div>

          <div className="about-tools">
            <div className="about-tools__header">
              <p className="section__eyebrow about-tools__eyebrow">
                Tools, Workflows &amp; Automation
              </p>
              <p>
               The tools and workflows I use to support frontend development, content management, process improvement, and day-to-day implementation.
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
          </div>
        </div>
      </section>

      <section className="section section--dark contact" id="contact" aria-labelledby="contact-title">
        <div className="contact__inner">
          <p className="contact__eyebrow">CONTACT</p>
          <h2 className="contact__title" id="contact-title">
            Let&rsquo;s connect.
          </h2>
          <p className="contact__text">
            Interested in building something clearer, more maintainable, or easier to manage? I'd love to talk.
          </p>

          <div className="contact__actions" aria-label="Contact links">
            <a className="button button--primary" href="mailto:heatherwoods93@protonmail.com">
              Email me
            </a>
            <a
              className="button button--secondary"
              href="https://www.linkedin.com/in/heatherwoods93/"
              aria-label="LinkedIn, opens in a new tab"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="button button--secondary"
              href="https://github.com/heatherwoods93"
              aria-label="GitHub, opens in a new tab"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__identity">
            <a className="site-footer__brand" href="/">
              Heather Woods
            </a>
            <p className="site-footer__text">
              <span>Systems-Minded Front-End Developer &bull;</span>
              <span className="site-footer__built">Built with React</span>
            </p>
          </div>

          <nav className="site-footer__links" aria-label="Footer links">
            <a
              href="/resume/Resume.pdf"
              aria-label="View Resume, opens in a new tab"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a href="mailto:heatherwoods93@protonmail.com">Contact</a>
            <a
              href="https://www.linkedin.com/in/heatherwoods93/"
              aria-label="LinkedIn, opens in a new tab"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </main>
    </>
  )
}

export default Home
