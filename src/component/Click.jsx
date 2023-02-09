

// -----HOOKS-----


// import React, { useState } from "react";

// const Click = () => {
//     const [count, setCount] = useState(0);
  
//     const IncNum = () => {
//     setCount(count + 1);
//     }
//     return(
//         <>
//             <h1> {count}</h1>
//             <button onClick={IncNum}> Click Me</button>
//         </>
//     );
// };
// export default Click;


// -----HOOKS CHALLENGE-----


// import React, { useState } from 'react'

// const Click = () => {

//     let newTime = new Date().toLocaleTimeString();
//     const [ctime, setCtime] = useState(newTime);

//     const UpdateTime = () => {
//         newTime = new Date().toLocaleTimeString();
//         setCtime(newTime)
//     }

//   return (
//     <>
//       <h1> {ctime} </h1>
//       <button onClick={UpdateTime}> GET TIME</button>
//     </>
//   )
// }

// export default Click;




// -----Create Digital Clock------

// import React, { useState } from 'react'

// const Click = () => {

//     let Time = new Date().toLocaleTimeString();
//     const [ctime, setCtime] = useState(Time);

//     const UpdateTime = () => {
//         Time = new Date().toLocaleTimeString();
//         setCtime(Time)
//     }
//     setInterval(UpdateTime, 1000);

//   return (
//     <>
//       <h1> {ctime} </h1>
//     </>
//   )
// }

// export default Click;




// ------BUTTON CLICKS-----

import React, { useState } from 'react'

const Click = () => {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("Click Me");

    const bgChange = () => {
        let newBg = "#34495e";
        setBg(newBg);
        setName("Ouch!! 😲")
    };

    const bgBack = () => {
        setBg(purple)
        setName("Ayyo!! 😠")
    }

  return (
    <>
    <div style={ { backgroundColor: bg} }>
        <button onMouseEnter={bgChange} onMouseLeave={bgBack}> {name} </button>
    </div>
      
    </>
  )
}
export default Click;
