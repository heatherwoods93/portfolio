import { useEffect, useRef, useState } from 'react'

import cmsWorkflowsImage from '../assets/showcase/dispatch-v2.png'
import interactiveNavigationImage from '../assets/showcase/interactive-navigation.png'
import memberPathwaysImage from '../assets/showcase/better-future_v3.png'
import resourceSystemsImage from '../assets/showcase/resource-systems.png'

const systemSlides = [
  {
    category: 'Organizational Clarity & Member Pathways',
    navLabel: 'Content & CTA Clarity',
    icon: 'layout',
    heading: 'Clearer content paths that move people toward action.',
    description:
      'Structured messaging, stronger hierarchy, and purposeful calls-to-action that help members and visitors understand what matters and where to go next.',
    tags: ['CTA clarity', 'content hierarchy', 'member pathways', 'trust-building UX'],
    image: memberPathwaysImage,
  },
  {
    category: 'CMS & Workflow Systems',
    navLabel: 'CMS & Workflow Systems',
    icon: 'workflow',
    heading: 'Flexible CMS systems that adapt to real organizational workflows.',
    description:
      'CMS-driven structures for job calls, dispatch workflows, uploads, filtering, grouped listings, and operational content that needs to stay manageable over time.',
    tags: ['CMS architecture', 'filtering', 'grouped listings', 'uploads', 'custom workflows'],
    image: cmsWorkflowsImage,
  },
  {
    category: 'Interactive Navigation Systems',
    navLabel: 'Interactive Mapping Systems',
    icon: 'map',
    heading: 'Interactive maps connected to structured CMS content.',
    description:
      'Clickable maps, filters, and location-based navigation systems that help users explore regional data, districts, lodges, representatives, legislation, or other structured content.',
    tags: ['interactive maps', 'CMS filtering', 'location-based UX', 'SVG systems'],
    image: interactiveNavigationImage,
  },
  {
    category: 'Structured Resource Systems',
    navLabel: 'Searchable Directories',
    icon: 'search',
    heading: 'Organized content systems for dense, high-value information.',
    description:
      'Searchable and categorized resource systems that make contracts, wellness resources, documents, meetings, directories, and recurring content easier to find and maintain.',
    tags: ['resource directories', 'search', 'filtering', 'categorized content', 'document systems'],
    image: resourceSystemsImage,
  },
]

function ShowcaseIcon({ name }) {
  const iconProps = {
    'aria-hidden': 'true',
    className: 'systems-showcase__icon',
    fill: 'none',
    viewBox: '0 0 24 24',
  }

  if (name === 'workflow') {
    return (
      <svg {...iconProps}>
        <path d="M4 6h10" />
        <path d="M4 12h7" />
        <path d="M4 18h10" />
        <path d="M17 8l3-3 3 3" />
        <path d="M20 5v14" />
      </svg>
    )
  }

  if (name === 'map') {
    return (
      <svg {...iconProps}>
        <path d="M4 6l5-2 6 2 5-2v14l-5 2-6-2-5 2V6z" />
        <path d="M9 4v14" />
        <path d="M15 6v14" />
      </svg>
    )
  }

  if (name === 'search') {
    return (
      <svg {...iconProps}>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="M15 15l5 5" />
        <path d="M7.5 10.5h6" />
        <path d="M10.5 7.5v6" />
      </svg>
    )
  }

  return (
    <svg {...iconProps}>
      <rect height="6" width="6" x="4" y="4" />
      <rect height="6" width="6" x="14" y="4" />
      <rect height="6" width="6" x="4" y="14" />
      <rect height="6" width="6" x="14" y="14" />
    </svg>
  )
}

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [trackOffset, setTrackOffset] = useState(0)
  const slideRefs = useRef([])
  const viewportRef = useRef(null)

  useEffect(() => {
    const updateTrackOffset = () => {
      const viewport = viewportRef.current
      const activeSlideElement = slideRefs.current[activeSlide]

      if (!viewport || !activeSlideElement) {
        return
      }

      const centeredOffset =
        viewport.clientWidth / 2 -
        (activeSlideElement.offsetLeft + activeSlideElement.offsetWidth / 2)

      setTrackOffset(centeredOffset)
    }

    updateTrackOffset()

    const resizeObserver = new ResizeObserver(updateTrackOffset)

    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current)
    }

    slideRefs.current.forEach((slide) => {
      if (slide) {
        resizeObserver.observe(slide)
      }
    })

    window.addEventListener('resize', updateTrackOffset)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateTrackOffset)
    }
  }, [activeSlide])

  const showPreviousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? systemSlides.length - 1 : current - 1,
    )
  }

  const showNextSlide = () => {
    setActiveSlide((current) =>
      current === systemSlides.length - 1 ? 0 : current + 1,
    )
  }

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
            <p className="section__eyebrow">Client-Facing Systems</p>
            <h2 className="section__title" id="systems-showcase-title">
              Systems that turn complexity into clarity.
            </h2>
            <p className="section__description">
              I build flexible Webflow systems that help organizations organize
              content, clarify user paths, and manage complex workflows without
              forcing every client into the same pattern.
            </p>
          </div>

          <div className="systems-showcase__slider">
            {/* ANCHOR Systems Showcase Slider */}
            <div className="systems-showcase__viewport" ref={viewportRef}>
              <div
                className="systems-showcase__track"
                style={{
                  transform: `translateX(${trackOffset}px)`,
                }}
              >
                {systemSlides.map((slide, index) => (
                  <article
                    aria-hidden={activeSlide !== index}
                    aria-live={activeSlide === index ? 'polite' : undefined}
                    className={`systems-showcase__slide ${
                      activeSlide === index ? 'is-active' : 'is-dimmed'
                    }`}
                    key={slide.category}
                    ref={(node) => {
                      slideRefs.current[index] = node
                    }}
                  >
                    <div className="systems-showcase__slide-content">
                      <p className="text-small is-muted">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <p className="text-tagline">{slide.category}</p>
                      <h3 className="slider-title">{slide.heading}</h3>
                      <p className="text-body is-muted">{slide.description}</p>
                      <ul className="tag-list" aria-label={`${slide.category} features`}>
                        {slide.tags.map((tag) => (
                          <li className="tag" key={tag}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <a
                        className="link-arrow"
                        href="#work"
                        tabIndex={activeSlide === index ? 0 : -1}
                      >
                        View examples
                      </a>
                    </div>

                    <div className="systems-showcase__slide-media">
                      <img src={slide.image} alt="" />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="systems-showcase__nav" aria-label="Systems showcase controls">
              <div className="systems-showcase__controls">
                <button
                  aria-label="Show previous system"
                  className="systems-showcase__arrow"
                  type="button"
                  onClick={showPreviousSlide}
                >
                  &larr;
                </button>
                <p className="text-small">
                  {activeSlide + 1} / {systemSlides.length}
                </p>
                <button
                  aria-label="Show next system"
                  className="systems-showcase__arrow"
                  type="button"
                  onClick={showNextSlide}
                >
                  &rarr;
                </button>
              </div>

              <div className="systems-showcase__tabs" role="tablist" aria-label="System types">
                {systemSlides.map((slide, index) => (
                  <button
                    aria-selected={activeSlide === index}
                    className="systems-showcase__tab"
                    key={slide.category}
                    onClick={() => setActiveSlide(index)}
                    role="tab"
                    type="button"
                  >
                    <ShowcaseIcon name={slide.icon} />
                    <span>{slide.navLabel}</span>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
