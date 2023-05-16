import React from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Button } from 'devextreme-react/button';
import { Navbar, ListGroup } from "react-bootstrap";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";
import notify from "devextreme/ui/notify";

function ServiceLogin() {

  const [userloginInfo, setUserLoginInfo] = useState({});
  const onSaveBtnClick = (e) => {
  try{
    console.log(userloginInfo);

    axios  
      .post(`${API_BASE_URL}/api/customer/login-request-form`, {
        loginInfo: JSON.stringify(userloginInfo)
      })
      .then((response) => {
        console.log(response);
        if (response.data.affectedRows === 1) {
          showSuccessAlert(`Successfuly Loged In!`);
         
        }
      })
      .catch((error) => {});
    }catch (error) {
      console.error(error);
    }
};

const showSuccessAlert = (successMsg) => {
  notify(
    {
      message: successMsg.toString(),
      width: 450,
    },
    "success",
    3000
  );
};

  return (
    <>
      <div className={'back-box'}>
        <h2 
        style={{margin:30}
        }>
          Service Station Management
          </h2>
        <Form formData={userloginInfo}>
          <GroupItem colCount={1}>
            <Item 
                dataField="username"  
                editorOptions={{                  
                readOnly: false,
                }}>
                <Label text="User Name">
                </Label>
                <RequiredRule message="Field required"></RequiredRule>
            </Item>
          </GroupItem>

          <GroupItem colCount={1}>
            <Item 
                dataField="password"  
                editorOptions={{                  
                readOnly: false,
                }}>
              <Label text="Password">
              </Label>
              <RequiredRule message="Field required"></RequiredRule>
            </Item>

          </GroupItem>
        </Form>

        <Navbar bg="light" variant="light">
          <Button 
              className="button1"
              stylingMode="contained" 
              type="success" 
              onClick={onSaveBtnClick}
          >
                  Save
          </Button>
          
          </Navbar>
        <br />
      </div>


    </>
  )
}

export default ServiceLogin