const principles = [
  'Clarity over complexity',
  'Maintainable by default',
  'Structured content matters',
  'Accessibility is part of quality',
  'Calm systems, useful interfaces',
]

const tokens = [
  { name: 'Background', value: 'var(--color-background)', className: 'token-card--background' },
  { name: 'Surface', value: 'var(--color-surface)', className: 'token-card--surface' },
  {
    name: 'Surface Muted',
    value: 'var(--color-surface-muted)',
    className: 'token-card--surface-muted',
  },
  { name: 'Text', value: 'var(--color-text)', className: 'token-card--text' },
  {
    name: 'Muted Text',
    value: 'var(--color-text-muted)',
    className: 'token-card--text-muted',
  },
  { name: 'Dark', value: 'var(--color-dark)', className: 'token-card--dark' },
  { name: 'Accent', value: 'var(--color-accent)', className: 'token-card--accent' },
  {
    name: 'Accent Soft',
    value: 'var(--color-accent-soft)',
    className: 'token-card--accent-soft',
  },
  { name: 'Border', value: 'var(--color-border)', className: 'token-card--border' },
]

const tags = [
  'Webflow Development',
  'CMS Architecture',
  'QA Systems',
  'Design Systems',
  'Documentation',
  'Team Process',
]

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section__heading">
      <p className="section__eyebrow">{eyebrow}</p>
      <h2 className="section__title">{title}</h2>
      {children ? <p className="section__description">{children}</p> : null}
    </div>
  )
}

