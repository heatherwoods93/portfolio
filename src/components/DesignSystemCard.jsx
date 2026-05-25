export function DesignSystemCard() {
  return (
    <div className="system-card design-system-card">
      <div className="system-card__main">
        <p className="text-tagline">Design System</p>

        <div className="design-system-card__grid">
          <div className="system-card__section">
            <h3 className="text-label">Colors</h3>

            <div className="design-system-card__colors">
              <span className="swatch swatch--green" />
              <span className="swatch swatch--dark" />
              <span className="swatch swatch--taupe" />
              <span className="swatch swatch--light" />
              <span className="swatch swatch--white" />
            </div>
          </div>

          <div className="system-card__section">
            <h3 className="text-label">Typography</h3>

            <div className="design-system-card__type">
              Ag
            </div>
          </div>

          <div className="system-card__section">
            <h3 className="text-label">Components</h3>

            <div className="design-system-card__components">
              <div className="component-preview component-preview--primary" />
              <div className="component-preview" />
              <div className="component-preview component-preview--icon">
                <span />
              </div>
            </div>
          </div>

          <div className="system-card__section">
            <h3 className="text-label">Spacing</h3>

            <div className="design-system-card__spacing">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
