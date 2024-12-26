import React from 'react'

const SizeSelection = ({selectedSize, setSelectedSize}) => {
  const sizes = ['42mm', '46mm']

  return (
    <div className="size-selection">
      <h3>Select Size</h3>
      <div className="size-options">
        {sizes.map(size => (
          <button
            key={size}
            className={selectedSize === size ? 'active' : ''}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SizeSelection
