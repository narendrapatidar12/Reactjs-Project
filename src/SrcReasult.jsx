import React from 'react'

const SrcReasult = (props) => {
    const img = `https://api.unsplash.com/search/photos?query${props.name}`
  return (
    <>
      <div>
        <img src={img} alt='search'/>
      </div>
    </>
  )
}

export default SrcReasult
