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
          id="sample"
          dataSource={order}
          rowAlternationEnabled={true}
          showBorders={true}
        >
          <Editing
            mode="popup"
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={false}
          />

          <Column dataField="ProdID" caption="Product ID" dataType="int">
            <ValidationRule type="hidden" />
          </Column>
          <Column
            dataField="ProductCatID"
            caption="Product Category ID"
            dataType="int"
          >
            <ValidationRule type="required" />
          </Column>
          <Column
            dataField="ProductSubCatID"
            caption="Product Sub Category ID"
            dataType="int"
          >
            <ValidationRule type="required" />
          </Column>
          <Column dataField="ProductName" caption="Product" dataType="string">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="UnitPrice" caption="Price" dataType="float">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="Quantity" caption="Quantity" dataType="int">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="Brand" caption="Brand" dataType="float">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="CreatedDte" caption="Created Date" dataType="date">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="UpdatedDte" caption="Updated Date" dataType="date">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="Rating" caption="Rating" dataType="string">
            <ValidationRule type="required" />
          </Column>
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
