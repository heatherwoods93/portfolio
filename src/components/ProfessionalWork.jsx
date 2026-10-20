// Temporarily withheld from Home and the production bundle.
// Restoration instructions: docs/content-visibility.md.
import SystemsShowcase from './SystemsShowcase'
import WebsiteExamplesSlider from './WebsiteExamplesSlider'
import ibewImage from '../assets/examples/ibew11-about.jpg'
import ikonImage from '../assets/examples/ikon-collection.jpg'
import napoImage from '../assets/examples/napo-hero.jpg'
import nassauImage from '../assets/examples/nassau-hero.jpg'
import socalImage from '../assets/examples/socal-hero-cropped.jpg'
import yumaImage from '../assets/examples/yuma-hero1.jpg'

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

export default function ProfessionalWork() {
  return (
    <>
      <section
        className="section website-examples"
        id="work"
        aria-labelledby="website-examples-title"
      >
        <div className="section__inner">
          <WebsiteExamplesSlider
            examples={websiteExamples}
            header={
              <div className="website-examples__header-copy">
                <p className="section__eyebrow">Selected Website Examples</p>
                <h2 className="section__title" id="website-examples-title">
                  Visual implementation across real website builds
                </h2>
                <p className="section__description">
                  A small collection of website examples showing responsive layouts, visual polish, content clarity, and maintainable Webflow implementation.
                </p>
              </div>
            }
          />
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
    </>
  )
}
