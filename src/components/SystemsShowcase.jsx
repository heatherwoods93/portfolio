import reviewWorkflowImage from '../assets/showcase/reviews-snapshot.png'
import relumeComponentsImage from '../assets/showcase/components-library.jpg'
import cmsWorkflowsImage from '../assets/showcase/dispatch-screenshot.jpg'
import interactiveNavigationImage from '../assets/showcase/legislation-map.jpg'
import memberPathwaysImage from '../assets/showcase/organize.jpg'
import resourceSystemsImage from '../assets/showcase/contractors.jpg'
import documentationSystemsImage from '../assets/showcase/client-first.jpg'

const systemsShowcases = [
  {
    title: 'Content & Navigation Systems',
    description:
      'Structured navigation patterns that help users move through complex information more confidently, from location-based maps to searchable CMS-driven directories.',
    bullets: [
      'Interactive maps connected to structured content',
      'Search and filtering patterns for large information sets',
      'Clearer pathways for members, contractors, and public audiences',
    ],
    images: [
      {
        src: interactiveNavigationImage,
        alt: 'Interactive map interface with location-based navigation panels',
      },
      {
        src: resourceSystemsImage,
        alt: 'Contractor database interface with search and filter options',
      },
      {
        src: memberPathwaysImage,
        alt: 'Organized website page layout with structured content sections',
      },
    ],
  },
  {
    title: 'CMS & Publishing Structures',
    description:
      'CMS architecture designed to make frequent updates easier to publish, maintain, and understand after handoff.',
    bullets: [
      'Editor-friendly fields and reusable layouts',
      'Flexible groupings for recurring updates',
      'Scalable content structures for long-term maintenance',
    ],
    images: [
      {
        src: cmsWorkflowsImage,
        alt: 'CMS-driven dispatch interface with grouped cards and operational content',
      },
      {
        src: memberPathwaysImage,
        alt: 'Structured content page showing clear grouped sections',
      },
      {
        src: resourceSystemsImage,
        alt: 'CMS directory page with searchable structured content',
      },
    ],
  },
  {
    title: 'Review, Standards & Documentation',
    description:
      'Internal systems that improve consistency, reduce missed details, and help teams maintain clearer implementation standards.',
    bullets: [
      'Structured QA and launch review workflows',
      'Reusable components and implementation standards',
      'Documentation that supports onboarding and long-term maintenance',
    ],
    images: [
      {
        src: reviewWorkflowImage,
        alt: 'Review workflow dashboard with QA checklist and status columns',
      },
      {
        src: relumeComponentsImage,
        alt: 'Component library mockup showing reusable interface sections',
      },
      {
        src: documentationSystemsImage,
        alt: 'Documentation interface with centralized SOP and implementation guides',
      },
    ],
  },
]

export default function SystemsShowcase() {
  return (
    <>
      <div className="systems-practice__header">
        <p className="section__eyebrow">Systems in Practice</p>
        <h2 className="section__title" id="systems-practice-title">
          Behind the implementation
        </h2>
        <p className="section__description">
          A closer look at the content structures, review workflows, and reusable systems behind scalable website delivery.
        </p>
      </div>

      <div className="systems-practice__list">
        {systemsShowcases.map(({ title, description, bullets, images }, index) => (
          <article
            className={`systems-practice__item ${
              index % 2 === 1 ? 'is-reversed' : ''
            }`}
            key={title}
          >
            <div className="systems-practice__media">
              <img
                className="systems-practice__image"
                src={images[0].src}
                alt={images[0].alt}
              />
              <div className="systems-practice__thumbs" aria-label={`${title} supporting examples`}>
                {images.slice(1).map((image) => (
                  <img
                    className="systems-practice__thumb"
                    src={image.src}
                    alt={image.alt}
                    key={image.alt}
                  />
                ))}
              </div>
            </div>

            <div className="systems-practice__content">
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="systems-practice__bullets">
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
