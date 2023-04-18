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
  return (
    <>
      <div className={'back-box'}>
        <h2 className="head1">Service Station Management</h2>
        <Form>
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
        <br />
      </div>


    </>
  )
}

export default ServiceLogin