import React, { useState } from "react";

const DeliveryRequestForm = () => {
  const [orderid, setOrderID] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order ID:", name);
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("Province:", province);
  };

  return (
    <form action="" method="POST" onSubmit={handleSubmit}>
      <h2>Request for a delivery</h2>
      <div className="form-group">
        <label htmlFor="name">Order ID:</label>
        <input
          type="text"
          id="orderid"
          value={orderid}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">Province:</label>
        <input
          type="text"
          id="province"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          required
        />
      </div>

      <a href="/DeliveryRequestForm/submit">
        <button type="submit">Submit</button>
      </a>
    </form>
  );
};

export default DeliveryRequestForm;
