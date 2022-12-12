import React from 'react';
// import Hero from '../Assets/Hero.webp'

const homeStyles = {
    // marginRight: "300px",
    // marginLeft: "300px",
    padding: "120px",
    textAlign: "center",
    fontWeight: "bolder",
}    

function Home() {
    return(
<div id="home" className="home" >
    <div className='container'>
    <h1 style={homeStyles}>HOSPIVIEW INPATIENT ACCESS</h1>
        {/* <button style={{display: "flex"}}>Read more</button> */}

   
</div>
</div>
    )
};

export default Home;