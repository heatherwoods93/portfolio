import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function WebsiteExamplesSlider({ examples }) {
  const viewportRef = useRef(null)
  const dragPointerId = useRef(null)
  const dragStartX = useRef(0)
  const dragStartScrollLeft = useRef(0)
  const dragLatestX = useRef(0)
  const dragFrame = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const getSlides = () => [
    ...(viewportRef.current?.querySelectorAll('.website-slider__slide') ?? []),
  ]

  const goToSlide = (index) => {
    const viewport = viewportRef.current
    const slides = getSlides()
    const nextIndex = Math.min(Math.max(index, 0), examples.length - 1)
    const targetSlide = slides[nextIndex]
    const startOffset = slides[0]?.offsetLeft ?? 0

    setActiveSlide(nextIndex)
    viewport?.scrollTo({
      left: targetSlide ? targetSlide.offsetLeft - startOffset : 0,
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    const viewport = viewportRef.current

    if (!viewport || isDragging) {
      return
    }

    const slides = getSlides()
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

  const handleDragStart = (event) => {
    if (event.pointerType === 'touch') {
      return
    }

    const viewport = viewportRef.current

    if (!viewport || (event.button !== undefined && event.button !== 0)) {
      return
    }

    dragPointerId.current = event.pointerId
    dragStartX.current = event.clientX
    dragLatestX.current = event.clientX
    dragStartScrollLeft.current = viewport.scrollLeft
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
      const dragDistance = dragLatestX.current - dragStartX.current

      viewport.scrollLeft = dragStartScrollLeft.current - dragDistance
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

    dragPointerId.current = null

    if (dragFrame.current !== null) {
      window.cancelAnimationFrame(dragFrame.current)
      dragFrame.current = null
    }

    if (!viewport) {
      setIsDragging(false)
      return
    }

    const slides = getSlides()
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

    setActiveSlide(nearestSlide.index)
    viewport.scrollTo({ left: nearestSlide.left, behavior: 'smooth' })
    setIsDragging(false)
  }

  return (
    <div className="website-slider">
      <div className="website-slider__controls" aria-label="Website example controls">
        <button
          aria-label="Show previous website example"
          disabled={activeSlide === 0}
          type="button"
          onClick={() => goToSlide(activeSlide - 1)}
        >
          <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.8} />
        </button>
        <button
          aria-label="Show next website example"
          disabled={activeSlide === examples.length - 1}
          type="button"
          onClick={() => goToSlide(activeSlide + 1)}
        >
          <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
        </button>
      </div>

      <div
        className={`website-slider__viewport ${isDragging ? 'is-dragging' : ''}`}
        ref={viewportRef}
        onScroll={handleScroll}
        onPointerCancel={handleDragEnd}
        onPointerDown={handleDragStart}
        onPointerMove={handleDragMove}
        onPointerUp={handleDragEnd}
      >
        <div className="website-slider__track">
          {examples.map(({ title, category, description, image, alt, url }) => (
            <article className="website-example-card website-slider__slide" key={title}>
              <div className="website-example-card__media">
                <img className="website-example-card__image" src={image} alt={alt} />
              </div>

              <div className="website-example-card__content">
                <div className="website-example-card__heading">
                  <h3 className="website-example-card__title">{title}</h3>
                  <p className="website-example-card__category">{category}</p>
                </div>
                <p className="website-example-card__description">{description}</p>
                <a
                  className="website-example-card__link"
                  href={url}
                  aria-label={`View website for ${title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View website
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
