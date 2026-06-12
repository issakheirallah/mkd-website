import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from 'react-compare-slider'

/**
 * Branded drag-to-reveal before/after image comparison.
 * Pass in `before` + `after` image URLs (imports or paths to /public assets).
 */
export default function BeforeAfter({
  before,
  after,
  beforeAlt = 'Before',
  afterAlt = 'After',
  beforeObjectPosition = 'center center',
  afterObjectPosition = 'center center',
}) {
  return (
    <div className="mk-beforeafter">
      <ReactCompareSlider
        position={50}
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(255, 255, 255, 0.96)',
              color: '#1d3557',
              border: 'none',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
              width: 52,
              height: 52,
            }}
            linesStyle={{ background: 'rgba(255, 255, 255, 0.85)', width: 3 }}
          />
        }
        itemOne={
          <div className="mk-beforeafter__pane">
            <ReactCompareSliderImage src={before} alt={beforeAlt} style={{ objectPosition: beforeObjectPosition }} />
            <span className="mk-beforeafter__label mk-beforeafter__label--left">Before</span>
          </div>
        }
        itemTwo={
          <div className="mk-beforeafter__pane">
            <ReactCompareSliderImage src={after} alt={afterAlt} style={{ objectPosition: afterObjectPosition }} />
            <span className="mk-beforeafter__label mk-beforeafter__label--right">After</span>
          </div>
        }
      />
    </div>
  )
}
