import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import reviewWorkflowImage from '../assets/artifacts/reviews-artifact.png'
import relumeComponentsImage from '../assets/relume-components-mockup.png'
import cmsWorkflowsImage from '../assets/showcase/dispatch-v2.png'
import interactiveNavigationImage from '../assets/showcase/interactive-navigation.png'
import memberPathwaysImage from '../assets/showcase/organize.png'
import resourceSystemsImage from '../assets/showcase/resource-systems.png'

const implementationSlides = [
  {
    category: 'Interactive Navigation',
    title: 'Map-based content paths',
    image: interactiveNavigationImage,
    alt: 'Interactive map interface with location-based navigation panels',
    annotations: [
      'Clickable regions tied to structured content',
      'Location-based paths for complex information',
      'Responsive SVG and CMS-friendly patterns',
    ],
    tags: ['Maps', 'CMS', 'Navigation'],
  },
  {
    category: 'Content Structure',
    title: 'Cleaner page hierarchy',
    image: memberPathwaysImage,
    alt: 'Organized website page layout with structured content sections',
    annotations: [
      'Clearer content hierarchy and CTA placement',
      'Reusable section rhythm across page types',
      'Member-focused paths through dense information',
    ],
    tags: ['UX', 'Structure', 'Webflow'],
  },
  {
    category: 'Operational CMS',
    title: 'Dispatch-style content system',
    image: cmsWorkflowsImage,
    alt: 'CMS-driven dispatch interface with grouped cards and operational content',
    annotations: [
      'Grouped listings for recurring operational updates',
      'CMS fields planned around real publishing needs',
      'Scannable card structure for frequent use',
    ],
    tags: ['CMS', 'Workflow', 'Filtering'],
  },
  {
    category: 'Resource Systems',
    title: 'Searchable content library',
    image: resourceSystemsImage,
    alt: 'Resource library interface with searchable and categorized content',
    annotations: [
      'Search and taxonomy patterns for large libraries',
      'Card structure supports varied resource types',
      'Maintainable categories for future content growth',
    ],
    tags: ['Search', 'Taxonomy', 'Resources'],
  },
  {
    category: 'Review Systems',
    title: 'Structured QA workflow',
    image: reviewWorkflowImage,
    alt: 'Review workflow dashboard with QA checklist and status columns',
    annotations: [
      'Role-based review stages and ownership',
      'Structured QA checklist for launch validation',
      'Status visibility for feedback and approvals',
    ],
    tags: ['QA', 'Reviews', 'Launch'],
  },
  {
    category: 'Frontend Standards',
    title: 'Reusable component patterns',
    image: relumeComponentsImage,
    alt: 'Component library mockup showing reusable interface sections',
    annotations: [
      'Expanded standards for repeatable implementation',
      'Reusable sections reduce rebuild time',
      'Shared conventions support cleaner handoff',
    ],
    tags: ['Relume', 'Client-First', 'Components'],
  },
]

export default function SystemsShowcase() {
  const viewportRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const goToSlide = (index) => {
    const viewport = viewportRef.current
    const nextIndex = Math.min(Math.max(index, 0), implementationSlides.length - 1)
    const targetSlide = viewport?.querySelectorAll('.implementation-gallery__slide')[
      nextIndex
    ]

    setActiveSlide(nextIndex)
    targetSlide?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }

  const handleScroll = () => {
    const viewport = viewportRef.current

    if (!viewport) {
      return
    }

    const slides = [...viewport.querySelectorAll('.implementation-gallery__slide')]
    const nearestSlide = slides.reduce(
      (nearest, slide, index) => {
        const distance = Math.abs(slide.offsetLeft - viewport.scrollLeft)

        return distance < nearest.distance ? { distance, index } : nearest
      },
      { distance: Number.POSITIVE_INFINITY, index: 0 },
    )

    setActiveSlide(nearestSlide.index)
  }

  return (
    <div className="implementation-gallery">
      <div
        className="implementation-gallery__viewport"
        ref={viewportRef}
        onScroll={handleScroll}
      >
        <div className="implementation-gallery__track">
          {implementationSlides.map((slide) => (
            <article className="implementation-gallery__slide" key={slide.title}>
              <div className="implementation-gallery__media">
                <img
                  className="implementation-gallery__image"
                  src={slide.image}
                  alt={slide.alt}
                />
              </div>

              <div className="implementation-gallery__content">
                <p className="implementation-gallery__eyebrow">{slide.category}</p>
                <h3 className="implementation-gallery__title">{slide.title}</h3>
                <ul className="implementation-gallery__annotations">
                  {slide.annotations.map((annotation) => (
                    <li
                      className="implementation-gallery__annotation"
                      key={annotation}
                    >
                      {annotation}
                    </li>
                  ))}
                </ul>
                <ul
                  className="implementation-gallery__tags"
                  aria-label={`${slide.title} focus areas`}
                >
                  {slide.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        className="implementation-gallery__controls"
        aria-label="Implementation gallery controls"
      >
        <button
          aria-label="Show previous implementation example"
          disabled={activeSlide === 0}
          type="button"
          onClick={() => goToSlide(activeSlide - 1)}
        >
          <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.8} />
        </button>
        <button
          aria-label="Show next implementation example"
          disabled={activeSlide === implementationSlides.length - 1}
          type="button"
          onClick={() => goToSlide(activeSlide + 1)}
        >
          <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
        </button>
      </div>
    </div>
  )
}
