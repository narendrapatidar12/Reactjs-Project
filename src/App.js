import React from 'react';
// import AxiosAp from './components/AxiosAp';
import { Route, Switch, Redirect } from "react-router-dom";

import './App.css';

// import StateWise from './components/StateWise';
// import About from './About';
// import Contact from './Contact';
// import Error from "./Error";
// import Service from "./Service";
// import Menu from "./Menu";
// import User from "./User";
// import Search from "./Search";
// import Menus from "./SortProject/Menus";
// import Home from "./SortProject/Home";
// import About from "./SortProject/About";
// import Contact from "./SortProject/Contact";
// import Error from "./SortProject/Error";


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import Home from './CompProject/Home'
import About from './CompProject/About'
import Service from './CompProject/Service'
import Contact from './CompProject/Contact'
import Navbar from './CompProject/Navbar';
import Footer from './CompProject/Footer';

// function App() {
//   return (
//     <>
//     {/* <Menu/>
//     <Switch>
//       <Route exact path="/about" component={() => <About name="About" /> } />
//       <Route exact path="/service" component={() => <Service name="Service" /> } />
//       <Route exact path="/search" component={Search}   />
//       <Route exact path="/user/:fname/:lname" component={User}   />
//       <Route path="/contact" component={() => <Contact name="Contact" /> } />
//       <Route component={Error} />
//     </Switch> */}

//     {/* <Menus />
//     <Switch>
//       <Route exact path="/" component={Home } />
//       <Route exact path="/about" component={About} />
//       <Route path="/contact" component={Contact} /> */}
//       {/* <Route component={Error} /> */}
//       {/* <Redirect to="/" />
//     </Switch>  */}


//       {/* <About/>
//       <Contact/> */}
//       {/* <StateWise/> */}
//       {/* <AxiosAp/> */}

//     </>
//   );
// }

// function App() {
//   return(
//     <>
//     <div className='container'>
//       <h1 className='text-center'> Hello, I am Narendra</h1>
//       <br/>
//       <div className='text-center'>
//       <div className="card" style={{width: "18rem"}} >
//         <img src="https://picsum.photos/seed/picsum/200/200" className="card-img-top" alt="..."/>
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="https://picsum.photos/" className="btn btn-success">Go somewhere</a>
//         </div>
//       </div>
//       </div>
//     </div>
//     </>
//   )
// }


function App() {
  return (
     <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service}   />
          <Route path="/contact" component={Contact} />
          <Redirect to="/"/>
        </Switch>
        <Footer />
      </>
  )    
}

export default App;
