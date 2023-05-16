import React from "react";
import "./home.scss";
import { useAuth } from "../../contexts/auth";

export default function Home() {
  const { user, signOut } = useAuth();

  return Object.keys(user).length === 0 ? (
    signOut()
  ) : (
    <React.Fragment>
      <h2 className={"content-block"}>Home</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <h5>Welcome to AutoCare Pvt Ltd</h5>
          <h6>
            {user.userType === "Customer" ? `Customer Portal` : null}
            {user.userType === "Employee" ? `Employee Portal` : null}
            {user.userType === "SystemUser" ? `System Manager Portal` : null}
          </h6>
        </div>
      </div>
    </React.Fragment>
  );
}
