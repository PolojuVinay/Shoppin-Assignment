import React, {useState} from 'react'
import WatchPreview from './components/WatchPreview'
import './App.css'

const App = () => {
  const [selectedSize, setSelectedSize] = useState('46mm')
  const [selectedCase, setSelectedCase] = useState('Aluminum')
  const [selectedBand, setSelectedBand] = useState('Solo Loop')

  const handleSizeChange = size => setSelectedSize(size)
  const handleCaseChange = caseType => setSelectedCase(caseType)
  const handleBandChange = band => setSelectedBand(band)

  return (
    <div className="App">
      <header className="App-header">
        <h1>WATCH</h1>
        <h2>Collections</h2>
      </header>
      <WatchPreview
        selectedSize={selectedSize}
        selectedCase={selectedCase}
        selectedBand={selectedBand}
        onSizeChange={handleSizeChange}
        onCaseChange={handleCaseChange}
        onBandChange={handleBandChange}
      />
    </div>
  )
}

export default App
