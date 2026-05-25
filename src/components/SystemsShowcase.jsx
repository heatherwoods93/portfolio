import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import cmsWorkflowsImage from '../assets/showcase/dispatch-v2.png'
import interactiveNavigationImage from '../assets/showcase/interactive-navigation.png'
import memberPathwaysImage from '../assets/showcase/organize.png'
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

export default function SystemsShowcase() {
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
  )
}
