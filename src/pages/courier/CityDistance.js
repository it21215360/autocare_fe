import React, { useState } from 'react';

const CityDistance = () => {
  const [city1, setCity1] = useState('');
  const [city2, setCity2] = useState('');
  const [distance, setDistance] = useState('');

  const calculateDistance = () => {
    const geocoder = new window.google.maps.Geocoder();
    const country = '+94'; // replace with your country code

    // geocode the first city
    geocoder.geocode({ address: `${city1}, ${country}` }, (results1, status1) => {
      if (status1 === 'OK') {
        // geocode the second city
        geocoder.geocode({ address: `${city2}, ${country}` }, (results2, status2) => {
          if (status2 === 'OK') {
            const lat1 = results1[0].geometry.location.lat();
            const lng1 = results1[0].geometry.location.lng();
            const lat2 = results2[0].geometry.location.lat();
            const lng2 = results2[0].geometry.location.lng();
            const R = 6371; // radius of the earth in km
            const dLat = deg2rad(lat2 - lat1);
            const dLng = deg2rad(lng2 - lng1);
            const a =
              Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(deg2rad(lat1)) *
                Math.cos(deg2rad(lat2)) *
                Math.sin(dLng / 2) *
                Math.sin(dLng / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const d = R * c; // distance in km
            setDistance(`${d.toFixed(2)} km`);
          } else {
            alert(`Geocode was not successful for the following reason: ${status2}`);
          }
        });
      } else {
        alert(`Geocode was not successful for the following reason: ${status1}`);
      }
    });
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  return (
    <div>
      <h2>Calculate Distance Between Two Cities in the Same Country</h2>
      <div>
        <label>City 1:</label>
        <input type="text" value={city1} onChange={(e) => setCity1(e.target.value)} />
        <br />
        <label>City 2:</label>
        <input type="text" value={city2} onChange={(e) => setCity2(e.target.value)} />
        <br />
        <button onClick={calculateDistance}>Calculate Distance</button>
      </div>
      <p>The distance between {city1} and {city2} is {distance}.</p>
    </div>
  );
};

export default CityDistance;
