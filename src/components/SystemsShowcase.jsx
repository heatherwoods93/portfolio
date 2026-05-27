import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import reviewWorkflowImage from '../assets/showcase/reviews-snapshot.png'
import relumeComponentsImage from '../assets/showcase/components-library.png'
import cmsWorkflowsImage from '../assets/showcase/dispatch-screenshot.png'
import interactiveNavigationImage from '../assets/showcase/legislation-map.png'
import memberPathwaysImage from '../assets/showcase/organize.png'
import resourceSystemsImage from '../assets/showcase/contractors.png'
import documentationSystemsImage from '../assets/showcase/client-first.png'

const implementationSlides = [
  {
    category: 'Interactive Navigation',
    title: 'Built interactive map-based navigation for structured legislative content systems.',
    image: interactiveNavigationImage,
    alt: 'Interactive map interface with location-based navigation panels',
    annotations: [
  'Clickable regions tied to structured legislative content',
  'State-based navigation simplifies dense information access',
  'Responsive SVG patterns support scalable CMS integration',
],
    tags: ['Maps', 'SVG', 'CMS'],
  },
  {
    category: 'Structured Content Systems',
    title: 'Organized large contractor and resource directories into searchable, maintainable CMS-driven systems.',
    image: resourceSystemsImage,
    alt: 'Contractor database interface with search and filter options',
    annotations: [
  'Search and taxonomy patterns support large content libraries',
  'Flexible CMS structures allow scalable content organization',
  'Structured filtering improves navigation across dense resource systems',
],
    tags: ['Search', 'Taxonomy', 'CMS'],
  },
  {
    category: 'Information clarity & organization',
    title: 'Restructured dense member content into clearer, reusable page systems.',
    image: memberPathwaysImage,
    alt: 'Organized website page layout with structured content sections',
    annotations: [
  'Clearer hierarchy improves scanability across dense content',
  'Reusable section structures support consistency across pages',
  'Content organization reduces friction for member-focused information',
],
    tags: ['UX', 'Hierarchy', 'Content'],
  },
  {
    category: 'Dispatch Systems',
    title: 'Built structured dispatch systems for clearer operational visibility and maintainable updates.',
    image: cmsWorkflowsImage,
    alt: 'CMS-driven dispatch interface with grouped cards and operational content',
    annotations: [
  'Structured listings support recurring operational updates',
  'CMS fields planned around real publishing workflows',
  'Scannable layouts improve visibility across frequently updated content',
],
    tags: ['Dispatch', 'CMS Fields', 'Operations'],
  },
  {
    category: 'Review Systems',
    title: 'Built structured QA workflows with role-based review and launch validation.',
    image: reviewWorkflowImage,
    alt: 'Review workflow dashboard with QA checklist and status columns',
    annotations: [
  'Role-based review stages improve accountability and visibility',
  'Structured QA workflows support launch validation processes',
  'Shared status tracking simplifies feedback and approval coordination',
],
    tags: ['QA', 'Review Roles', 'Launch'],
  },
  {
    category: 'Frontend Standards',
    title: 'Built reusable Relume and Webflow component systems to support more consistent frontend builds.',
    image: relumeComponentsImage,
    alt: 'Component library mockup showing reusable interface sections',
    annotations: [
  'Reusable component systems support faster frontend implementation',
  'Shared standards improve consistency across builds',
  'Modular patterns simplify long-term maintenance and handoff',
],
    tags: ['Relume', 'Webflow', 'Components'],
  },
  {
    category: 'Documentation Systems',
    title: 'Built centralized SOP and implementation documentation to support onboarding, consistency, and long-term maintainability.',
    image: documentationSystemsImage,
    alt: 'Documentation interface with centralized SOP and implementation guides',
    annotations: [
  'Centralized SOPs reduce repeated support and onboarding friction',
  'Structured implementation guides improve team consistency',
  'Shared documentation supports scalable long-term maintenance',
],
    tags: ['SOPs', 'Docs', 'Handoff'],
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
                  aria-label={`${slide.category} focus areas`}
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
