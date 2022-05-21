import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
const DataHorBar = () => {
    const list = useSelector((state) => state.todoReducers.list);
    const initiallist = [0,10,20,30,40,50,60];
    const int = initiallist.push(list);

    console.log(int);


    // useEffect(() => {
    //     initiallist.push.apply(list);
    // }, [])

    // console.log(int);


    return (
        <>
            <div className='container'>
                <div className='row'>

                    <table id="axes-example-7" class="charts-css bar show-labels show-primary-axis show-4-secondary-axes">
                        <tbody>
                            
                            {
                                list.map((a, i) => {

                                   
                                    return (
                                        <>
                                            <tr key={'abc' + i}>
                                                <th scope="row">{a.list}</th>
                                                <td style={{ maxHeight: `${a.timer}px` }}>
                                                   {i*10}sec
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>


                </div>
            </div>
        </>
    )
}

export default DataHorBar