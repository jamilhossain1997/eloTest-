import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {delect,edit} from '../action/index';
import Model from './Model';

const TaskTable = (props) => {
    const [isModalOpen, setModalIsOpen] = useState(false);
    const list = useSelector((state) => state.todoReducers.list);
    // console.log(list);
    const dispatch=useDispatch();
//    console.log(list);
    const toggleModal = () => {
        setModalIsOpen(!isModalOpen);
    };
    return (
        <>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <figure>
                            <figcaption>Task Table</figcaption>
                        </figure>
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <button onClick={toggleModal}>Add Task</button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Task Name</th>
                                <th scope="col">Task Duration</th>
                                <th scope="col">Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                list.map((item,i) => {
                                   
                                    return (
                                        <>
                                            <tr key={item.id}>
                                                <td>{item.list}</td>
                                                <td>{item.timer}seconds</td>
                                                <td>Edit/<button onClick={()=>dispatch(delect(item.id))}>Delect</button></td>
                                            </tr>
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    
                </div>
            </div>
            {isModalOpen && <Model timer={props.timer} onRequestClose={toggleModal} />}
        </>
    )
}

export default TaskTable