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

const  GoodReceiveForm = () => {

    let jBudgetDefinition = {

    }

    const [budgetdefinition, setBudgetdefinition] = useState({goodReceiveID: 'GR01', receivedDate:'01/04/2023', supplier:'Carmart(Pvt) Limited', purchaseOrderNumber:'1001',itemDescription:'Brake Oil in Engine Oil and Lubricants product catogory',receivedQuantity: 250 ,unitPrice: 3500.00,totalCost:875000.00 ,condition:"New" ,comments:"Unpacked and checked the quality of the brake oil"})

    //const productCategory = [{ AutoID: 1, Name: 'Automobile Tyres' }, { AutoID: 2, Name: 'Automobile Clean & Care' }, { AutoID: 3, Name: 'Automobile Spare Parts' }, { AutoID: 4, Name: 'Engine Oil & Lubricant'}, {AutoID:5, Name:'Automobile Lighting'}, {AutoID:6, Name:'Automobile Electronics'}]


    return (
        <>
            <div className={'content-block'}>
                <h2><b>Good Receive Form</b></h2>
                <Form formData={budgetdefinition}>
                    <GroupItem colCount={2}>
                        <Item dataField="goodReceiveID" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Good Receive ID"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="receivedDate" editorType="dxDateBox">
                            <Label text="Good Received Date"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="supplier" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Supplier"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="purchaseOrderNumber" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Purchase Order Number"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        
                        <Item dataField="itemDescription" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Item Description"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item dataField="receivedQuantity" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Received Quantity"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item dataField="unitPrice" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Unit Price"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item dataField="totalCost" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Total Cost"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item dataField="condition" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Product Condition (New/Used/Damaged)"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item dataField="comments" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Comments/Notes"></Label>
                            <RequiredRule message="Field required" />
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

export default GoodReceiveForm