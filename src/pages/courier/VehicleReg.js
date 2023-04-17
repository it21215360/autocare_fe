import { Link } from 'react-router-dom';

import React, { Component } from "react";
import { Button } from 'devextreme-react/button';
import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";
import "./VehicleReg.css";

const VehicleReg = () => {


      axios
        .post(`${API_BASE_URL}/api/courier/add-vehicle`, {
          VehicleDetails: JSON.stringify(VehicleInfo),
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {});
    } catch (error) {
      console.error(error);
    }
  };

   const onSaveBtnClick = (e) => {
       try {
         console.log(VehicleInfo);
        
   
         axios
           .post(`${API_BASE_URL}/api/vehiclereg/add-vehiclereg`, {
             VehicleDetails : JSON.stringify(VehicleInfo),
             
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
      <div className="vehiReg">
      <div className="Reg">
        <div className="title">Register your vehicle today</div>
        <form formData={VehicleInfo}>
          <div className="gender__details">
            <input type="radio" name="vehicle" id="dot-1" />
            <input type="radio" name="vehicle" id="dot-2" />

      

      <div className="gender__details">
      <input type="radio" name="vehicle" id="dot-1"/>
      <input type="radio" name="vehicle" id="dot-2"/>
     
      <span className="gender__title">Vehicle Type</span>
      <div className="category">
        <label>
          <span className="dot one"></span>
          <span>Van</span>
        </label>
        <label>
          <span className="dot two"></span>
          <span>Mini Lorry</span>
        </label>
     
    </div>
        <div className="user__details">
          <div className="input__box">
            <span className="details">Vehicle Brand</span>
            <input type="text" placeholder="E.g: Toyota" />
          </div>
          <div className="input__box">
            <span className="details">Vehicle Model</span>
            <input type="text" placeholder="Toyota TR" />
          </div>
          <div className="input__box">
            <span className="details">Vehicle No</span>
            <input type="text" placeholder="******" />
          </div>
       </div>
     </div>
    
     <Link to="/component/login-form/LoginForm">
        <Button type="success"  onClick={onSaveBtnClick}>Submit</Button>
      </Link>
     
=======
            <span className="gender__title">Vehicle Type</span>
            <div className="category">
              <label>
                <span className="dot one"></span>
                <span>Van</span>
              </label>
              <label>
                <span className="dot two"></span>
                <span>Mini Lorry</span>
              </label>
            </div>
            <div className="user__details">
              <div className="input__box">
                <span className="details">Vehicle Brand</span>
                <input type="text" placeholder="E.g: Toyota" />
              </div>
              <div className="input__box">
                <span className="details">Vehicle Model</span>
                <input type="text" placeholder="Toyota TR" />
              </div>
              <div className="input__box">
                <span className="details">Vehicle No</span>
                <input type="text" placeholder="******" />
              </div>
            </div>
          </div>

          <Button type="success" onClick={onSaveBtnClick}>
            Submit
          </Button>
>>>>>>> e61951fafa09db7486dc8c4afaa9583afc111e31
        </form>
      </div>
    </div>
  );
};

    )
     }

export default VehicleReg;


