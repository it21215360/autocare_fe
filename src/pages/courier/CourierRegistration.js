import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";
import "./CourierRegistration.css";


const  CourierRegistration = () => {


   const [RegInfo, setRegInfo] = useState({});

   const onSaveBtnClick = (e) => {
       try {
         console.log(RegInfo);
        
   
         axios
           .post(`${API_BASE_URL}/api/register/add-register`, {
             RegDetails : JSON.stringify(RegInfo),
             
           })
           .then((response) => {
             console.log(response);
           })
           .catch((error) => {});
       } catch (error) {
         console.error(error);
       }
     };


    return (
      
      <div className="signup">
      <div className="sign">
      <div className="title">Registration</div>
      <form formData={RegInfo}>
     
        <div className="user__details">
          
          <div className="input__box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="E.g: John Smith" dataField="CourierName" />
          </div>
          <div className="input__box">
            <span className="details">NIC</span>
            <input type="text" placeholder="**********" dataField="NIC" />
          </div>
          <div className="input__box">
            <span className="details">Email</span>
            <input type="email" placeholder="johnsmith@hotmail.com" dataField="Email" />
          </div>
          <div className="input__box">
            <span className="details">Phone Number</span>
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" dataField="Phone"  />
          </div>
          <div className="input__box">
            <span className="details">Password</span>
            <input type="password" placeholder="********" dataField="Password"  />
          </div>
         
    
        </div>
       
        <div className="buttonsub">
        <Link to="/courier/VehicleReg">
        <input type="submit" value="Next" stylingMode="contained" onClick={onSaveBtnClick} />
       
    </Link>
        </div>

      
      </form>
    </div>
    </div>
    )
     }

export default CourierRegistration;