function StyleGuide() {
  return (
    <main className="page style-guide">
      <header className="site-header">
        <div className="site-header__inner">
          <a className="site-header__brand" href="/">
            Heather Portfolio
          </a>
          <nav className="site-header__nav" aria-label="Style guide navigation">
            <a href="#principles">Principles</a>
            <a href="#type">Typography</a>
            <a href="#tokens">Tokens</a>
            <a href="#patterns">Patterns</a>
          </nav>
        </div>
      </header>

      <section className="section style-guide__intro" aria-labelledby="style-guide-title">
        <div className="section__inner">
          <div className="section__heading">
            <p className="section__eyebrow">Working Reference</p>
            <h1 className="section__title" id="style-guide-title">
              Portfolio Style Guide
            </h1>
            <p className="section__description">
              A working reference for the portfolio's typography, color, layout,
              and component patterns while the full site takes shape.
            </p>
          </div>
        </div>
      </section>

      <section className="section style-guide__section" id="principles">
        <div className="section__inner">
          <SectionHeading eyebrow="Principles" title="How the system should feel">
            Short rules for keeping the portfolio grounded, readable, and useful.
          </SectionHeading>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle}>
                <h3>{principle}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section style-guide__section" id="type">
        <div className="section__inner">
          <SectionHeading eyebrow="Typography" title="Editorial, calm, readable">
            Type should support structured content and careful scanning.
          </SectionHeading>
          <div className="type-sample-list">
            <article className="type-sample">
              <p className="section__eyebrow">Eyebrow Text</p>
              <p>Small orientation labels for sections, cards, and content groups.</p>
            </article>
            <article className="type-sample">
              <h1>Display heading for major portfolio moments</h1>
            </article>
            <article className="type-sample">
              <h2>Section heading for clear content areas</h2>
            </article>
            <article className="type-sample">
              <h3>Card heading for projects and notes</h3>
            </article>
            <article className="type-sample">
              <p>
                Body text should feel measured and precise, with enough line height
                for case study explanations, documentation notes, and process context.
              </p>
            </article>
            <article className="type-sample">
              <p className="type-sample__muted">
                Muted text supports secondary details without lowering clarity.
              </p>
            </article>
            <article className="type-sample">
              <p>
                Inline links should feel quiet but discoverable, like{' '}
                <a href="#patterns">this reference link</a>.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section style-guide__section" id="tokens">
        <div className="section__inner">
          <SectionHeading eyebrow="Color Tokens" title="Warm, grounded palette">
            Tokens should be used before introducing any new color.
          </SectionHeading>
          <div className="token-grid">
            {tokens.map((token) => (
              <article className={`token-card ${token.className}`} key={token.name}>
                <span className="token-card__swatch" aria-hidden="true" />
                <div>
                  <h3>{token.name}</h3>
                  <p>{token.value}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section style-guide__section" id="buttons">
        <div className="section__inner">
          <SectionHeading eyebrow="Buttons & Links" title="Clear action patterns">
            Buttons are reserved for intentional commands and primary navigation.
          </SectionHeading>
          <div className="pattern-card">
            <div className="button-row" aria-label="Button and link examples">
              <a className="button button--primary" href="#cards">
                Primary Button
              </a>
              <a className="button button--secondary" href="#cards">
                Secondary Button
              </a>
              <a className="link-arrow" href="#content-patterns">
                Arrow text link
              </a>
            </div>
          </div>
          <div className="section section--dark style-guide__nested-section">
            <div className="section__inner">
              <div className="button-row" aria-label="Light button example">
                <a className="button button--light" href="#tokens">
                  Light Button
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section style-guide__section" id="cards">
        <div className="section__inner">
          <SectionHeading eyebrow="Cards" title="Reusable content containers">
            Cards hold previews, process snapshots, and supporting proof points.
          </SectionHeading>
          <div className="card-grid">
            <article className="card">
              <div className="card__content">
                <p className="card__eyebrow">Default</p>
                <h3 className="card__title">Standard card</h3>
                <p className="card__text">
                  A flexible surface for concise reference content.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="card__media" aria-hidden="true" />
              <div className="card__content">
                <p className="card__eyebrow">Case Study</p>
                <h3 className="card__title">CMS architecture cleanup</h3>
                <p className="card__text">
                  A project preview can pair visual context with structured results.
                </p>
              </div>
            </article>
            <article className="card pattern-card">
              <div className="card__content">
                <p className="card__eyebrow">Process</p>
                <h3 className="card__title">QA workflow system</h3>
                <p className="card__text">
                  Process cards can explain how repeatable systems improved team
                  delivery.
                </p>
              </div>
            </article>
            <article className="card card--dark">
            <div className="card__content">
              <p className="card__eyebrow">Dark Variant</p>
              <h3 className="card__title">Contrast card for emphasis</h3>
              <p className="card__text">
                Use sparingly for callouts, proof points, or high-contrast summaries.
              </p>
            </div>
          </article>
          </div>
        </div>
      </section>

      <section className="section style-guide__section" id="tags">
        <div className="section__inner">
          <SectionHeading eyebrow="Tags" title="Concise metadata">
            Tags should clarify skills, systems, platforms, and collaboration areas.
          </SectionHeading>
          <ul className="tag-list" aria-label="Portfolio capability tags">
            {tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section style-guide__section" id="patterns">
        <div className="section__inner">
          <SectionHeading eyebrow="Section Patterns" title="Reliable page structures">
            Compose future portfolio sections from these structural patterns.
          </SectionHeading>

          <div className="pattern-stack">
            <article className="pattern-card">
              <p className="section__eyebrow">Standard Section</p>
              <h3>Simple section heading with supporting copy</h3>
              <p>
                Best for introductions, proof points, and short explanatory areas.
              </p>
            </article>

            <article className="pattern-card pattern-card--dark">
              <p className="section__eyebrow">Dark Section</p>
              <h3>High-contrast editorial break</h3>
              <p>
                Useful for a hero, closing statement, or systems-minded positioning.
              </p>
            </article>

            <article className="pattern-card">
              <div className="content-grid">
                <div>
                  <p className="section__eyebrow">Two Column</p>
                  <h3>Content plus proof</h3>
                </div>
                <p>
                  Pair a concise story with a process note, result, screenshot, or
                  implementation detail.
                </p>
              </div>
            </article>

            <div className="pattern-group">
              <p className="section__eyebrow">Card Grid</p>
              <div className="card-grid">
                <div className="card">
                  <div className="card__content">
                    <h3 className="card__title">Build</h3>
                    <p className="card__text">Webflow implementation systems.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card__content">
                    <h3 className="card__title">Document</h3>
                    <p className="card__text">Readable handoff and team guidance.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card__content">
                    <h3 className="card__title">Improve</h3>
                    <p className="card__text">QA and process improvements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark style-guide__section" id="content-patterns">
        <div className="section__inner">
          <SectionHeading eyebrow="Content Patterns" title="Portfolio-ready examples">
            Reusable content structures for Heather's positioning and case studies.
          </SectionHeading>
          <div className="card-grid">
            <article className="card">
              <div className="card__content">
                <p className="card__eyebrow">Case Study Preview</p>
                <h3 className="card__title">Webflow CMS rebuild</h3>
                <p className="card__text">
                  Planned a clearer CMS model, rebuilt reusable templates, and
                  documented editor workflows for long-term maintainability.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="card__content">
                <p className="card__eyebrow">Problem / Approach / Outcome</p>
                <h3 className="card__title">QA workflow systems</h3>
                <p className="card__text">
                  Turn scattered review steps into a shared checklist, ownership
                  model, and release rhythm that teams can repeat.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="card__content">
                <p className="card__eyebrow">System Callout</p>
                <h3 className="card__title">Design system documentation</h3>
                <p className="card__text">
                  Capture naming rules, component intent, and implementation notes so
                  future updates stay consistent.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="card__content">
                <p className="card__eyebrow">Process Note</p>
                <h3 className="card__title">Team process improvements</h3>
                <p className="card__text">
                  Make the invisible work visible: decisions, handoff details, QA
                  findings, and documentation that reduce rework.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default StyleGuide
