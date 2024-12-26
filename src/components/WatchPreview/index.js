import React from 'react'
import './index.css'

const WatchPreview = ({
  selectedSize,
  selectedCase,
  selectedBand,
  onSizeChange,
  onCaseChange,
  onBandChange,
}) => {
  const sizes = ['42mm', '46mm']
  const cases = ['Aluminum', 'Titanium']
  const bands = [
    'Solo Loop',
    'Sport Band',
    'Braided Solo Loop',
    'Nike Sport Band',
  ]

  const baseUrl =
    'https://img.notionusercontent.com/s3/prod-files-secure/944684a5-7ddb-4adf-8e5b-3e5a5229b4ff/'

  const getImageSrc = () => {
    const imageMap = {
      '42mm-Aluminum-SoloLoop':
        'e12e6104-4430-47c4-9e68-d36240c2348b/image.png',
      '46mm-Titanium-NikeSportBand':
        '311aeed6-4d84-4310-97ca-f1bba5a00569/image.png',
      // Add more mappings here
    }

    const formattedBand = selectedBand.replace(/ /g, '') // Remove spaces
    const key = `${selectedSize}-${selectedCase}-${formattedBand}`
    return imageMap[key]
      ? `${baseUrl}${imageMap[key]}`
      : `${baseUrl}fallback.png`
  }

  return (
    <div className="watch-preview">
      <div className="watch-image">
        <img
          src={getImageSrc()}
          alt="Watch Preview"
          onError={e => {
            e.target.src = `${baseUrl}fallback.png`
          }}
        />
      </div>
      <div className="watch-details">
        <p>
          <strong>APPLE WATCH SERIES 10</strong>
        </p>
        <p>
          {selectedSize} {selectedCase} Case with {selectedBand}
        </p>
        <p>From $429</p>
      </div>
      <div className="watch-options">
        <div className="option-group">
          <p>Size</p>
          {sizes.map(size => (
            <button
              key={size}
              className={selectedSize === size ? 'active' : ''}
              onClick={() => onSizeChange(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="option-group">
          <p>Case</p>
          {cases.map(caseType => (
            <button
              key={caseType}
              className={selectedCase === caseType ? 'active' : ''}
              onClick={() => onCaseChange(caseType)}
            >
              {caseType}
            </button>
          ))}
        </div>
        <div className="option-group">
          <p>Band</p>
          {bands.map(band => (
            <button
              key={band}
              className={selectedBand === band ? 'active' : ''}
              onClick={() => onBandChange(band)}
            >
              {band}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WatchPreview
