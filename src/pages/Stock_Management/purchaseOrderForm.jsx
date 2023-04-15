import React, { Component } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
//import DataGrid, { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
import { LoadPanel } from "devextreme-react/load-panel";
import notify from "devextreme/ui/notify";
import { useState } from "react";
import { SelectBox } from "devextreme-react";
import { Button } from 'devextreme-react/button';
import { DateBox } from 'devextreme-react/calendar';
import DataGrid, { Column, SearchPanel, Editing, ValidationRule, RequiredRule } from 'devextreme-react/data-grid';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";

const PurchaseOrderForm = () => {

    const [POrderDetails, setPOrderDetails] = useState({});
    const [POther] = [{}];
   // const productCategory = [{ AutoID: 1, Name: 'Automobile Tyres' }, { AutoID: 2, Name: 'Automobile Clean & Care' }, { AutoID: 3, Name: 'Automobile Spare Parts' }, { AutoID: 4, Name: 'Engine Oil & Lubricant' }, { AutoID: 5, Name: 'Automobile Lighting' }, { AutoID: 6, Name: 'Automobile Electronics' }]

    const onSaveBtnClick = (e) => {
        try {
          console.log(POrderDetails);
    
          axios
            .post(`${API_BASE_URL}/api/stockOrder/add-stockOrder`, {

                PurchaseOrderInfo : JSON.stringify(POrderDetails),
             
            })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {});
        } catch (error) {
          console.error(error);
        }
      };
    

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
                                <Item dataField=" OrderID" editorType="dxTextBox" editorOptions={{
                                    readOnly: true,
                                }}>
                                    <Label text="Order #"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <EmptyItem></EmptyItem>
                                <Item dataField="OrderDate" editorType="dxDateBox">
                                    <Label text="Order Date"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="EstdDeliveryDate" editorType="dxDateBox">
                                    <Label text="Est. Delivery Date"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="Supplier" editorType="dxTextBox" editorOptions={{
                                    readOnly: false,
                                }}>
                                    <Label text="Supplier"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <EmptyItem></EmptyItem>
                                <Item
                                    dataField="ProductCategory"
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
                                    dataField="ProductSubCategory"
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
                                    dataField="Product"
                                    editorType="dxSelectBox"
                                    editorOptions={{
                                        items: [{ AutoID: 1, Name: 'TR/001ST' }, { AutoID: 2, Name: 'TR/002ST' }, { AutoID: 3, Name: 'TR/003ST' }],
                                        searchEnabled: true,
                                        displayExpr: "Name",
                                        valueExpr: "AutoID",
                                    }}
                                >
                                    <Label text="Product Name"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="Quantity" editorType="dxTextBox" editorOptions={{
                                    readOnly: false,
                                }}>
                                    <Label text="Order Quantity"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                                <Item dataField="Rate" editorType="dxTextBox" editorOptions={{
                                    readOnly: false,
                                }}>
                                    <Label text="Rate"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>

  
                                <Item dataField="UnitPrice" editorType="dxTextBox" editorOptions={{
                                    readOnly: false,
                                }}>
                                    <Label text="Unit Price"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>

                                <Item dataField="TotalAmount" editorType="dxTextBox" editorOptions={{
                                    readOnly: false,
                                }}>
                                    <Label text="Total Amount"></Label>
                                    <RequiredRule message="Field required" />
                                </Item>
                            </GroupItem>
                        </Form>
                        <br/>
                    </Card.Body>
                </Card>

                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title><h6>Purchase Order Details</h6></Card.Title>
                        <Card.Text>You can purchase multiple products at the same time from the same supplier here. </Card.Text>
                      <br/>
                      <DataGrid id='sample'
                    dataSource={POther}
                    rowAlternationEnabled={true}
                    showBorders={true}>
                    <SearchPanel visible={true} highlightCaseSensitive={true} />

                    <Editing
                        mode="popup"
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true} />

                  
                    <Column dataField='ProductCategory' caption='Product Category' dataType='string'><ValidationRule type="required" /></Column>
                    <Column dataField='ProductSubCategory' caption='Product Sub-Category' dataType='string'><ValidationRule type="required" /></Column>
                    <Column dataField='ProductName' caption='Product Name' dataType='string'><ValidationRule type="required" /></Column>
                    <Column dataField='Quantity' caption='Quantity' dataType='int'><ValidationRule type="required" /></Column>
                    <Column dataField='Rate' caption='Rate' dataType='int'><ValidationRule type="required" /></Column>
                    <Column dataField='UnitPrice' caption='Unit Price' dataType='double'><ValidationRule type="required" /></Column>
                    <Column dataField='TotalAmount' caption='Total Amount' dataType='double'><ValidationRule type="required" /></Column>
                </DataGrid>
                     
                </Card.Body>
                </Card>
                <br/><br/>
                <Navbar bg="light" variant="light" className="crud_panel_buttons">
                    <Button className="crud_panel_buttons" stylingMode="contained" type="success" onClick={onSaveBtnClick}>Save</Button>
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