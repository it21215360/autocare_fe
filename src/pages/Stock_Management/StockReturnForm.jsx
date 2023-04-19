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
import './stockReturn.scss';
import { API_BASE_URL } from "../../appconfig/config";
import  ReturnStockList from "./ReturnStockList";


const  StockReturnForm = () => {

   /* let jstockReturnInfo = {

    }*/

    const [stockReturnInfo, setStockReturnInfo] = useState({});
    const [pageProperties, setPageProperties] = useState({
      StockReturnID : 0,
      DataLoading: false,
      isDocReadOnly: false,
      UpdateMode: false,
    });

    const [showList, setShowList] = useState(false);
    /*const currencyFormat = {
      style: "currency",
      currency: "LKR",
      useGrouping: true,
      minimumSignificantDigits: 3,
    };*/

    const onSaveBtnClick = (e) => {
        try {
          pageProperties.UpdateMode ? updateReturnStock() : addReturnStock();
         
            } catch (error) {
          console.error(error);
        }
      };

      const resetPageProperties = () => {
        setPageProperties({
          StockReturnID: 0,
          DataLoading: false,
          isDocReadOnly: false,
          UpdateMode: false,
        });
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

      const updateReturnStock = () => {
        try {
          if (pageProperties.StockReturnID > 0)
            axios
              .put(`${API_BASE_URL}/api/returnStock/update-returnStock`, {
                StockReturnID: pageProperties.StockReturnID,
                ReturnDetails : JSON.stringify(stockReturnInfo),
               
              })
              .then((response) => {
                console.log(response);
                if (response.data.affectedRows === 1) {
                  showSuccessAlert(`Returned Stock Details Updated!`);
                }
              })
              .catch((error) => {
                showErrorAlert(error);
              });
        } catch (error) {
          console.error(error);
          showErrorAlert(error);
        }
      };
    
      const addReturnStock  = () => {
        try {
          axios
            .post(`${API_BASE_URL}/api/returnStock/add-returnStock`, {
              ReturnDetails: JSON.stringify(stockReturnInfo),
             
            })
            .then((response) => {
              console.log(response);
              if (response.data.affectedRows > 0) {
                showSuccessAlert(`Returned Stock Details Added!`);
                onClearBtnClick();
              }
            })
            .catch((error) => {
              showErrorAlert(error);
            });
        } catch (error) {
          console.error(error);
          showErrorAlert(error);
        }
      };

      const OnLoadData = (returnId) => {
        try {
          axios
            .get(`${API_BASE_URL}/api/returnStock/get-returnStock`, {
              params: {
                ReturnID: returnId, //pageProperties.StockReturnID,
              },
            })
            .then((res) => {
              console.log(res.data);
    
              setStockReturnInfo(res.data[0][0]);
             
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.error(error);
        }
      };

      const onListClose = () => {
        setShowList(false);
      };

      const onListClickEvent = (viewListSelectedID) => {
     
        if (showList && viewListSelectedID != 0) {
          setShowList(!showList);
          setPageProperties({
            StockReturnID: viewListSelectedID,
            DataLoading: true,
            isDocReadOnly: true,
            UpdateMode: true,
          });
          
      OnLoadData(viewListSelectedID);
    }
  };

  const onClearBtnClick = () => {
    resetPageProperties();
    setStockReturnInfo({});
   
  };

    return (
        <>

{showList ? (
        <div className={"content-block"}>
          <ReturnStockList
            Show={showList}
            OnHide={onListClickEvent}
            HideTheList={onListClose}
          ></ReturnStockList>
        </div>
      ) : (

            <div className={'he1'}>
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
                      { Name: "Automobile Tyres" },
                      { Name: "Automobile Care and Clean" },
                      { Name: "Engine Oil and Lubricants" },
                      { Name: "Automobile Batteries" },
                      { Name: "Automobile Spare Parts" },
                      { Name: "Automobile Electronics" },
                      { Name: "Automobile Lighting" },

                    ],
                    searchEnabled: true,
                    displayExpr: "Name",
                    valueExpr: "Name",
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
                      {  Name: "ATfederal" },
                      {  Name: "ATminewa"},
                      {  Name: "ATtoyo"},
                      {  Name: "ACCbrake Oil" },
                      {  Name: "ACCcoolant" },
                      {  Name: "ACCexteriror Cleaner" },
                      {  Name: "ACCwax Range" },
                      {  Name: "ACCair Freshner" },
                      {  Name: "ACCcar Polish" },
                      {  Name: "ELmobil" },
                      {  Name: "ELvalvoline" },
                      {  Name: "ABpanasonic" },
                      {  Name: "ABtATA Batteries" },
                      {  Name: "AScabin Filter" },
                      {  Name: "ASair Filter" },
                      {  Name: "AShorns" },
                      {  Name: "AEcar Alarm" },
                      {  Name: "AEspeakers" },
                      {  Name: "ALfog Lights" },
                      {  Name: "ALhead Lights" },
                      {  Name: "ALinterior Lights" }
                    ],
                    searchEnabled: true,
                    displayExpr: "Name",
                    valueExpr: "Name",
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
                    <Button className="btn1" stylingMode="contained" type="success" onClick={onSaveBtnClick}> {pageProperties.UpdateMode ? "Save Changes" : "Submit"}</Button>
                    <Button className="btn2" stylingMode="contained" type="default" onClick={() => setShowList(true)}>View List</Button>
                    <Button className="btn3" stylingMode="contained" type="default" onClick={onClearBtnClick}>Clear</Button>
                </Navbar>
            </div>
              )}
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