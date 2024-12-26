import React from 'react'

const BandSelection = ({selectedBand, setSelectedBand}) => {
  const bands = ['Sport Band', 'Leather', 'Milanese Loop']

  return (
    <div className="band-selection">
      <h3>Select Band</h3>
      <div className="band-options">
        {bands.map(band => (
          <button
            key={band}
            className={selectedBand === band ? 'active' : ''}
            onClick={() => setSelectedBand(band)}
          >
            {band}
          </button>
        ))}
      </div>
    </div>
  )
}

export default BandSelection
