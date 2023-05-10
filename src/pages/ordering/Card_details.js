import React, { Component } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { PatternRule, RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
import { LoadPanel } from "devextreme-react/load-panel";
import notify from "devextreme/ui/notify";
import { useState } from "react";
import { SelectBox } from "devextreme-react";
import { Button } from "devextreme-react/button";
import { DateBox } from "devextreme-react/calendar";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL  } from '../../appconfig/config.js';


function CardPayForm() {
  const [cardPayInfo, setCardPayInfo] = useState({});
  const [pageProperties, setPageProperties] = useState({
    PayID: 0,
    DataLoading: false,
    isDocReadOnly: false,
    UpdateMode: false,
  });

  const resetPageProperties = () => {
    setPageProperties({
      PayID: 0,
      DataLoading: false,
      isDocReadOnly: false,
      UpdateMode: false,
    });
  };

  const onClearBtnClick = () => {
    resetPageProperties();
    setCardPayInfo({});
  };

  const showErrorAlert = (errorMsg) => {
    notify(
      {
        message: errorMsg.toString(),
        width: 450,
      },
      "error",
      3000
    );
  };

  const showSuccessAlert = (successMsg) => {
    notify(
      {
        message: successMsg.toString(),
        width: 450,
      },
      "success",
      3000
    );
  };

  const onSaveBtnClick = (e) => {
    try{
      console.log(cardPayInfo);
  
      axios  
        .post(`${API_BASE_URL}/api/order/cardpay`, {
          cardPayDet: JSON.stringify(cardPayInfo)
        })
        .then((response) => {
          console.log(response);
          if (response.data.affectedRows > 0) {
            showSuccessAlert(`Payment Successful`);
          }
        }) 
        .catch((error) => {});
      }catch (error) {
        console.error(error);
      }
  };




  return (
    <>
      <div className={"content-block"}>
        <h2>Card Details</h2>
        <Form formData={cardPayInfo}>
        <GroupItem colCount={2}>
        <Item
              dataField="CardHolderName"
              editorType="dxTextBox"
              editorOptions={{
                readOnly: false,
              }}
            >
              <Label text="CardHolder Name"></Label>
              <RequiredRule message="Field required" />
            </Item>
            <Item
              dataField="CardType"
              editorType="dxSelectBox"
              editorOptions={{
                items: [
                  { AutoID: 1, Name: "Credit Card" },
                  { AutoID: 2, Name: "Debit Card" },
                ],
                searchEnabled: true,
                displayExpr: "Name",
                valueExpr: "Name",
              }}
            >
              <Label text="CardType"></Label>
              <RequiredRule message="Field required" />
            </Item>
          </GroupItem>
          <GroupItem colCount={2}>
            <Item
              dataField="ExpirationDate"
              editorType="dxDateBox"
              editorOptions={{
                readOnly: false,
              }}
            >
              <Label text="ExpirationDate"></Label>
              <RequiredRule message="Field required" />
            </Item>
            <Item
              dataField="ZipCode"
              editorType="dxTextBox"
              editorOptions={{
                readOnly: false,
              }}
            >
              <Label text="Zip Code"></Label>
              <RequiredRule message="Field required" />
              <PatternRule
                message="Zip code must contain 3 digits"
                pattern="^\d{3}$"
  />
            </Item>
          </GroupItem>
          <Item
              dataField="BillingAddress"
              editorType="dxTextBox"
              editorOptions={{
                readOnly: false,
              }}
            >
              <Label text="Billing Address"></Label>
              <RequiredRule message="Field required" />
            </Item>
        </Form>

        <Navbar bg="light" variant="light">
          <Button 
          className="crud_panel_buttons"
          stylingMode="contained" 
          type="success"
          onClick={onSaveBtnClick}>
            Confirm
          </Button>
          <Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="default"
              onClick={onClearBtnClick}
            >
              Clear
            </Button>
            {/*<Link to="/ordering/Invoice">
            <Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="default"
            >
              View Invoice  
            </Button></Link>*/}
        </Navbar>
      </div>
    </>
  );
}

export default CardPayForm;
