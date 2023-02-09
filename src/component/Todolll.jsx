import React from 'react'

function Todolll(props) {

  return (
    <>
    <div className='todo_style'>
        <i className="fa fa-times" aria-hidden="true"
            onClick={() => {
                props.onselect(props.id)
            }}
        />
        <li> {props.text} </li>
    </div>
    </>
 
  )
}

export default Todolll
