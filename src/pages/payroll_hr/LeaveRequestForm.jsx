
import React, { Component } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
import { LoadPanel } from "devextreme-react/load-panel";
import notify from "devextreme/ui/notify";
import { useState } from "react";
import { SelectBox } from "devextreme-react";
import { Button } from 'devextreme-react/button';
import { DateBox } from 'devextreme-react/calendar';

import { Link } from 'react-router-dom';
import LeaveApproval from "./leaveApproval";

import axios from 'axios';
import { API_BASE_URL  } from '../../appconfig/config.js';


const LeaveRequestForm = () => {
    const [empLeaveInfo, setEmpLeaveInfo] = useState({});
  
  
  const onSaveBtnClick = (e) => {
    try{
      console.log(empLeaveInfo);
  
      axios  
        .post(`${API_BASE_URL}/api/employee/leave-request-form`, {
          LeaveInfo: JSON.stringify(empLeaveInfo)
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {});
      }catch (error) {
        console.error(error);
      }
  };

//function LeaveRequestForm() {

    /*const [budgetdefinition, setBudgetdefinition] = useState({ FirstName: 'Maheesha', employeeId: 200202, LastName: 'Rosa', empDepartment: 'IT Department', leaveFrom: '2022/10/21', leaveTo: '2022/10/23', dayCount: 'count' })
*/
    //const leaveCategory = [{ AutoID: 1, Name: 'Casual Leave' }, { AutoID: 2, Name: 'Annual Leave' }, { AutoID: 3, Name: 'Comp Leave' }]
    //const empDepartment = [{ DepID: 1, Name: 'HR Department' }, { DepID: 2, Name: 'Finance Department' }, { DepID: 3, Name: 'IT Department' }]

    return (

        <>
            <div className={'content-block'}>
                <h2>Employee Leave Request Form</h2>
                <hr />

                <Form formData={empLeaveInfo}>
                    <GroupItem colCount={2}>


                        <Item dataField="FirstName" 
                            editorType="dxTextBox" 
                            editorOptions={{
                                readOnly: false,
                            }}>

                            <Label text="First Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>



                        <Item 
                            dataField="EmployeeID" 
                            editorType="dxTextBox"
                             editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Employee Id"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item 
                            dataField="LastName" 
                            editorType="dxTextBox" 
                            editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Last Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item 
                            dataField="Position" 
                            editorType="dxSelectBox" 
                            editorOptions={{
                            items: [
                                { Name: "Auto Mechanic"},
                                { Name: "Technicians"},
                                { Name: "Mechanic"},
                                { Name: "HR-Manager"},
                                
                            ],
                            searchEnabled: true,
                            displayExpr: "Name",
                            valueExpr: "Name",
                        }}>
                            <Label text="Position"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                    </GroupItem>

                    <GroupItem colCount={3}>
                        <Item 
                            dataField="LeaveFrom" 
                            editorType="dxDateBox">
                            <Label text="Leave From"></Label>

                            <RequiredRule message="Field required" />
                        </Item>

                        <Item
                            dataField="LeaveCategory"
                            editorType="dxSelectBox"
                            editorOptions={{
                                items: [
                                    { Name: "Casual Leave"},
                                    { Name: "Anual Leave"},
                                    { Name: "Comp Leave"},
                                ],
                                searchEnabled: true,
                                displayExpr: "Name",
                                valueExpr: "Name",
                            }}
                        >
                            <Label text="Leave Category"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item
                            dataField="LeaveType"
                            editorType="dxSelectBox"
                            editorOptions={{
                                items: [
                                    { Name: 'Full Day' }, 
                                    { Name: 'Half Day' },
                                ],
                                searchEnabled: true,
                                displayExpr: "Name",
                                valueExpr: "Name",
                            }}
                        >
                            <Label text="Leave Type"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item 
                            dataField="LeaveTo" 
                            editorType="dxDateBox">
                            <Label text="Leave To"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item 
                            dataField="DayCount" 
                            editorOptions={{ readOnly: false }}>
                            <RequiredRule message="Field required" />


                        </Item>
                    </GroupItem>
                </Form>

                <Navbar bg="light" variant="light">
                    <Button 
                        stylingMode="contained" 
                        type="success" 
                        onClick={onSaveBtnClick}
                        >
                            Save
                        </Button>
                    <Button 
                        stylingMode="contained" 
                        type="default"
                        >
                            Clear
                        </Button>
                </Navbar>
            </div>
        </>
    );
}

export default LeaveRequestForm;