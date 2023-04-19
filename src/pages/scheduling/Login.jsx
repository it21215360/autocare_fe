import React from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Button } from 'devextreme-react/button';
import { Navbar, ListGroup } from "react-bootstrap";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";

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
      })
      .catch((error) => {});
    }catch (error) {
      console.error(error);
    }
};



  return (
    <>
      <div className={'back-box'}>
        <h2 className="head1">Service Station Management</h2>
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
              <Label text="User Name">
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
                                <Button 
                                    className="button2"
                                    stylingMode="contained" 
                                    type="default"
                                >
                                        Clear
                                </Button>
                                </Navbar>
        <br />
      </div>


    </>
  )
}

export default ServiceLogin