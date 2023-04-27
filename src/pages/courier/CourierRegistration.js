import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from "react";
import { Button } from "devextreme-react/button";

import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";


import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";



const  CourierRegistration = () => {


   const [RegInfo, setRegInfo] = useState({});

   const onSaveBtnClick = (e) => {
       try {
         console.log(RegInfo);
        
   
         axios
           .post(`${API_BASE_URL}/api/register/add-register`, {
             CourierDetails : JSON.stringify(RegInfo),
             
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
                <h2><b>Courier Registration</b></h2>
                <Form formData={RegInfo}>
                    <GroupItem colCount={2}>
                        <Item dataField="CourierID" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Courier ID"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
    
                        <Item dataField="CourierName" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Full Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="NIC" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="NIC"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="Email" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Email"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="Phone" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Phone"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="Password" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Password"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
         
    
                        </GroupItem>
                        <GroupItem colCount={3}>
                        </GroupItem>
                        </Form>
                    
        <Link to="/courier/VehicleReg">
        <Button type="success"  stylingMode="contained" onClick={onSaveBtnClick}>Next</Button>
       
    </Link>
        </div>

           

   
      
     
      
     </>
      
  );
};
export default CourierRegistration;


