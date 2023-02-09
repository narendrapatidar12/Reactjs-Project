import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css';
import './SortProject/Proj.css'


// import HooksEff from './HooksEffect/HooksEff';
// import ConA from './context/ConA';
// import Mykeep from './component/Project/Mykeep';


// import "./component/Apps.css"
// import Apps from './component/Apps';
// import './component/Click.css'

// import Clicks from './component/Click';
// import Butttons from './component/Butttons';

// import Forms from './component/Forms';
// import './component/Forms.css'

// import Todolist from './component/Todolist';
// import './component/Todolist.css'

ReactDOM.render(
    <>         
        <BrowserRouter>
            <App/>
      </BrowserRouter>                           
        {/* <Apps/> */}
        {/* <Clicks/> */}
        {/* <Butttons/> */}
        {/* <Forms/> */}
        {/* <Todolist/> */}
        {/* <Mykeep/> */}

        {/* <ConA/> */}
        {/* <HooksEff/> */}
        
    </>
, document.getElementById("root")
)


// const first = ["narendra", "patidar" , "male", 26, true];
// const second = ["narend", "pat" , "m", 65, false];

// const biodata = [1, ...first, ...second];
// console.log(biodata)

// var shootes = ["narendra", "patidar" , "male", 26, true];
// var[first, second , ...last] = shootes
// console.log(first)
// console.log(second)
// console.log(last)


// const fullName = {
//     fname : "Narendra",
//     lname : "Patidar"
// };

// const biodata = {
//     id : 1,
//     ...fullName,
//     age : 23,
//     gender: "male",
// }

// console.log(fullName)
// console.log(biodata);