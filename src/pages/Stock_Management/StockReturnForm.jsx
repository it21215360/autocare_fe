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
                        <Item dataField="returnID" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Return ID"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item
                  dataField="productCategory"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: [
                      { AutoID: 0, Name: "AT - Automobile Tyres" },
                      { AutoID: 1, Name: "ACC - Automobile Care & Clean" },
                      { AutoID: 2, Name: "EL - Engine Oil & Lubricants" },
                      { AutoID: 3, Name: "AB - Automobile Batteries" },
                      { AutoID: 4, Name: "AS - Automobile Spare Parts" },
                      { AutoID: 5, Name: "AE - Automobile Electronics" },
                      { AutoID: 6, Name: "AL - Automobile Lighting" },

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
                  dataField="productSubCategory"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: [
                      { AutoID: 0, Name: "AT/Federal" },
                      { AutoID: 1, Name: "AT/Minewa" },
                      { AutoID: 2, Name: "AT/Toyo" },
                      { AutoID: 3, Name: "ACC/Brake Oil" },
                      { AutoID: 4, Name: "ACC/Coolant" },
                      { AutoID: 5, Name: "ACC/Exteriror Cleaner" },
                      { AutoID: 6, Name: "ACC/Wax Range" },
                      { AutoID: 7, Name: "ACC/Air Freshner" },
                      { AutoID: 8, Name: "ACC/Car Polish" },
                      { AutoID: 9, Name: "EL/Mobil" },
                      { AutoID: 10, Name: "EL/Valvoline" },
                      { AutoID: 11, Name: "AB/Panasonic" },
                      { AutoID: 12, Name: "AB/TATA Batteries" },
                      { AutoID: 13, Name: "AS/Cabin Filter" },
                      { AutoID: 14, Name: "AS/Air Filter" },
                      { AutoID: 15, Name: "AS/Horns" },
                      { AutoID: 16, Name: "AE/Car Alarm" },
                      { AutoID: 17, Name: "AE/Speakers" },
                      { AutoID: 18, Name: "AL/Fog Lights" },
                      { AutoID: 19, Name: "AL/Head Lights" },
                      { AutoID: 20, Name: "AL/Interior Lights" },


                    ],
                    searchEnabled: true,
                    displayExpr: "Name",
                    valueExpr: "AutoID",
                  }}
                >
                  <Label text="Product Sub-Category"></Label>
                  <RequiredRule message="Field required" />
                </Item>


                        <Item dataField=" product " editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>


                            <Label text="Product"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        
                        <Item dataField="quantity" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Quantity"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="reasonToReturn" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Returning Reason"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        
                        <Item dataField="returnDate" editorType="dxDateBox">
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