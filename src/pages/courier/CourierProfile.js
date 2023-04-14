import React from "react";

function CourierProfile() {
  return (
    <div className="courier-menu">
      <h1 className="title-pen">
        {" "}
        User Profile <span>UI</span>
      </h1>
      <div className="user-profile">
        <img
          className="avatar"
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF_erFD1SeUnxEpvFjzBCCDxLvf-wlh9ZuPMqi02qGnyyBtPWdE-3KoH3s"
          alt="Ash"
        />
        <div className="username">Will Smith</div>
        <div className="bio">Senior UI Designer</div>
        <div className="description">
          I use to design websites and applications for the web.
        </div>
      </div>
    </div>
  );
}

export default CourierProfile;
