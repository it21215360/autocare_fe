import React, { Component } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule } from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
import DataGrid, { Column, ValidationRule } from 'devextreme-react/data-grid';
//import { LoadPanel } from "devextreme-react/load-panel";
import { useState } from "react";
//import { SelectBox } from "devextreme-react";
import { Button } from 'devextreme-react/button';
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";

const CardForm = () => {

    const [budgetdefinition,setBudgetdefinition ] = useState({ /*fullName: 'Amandi Gunaratne', address: '11B, Ward Place, Colombo 07', phonenum: '0787843508' */})

    const payMethod = [{ AutoID: 1, Name: 'Direct Bank Transfer' }, { AutoID: 2, Name: 'Card Payment' }]

    const [cartItem] = [{AutoID: 1, ProdID: 23, ProductCategory:'Automobile Clean and Care', ProductName: 'Carseat', UnitPrice: '385', Quantity: '3', TotalPrice: '1128'}]

    const onSaveBtnClick = (e) => {
        try {
          console.log(budgetdefinition);
    
          axios
            .post(`${API_BASE_URL}/api/order/add-orderdet`, {
                OrderDetails: JSON.stringify(budgetdefinition),
             
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
                <h2>Order Form</h2>
                <Form formData={budgetdefinition}>
                    <GroupItem colCount={2}>
                    {/*<Item dataField="CustomerID" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Customer ID"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="CartID" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Cart ID"></Label>
                            <RequiredRule message="Field required" />
                    </Item> */}
                        <Item dataField="FName" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="First Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="LName" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Last Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="Address" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Address"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="City" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="City"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="PhoneNum" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Phone Number"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="Email" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Email"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                    </GroupItem>
                    <GroupItem colCount={2}>
                        <Item
                            dataField="PayMethod"
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
   
       <React.Fragment>

        
           <div className={'content-block'}>
               <h5><b>Ordered Items</b></h5>
               <DataGrid id='sample'
                   dataSource={cartItem}
                   rowAlternationEnabled={true}
                   showBorders={true}>

                   <Column dataField='ProdID' caption='Product ID' dataType='string'><ValidationRule type="hidden" /></Column>
                   <Column dataField='ProductCategory' caption='Product  Category' dataType='string'><ValidationRule type="required" /></Column>
                   <Column dataField='ProductName' caption='Product' dataType='string'><ValidationRule type="required" /></Column>
                   <Column dataField='Price' caption='Price' dataType='float'><ValidationRule type="required" /></Column>
                   <Column dataField='Qty' caption='Quantity' dataType='int'><ValidationRule type="required" /></Column>
                   <Column dataField='SubTotal' caption='Total' dataType='float'><ValidationRule type="required" /></Column>

               </DataGrid>
               <br></br>
           </div>
       </React.Fragment>


                <Navbar bg="light" variant="light">
                    <Button stylingMode="contained" type="success" onClick={onSaveBtnClick}>Confirm</Button>
                    <Button stylingMode="contained" type="default">Clear</Button>
                </Navbar>
            </div>
            
        </>
    )
}

export default CardForm