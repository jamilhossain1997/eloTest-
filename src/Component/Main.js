import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import TaskTable from './TaskTable';
import DataHorBar from './DataHorBar';
import 'react-notifications-component/dist/theme.css'

import { ReactNotifications,Store } from 'react-notifications-component'; 



const Main = () => {
    const list=useSelector((state) => state.todoReducers.list);
    const [isActive, setIsActive] = useState(false);
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        let timer;
        if (isActive) {
            let i = 0;
            timer = setInterval(() => {
                const check = list.find((item) => parseInt(item.timer) == (seconds+i));  
                if(check)
                Store.addNotification({
                    message: `${check.list} starting`,
                    type: "success",
                    insert: "top",
                    container: "center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                   
                  });

                if((seconds+i)===60)
                {
                    setSeconds(0);
                }else{
                    setSeconds((seconds) => seconds + 1); 
                }
                i++;
            }, 1000);
        }
        return () => {
            clearInterval(timer);
        };
    },[isActive]);

    const manageRealTime = () => {
        setIsActive(!isActive);
      }

     
    return (
        <>
        <ReactNotifications />
            <div className='container mb-3 mt-3'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <figure>
                                        <figcaption>Live Timer</figcaption>

                                    </figure>
                                </div>
                                <div className='col-md-8'>
                                    
                                    <div onClick={() => manageRealTime()}>
                                        <img src='/img/StartButton.png' alt='No Image' /><strong style={{ color: `red` }}>{isActive ? 'Stop Real-Time': 'Start Real-Time'}</strong>
                                    </div>
                                    <span>{seconds}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <DataHorBar/>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <TaskTable/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main