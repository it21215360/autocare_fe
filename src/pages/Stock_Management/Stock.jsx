import React, { Component } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
//import DataGrid, { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
import { LoadPanel } from "devextreme-react/load-panel";
import notify from "devextreme/ui/notify";
import { useState } from "react";
import { SelectBox } from "devextreme-react";
import { Button } from "devextreme-react/button";
import { DateBox } from "devextreme-react/calendar";
import DataGrid, {
  Column,
  SearchPanel,
  Editing,
  ValidationRule,
  RequiredRule,
} from "devextreme-react/data-grid";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";
import Storage from "./Storage";

const Stock = () => {
  //const [POrderDetails, setPOrderDetails] = useState({});
  const [stockOther] = [{}];
  const [stockDetails, setStockDetails] = useState({});
  const [pageProperties, setPageProperties] = useState({
    StorageID: 0,
    DataLoading: false,
    isDocReadOnly: false,
    UpdateMode: false,
  });

  // const productCategory = [{ AutoID: 1, Name: 'Automobile Tyres' }, { AutoID: 2, Name: 'Automobile Clean & Care' }, { AutoID: 3, Name: 'Automobile Spare Parts' }, { AutoID: 4, Name: 'Engine Oil & Lubricant' }, { AutoID: 5, Name: 'Automobile Lighting' }, { AutoID: 6, Name: 'Automobile Electronics' }]

  const [showList, setShowList] = useState(false);
  /*const currencyFormat = {
     style: "currency",
     currency: "LKR",
     useGrouping: true,
     minimumSignificantDigits: 3,
   };*/

  const onSaveBtnClick = (e) => {
    try {
      pageProperties.UpdateMode ? updateStock() : addStock();
    } catch (error) {
      console.error(error);
    }
  };

  const resetPageProperties = () => {
    setPageProperties({
      StorageID: 0,
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

  const updateStock = () => {
    try {
      if (pageProperties.StorageID > 0)
        axios
          .put(`${API_BASE_URL}/api/stock/update-stock`, {
            StorageID: pageProperties.StorageID,
            StockDetails: JSON.stringify(stockDetails),
          })
          .then((response) => {
            console.log(response);
            if (response.data.affectedRows === 1) {
              showSuccessAlert(`Stock Details Updated!`);
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

  const addStock = () => {
    try {
      axios
        .post(`${API_BASE_URL}/api/stock/add-stock`, {
          StockDetails: JSON.stringify(stockDetails),
        })
        .then((response) => {
          console.log(response);
          if (response.data.affectedRows > 0) {
            showSuccessAlert(`Stock Details Added!`);
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

  const OnLoadData = (stockId) => {
    try {
      axios
        .get(`${API_BASE_URL}/api/stock/get-stock`, {
          params: {
            InventoryID: stockId, //pageProperties.StockReturnID,
          },
        })
        .then((res) => {
          console.log(res.data);
          setStockDetails(res.data[0][0]);
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
    debugger;
    if (showList && viewListSelectedID != 0) {
      setShowList(!showList);
      setPageProperties({
        StorageID: viewListSelectedID,
        DataLoading: true,
        isDocReadOnly: true,
        UpdateMode: true,
      });

      OnLoadData(viewListSelectedID);
    }
  };

  const onClearBtnClick = () => {
    resetPageProperties();
    setStockDetails({});
  };

  return (
    <>
      {showList ? (
        <div className={"content-block"}>
          <Storage
            Show={showList}
            OnHide={onListClickEvent}
            HideTheList={onListClose}
          ></Storage>
        </div>
      ) : (
        <div className={"content-block"}>
          <h2>Stock</h2>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Text>
               You can add stock from here!
              </Card.Text>
              <Form formData={stockDetails}>
                <GroupItem colCount={3}>

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
                      { Name: "ATfederal" },
                      { Name: "ATminewa" },
                      { Name: "ATtoyo" },
                      { Name: "ACCbrake Oil" },
                      { Name: "ACCcoolant" },
                      { Name: "ACCexteriror Cleaner" },
                      { Name: "ACCwax Range" },
                      { Name: "ACCair Freshner" },
                      { Name: "ACCcar Polish" },
                      { Name: "ELmobil" },
                      { Name: "ELvalvoline" },
                      { Name: "ABpanasonic" },
                      { Name: "ABtATA Batteries" },
                      { Name: "AScabin Filter" },
                      { Name: "ASair Filter" },
                      { Name: "AShorns" },
                      { Name: "AEcar Alarm" },
                      { Name: "AEspeakers" },
                      { Name: "ALfog Lights" },
                      { Name: "ALhead Lights" },
                      { Name: "ALinterior Lights" },
                    ],
                    searchEnabled: true,
                    displayExpr: "Name",
                    valueExpr: "Name",
                  }}
                >
                  <Label text="Product Sub-Category"></Label>
                  <RequiredRule message="Field required" />
                </Item>
                  <Item dataField="ProductName" editorType="dxTextBox">
                    <Label text="Product Name"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="Quantity"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Quantity"></Label>
                    <RequiredRule message="Field required" />
                  </Item>        
        
                  <Item
                    dataField="UnitPrice"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Unit Price"></Label>
                    <RequiredRule message="Field required" />
                  </Item>

                  <Item
                    dataField="ReorderLevel"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Reorder Level"></Label>
                    <RequiredRule message="Field required" />
                  </Item>

                  <Item dataField="StoredDate" editorType="dxDateBox">
                  <Label text="Date"></Label>
                  <RequiredRule message="Field required" />
                </Item>

                </GroupItem>
              </Form>
              <br />
            </Card.Body>
          </Card>

          <Navbar bg="light" variant="light" className="crud_panel_buttons">
            <Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="success"
              onClick={onSaveBtnClick}
            >
              {pageProperties.UpdateMode ? "Save Changes" : "Submit"}
            </Button>
            <Button
              stylingMode="contained"
              type="default"
              onClick={() => setShowList(true)}
            >
              View Stock List
            </Button>
            <Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="default"
              onClick={onClearBtnClick}
            >
              Clear
            </Button>
          </Navbar>
        </div>
      )}
      {/* 
                <List
                    Show={this.state.isListViewing}
                    OnHide={this.OnListClickEvent}
                    BudgetDefinitionList={this.state.BudgetDefinitionList}
                ></List> */}
    </>
  );
};

export default Stock;
