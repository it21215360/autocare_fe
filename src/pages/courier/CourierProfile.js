<<<<<<< HEAD
import React, { useState } from 'react';

export default function CourierProfile() {
  const [notes, setNotes] = useState(
    'Ruwan is our new courier man '
  );
  const Courier = {
    ID: 7,
    FirstName: 'Ruwan',
    LastName: 'Perera',
    Prefix: 'Mr.',
    Position: 'Delivery Driver',
    Picture: 'image/Courier/delivery.jpg',
    NIC: '73892829282',
    JoinDate: new Date('2022/05/11'),
    Notes: notes,
    Address: '46/B  Colombo Rd.'
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
