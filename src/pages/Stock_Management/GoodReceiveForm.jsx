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
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";

const  GoodReceiveForm = () => {

   /* let jstockReceiveInfo = {

    }*/

    const [stockReceiveInfo, setStockReceiveInfo] = useState({});

    //const productCategory = [{ AutoID: 1, Name: 'Automobile Tyres' }, { AutoID: 2, Name: 'Automobile Clean & Care' }, { AutoID: 3, Name: 'Automobile Spare Parts' }, { AutoID: 4, Name: 'Engine Oil & Lubricant'}, {AutoID:5, Name:'Automobile Lighting'}, {AutoID:6, Name:'Automobile Electronics'}]

    const onSaveBtnClick = (e) => {
        try {
          console.log(stockReceiveInfo);
    
          axios
            .post(`${API_BASE_URL}/api/receiveStock/add-receiveStock`, {
                ReceiveDetails: JSON.stringify(stockReceiveInfo),
             
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
                <h2><b>Good Receive Form</b></h2>
                <Form formData={stockReceiveInfo}>
                    <GroupItem colCount={2}>
                        <Item dataField="GoodReceiveID" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Good Receive ID"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="ReceivedDate" editorType="dxDateBox">
                            <Label text="Good Received Date"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="Supplier" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Supplier"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="PurchaseOrderNumber" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Purchase Order Number"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        
                        <Item dataField="ItemDescription" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Item Description"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item dataField="ReceivedQuantity" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Received Quantity"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item dataField="UnitPrice" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Unit Price"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item dataField="TotalCost" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Total Cost"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item
                  dataField="Condition"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: [

                      { AutoID: 0, Name: "New" },
                      { AutoID: 1, Name: "Used" },
                      { AutoID: 2, Name: "Damaged" },
                
                    ],
                    searchEnabled: true,
                    displayExpr: "Name",
                    valueExpr: "AutoID",
                  }}
                >
                  <Label text="Product Condition"></Label>
                  <RequiredRule message="Field required" />
                </Item>


                        <Item dataField="Comments" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Comments/Notes"></Label>
                          
                        </Item>
                    </GroupItem>
                    <GroupItem colCount={3}>

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
                    <Button stylingMode="contained" type="success" onClick={onSaveBtnClick}>Save</Button>
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

export default GoodReceiveForm