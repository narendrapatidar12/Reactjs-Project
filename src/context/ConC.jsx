import React, { useContext } from 'react'
import {FirstName, LastName} from './ConA'


const ConC = () => {
  const fname = useContext(FirstName)
  const lname = useContext(LastName)
  return (
    <>
      <h1> Hello, I am Narendra {fname} {lname} </h1>
    </>
  )
}

export default ConC