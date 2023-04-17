import React, { Component } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { useState } from "react";
import { Button } from 'devextreme-react/button';
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";
import './DeliveryRequestForm.css';


const DeliveryRequestForm = () => {
  const [RequestInfo, setRequestInfo] = useState({});
  
  const onSaveBtnClick = (e) => {
    try {
      console.log(RequestInfo);
      axios
        .post(`${API_BASE_URL}/api/request/add-request`, {
          RequestDetails : JSON.stringify(RequestInfo),
          
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
    <>
    <div className={'content-block'}>
           <h2>Request for a delivery</h2>
      <Form formData={RequestInfo}>
      <GroupItem colCount={2}>
                        
      
      
                    <Item dataField="OrderID" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
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

                        <Item
                  dataField="City"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: [
                      { AutoID: 0, Name: "Jaela" },
                      { AutoID: 1, Name: "Kapuwatta" },
                      { AutoID: 2, Name: "Kandana" },
                      { AutoID: 3, Name: "Seeduwa" },
                      { AutoID: 4, Name: "Colombo" },
                      { AutoID: 5, Name: "Dehiwala" },
                      { AutoID: 6, Name: "Negambo" },
                      { AutoID: 7, Name: "Jaffna" },
                      { AutoID: 8, Name: "Kandy" },
                      { AutoID: 9, Name: "Gampaha" },

                    ],
                    searchEnabled: true,
                    displayExpr: "Name",
                    valueExpr: "AutoID",
                  }}
                
                >
                  <Label text="City"></Label>
                  <RequiredRule message="Field required" />
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
                <Item dataField="Charge" editorType="dxTextBox" editorOptions={{
                            readOnly:true,
                        }}>
                            <Label text="Delivery Charge "></Label>
                           
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


export default DeliveryRequestForm;
