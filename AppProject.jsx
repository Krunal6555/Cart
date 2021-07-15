import React, { useState } from 'react';
import './AppProject.css';
import ToDoList from './ToDoList';

const AppProject = () => {

    const [inputList, setInputList] = useState("")
    const [Items, setItems] = useState([])

    const itemEvent = (event) => {
        // if (event == null) {
        //     console.log('h')
        // }else{
            setInputList(event.target.value);
        //     let data = event.target.value;
        // if (data == null) {
        //     alert('Fill the form');
        // }
        // else {
        // }
        // }
        // itemEvent();
    }

    const itemAdded = () => {

        
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        
        setInputList(" ");
        
        // if ( let inputeList !== null) {
        //     console.log('dsffss')
        // }else {
        //     console.log('h')
        // }

        // Working Problem 

    };

    const deleteItems = (id) => {

        console.log('deleted');

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }


    return (
        <>
            <div style={{
                width: '100%'
            }}>


                <div style={{
                    textAlign: 'center',
                    margin: '10px',
                    backgroundColor: 'blue',
                    color: 'lightBlue'
                }}>
                    <h1>List </h1>

                </div>
                <br />
                {/* <hr /> */}
                <br />
                <div style={{
                    marginLeft: '10px'
                }}>


                    <input type="text"
                        className="form-control" placeholder="Buy Product"
                        value={inputList}
                        onChange={itemEvent}
                    />


                    <br />
                    <button onClick={itemAdded}
                        type="button" className="button btn btn-primary "
                    > <span className='Span'>➕</span> Add </button>

                    <br />
                    <br />
                    <div className="input-group-text"
                        style={{
                            width: '10%',
                            marginLeft: '32px',
                            textAlign: 'center',
                            color: 'darkblue',
                            fontWeight: 'bold'

                        }} >Cart
                    </div>
                    <br />
                    <ol>

                        {/* display  */}
                        <li className='list-group-item'>Cart Data : {inputList}  </li>


                        {/* <li className="list-group-item list-group-item-primary">Dell Laptop</li> */}
                        {Items.map((itemval, index) => {

                            return (<ToDoList
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect={deleteItems}

                            />);

                        })}


                    </ol>
                </div>
            </div>
        </>
    )
}

export default AppProject;