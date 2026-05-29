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
    title:
  'Built interactive map navigation for location-based content.',
    image: interactiveNavigationImage,
    alt: 'Interactive map interface with location-based navigation panels',
    annotations: [
  'Responsive SVG interaction patterns across devices',
  'Interactive regions connected to dynamic CMS content',
  'Multiple navigation paths for state, region, and local discovery',
],
    tags: ['Maps', 'SVG', 'CMS'],
  },
  {
    category: 'Structured Content Systems',
    title:
  'Organized large CMS directories with scalable search and filtering.',
    image: resourceSystemsImage,
    alt: 'Contractor database interface with search and filter options',
    annotations: [
  'Keyword search across dynamic CMS collections',
  'Grouped browsing patterns for large information sets',
  'Directory layouts designed for recurring content updates',
],
    tags: ['Search', 'Taxonomy', 'CMS'],
  },
  {
    category: 'Information Clarity & Organization',
    title:
  'Created clearer structure and navigation from complex content.',
    image: memberPathwaysImage,
    alt: 'Organized website page layout with structured content sections',
    annotations: [
  'Clear visual separation between content sections',
  'Clear next steps aligned with user goals',
  'Dense informational content organized into clearer layouts',
],
    tags: ['Content Structure', 'Hierarchy', 'User Flow'],
  },
  {
    category: 'Dispatch Systems',
    title:
  'Built flexible CMS publishing systems designed around real client workflows.',
    image: cmsWorkflowsImage,
    alt: 'CMS-driven dispatch interface with grouped cards and operational content',
    annotations: [
  'CMS fields designed for simple client-side publishing',
  'Flexible structure adapted to different publishing workflows',
  'Scannable layouts for recurring content updates',
],
    tags: ['Dispatch', 'CMS Fields', 'Operations'],
  },
  {
    category: 'Review Systems',
    title:
  'Designed QA and review workflows for clearer feedback and smoother launches.',
    image: reviewWorkflowImage,
    alt: 'Review workflow dashboard with QA checklist and status columns',
   annotations: [
  'Shared review stages tied to specific QA responsibilities',
  'Launch checklists used across internal review workflows',
  'Structured feedback designed to improve review quality and collaboration',
],
    tags: ['QA', 'Review Roles', 'Launch'],
  },
  {
    category: 'Component Libraries',
    title:
  'Standardized shared frontend libraries and reusable patterns for consistent builds.',
    image: relumeComponentsImage,
    alt: 'Component library mockup showing reusable interface sections',
    annotations: [
  'Shared components reused across multiple site builds',
  'Consistent implementation patterns across projects',
  'Reusable sections designed for easier long-term updates',
],
    tags: ['Relume', 'Webflow', 'Components'],
  },
  {
    category: 'Documentation & SOPs',
    title:
  'Organized SOPs, documentation, and implementation guides for clearer team workflows.',
    image: documentationSystemsImage,
    alt: 'Documentation interface with centralized SOP and implementation guides',
    annotations: [
  'Implementation guides organized around real team workflows',
  'Shared documentation used for onboarding and handoff',
  'Clearer internal references for recurring project tasks',
],  
    tags: ['SOPs', 'Documentation', 'Handoff'],
  },
]

