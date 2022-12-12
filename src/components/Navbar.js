import React from 'react';
import { NavLink } from "react-router-dom";



export default function NavBar ({setPatient}) {
    function handleLogoutClick() {
        fetch("https://hospital-view-rails-production.up.railway.app/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setPatient(null);
          }
        });
      }
    return (
        <header>
        <div className="navbar" >
        
            <div className="navlinks">
                {/* <a href="/home">HOME</a> */}
                <NavLink to="/home" style={{color:'#A23A36'}}>HOME</NavLink>
                {/* <a href="/about">ABOUT</a> */}
                <NavLink to='/about' style={{color:'#A23A36'}}>ABOUT</NavLink>
                {/* <a href="/hospital">HOSPITAL</a> */}
                <NavLink to='/hospital' style={{color:'#A23A36'}}>HOSPITAL</NavLink>
                {/* <a href="/admission" >ADMISSION</a> */}
                {/* <a href="/new-admission" >NEW ADMISSION</a> */}
                <NavLink to='/admission' style={{color:'#A23A36'}}>ADMISSION</NavLink>
                <NavLink to='/newadmission' style={{ color:'#A23A36'}}> NEW ADMISSION</NavLink>
                <NavLink to='/signup' style={{color:'#A23A36'}}>Sign up</NavLink>
                {/* <a href="/signup" >Sign up</a> */}
                <button onClick={handleLogoutClick}><NavLink to='/signup' style={{color:'#A23A36'}}>logout</NavLink></button>
                </div>
            </div>
        </header>
    )
}