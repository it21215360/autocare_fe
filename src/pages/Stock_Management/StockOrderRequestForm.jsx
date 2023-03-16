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

const  StockOrderRequestForm = () => {

    let jBudgetDefinition = {

    }

    const [budgetdefinition, setBudgetdefinition] = useState({ companyName: 'Vegan Holdings(Pvt) Limited', orderID: 1001, supplierName: 'Carmart(Pvt) Limited', productName: 'Brake Oil', quantity: 100, billingAddress: '19,Galle Road, Colombo 04', orderDate:'02/14/2023'})

    const productCategory = [{ AutoID: 1, Name: 'Automobile Tyres' }, { AutoID: 2, Name: 'Automobile Clean & Care' }, { AutoID: 3, Name: 'Automobile Spare Parts' }, { AutoID: 4, Name: 'Engine Oil & Lubricant'}, {AutoID:5, Name:'Automobile Lighting'}, {AutoID:6, Name:'Automobile Electronics'}]


    return (
        <>
            <div className={'content-block'}>
                <h2><b>Stock Order Request Form</b></h2>
                <Form formData={budgetdefinition}>
                    <GroupItem colCount={2}>
                        <Item dataField="companyName" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Company Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField=" orderID" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Order Id"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="supplierName" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Supplier Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="productName" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Product Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="quantity" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Product Quantity"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="billingAddress" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Billing Address"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="orderDate" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Order Date"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                    </GroupItem>
                    <GroupItem colCount={3}>
                        <Item
                            dataField="productCategory"
                            editorType="dxSelectBox"
                            editorOptions={{
                                items: [{ AutoID: 1, Name: 'Automobile Tyres' }, { AutoID: 2, Name: 'Automobile Clean & Care' }, { AutoID: 3, Name: 'Automobile Spare Parts' }, { AutoID: 4, Name: 'Engine Oil & Lubricant'}, {AutoID:5, Name:'Automobile Lighting'}, {AutoID:6, Name:'Automobile Electronics'}],
                                searchEnabled: true,
                                displayExpr: "Name",
                                valueExpr: "AutoID",
                            }}
                        >
                            <Label text="Product Catogory"></Label>
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
                    <Button stylingMode="contained" type="success">Submit</Button>
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

export default StockOrderRequestForm