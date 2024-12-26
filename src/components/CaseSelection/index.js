import React from 'react'

const CaseSelection = ({selectedCase, setSelectedCase}) => {
  const cases = ['Aluminum', 'Titanium']

  return (
    <div className="case-selection">
      <h3>Select Case</h3>
      <div className="case-options">
        {cases.map(caseType => (
          <button
            key={caseType}
            className={selectedCase === caseType ? 'active' : ''}
            onClick={() => setSelectedCase(caseType)}
          >
            {caseType}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CaseSelection
