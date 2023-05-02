import React, { Component, Fragment, useEffect, useState } from "react";
import "devextreme/dist/css/dx.light.css";
import DataGrid, {
  Column,
  SearchPanel,
  Editing,
  ValidationRule,
} from "devextreme-react/data-grid";
import { Button } from "devextreme-react";
import { Navbar, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";

const Ordersdet = (props) => {
  const [selectedID, setSelectedID] = useState(0);
  const [order, setOrder] = useState([]);
  const [isLoadingData, setIsdataLoading] = useState(true);
  const fetchURL = `${API_BASE_URL}/api/order/list-orders`;

  useEffect(() => {
    if (isLoadingData)
      axios.get(fetchURL).then((response) => {
        console.log(response);
        setOrder(response.data);
        setIsdataLoading(false);
      });
  }, []);

  const onSelectClick = (e) => {
    props.OnHide(selectedID);
  };

  const onCloseClick = (e) => {
    props.HideTheList();
  };

  const onSelectionChanged = (e) => {
    setSelectedID(e.selectedRowsData[0].OrderID);
  };

  //const order = [{ AutoID: 1, ProdID: 2, ProductCatID: 5, ProductSubCatID: 3, ProductName:'ghjj', UnitPrice:'23', Quantity: 60, Brand:'ghj', CreatedDte:'2022/1/2', UpdatedDte:'2022/12/3', Rating:'4'},
  //{ AutoID: 2, ProdID: 4, ProductCatID: 2, ProductSubCatID: 3, ProductName:'rtyui', UnitPrice:'3460', Quantity: 40, Brand:'tyu', CreatedDte:'2022/12/1', UpdatedDte:'2023/3/4', Rating:'5'}]

  return (
    <React.Fragment>
      <div className={"content-block"}>
        <h5>
          <b>Order Details</b>
        </h5>
        <DataGrid
          id="grid-list"
          dataSource={order}
          rowAlternationEnabled={true}
          showBorders={true}
          keyExpr="OrderID"
          wordWrapEnabled={true}
          allowSearch={true}
          selection={{ mode: "single" }}
          hoverStateEnabled={true}
          onSelectionChanged={onSelectionChanged}
        >
          <Editing
            mode="popup"
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={false}
          />

          <Column dataField="OrderID" 
          caption="Order ID">
          </Column>
          <Column dataField="CartID" 
          caption="Cart ID">
          </Column>
          <Column dataField="FName" caption="First Name"></Column>
          <Column dataField="Address" caption="Address"></Column>
          <Column dataField="City" caption="City"></Column>
          <Column dataField="PayMethod" caption="Payment Method"></Column>
          <Column dataField="PayStatus" caption="Pay Status"></Column>
          <Column dataField="OrderDate" caption="Order Date"></Column>
        </DataGrid>
        <br></br>

        <Navbar bg="light" variant="light">
          <Button
            stylingMode="contained"
            type="success" /*onClick={onSaveBtnClick}*/
          >
            Confirm
          </Button>
        </Navbar>
      </div>
    </React.Fragment>
  );
};

export default Ordersdet;
