import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import cmsWorkflowsImage from '../assets/showcase/dispatch-v2.png'
import interactiveNavigationImage from '../assets/showcase/interactive-navigation.png'
import memberPathwaysImage from '../assets/showcase/organize.png'
import resourceSystemsImage from '../assets/showcase/resource-systems.png'

import { DesignSystemCard } from '../components/DesignSystemCard/DesignSystemCard'
import ReviewWorkflowCard from '../components/ReviewWorkflowCard/ReviewWorkflowCard'

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
    heading: 'Flexible systems built around real workflows.',
    description:
      'CMS-driven structures for job calls, dispatch workflows, uploads, filtering, grouped listings, and operational content that needs to stay manageable over time.',
    tags: ['CMS architecture', 'filtering', 'grouped listings', 'uploads', 'custom workflows'],
    image: cmsWorkflowsImage,
  },
  {
    category: 'Dynamic Content Navigation',
    navLabel: 'Interactive Navigation Systems',
    icon: 'map',
    heading: 'Interactive navigation for structured content.',
    description:
      'Clickable maps, filters, and location-based navigation systems that help users explore regional data, districts, lodges, representatives, legislation, or other structured content.',
    tags: ['interactive maps', 'CMS filtering', 'location-based UX', 'SVG systems'],
    image: interactiveNavigationImage,
  },
  {
    category: 'Structured Resource Systems',
    navLabel: 'Searchable Directories',
    icon: 'search',
    heading: 'Searchable systems for large content libraries.',
    description:
      'Searchable and categorized resource systems that make contracts, wellness resources, documents, meetings, directories, and recurring content easier to find and maintain.',
    tags: ['resource directories', 'search', 'filtering', 'categorized content', 'document systems'],
    image: resourceSystemsImage,
  },
]

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
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragPointerId = useRef(null)
  const dragStartX = useRef(0)
  const didDrag = useRef(false)
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

  const goToSlide = (index) => {
    const lastSlide = systemSlides.length - 1

    setActiveSlide(Math.min(Math.max(index, 0), lastSlide))
  }

  const showPreviousSlide = () => {
    if (activeSlide === 0) {
      return
    }

    goToSlide(activeSlide - 1)
  }

  const showNextSlide = () => {
    if (activeSlide === systemSlides.length - 1) {
      return
    }

    goToSlide(activeSlide + 1)
  }

  const handleDragStart = (event) => {
    if (event.button !== undefined && event.button !== 0) {
      return
    }

    dragPointerId.current = event.pointerId
    dragStartX.current = event.clientX
    didDrag.current = false
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handleDragMove = (event) => {
    if (!isDragging || dragPointerId.current !== event.pointerId) {
      return
    }

    const nextDragOffset = event.clientX - dragStartX.current

    if (Math.abs(nextDragOffset) > 6) {
      didDrag.current = true
    }

    setDragOffset(nextDragOffset)
  }

  const handleDragEnd = (event) => {
    if (dragPointerId.current !== event.pointerId) {
      return
    }

    const finalDragOffset = event.clientX - dragStartX.current
    const dragThreshold = 72

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }

    dragPointerId.current = null
    setIsDragging(false)
    setDragOffset(0)

    if (Math.abs(finalDragOffset) < dragThreshold) {
      return
    }

    if (finalDragOffset < 0) {
      showNextSlide()
      return
    }

    showPreviousSlide()
  }

  const handleSlideClick = (event) => {
    if (!didDrag.current) {
      return
    }

    event.preventDefault()
    event.stopPropagation()
    didDrag.current = false
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
            <p className="section__eyebrow">WHAT I BUILD</p>
            <h2 className="section__title" id="systems-showcase-title">
            I build clarity through structure, flexibility through design, and trust through usability.            
            </h2>
            <p className="section__description">
              Organizing content, clarifying user paths, and streamlining complex needs into client-first systems.
            </p>
          </div>

          <div className="systems-showcase__slider">
            {/* ANCHOR Systems Showcase Carousel */}
            <div className="systems-showcase__frame">
              <div
                className={`systems-showcase__viewport ${
                  isDragging ? 'is-dragging' : ''
                }`}
                ref={viewportRef}
                onClickCapture={handleSlideClick}
                onPointerCancel={handleDragEnd}
                onPointerDown={handleDragStart}
                onPointerMove={handleDragMove}
                onPointerUp={handleDragEnd}
              >
                <div
                  className="systems-showcase__track"
                  style={{
                    transform: `translateX(${trackOffset + dragOffset}px)`,
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

              <div className="systems-showcase__controls" aria-label="Systems showcase controls">
                <button
                  aria-label="Show previous system"
                  aria-hidden={activeSlide === 0}
                  className={`systems-showcase__control ${
                    activeSlide === 0 ? 'is-hidden' : ''
                  }`}
                  disabled={activeSlide === 0}
                  tabIndex={activeSlide === 0 ? -1 : 0}
                  type="button"
                  onClick={showPreviousSlide}
                >
                  <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.8} />
                </button>
                <button
                  aria-label="Show next system"
                  aria-hidden={activeSlide === systemSlides.length - 1}
                  className={`systems-showcase__control ${
                    activeSlide === systemSlides.length - 1 ? 'is-hidden' : ''
                  }`}
                  disabled={activeSlide === systemSlides.length - 1}
                  tabIndex={activeSlide === systemSlides.length - 1 ? -1 : 0}
                  type="button"
                  onClick={showNextSlide}
                >
                  <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
                </button>
              </div>

              <div className="systems-showcase__nav" aria-label="Systems showcase section index">
                <div className="systems-showcase__tabs" role="tablist" aria-label="System types">
                  {systemSlides.map((slide, index) => (
                    <button
                      aria-selected={activeSlide === index}
                      className="systems-showcase__tab"
                      key={slide.category}
                      onClick={() => goToSlide(index)}
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
        </div>
      </section>

      <section className="section workflow-section" aria-labelledby="workflow-title">
        <div className="section__inner">
          <div className="workflow-section__intro">
            <p className="section__eyebrow">WORKFLOWS & IMPLEMENTATION</p>
            <h2 className="section__title" id="workflow-title">
              I build maintainable systems from the ground up.
            </h2>
            <p className="section__description">
             Reusable patterns that improve consistency, implementation standards that reduce drift, and structured review processes that support high-quality work at scale.
            </p>
          </div>

          <div className="workflow-section__layers">
            <article className="workflow-section__layer">
              <div className="workflow-section__layer-header">
                <div className="workflow-section__layer-copy">
                  <p className="workflow-section__number">01</p>
                  <h3 className="text-heading">Design standards and strong foundations</h3>
                  <p className="text-body is-muted">
                  A shared foundation for building pages that stay consistent, maintainable, and easy to extend.                  
                  </p>
                </div>

                <ul className="workflow-section__annotation" aria-label="Design standards principles">
                  {designFoundationPoints.map((point) => (
                    <li className="workflow-section__annotation-item text-small" key={point}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="workflow-section__visual">
                <DesignSystemCard />
              </div>
            </article>

            <article className="workflow-section__layer">
              <div className="workflow-section__layer-header">
                <div className="workflow-section__layer-copy">
                  <p className="workflow-section__number">02</p>
                  <h3 className="text-heading">Workflows that support clearer collaboration and consistency</h3>
                  <p className="text-body is-muted">
                    Structured QA, documentation, and review processes that reduce ambiguity and help projects stay cohesive as they evolve.
                  </p>
                </div>

                <ul className="workflow-section__annotation" aria-label="Review workflow standards">
                  {reviewWorkflowPoints.map((point) => (
                    <li className="workflow-section__annotation-item text-small" key={point}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="workflow-section__visual">
                <ReviewWorkflowCard />
              </div>
            </article>
          </div>

          <div className="workflow-section__layer workflow-section__closing">
            <div className="workflow-section__closing-statement">
              <p className="text-tagline">Layer Three - Friction Underneath the Request</p>
              <h3 className="text-heading">
                I look for the friction underneath the request.
              </h3>
              <p className="text-body">
                I am most useful in the space between design, development,
                content, and workflow, where unclear systems need to become
                something people can actually use, maintain, and trust.
              </p>
              <div className="workflow-section__mini-flow" aria-label="Problem solving process">
                {problemFlow.map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
            </div>

            <div className="workflow-section__snippet-list">
              {problemSnippets.map((snippet) => (
                <p className="workflow-section__snippet text-small" key={snippet}>
                  {snippet}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
