import React, { useState } from 'react'
import CreateNote from './CreateNote'
import Footer from './Footer'
import Header from './Header'
import Node from './Node'
import './keeps.css'

const Mykeep = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert("I am clicked")
    setAddItem((prevData) => {
      return [...prevData, note]
    })

  }

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    )
  }

  return (
    <>
        <Header/>
        <CreateNote passNote={addNote}/>
        {addItem.map((val, index) => {
          return (
            <Node
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          ) 
        })}
    
        <Footer/>
    </>
  )
}

export default Mykeep
