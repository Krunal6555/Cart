import React from 'react';
import './AppProject.css'
const ToDoList = (props) => {

    // const log = () => {
    //     console.log('clicked')
    // }

    return (
        <>
            <div style={{
                margin: '6px'
            }}>




                {/* <button type="button" className="btn btn-outline-danger" onClick={props.onSelect}>❌</button> */}
            
                <li>
                    <div>
                        <div className="pointer input-group">
                            <div className="input-group-text">
                                <i className="fas fa-times"
                                    onClick={() => {
                                        props.onSelect(props.id)
                                    }}>
                                    {props.text}
                                </i>
                            </div>
                        </div>
                        {/* <li>
                            {props.text}
                        </li> */}
                    </div>


                </li>


            </div>
        </>
    )
}

export default ToDoList;
