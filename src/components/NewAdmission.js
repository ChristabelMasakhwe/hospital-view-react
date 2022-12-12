import React, {useState} from "react";
// import {useLocation} from "react-router-dom";

function NewAdmission({admissions, setAdmissions, patient, hospitals, updateHospital}) {
    const [condition, setCondition] = useState("");
    const [date, setDate] = useState("");
    const [patient_id, setPatient_id] = useState("");
    const [hospital_id, setHospital_id] = useState("");
   
    // const location = useLocation()
    // const {state} = location
    // console.log(patient)
  
    const newList = {
        condition,
        date,
        patient_id,
        hospital_id
      };

      const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newList)
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://hospital-view-rails-production.up.railway.app/admissions", configObj)
          .then((r) => r.json())
          .then((r) => {
            setAdmissions([...admissions, r])
          });
        };
    
    return (
        <div id="newadmission">
            <div className="newadmission" align="center">
            <h1 >New Admission</h1>
            <div id="forminput" >
            <form id="form" onSubmit={handleSubmit} >
                {/* <input  
                    type="text" 
                    name="name"
                    value={name} 
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}/> */}
                
                <br/>
                <input 
                    type="text" 
                    condition="condition"
                    value={condition}
                    placeholder="Condition"
                    onChange={(e) => setCondition(e.target.value)} />
                <br/>
                <input 
                    type="date" 
                    date="date" 
                    placeholder="date"
                    onChange={(e) => setDate(e.target.value)} />
                <br/>
                <input 
                    type="number" 
                    patient_id="patient_id"
                    value={patient_id}
                    placeholder="Patient Id"
                    onChange={(e) => setPatient_id(e.target.value)} />
                    <br/>
                    <input 
                    type="number" 
                    hospital_id="hospital_id"
                    value={hospital_id}
                    placeholder="Hospital Id"
                    onChange={(e) => setHospital_id(e.target.value)} />
                    <br/>
                    {/* {hospitals.map((hospital)=> */}
                <button  
                // key={hospital.id}
                // onchange={()=>updateHospital(hospital.beds_available -= 1)}
                type="submit">Admit</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default NewAdmission;