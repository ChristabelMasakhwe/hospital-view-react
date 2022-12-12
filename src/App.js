import React, {useEffect, useState} from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Hospital from "./components/Hospital";
import Admission from "./components/Admission";
import NewAdmission from "./components/NewAdmission";
import Footer from "./components/Footer";
import Login from "./components/Login";
import './App.css';

function App() {
  const [admissions, setAdmissions] = useState([]);
  const [hospitals, setHospitals] = useState([]);
 const [patient, setPatient] = useState(null)

  useEffect(() => {
    fetch("https://hospital-view-rails-production.up.railway.app/hospitals")
    .then((res)=>res.json())
    .then((hospitals)=> setHospitals(hospitals))
}, [])

// function updateHospital(id) {
//   let updatedHospital = hospitals.map((hospital) => {
//     if (hospital.id === id) {
//       hospital.beds_available = !hospital.beds_available
//       fetch(`http://127.0.0.1:3000/hospitals/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ beds_available: hospital.beds_available }),
//       });
//       }
//         return hospital;
//       })
//       setHospitals(updatedHospital);
//     }

useEffect(() => {
  fetch("https://hospital-view-rails-production.up.railway.app/admissions")
  .then((res)=>res.json())
  .then((admissions)=> setAdmissions(admissions))
}, [])

useEffect(() => {
  fetch("https://hospital-view-rails-production.up.railway.app/me")
  .then((r)=> {
    if(r.ok) {
      r.json().then((patient)=> setPatient(patient))
    }
  })
}, [])

if (!patient) return <Login onLogin={setPatient}/>
  return (
  <div>
<NavBar patient={patient} setPatient={setPatient}/>
<Routes>
    <Route exact path = '/home' element={<Home />}/>
    <Route exact path ='/about' element={<About />} />
    <Route exact path ='/hospital' element= {<Hospital hospitals={hospitals}/>} />
    <Route exact path ='/admission' element= {<Admission admissions={admissions} 
    setAdmissions={setAdmissions}
    // hospitals={hospitals}
    />} />
    <Route exact path ='/newadmission' element={<NewAdmission admissions={admissions}
          setAdmissions={setAdmissions}
          patient={patient}
          // updateHospital={updateHospital}
          hospitals={hospitals}/>} />
          
    <Route exact path ='/signup' element={<Login />} />      
</Routes>
<Footer />
</div>
)
}

export default App;