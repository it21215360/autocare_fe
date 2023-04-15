import React from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Button } from 'devextreme-react/button';
import { Navbar, ListGroup } from "react-bootstrap";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import './invLogin.scss';
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";

function InventoryLogin() {

  const [LoginDetails, setLoginDetails] = useState({});

  const onSaveBtnClick = (e) => {
    try {
      console.log(LoginDetails);

      axios
        .post(`${API_BASE_URL}/api/inventoryLogin/add-inventoryLogin`, {
          InventoryLogDetails: JSON.stringify(LoginDetails),

        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => { });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>

      <div className={'back-box'}>
        <h2 className="head1">AutoCare</h2>

        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title className="head2">Stock Management Login</Card.Title>

            <Card.Text className="log1">
              Please Log in to Continue!
            </Card.Text>
            <br />
            <Form formData={LoginDetails}>
              <GroupItem >

                <Item dataField="UserName" editorType="dxTextBox" editorOptions={{
                  readOnly: false,
                }}>
                  <Label text="User Name" ></Label>
                  <RequiredRule message="Enter Your username" />
                </Item>

                <Item dataField="Password" editorType="dxTextBox" editorOptions={{
                  readOnly: false,
                }}>
                  <Label text="Password"></Label>
                  <RequiredRule message="Enter your password" />
                </Item>

              </GroupItem>
            </Form>
          </Card.Body>
        </Card>
        <br />
        <Card.Text className="pwd">
          Forgot Password?
        </Card.Text>
        <br />
        <Navbar bg="light" variant="light" className="log">
          <Button className="log" stylingMode="contained" type="success" onClick={onSaveBtnClick}>Login</Button>

        </Navbar>
        <br />
      </div>

    </>
  )
}

export default InventoryLogin