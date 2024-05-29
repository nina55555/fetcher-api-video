import React from 'react';
import {useNavigate} from "react-router-dom";


const LandingPage = () => {

  const navigate = useNavigate();
  console.log(navigate)
  const handleClick = () =>{
    navigate("/Accueil")
  }
  return (
    <div>
      <h1>landing page</h1>
      <button onClick={(e)=> handleClick() }>decouvrez</button>
    </div>
  );
};

export default LandingPage;