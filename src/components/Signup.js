import React, {useState} from 'react'


function Signup ({onLogin}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

   let newPatient = {
    name: name,
    email: email,
    password: password
   } 

  
    let handleSubmit = (e) => {
      e.preventDefault();
      fetch("https://hospital-view-rails-production.up.railway.app/signup" , {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPatient),
        })
        .then((r) =>  r.json())
        .then((patient) => onLogin(patient));
      }
       
 

  return (
    <div id="signup" align='center'>
        <div className="signup" >
                <h2 style={{color: "#A23A36"}}>Welcome To HospiView</h2>
                <h3 style={{color: "#A23A36"}}>Please Sign up!</h3>
                <div id="Column" >
                <form id='register-form' onSubmit={handleSubmit} > 
                    <input 
                        type="text" 
                        value={name}
                        placeholder="Username"
                        onChange={(e) => setName(e.target.value)}
                        />
                    <br/>
                     
                    <input 
                      type="text"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      />
                       <br/>
                       <input 
                        type="text" 
                        value={password}
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        /> 
                      <br/>

                    <button className="btn">Sign Up</button>
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default Signup;
