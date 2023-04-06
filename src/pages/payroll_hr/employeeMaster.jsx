import React, { Component } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import DataGrid, { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
import { LoadPanel } from "devextreme-react/load-panel";
import notify from "devextreme/ui/notify";
import { useState } from "react";
import { SelectBox } from "devextreme-react";
import { Button } from 'devextreme-react/button';
import { DateBox } from 'devextreme-react/calendar';
import Card from 'react-bootstrap/Card';

const EmployeeMaster = () => {

    const [empBasicInfo, setempBasicInfo] = useState(null)
    const [empEmploymentInfo, setempEmploymentInfo] = useState(null)

    const productCategory = [{ AutoID: 1, Name: 'Automobile Tyres' }, { AutoID: 2, Name: 'Automobile Clean & Care' }, { AutoID: 3, Name: 'Automobile Spare Parts' }, { AutoID: 4, Name: 'Engine Oil & Lubricant' }, { AutoID: 5, Name: 'Automobile Lighting' }, { AutoID: 6, Name: 'Automobile Electronics' }]


    return (
        <>
            <div className={'content-block'}>
                <h2>Employee Master</h2>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title><h6>Basic Information</h6></Card.Title>
                        <Form formData={empBasicInfo}>
                            <GroupItem colCount={3}>
                                <Item dataField="employeeID" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Employee #"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="epfNo" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="EPF #"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="firstName" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="First Name"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="lastName" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Last Name"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="dob" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Date of Birth"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="mobileNo" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Mobile No"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="email" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Email"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                            </GroupItem>
                        </Form>
                    </Card.Body>
                </Card>
                <hr></hr>
                <Card style={{ width: '100%', paddingTop: '20px' }}>
                    <Card.Body>
                        <Card.Title><h6>Employement Information</h6></Card.Title>
                        <Card.Text></Card.Text>
                        <Form formData={empEmploymentInfo}>
                            <GroupItem colCount={3}>
                                <Item dataField="joinDate" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Joined Date"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="resignDate" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Resigned Date"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item
                                    dataField="isActive"
                                    editorType="dxSelectBox"
                                    editorOptions={{
                                        items: [{ AutoID: 1, Name: 'Active' }, { AutoID: 0, Name: 'Inactive' }],
                                        searchEnabled: true,
                                        displayExpr: "Name",
                                        valueExpr: "AutoID",
                                    }}
                                >
                                    <Label text="Status"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                            </GroupItem>
                        </Form>
                    </Card.Body>
                </Card>
                <hr></hr>
                <Card style={{ width: '100%', paddingTop: '20px' }}>
                    <Card.Body>
                        <Card.Title><h6>Employement Information</h6></Card.Title>
                        <Card.Text></Card.Text>
                        <Form formData={empEmploymentInfo}>
                            <GroupItem colCount={3}>
                                <Item dataField="joinDate" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Joined Date"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="resignDate" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Resigned Date"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item
                                    dataField="isActive"
                                    editorType="dxSelectBox"
                                    editorOptions={{
                                        items: [{ AutoID: 1, Name: 'Active' }, { AutoID: 0, Name: 'Inactive' }],
                                        searchEnabled: true,
                                        displayExpr: "Name",
                                        valueExpr: "AutoID",
                                    }}
                                >
                                    <Label text="Is Active"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                            </GroupItem>
                        </Form>
                    </Card.Body>
                </Card>
                <hr></hr>
                <Navbar bg="light" variant="light" className="crud_panel_buttons">
                    <Button className="crud_panel_buttons" stylingMode="contained" type="success">Save</Button>
                    <Button className="crud_panel_buttons" stylingMode="contained" type="default">View List</Button>
                    <Button className="crud_panel_buttons" stylingMode="contained" type="default">Clear</Button>
                </Navbar>
            </div>
        </>
    )
}

export default EmployeeMaster