import React, { useState } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule } from "devextreme-react/data-grid";
import { Navbar } from "react-bootstrap";
import 'devextreme/dist/css/dx.light.css';
import { Button } from 'devextreme-react';

function ReturnProduct() {
  const [budgetdefinition, setBudgetdefinition] = useState({
    fullName: "Amandi Gunaratne",
    address: "11B, Ward Place, Colombo 07",
    phonenum: "0787843508",
  });

  const payMethod = [
    { AutoID: 1, Name: "Direct Bank Transfer" },
    { AutoID: 2, Name: "Card Payment" },
  ];

  return (
    <>
      { <div className={'content-block'}>
                <h2>Return Product Details</h2>
                <Form formData={budgetdefinition}>
                    <GroupItem colCount={1}>
                        <Item dataField="ProductName" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Product Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="Ordernumber" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Order number"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="Reason" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Reason for returning"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="Paymentno" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Payment Invoice No"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                    </GroupItem>
                </Form>


                <Navbar bg="light" variant="light">
                    <Button stylingMode="contained" type="success">Confirm</Button>
                    <Button stylingMode="contained" type="default">Clear</Button>
                </Navbar>
            </div> }
    </>
  );
}

export default ReturnProduct;
