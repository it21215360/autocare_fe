import React, { Component, Fragment, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "devextreme-react/button";
import DataGrid, {
  Column,
  SearchPanel,
  Paging,
  Editing,
  HeaderFilter,
  FilterPanel,
  Export,
} from "devextreme-react/data-grid";
import { Navbar } from "react-bootstrap";
import { API_BASE_URL } from "../../appconfig/config";
import axios from "axios";
import { jsPDF } from "jspdf";
import { exportDataGrid } from "devextreme/pdf_exporter";

const AppointList = (props) => {
  const [selectedID, setSelectedID] = useState(0);
  const [appointList, setapoointList] = useState([]);
  const [isLoadingData, setIsdataLoading] = useState(true);

  const exportFormats = ["pdf"];

  const fetchURL = `${API_BASE_URL}/api/customer/list-carwash-appointment`;

  useEffect(() => {
    if (isLoadingData)
      axios.get(fetchURL).then((response) => {
        console.log(response);
        setapoointList(response.data);
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
    setSelectedID(e.selectedRowsData[0].ID);
  };
  const onExporting = React.useCallback((e) => {
    const doc = new jsPDF();

    exportDataGrid({
      jsPDFDocument: doc,
      component: e.component,
      indent: 5,
    }).then(() => {
      doc.save("Car Wash scheduling.pdf");
    });
  });

  return (
    <Fragment>
      <h4>List of Appointments</h4>
      <DataGrid
        id="grid-list"
        dataSource={appointList}
        keyExpr="ID"
        showBorders={true}
        wordWrapEnabled={true}
        allowSearch={true}
        selection={{ mode: "single" }}
        hoverStateEnabled={true}
        rowAlternationEnabled={true}
        onExporting={onExporting}
        onSelectionChanged={onSelectionChanged}
      >
        <Editing
          mode="popup"
          allowUpdating={false}
          allowDeleting={false}
          allowAdding={false}
        />
        <Export
          enabled={true}
          formats={exportFormats}
          allowExportSelectedData={true}
        />

        <HeaderFilter visible={false} />
        <FilterPanel visible={true} />
        <SearchPanel visible={true} />
        <Paging defaultPageSize={10} />

        <Column dataField="ID" visible={false} />
        <Column
          dataField="fname"
          caption="First Name"
          dataType="string"
        ></Column>
        <Column
          dataField="lname"
          caption="Last Name"
          dataType="string"
        ></Column>
        <Column
          dataField="phone"
          caption="Phone Number"
          dataType="int"
        ></Column>
        <Column
          dataField="email"
          caption="Email Address"
          dataType="email"
        ></Column>
        <Column
          dataField="vnum"
          caption="Vehicle Number"
          dataType="int"
        ></Column>
        <Column
          dataField="vtype"
          caption="Vehicle Type"
          dataType="String"
        ></Column>
        <Column dataField="date" caption="Date" dataType="String"></Column>
        <Column dataField="time" caption="Time" dataType="String"></Column>
        <Column dataField="venue" caption="Venue" dataType="String"></Column>
      </DataGrid>
      <br></br>
      <Navbar bg="light" variant="light" className="crud_panel_buttons">
        <Button
          className="crud_panel_buttons"
          stylingMode="contained"
          type="success"
          onClick={onSelectClick}
        >
          Open
        </Button>
        <Button
          className="crud_panel_buttons"
          stylingMode="contained"
          type="default"
          onClick={onCloseClick}
        >
          Close
        </Button>
      </Navbar>
    </Fragment>
  );
};

export default AppointList;
