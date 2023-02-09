/*
import React, { useState } from 'react'

const Forms = () => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [lastNamenew, setLastNameNew] = useState("");

 
  const inputEvent = (event) => {
    setName(event.target.value)
  }

  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastName)
  }

  const inputEventTwo = (event) => {
    setLastName(event.target.value)
  }

  return (
    <>
      <div className='main_div'>
        <form onSubmit={onSubmits}>
          <div>
             <h1> Hello {fullName} {lastNamenew} </h1>
             <input type='text'
              placeholder='Enter Your Name' 
              onChange={inputEvent}
              value={name}></input>

             <input type='text'
              placeholder='Enter Your Last Name' 
              onChange={inputEventTwo}
              value={lastName}></input>
             <button type='submit' onClick={onSubmits}>Submit Me 👍</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Forms
*/

import React, { useState } from 'react'

const Forms = () => {
  const [fullName, setFullName] = useState({
    fname : "",
    lname: "",
    email : "",
    phone : "",
    education: ""
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const {value, name} = event.target;

    setFullName((preValue) => {
        console.log(preValue);

        return {
          ...preValue,
          [name]: value,
        }

        // if(name === "fName") {
        //     return {
        //         fname : value,
        //         lname: preValue.lname,
        //         email : preValue.email,
        //         phone : preValue.phone,
        //     };
        // } else  if(name === "lName") {
        //     return {
        //         fname :  preValue.fname,
        //         lname : value, 
        //         email : preValue.email,
        //         phone : preValue.phone,
        //     };
        // } else  if(name === "email") {
        //     return {
        //         fname :  preValue.fname,
        //         lname : preValue.lname,
        //         email : value,
        //         phone : preValue.phone,
        //     };
        // } else  if(name === "phone") {
        //     return {
        //         fname :  preValue.fname,
        //         lname : preValue.lname,
        //         email : preValue.email,
        //         phone : value,
        //     };
        // }

    });
  }

  const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted")
  };

  return (
    <>
      <div className='main_div'>
        <form onSubmit={onSubmits}>
          <div>
             <h1> Hello {fullName.fname} {fullName.lname}
             </h1>
             <p> {fullName.email} </p>
             <p> {fullName.phone} </p>
             <p> {fullName.education} </p>
             <input type='text'
                 placeholder='Enter Your Name' 
                 name='fname'
                 onChange={inputEvent}
                  value={fullName.fname}
              ></input>

             <input type='text'
                 placeholder='Enter Your Last Name' 
                 name='lname'
                 onChange={inputEvent}
                 value={fullName.lname}
              ></input>

              <input type='email'
                 placeholder='Enter Your Email' 
                 name='email'
                 onChange={inputEvent}
                 value={fullName.email}
                 autoComplete="off"
              ></input>

              <input type='number'
                 placeholder='Enter Your Phone Number' 
                 name='phone'
                 onChange={inputEvent}
                 value={fullName.phone}
              ></input>

              <input type='text'
                 placeholder='Enter Your qualification' 
                 name='education'
                 onChange={inputEvent}
                 value={fullName.education}
              ></input>
              <br/>

             <button type='submit' onClick={onSubmits}>Submit Me 👍</button>
          </div>
        </form>
      </div> 
    </>
  )
}

export default Forms;

