import React from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom';


// const User = ({match}) => {
 
//   return (
//     <div>
//       <h1> Hello, i am {match.params.fname} this is my user page</h1>
//     </div>
//   )
// }

const User = () => {
  const {fname, lname} = useParams(); 
  const location = useLocation();
  const history = useHistory();
  console.log(history)
return (
  < >
    <h1> Hello, i am {fname} {lname} this is my user page</h1>
    <p>
      my cuurrently loction is {location.pathname}
    </p>
    {location.pathname === `/user/Narendra/patidar` ? (
    <button onClick={() => history.push('/')}> Home page</button> 
    ): null
    }
  </>
)
}
export default User;
