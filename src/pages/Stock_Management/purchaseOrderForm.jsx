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

const PurchaseOrderForm = () => {

    const [POrderDetails, setPOrderDetails] = useState({ companyName: 'Vegan Holdings(Pvt) Limited', orderID: 1001, supplierName: 'Carmart(Pvt) Limited', productName: 'Brake Oil', quantity: 100, billingAddress: '19,Galle Road, Colombo 04', orderDate: '02/14/2023' })

    const productCategory = [{ AutoID: 1, Name: 'Automobile Tyres' }, { AutoID: 2, Name: 'Automobile Clean & Care' }, { AutoID: 3, Name: 'Automobile Spare Parts' }, { AutoID: 4, Name: 'Engine Oil & Lubricant' }, { AutoID: 5, Name: 'Automobile Lighting' }, { AutoID: 6, Name: 'Automobile Electronics' }]


    return (
        <>
            <div className={'content-block'}>
                <h2>Purchase Order</h2>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title><h6>Purchase Order Header</h6></Card.Title>
                        <Card.Text>
                            We can place the purchase order here. User should be able to add multiple orders for the same supplier. therefore we have to use a datagrid with this form
                        </Card.Text>
                        <Form formData={POrderDetails}>
                            <GroupItem colCount={2}>
                                <Item dataField=" orderID" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Order #"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <EmptyItem></EmptyItem>
                                <Item dataField="orderDate" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Order Date"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="estdDliveryDate" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Est. Delivery Date"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="supplierName" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Supplier"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <EmptyItem></EmptyItem>
                                <Item
                                    dataField="productCategory"
                                    editorType="dxSelectBox"
                                    editorOptions={{
                                        items: [{ AutoID: 1, Name: 'Automobile Tyres' }, { AutoID: 2, Name: 'Automobile Clean & Care' }, { AutoID: 3, Name: 'Automobile Spare Parts' }, { AutoID: 4, Name: 'Engine Oil & Lubricant' }, { AutoID: 5, Name: 'Automobile Lighting' }, { AutoID: 6, Name: 'Automobile Electronics' }],
                                        searchEnabled: true,
                                        displayExpr: "Name",
                                        valueExpr: "AutoID",
                                    }}
                                >
                                    <Label text="Product Catogory"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item
                                    dataField="productSubCategory"
                                    editorType="dxSelectBox"
                                    editorOptions={{
                                        items: [{ AutoID: 1, Name: 'Kelani Tyres' }, { AutoID: 2, Name: 'DSI' }, { AutoID: 3, Name: 'Michelin' }],
                                        searchEnabled: true,
                                        displayExpr: "Name",
                                        valueExpr: "AutoID",
                                    }}
                                >
                                    <Label text="Product Sub-Catogory"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item
                                    dataField="product"
                                    editorType="dxSelectBox"
                                    editorOptions={{
                                        items: [{ AutoID: 1, Name: '265/70R17 115T' }, { AutoID: 2, Name: '265/60R17 115T' }, { AutoID: 3, Name: '250/70R16 115T' }],
                                        searchEnabled: true,
                                        displayExpr: "Name",
                                        valueExpr: "AutoID",
                                    }}
                                >
                                    <Label text="Product"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="quantity" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Order Quantity"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="rate" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Rate"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="TotalAmount" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Total Amount"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                            </GroupItem>
                        </Form>
                    </Card.Body>
                </Card>

                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title><h6>Purchase Order Details</h6></Card.Title>
                        <Card.Text></Card.Text>
                        <DataGrid></DataGrid>
                    </Card.Body>
                </Card>
                <hr></hr>
                <Navbar bg="light" variant="light" className="crud_panel_buttons">
                    <Button className="crud_panel_buttons" stylingMode="contained" type="success">Save</Button>
                    <Button className="crud_panel_buttons" stylingMode="contained" type="default">View List</Button>
                    <Button className="crud_panel_buttons" stylingMode="contained" type="default">Clear</Button>
                </Navbar>
            </div>
            {/* 
                <List
                    Show={this.state.isListViewing}
                    OnHide={this.OnListClickEvent}
                    BudgetDefinitionList={this.state.BudgetDefinitionList}
                ></List> */}

        </>
    )
}

export default PurchaseOrderForm