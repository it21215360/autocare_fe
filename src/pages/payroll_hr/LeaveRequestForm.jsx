
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

function LeaveRequestForm() {

    const [budgetdefinition, setBudgetdefinition] = useState({ FirstName: 'Maheesha', employeeId: 200202, LastName: 'Rosa', empDepartment: 'IT Department', leaveFrom: '2022/10/21', leaveTo: '2022/10/23', dayCount: 'count' })

    const leaveCategory = [{ AutoID: 1, Name: 'Casual Leave' }, { AutoID: 2, Name: 'Annual Leave' }, { AutoID: 3, Name: 'Comp Leave' }]
    const empDepartment = [{ DepID: 1, Name: 'HR Department' }, { DepID: 2, Name: 'Finance Department' }, { DepID: 3, Name: 'IT Department' }]

    return (

        <>
            <div className={'content-block'}>
                <h2>Employee Leave Request Form</h2>
                <hr />

                <Form formData={budgetdefinition}>
                    <GroupItem colCount={2}>


                        <Item dataField="FirstName" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>

                            <Label text="First Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>



                        <Item dataField="employeeId" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Employee Id"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="LastName" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Last Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="empDepartment" editorType="dxSelectBox" editorOptions={{
                            items: empDepartment,
                            searchEnabled: true,
                            displayExpr: "Name",
                            valueExpr: "DepID",
                        }}>
                            <Label text="Employee Department"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                    </GroupItem>

                    <GroupItem colCount={3}>
                        <Item dataField="leaveFrom" editorType="dxDateBox">
                            <Label text="Leave From"></Label>

                            <RequiredRule message="Field required" />
                        </Item>

                        <Item
                            dataField="leaveCategory"
                            editorType="dxSelectBox"
                            editorOptions={{
                                items: leaveCategory,
                                searchEnabled: true,
                                displayExpr: "Name",
                                valueExpr: "AutoID",
                            }}
                        >
                            <Label text="Leave Category"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item
                            dataField="leaveType"
                            editorType="dxSelectBox"
                            editorOptions={{
                                items: [{ AutoID: 1, Name: 'Full Day' }, { AutoID: 2, Name: 'Half Day' }],
                                searchEnabled: true,
                                displayExpr: "Name",
                                valueExpr: "AutoID",
                            }}
                        >
                            <Label text="Leave Type"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item dataField="leaveTo" editorType="dxDateBox">
                            <Label text="Leave To"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="dayCount" editorOptions={{ readOnly: true }}>
                            <RequiredRule message="Field required" />


                        </Item>
                    </GroupItem>
                </Form>

                <Navbar bg="light" variant="light">
                    <Button stylingMode="contained" type="success">Save</Button>
                    <Button stylingMode="contained" type="default">Clear</Button>
                </Navbar>
            </div>
        </>
    )
}

export default LeaveRequestForm