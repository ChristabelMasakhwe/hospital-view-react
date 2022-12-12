import React from 'react';
import Card from "./Card";


function Hospital(props) {
   
return (
    <div id="hospital">
    <div id="hospital-title"><h2 align="center">HOSPITALS</h2></div>
        <div className='hospital-card'>
         {props.hospitals.map((hospital)=>
    <Card id={hospital.id}
    key={hospital.id}
  name={hospital.name}
  image={hospital.image_url}
  bedCapacity={hospital.bed_capacity}
  bedsAvailable={hospital.beds_available} /> )} 
        </div>
        </div>
    )
};

export default Hospital;