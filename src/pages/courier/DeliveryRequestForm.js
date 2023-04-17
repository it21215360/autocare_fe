import React, { Component } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
import { LoadPanel } from "devextreme-react/load-panel";
import notify from "devextreme/ui/notify";
import { useState } from "react";
import { Button } from 'devextreme-react/button';

import axios from "axios";


import { API_BASE_URL } from "../../appconfig/config";

const DeliveryRequestForm = () => {
  const [RequestInfo, setRequestInfo] = useState({});

  const onSaveBtnClick = (e) => {
    try {
      console.log('data='.RequestInfo);
      axios
        .post(`${API_BASE_URL}/api/courier/add-Request`, {
          RequestDetails: JSON.stringify(RequestInfo),
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
    <form formData={RequestInfo}>
      <h2>Request for a delivery</h2>
      <div className="form-group">
        <label>Order ID:</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" required />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input type="text" required />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input type="text" required />
      </div>
      <div className="form-group">
        <label>City:</label>
        <input type="text" required />
      </div>
      <div className="form-group">
        <label>Province:</label>
        <input type="text" id="province" required />
      </div>

      <Button type="success" onClick={onSaveBtnClick}>
        Submit
      </Button>
    </form>
  );
};

export default DeliveryRequestForm;
