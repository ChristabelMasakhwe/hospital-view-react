import React from 'react';
import { NavLink } from "react-router-dom";


export default function Card (props){
    return (
        <div className="card">
            <div className='card-item'>
                <h4>{props.name}</h4>
            </div>
            <div className='card-item' >
                <img id='card-image' src={props.image} alt=""/>
            </div>
            <div className='card-item'>
                <p>Bed Capacity: {props.bedCapacity}</p>
                <p>Beds Available: {props.bedsAvailable}</p>
            </div>
            <div className='card-item'>
                <button className='btn-apply' id='submit admit'>
                    <NavLink to="/newadmission" state={{hospitalId: props.id}}>Admit</NavLink></button>
                <br/>
                <button className='btn-apply' id='submit discharge'>
                <NavLink to="/admission">Discharge</NavLink></button>
            </div>
        </div>
    )
};