<<<<<<< HEAD
import React, { Component } from "react";
=======
import { useState } from "react";
import React, { Component } from "react";
import { Button } from "devextreme-react/button";
>>>>>>> e61951fafa09db7486dc8c4afaa9583afc111e31
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
import { LoadPanel } from "devextreme-react/load-panel";
import notify from "devextreme/ui/notify";
import { useState } from "react";
import { SelectBox } from "devextreme-react";
import { Button } from 'devextreme-react/button';

import axios from "axios";


import { API_BASE_URL } from "../../appconfig/config";

const DeliveryRequestForm = () => {
  const [RequestInfo, setRequestInfo] = useState({});

  const onSaveBtnClick = (e) => {
    try {
      console.log('data='.RequestInfo);
      axios
<<<<<<< HEAD
        .post(`${API_BASE_URL}/api/Request/add-Request`, {
          RequestDetails : JSON.stringify(RequestInfo),
          
=======
        .post(`${API_BASE_URL}/api/courier/add-Request`, {
          RequestDetails: JSON.stringify(RequestInfo),
>>>>>>> e61951fafa09db7486dc8c4afaa9583afc111e31
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
<<<<<<< HEAD
    <>
    <div className={'content-block'}>
           <h2>Request for a delivery</h2>
      <Form formData={RequestInfo}>
      <GroupItem colCount={2}>
                        
      
      
                    <Item dataField="OrderID" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Order ID"></Label>
                           
                        </Item>
    

                        <Item dataField="Name" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Name"></Label>
                           
                        </Item>

                        <Item dataField="Phone" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Phone"></Label>
                           
                        </Item>

                        <Item dataField="Address" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Address"></Label>
                           
                        </Item>

                        <Item dataField="City" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="City"></Label>
                           
                        </Item>

                      

                        <Item
                  dataField="Province"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: [
                      { AutoID: 0, Name: "Eastern" },
                      { AutoID: 1, Name: "North Western" },
                      { AutoID: 2, Name: "Southern" },
                      { AutoID: 3, Name: "Uva" },
                      { AutoID: 4, Name: "Sabaragamuwa" },
                      { AutoID: 5, Name: "Western" },
                      { AutoID: 6, Name: "Central" },
                      { AutoID: 7, Name: "North Central" },
                      { AutoID: 8, Name: "Northern" },
                      { AutoID: 9, Name: "Central" },

                    ],
                    searchEnabled: true,
                    displayExpr: "Name",
                    valueExpr: "AutoID",
                  }}
                >
                  <Label text="Province"></Label>
                  <RequiredRule message="Field required" />
                </Item>

                        </GroupItem>
                        <GroupItem colCount={3}>
                        </GroupItem>
                        </Form>
      
     
     <Button type="success"  stylingMode="contained" onClick={onSaveBtnClick}>Submit</Button>
     </div>
     </>
  );
};


=======
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

>>>>>>> e61951fafa09db7486dc8c4afaa9583afc111e31
export default DeliveryRequestForm;
