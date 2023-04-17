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

export default CourierProfile;
