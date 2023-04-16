import React, { Component } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
//import { LoadPanel } from "devextreme-react/load-panel";
//import notify from "devextreme/ui/notify";
import { useState } from "react";
//import { SelectBox } from "devextreme-react";
import { Button } from 'devextreme-react/button';
//import { DateBox } from 'devextreme-react/calendar';

function CardForm() {

    const [budgetdefinition,setBudgetdefinition ] = useState({ fullName: 'Amandi Gunaratne', address: '11B, Ward Place, Colombo 07', phonenum: '0787843508' })

    const payMethod = [{ AutoID: 1, Name: 'Direct Bank Transfer' }, { AutoID: 2, Name: 'Card Payment' }]

    return (
        <>
            <div className={'content-block'}>
                <h2>Order Form</h2>
                <Form formData={budgetdefinition}>
                    <GroupItem colCount={2}>
                        <Item dataField="fullName" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Full Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="address" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Address"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="phonenum" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Phone Number"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                    </GroupItem>
                    <GroupItem colCount={2}>
                        <Item
                            dataField="paymentMethod"
                            editorType="dxSelectBox"
                            editorOptions={{
                                items: [{ AutoID: 1, Name: 'Direct Bank Transfer' }, { AutoID: 2, Name: 'Card Payment' }],
                                searchEnabled: true,
                                displayExpr: "Name",
                                valueExpr: "AutoID",
                            }}
                        >
                            <Label text="Payment Method"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        
                    </GroupItem>
                </Form>


                <Navbar bg="light" variant="light">
                    <Button stylingMode="contained" type="success">Confirm</Button>
                    <Button stylingMode="contained" type="default">Clear</Button>
                </Navbar>
            </div>
            
        </>
    )
}

export default CardForm