export default function SystemsShowcase() {
  const viewportRef = useRef(null)
  const dragPointerId = useRef(null)
  const dragStartX = useRef(0)
  const dragStartScrollLeft = useRef(0)
  const dragStartTime = useRef(0)
  const dragLatestX = useRef(0)
  const dragPointerType = useRef('mouse')
  const dragFrame = useRef(null)
  const settleTimeout = useRef(null)
  const settleFrame = useRef(null)
  const isSettling = useRef(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const goToSlide = (index) => {
    const viewport = viewportRef.current
    const nextIndex = Math.min(Math.max(index, 0), implementationSlides.length - 1)
    const slides = viewport?.querySelectorAll('.implementation-gallery__slide')
    const targetSlide = slides?.[nextIndex]
    const startOffset = slides?.[0]?.offsetLeft ?? 0

    setActiveSlide(nextIndex)
    viewport?.scrollTo({
      left: targetSlide ? targetSlide.offsetLeft - startOffset : 0,
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    const viewport = viewportRef.current

    if (!viewport || isDragging || isSettling.current) {
      return
    }

    const slides = [...viewport.querySelectorAll('.implementation-gallery__slide')]
    const startOffset = slides[0]?.offsetLeft ?? 0
    const nearestSlide = slides.reduce(
      (nearest, slide, index) => {
        const alignedOffset = slide.offsetLeft - startOffset
        const distance = Math.abs(alignedOffset - viewport.scrollLeft)

        return distance < nearest.distance ? { distance, index } : nearest
      },
      { distance: Number.POSITIVE_INFINITY, index: 0 },
    )

    setActiveSlide(nearestSlide.index)
  }

  const animateScrollTo = (targetLeft, onComplete) => {
    const viewport = viewportRef.current

    if (!viewport) {
      return
    }

    if (settleFrame.current !== null) {
      window.cancelAnimationFrame(settleFrame.current)
      settleFrame.current = null
    }

    const startLeft = viewport.scrollLeft
    const distance = targetLeft - startLeft
    const duration = 260
    const startTime = performance.now()

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      viewport.scrollLeft = startLeft + distance * easedProgress

      if (progress < 1) {
        settleFrame.current = window.requestAnimationFrame(step)
        return
      }

      settleFrame.current = null
      onComplete?.()
    }

    settleFrame.current = window.requestAnimationFrame(step)
  }

  const handleDragStart = (event) => {
    if (event.button !== undefined && event.button !== 0) {
      return
    }

    const viewport = viewportRef.current

    if (!viewport) {
      return
    }

    if (settleTimeout.current !== null) {
      window.clearTimeout(settleTimeout.current)
      settleTimeout.current = null
    }

    if (settleFrame.current !== null) {
      window.cancelAnimationFrame(settleFrame.current)
      settleFrame.current = null
    }

    isSettling.current = false
    dragPointerId.current = event.pointerId
    dragPointerType.current = event.pointerType
    dragStartX.current = event.clientX
    dragLatestX.current = event.clientX
    dragStartScrollLeft.current = viewport.scrollLeft
    dragStartTime.current = performance.now()
    event.currentTarget.classList.add('is-dragging')
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handleDragMove = (event) => {
    const viewport = viewportRef.current

    if (!viewport || dragPointerId.current !== event.pointerId) {
      return
    }

    dragLatestX.current = event.clientX

    if (dragFrame.current !== null) {
      return
    }

    dragFrame.current = window.requestAnimationFrame(() => {
      viewport.scrollLeft =
        dragStartScrollLeft.current - (dragLatestX.current - dragStartX.current)
      dragFrame.current = null
    })
  }

  const handleDragEnd = (event) => {
    const viewport = viewportRef.current

    if (dragPointerId.current !== event.pointerId) {
      return
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }

    event.currentTarget.classList.remove('is-dragging')
    dragPointerId.current = null
    if (dragFrame.current !== null) {
      window.cancelAnimationFrame(dragFrame.current)
      dragFrame.current = null
    }

    if (!viewport) {
      setIsDragging(false)
      return
    }

    const slides = [...viewport.querySelectorAll('.implementation-gallery__slide')]
    const startOffset = slides[0]?.offsetLeft ?? 0
    const nearestSlide = slides.reduce(
      (nearest, slide, index) => {
        const alignedOffset = slide.offsetLeft - startOffset
        const distance = Math.abs(alignedOffset - viewport.scrollLeft)

        return distance < nearest.distance
          ? { distance, index, left: alignedOffset }
          : nearest
      },
      {
        distance: Number.POSITIVE_INFINITY,
        index: activeSlide,
        left: viewport.scrollLeft,
      },
    )
    const slideWidth = slides[0]?.offsetWidth ?? 0
    const dragDistance = dragLatestX.current - dragStartX.current
    const dragDuration = Math.max(performance.now() - dragStartTime.current, 1)
    const dragVelocity = Math.abs(dragDistance) / dragDuration
    const isTouchDrag = dragPointerType.current === 'touch'
    const flickDistance = isTouchDrag ? 22 : slideWidth * 0.18
    const dragThreshold = isTouchDrag ? slideWidth * 0.12 : slideWidth * 0.28
    const isFlick =
      Math.abs(dragDistance) >= flickDistance && dragVelocity >= 0.32
    const shouldAdvance =
      isTouchDrag && (Math.abs(dragDistance) >= dragThreshold || isFlick)
    const direction = dragDistance < 0 ? 1 : -1
    const targetIndex =
      event.type === 'pointercancel' || !shouldAdvance
        ? nearestSlide.index
        : Math.min(
            Math.max(activeSlide + direction, 0),
            implementationSlides.length - 1,
          )
    const targetSlide = slides[targetIndex]
    const targetLeft = targetSlide
      ? targetSlide.offsetLeft - startOffset
      : nearestSlide.left

    isSettling.current = true
    animateScrollTo(targetLeft, () => {
      setActiveSlide(targetIndex)
      setIsDragging(false)
      isSettling.current = false
    })

    settleTimeout.current = window.setTimeout(() => {
      setActiveSlide(targetIndex)
      setIsDragging(false)
      isSettling.current = false
      settleTimeout.current = null
    }, 320)
  }

  const controls = (
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
  )

  return (
    <>
      <div className="featured-work__header">
        <div className="featured-work__header-copy">
          <p className="section__eyebrow">Case Studies</p>
          <h2 className="section__title" id="featured-work-title">
            Recent Work
          </h2>
          <p className="section__description">
A closer look at the implementation details, content structures, and workflow improvements behind each project.          </p>
        </div>
        <div className="featured-work__controls">{controls}</div>
      </div>

      <div className="implementation-gallery">
        <div
          className={`implementation-gallery__viewport ${
            isDragging ? 'is-dragging' : ''
          }`}
          ref={viewportRef}
          onScroll={handleScroll}
          onPointerCancel={handleDragEnd}
          onPointerDown={handleDragStart}
          onPointerMove={handleDragMove}
          onPointerUp={handleDragEnd}
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
      </div>
    </>
  )
}
