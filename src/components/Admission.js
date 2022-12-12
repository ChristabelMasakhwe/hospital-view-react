import React from 'react';


function Admission({admissions, setAdmissions, hospitals, updateHospital}) {
    function handleDelete(id) {
        const newAdmissions = admissions.filter((admission) => admission.id !== id);
        fetch(`https://hospital-view-rails-production.up.railway.app/admissions/${id}`, {
          method: "DELETE",
        });
        setAdmissions(newAdmissions);
      }
return (
        <div id="admission">
        <div className='table' align="center">
            <h2>Current Admissions</h2>
            <table>
                <thead>
                    {/* <th>Name</th> */}
                    <th>Condition</th>
                    <th>Date</th>
                    <th>Patient id</th>
                    <th>Hospital id</th>
                    <th>Remarks</th>
                </thead>
                <tbody>
                {admissions.map((admission) =>
                    <tr key={admission.id}>
                        {/* <td>{admission.name}</td> */}
                        <td>{admission.condition}</td>
                        <td>{admission.date}</td>
                        <td>{admission.patient_id}</td>
                        <td>{admission.hospital_id}</td>
                       <td>
                        {/* {hospitals.map((hospital)=> */}
                            <button 
                            // key={hospital.id}
                            // onChange={() =>updateHospital(hospital.beds_available += 1)}
                            onClick={()=>handleDelete(admission.id)} 
                            >Discharge</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
           
          </div>  
        </div>
    )
    }
    export default Admission;
