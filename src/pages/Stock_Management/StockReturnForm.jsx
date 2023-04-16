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

const  StockReturnForm = () => {

   /* let jstockReturnInfo = {

    }*/

    const [stockReturnInfo, setStockReturnInfo] = useState({});

    const onSaveBtnClick = (e) => {
        try {
          console.log(stockReturnInfo);
         
    
          axios
            .post(`${API_BASE_URL}/api/returnStock/add-returnStock`, {
              ReturnDetails : JSON.stringify(stockReturnInfo),
              
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
                <h2><b>Stock Return Form</b></h2>
                <Form formData={stockReturnInfo}>
                    <GroupItem colCount={2}>
                        <Item dataField="StockReturnID" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Return ID"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item
                  dataField="ProductCategory"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: [
                      { AutoID: 0, Name: "Automobile Tyres" },
                      { AutoID: 1, Name: "Automobile Care and Clean" },
                      { AutoID: 2, Name: "Engine Oil and Lubricants" },
                      { AutoID: 3, Name: "Automobile Batteries" },
                      { AutoID: 4, Name: "Automobile Spare Parts" },
                      { AutoID: 5, Name: "Automobile Electronics" },
                      { AutoID: 6, Name: "Automobile Lighting" },

                    ],
                    searchEnabled: true,
                    displayExpr: "Name",
                    valueExpr: "AutoID",
                  }}
                >
                  <Label text="Product Category"></Label>
                  <RequiredRule message="Field required" />
                </Item>

                <Item
                  dataField="ProductSubCategory"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: [
                      { AutoID: 0, Name: "ATfederal" },
                      { AutoID: 1, Name: "ATminewa" },
                      { AutoID: 2, Name: "ATtoyo" },
                      { AutoID: 3, Name: "ACCbrake Oil" },
                      { AutoID: 4, Name: "ACCcoolant" },
                      { AutoID: 5, Name: "ACCexteriror Cleaner" },
                      { AutoID: 6, Name: "ACCwax Range" },
                      { AutoID: 7, Name: "ACCair Freshner" },
                      { AutoID: 8, Name: "ACCcar Polish" },
                      { AutoID: 9, Name: "ELmobil" },
                      { AutoID: 10, Name: "ELvalvoline" },
                      { AutoID: 11, Name: "ABpanasonic" },
                      { AutoID: 12, Name: "ABtATA Batteries" },
                      { AutoID: 13, Name: "AScabin Filter" },
                      { AutoID: 14, Name: "ASair Filter" },
                      { AutoID: 15, Name: "AShorns" },
                      { AutoID: 16, Name: "AEcar Alarm" },
                      { AutoID: 17, Name: "AEspeakers" },
                      { AutoID: 18, Name: "ALfog Lights" },
                      { AutoID: 19, Name: "ALhead Lights" },
                      { AutoID: 20, Name: "ALinterior Lights" },


                    ],
                    searchEnabled: true,
                    displayExpr: "Name",
                    valueExpr: "AutoID",
                  }}
                >
                  <Label text="Product Sub-Category"></Label>
                  <RequiredRule message="Field required" />
                </Item>


                        <Item dataField="Product" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>


                            <Label text="Product"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        
                        <Item dataField="Quantity" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Quantity"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="ReturningReason" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Returning Reason"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        
                        <Item dataField="ReturnDate" editorType="dxDateBox">
                            <Label text="Return Date"></Label>
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
                    <Button stylingMode="contained" type="success"  onClick={onSaveBtnClick}>Submit</Button>
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
    );
};

export default StockReturnForm