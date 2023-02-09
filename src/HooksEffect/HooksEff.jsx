import React, { useEffect, useState } from 'react'

const HooksEff = () => {

    const [num, setNum] = useState(0)
    // const [nums, setNums] = useState(0)
    // useEffect(() => {
    //     alert("click succesfully")
    // }, [num])

    useEffect(() => {
        document.title= `count ${num}`
    })

    return (
        <>
        <button onClick={ () => {
          setNum(num + 1)
        }}>Click Here {num} </button>
        <br/>
        {/* <button onClick={ () => {
          setNums(nums + 1)
        }}>Click Here {nums} </button> */}
        </>
    )

}

export default HooksEff;