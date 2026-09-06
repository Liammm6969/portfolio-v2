type FootprintStep = 'intro' | 'compare'

type FootprintPromptProps = {
  step: FootprintStep
  onExplore: () => void
  onAllow: () => void
  onContinueWithoutLocation: () => void
  onClose: () => void
}

function DigitalFootprintPrompt({
  step,
  onExplore,
  onAllow,
  onContinueWithoutLocation,
  onClose,
}: FootprintPromptProps) {
  return (
    <div className="footprint-overlay" role="presentation">
      <div className="footprint-prompt" role="dialog" aria-modal="true" aria-labelledby="footprint-title">
        <button className="footprint-close" onClick={onClose} aria-label="Close footprint prompt">
          ×
        </button>

        <div className="footprint-icon" aria-hidden="true">
          {step === 'intro' ? '◉' : '⌖'}
        </div>
        <span className="footprint-eyebrow">DIGITAL FOOTPRINT</span>

        {step === 'intro' ? (
          <>
            <h2 id="footprint-title">Curious what websites can see about you?</h2>
            <p>
              Your device and network automatically expose certain information. Explore what is visible,
              and what requires your permission.
            </p>
            <div className="footprint-actions">
              <button className="footprint-primary" onClick={onExplore}>
                Explore my digital footprint <span aria-hidden="true">→</span>
              </button>
              <button className="footprint-secondary" onClick={onClose}>Maybe later</button>
            </div>
            <small>No precise location is requested at this step.</small>
          </>
        ) : (
          <>
            <h2 id="footprint-title">Compare with your device location</h2>
            <p>
              Your browser can compare your network-based estimate with your device location. It will ask
              for permission before sharing anything precise.
            </p>
            <div className="footprint-actions">
              <button className="footprint-primary" onClick={onAllow}>
                Allow comparison <span aria-hidden="true">→</span>
              </button>
              <button className="footprint-secondary" onClick={onContinueWithoutLocation}>
                Continue without location
              </button>
            </div>
            <small>Your precise coordinates stay in this browser session.</small>
          </>
        )}
      </div>
    </div>
  )
}

export default DigitalFootprintPrompt