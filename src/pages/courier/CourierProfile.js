import React, { useState } from "react";

export default function CourierProfile() {
  const [notes, setNotes] = useState("Ruwan is our new courier man ");
  const Courier = {
    ID: 7,
    FirstName: "Ruwan",
    LastName: "Perera",
    Prefix: "Mr.",
    Position: "Delivery Driver",
    Picture: "image/Courier/delivery.jpg",
    NIC: "73892829282",
    JoinDate: new Date("2022/05/11"),
    Notes: notes,
    Address: "46/B  Colombo Rd.",
  };

  return (
    <div>
      {/* <h2> Ruwan Perera</h2>
      <label htmlFor="profile-image-input">
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile image"
            style={{ maxWidth: 150, maxHeight: 150 }}
          />
        ) : (
          <div>Upload profile image</div>
        )}
      </label>
      <input
        id="profile-image-input"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: "none" }}
      /> */}
    </div>
  );
}
