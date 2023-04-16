<<<<<<< HEAD
import React, { useState } from 'react';

function CourierProfile() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h2> Ruwan Perera</h2>
      <label htmlFor="profile-image-input">
        {profileImage ? (
          <img src={profileImage} alt="Profile image"   style={{ maxWidth: 150, maxHeight: 150 }} />
        
        ) : (
          <div>Upload profile image</div>
        )}
      </label>
      <input
        id="profile-image-input"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
    </div>
  );
}

=======
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

>>>>>>> e61951fafa09db7486dc8c4afaa9583afc111e31
export default CourierProfile;
