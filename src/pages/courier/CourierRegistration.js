import React from 'react';
import "./CourierRegistration.css";

function CourierRegistration () {


    return (
      
      <div className="signup">
      <div className="sign">
      <div className="title">Registration</div>
      <form>
        <div className="user__details">
          <div className="input__box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="E.g: John Smith" />
          </div>
          <div className="input__box">
            <span className="details">NIC</span>
            <input type="text" placeholder="**********" />
          </div>
          <div className="input__box">
            <span className="details">Email</span>
            <input type="email" placeholder="johnsmith@hotmail.com" />
          </div>
          <div className="input__box">
            <span className="details">Phone Number</span>
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" />
          </div>
          <div className="input__box">
            <span className="details">Password</span>
            <input type="password" placeholder="********" />
          </div>
          <div className="input__box">
            <span className="details">Confirm Password</span>
            <input type="password" placeholder="********" />
          </div>
    
        </div>
       
        <div className="buttonsub">
        <input type="submit" value="Next" />
        </div>

      
      </form>
    </div>
    </div>
    )
     }

export default CourierRegistration


