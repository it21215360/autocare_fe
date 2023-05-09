

import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "devextreme-react/button";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";
import "./VehicleReg.css";
import { Link } from "react-router-dom";



const VehicleReg = () => {

  const [VehicleInfo, setVehicleInfo] = useState({});
   const onSaveBtnClick = () => {
    try {
      console.log(VehicleInfo);
      axios
        .post(`${API_BASE_URL}/api/vehiclereg/add-vehiclereg`, {
          VehicleDetails: JSON.stringify(VehicleInfo),
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
           <h2>Vehicle Registration</h2>
      <Form formData={VehicleInfo}>
      <GroupItem colCount={2}>
                      <Item
                  dataField="VehicleType"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: [
                      {  Name: "Van" },
                      {  Name: "Lorry" },
                      {  Name: "Dimo" },
                   
                    ],
                    searchEnabled: true,
                    displayExpr: "Name",
                    valueExpr: "Name",
                  }}
                >
                  <Label text="Select vehicle type :"></Label>
                  <RequiredRule message="Field required" />
                </Item>

                <Item dataField="Brand" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Vehicle Brand"></Label>
                           
                        </Item>


                        <Item dataField="Model" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Vehicle Model"></Label>
                           
                        </Item>
                        <Item dataField="VehicleNo" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Vehicle No"></Label>
                           
                        </Item>

                        </GroupItem>
                        <GroupItem colCount={3}>
                        </GroupItem>
                        </Form>
      

            <Link to="/component/login-form/LoginForm">
            <Button type="success"  stylingMode="contained" onClick={onSaveBtnClick}>Submit</Button>
            </Link>
            </div>
      
     
      
     </>
      
  );
};

export default VehicleReg;
