import React, { useState } from "react";
import Todolll from "./Todolll";

const Todolist = () => {

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value)
    }

    const listOfItems = () => {
        setItems((oldItems) => {
           return [...oldItems, inputList];
        })
        setInputList("");
    }

    const deleteItems = (id) => {
        // console.log("deleted")

        setItems((oldItems) => {
            return oldItems.filter((arrElem, Index) => {
                return Index !== id;
            })
        })
    };

    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1> Todo List</h1>
                <br/>
                <input 
                type="text" 
                placeholder="Add a Items" 
                value={inputList}
                onChange={itemEvent}/>
                <button onClick={listOfItems}> + </button>

                <ol>
                    {/* <li> {inputList} </li> */}
                    {items.map((itemsval, index) => {
                      return(
                        <Todolll 
                        key={index} 
                        id={index} 
                        text={itemsval}
                        onselect = {deleteItems} />
                      )   
                    })}
                </ol>
            </div>
        </div>
        </>
    );
};

export default Todolist;