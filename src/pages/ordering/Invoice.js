//import { IconName } from "react-icons/ci";
import React, { Component, Fragment, useEffect, useState } from "react";
import DataGrid, {
  Column,
  SearchPanel,
  Editing,
  ValidationRule,
  Export,
  Paging,HeaderFilter,FilterPanel,
} from "devextreme-react/data-grid";
//import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { Navbar, ListGroup } from "react-bootstrap";
import { Button } from "devextreme-react/button";
import { jsPDF } from 'jspdf';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import { API_BASE_URL } from "../../appconfig/config";
import axios from "axios";

const Invoice = (props) => {

  const exportFormats = ['pdf'];
  const [selectedID, setSelectedID] = useState(0);
  const [paydet, setPaydet] = useState([]);
  const [isLoadingData, setIsdataLoading] = useState(true);
  const fetchURL = `${API_BASE_URL}/api/Order/list-Orders`;
 
  useEffect(() => {
    if (isLoadingData)
      axios.get(fetchURL).then((response) => {
        console.log(response);
        setPaydet(response.data);
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

  /*const paydet = [
    {
      AutoID: 1,
      ProdID: 2,
      ProductCatID: 5,
      ProductSubCatID: 3,
      ProductName: "ghjj",
      UnitPrice: "23",
      Quantity: 60,
      Brand: "ghj",
      CreatedDte: "2022/1/2",
      UpdatedDte: "2022/12/3",
      Rating: "4",
    },
    {
      AutoID: 2,
      ProdID: 4,
      ProductCatID: 2,
      ProductSubCatID: 3,
      ProductName: "rtyui",
      UnitPrice: "3460",
      Quantity: 40,
      Brand: "tyu",
      CreatedDte: "2022/12/1",
      UpdatedDte: "2023/3/4",
      Rating: "5",
    },
  ];*/

  const onExporting = React.useCallback((e) => {
    const invoice = new jsPDF();

    exportDataGrid({
      jsPDFDocument: invoice,
      component: e.component,
      indent: 5,
    }).then(() => {
      invoice.save('OrderInvoice.pdf');
    });
  });

  return (
    <React.Fragment>
      <div className={"content-block"}>
        <h5>
          <b>Invoice</b>
        </h5>
        <DataGrid
          id="sample"
          dataSource={paydet}
          rowAlternationEnabled={true}
          showBorders={true}
          onExporting={onExporting} 
        >
          <SearchPanel visible={true} highlightCaseSensitive={false} />
          <Paging defaultPageSize={10} />
          <Export enabled={true} formats={exportFormats} allowExportSelectedData={true} />

          <Editing
            mode="popup"
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={true}
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
        <div>
          <Button>
            <b>Confirm</b>
          </Button>
          <Button>
            <b>Edit</b>
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Invoice;
