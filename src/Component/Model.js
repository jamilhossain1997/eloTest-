import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {add} from '../action/index';


const Model = ({onRequestClose}) => {
  const [inputData,setInputData]=useState('');
  const [timer,setTimer]=useState('');
  const dispatch=useDispatch();
  
    return (
        <div className="modal__backdrop">
            <div className="modal__container">
                <h3 className="modal__title">Task  Add</h3>
                <button type="button" onClick={onRequestClose}>
                    Close this modal
                </button><br/>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Task Duration</label>
                    <input type="number" value={timer} onChange={(e)=>setTimer(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Task Name</label>
                    <textarea value={inputData} onChange={(e)=>setInputData(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className='btn btn-primary' onClick={()=>dispatch(add(`${timer}`,`${inputData}`))}>Submit</button>
            </div>
        </div>
    );
};

export default Model