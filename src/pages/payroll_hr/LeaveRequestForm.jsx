
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

const LeaveRequestForm = () => {

    let jBudgetDefinition = {

    }

    const [budgetdefinition, setBudgetdefinition] = useState({ fullName: 'Shamith Rosa', employeeId: 200202, empDepartment: 'IT Department', leaveFrom: '2022/10/21', dayCount: 2, leaveTo: '2022/10/23' })

    const leaveCategory = [{ AutoID: 1, Name: 'Casual Leave' }, { AutoID: 2, Name: 'Annual Leave' }, { AutoID: 3, Name: 'Comp Leave' }, { AutoID: 4, Name: 'Comp Leave' }]

    return (
        <>
            <div className={'content-block'}>
                <h2>Emplyee Leave Request Form</h2>
                <Form formData={budgetdefinition}>
                    <GroupItem colCount={3}>
                        <Item dataField="fullName" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Full Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="employeeId" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Employee Id"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="empDepartment" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Employee Department"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                    </GroupItem>
                    <GroupItem colCount={3}>
                        <Item
                            dataField="leaveCategory"
                            editorType="dxSelectBox"
                            editorOptions={{
                                items: [{ AutoID: 1, Name: 'Casual Leave' }, { AutoID: 2, Name: 'Annual Leave' }, { AutoID: 3, Name: 'Comp Leave' }, { AutoID: 4, Name: 'Comp Leave' }],
                                searchEnabled: true,
                                displayExpr: "Name",
                                valueExpr: "AutoID",
                            }}
                        >
                            <Label text="Leave Type"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="leaveFrom">
                            <Label text="Leave From"></Label>
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
                        <Item dataField="leaveTo">
                            <Label text="Leave To"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="dayCount" editorOptions={{ readOnly: true }}>
                            <RequiredRule message="Field required" />
                        </Item>

                        {/* <Item dataField="DefinitionCode" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Code"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="Title" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Title"></Label>
                            <RequiredRule message="Field required" />
                        </Item> */}
                    </GroupItem>
                </Form>


                <Navbar bg="light" variant="light">
                    <Button stylingMode="contained" type="success">Save</Button>
                    <Button stylingMode="contained" type="default">Clear</Button>
                </Navbar>
            </div>
            {/* <LoadPanel
                message="Processing.... Please, wait..."
                shadingColor="rgba(0,0,0,0.4)"
                onHiding={this.onLoadPanelHiding}
                visible={this.state.LoadPanelVisible}
                showIndicator={true}
                shading={true}
                showPane={true}
                closeOnOutsideClick={false}
                width={500}
            /> */}
            {/* 
                <List
                    Show={this.state.isListViewing}
                    OnHide={this.OnListClickEvent}
                    BudgetDefinitionList={this.state.BudgetDefinitionList}
                ></List> */}

        </>
    )
}

export default LeaveRequestForm