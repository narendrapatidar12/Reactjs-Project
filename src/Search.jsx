import React, { useState } from 'react'
import SrcReasult from './SrcReasult';

const Search = () => {
    const [img, setImg] = useState("");
    const inputEvent = (event) =>{
        const data = event.target.value;
        console.log(data)
        setImg(data)
    }
  return (
    <>
     <div className='searchbar'>
        <input type="text" placeholder='Search Anything' value={img} onChange={inputEvent} />
        {img === "" ? null : <SrcReasult name={img} />} 
     </div>
    </>
 
  )
}

export default Search
