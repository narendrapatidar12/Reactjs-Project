

// import React, { useState } from 'react'

// const Butttons = () => {
//     const [cname, setName] = useState("kanhaiya");
//     const btn = () => {

//         if(cname === "kanhaiya"){
//             setName("narendra")
//         } else {
//             setName("kanhaiya")
//         }
//     }

//   return (
//     <>
//       <h1>{cname}</h1>
//       <button onClick={btn}> Click Me</button>
//     </>
//   )
// }

// export default Butttons



// -----BUTTON COUNT Number-----

import React, { useState } from 'react'

const Butttons = () => {
    let count = 0
    const [cname, setName] = useState(count);
    const btn = () => {
        setName(cname + 1)
    }
    const btns = () => {
        setName(cname - 1)
    }

  return (
    <>
      <h1>{cname}</h1>
      <button onClick={btn}> Click Me</button>
      <button onClick={btns}> Back </button>
    </>
  )
}

export default Butttons