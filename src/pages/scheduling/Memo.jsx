import React, { useEffect } from "react";
import DataGrid, {
  Column,
  SearchPanel,
  Editing,
  HeaderFilter,
  FilterPanel,
  Export,
  ValidationRule,
  Form as GridForm,
} from "devextreme-react/data-grid";
import { useState, Fragment } from "react";
import { Button } from "devextreme-react/button";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";
import "./Service.scss";
import { jsPDF } from "jspdf";
import { exportDataGrid } from "devextreme/pdf_exporter";

const Memo = (props) => {
  const myCancellation = [
    {
      fname: "Nimali",
      lname: "Silva",
      phone: "01123456789",
      email: "nimali123@gmail.com",
      vnumber: "ABC123",
      vtype: "Jeep",
      date: "10/05/2023",
      time: "4.00",
      venue: "Dehiwala",
    },
  ];

  const [selectedID, setSelectedID] = useState(0);
  const [getAppointmentDetails, setgetAppointmentDetails] = useState([]);
  const [isLoadingData, setIsdataLoading] = useState(true);
  const fetchURL = `${API_BASE_URL}/api/customer/confirm-appointment`;

  const exportFormats = ["pdf"];

  useEffect(() => {
    if (isLoadingData)
      axios.get(fetchURL).then((response) => {
        console.log(response);
        setgetAppointmentDetails(response.data);
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
    setSelectedID(e.selectedRowsData[0].StockReturnID);
  };
  const onExporting = React.useCallback((e) => {
    const doc = new jsPDF();

    exportDataGrid({
      jsPDFDocument: doc,
      component: e.component,
      indent: 5,
    }).then(() => {
      doc.save("Service scheduling.pdf");
    });
  });

  const [serviceSatationData, setserviceSatationData] = React.useState([]);
  const [carWashData, setCarWashData] = React.useState([]);

  const handleViewCarwashList = () => {
    axios
      .get(`${API_BASE_URL}/api/memo-carwash-detail`)
      .then((response) => {
        const serviceData = response.data;
        setCarWashData(serviceData);
      })
      .catch((error) => console.log(error));
  };

  const handleViewServiceList = () => {
    axios
      .get(`${API_BASE_URL}/api/memo-sercive-details`)
      .then((response) => {
        const serviceData = response.data;
        setserviceSatationData(serviceData);
      })
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      <h2>
        <b>Download your Booking Memo</b>
      </h2>
      <Fragment>
        <div className={"content-block"}>
          <h5>
            <b>Car wash Appointment viewer</b>
          </h5>
          <p>
            Select youe appointment details and Download the booking memo....
          </p>
          <br></br>
          <DataGrid
            id="sample"
            dataSource={carWashData}
            showBorders={true}
            wordWrapEnabled={true}
            allowSearch={true}
            selection={{ mode: "single" }}
            hoverStateEnabled={true}
            rowAlternationEnabled={true}
            onExporting={onExporting}
          >
            <SearchPanel visible={true} highlightCaseSensitive={true} />

            <Editing mode="popup" />
            <Export
              enabled={true}
              formats={exportFormats}
              allowExportSelectedData={true}
            />

            <HeaderFilter visible={true} />
            <FilterPanel visible={true} />

            {/*<FilterRow
          visible={true}
    />*/}
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
              visible={false}
              caption="Phone Number"
              dataType="int"
            ></Column>
            <Column
              dataField="email"
              visible={false}
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
            <Column dataField="date" caption="Date"></Column>
          </DataGrid>
          <br></br>
          <div>
            <Button onClick={handleViewCarwashList}>
              <b>View Service List</b>
            </Button>
          </div>
        </div>
        <br></br>
      </Fragment>

      <h5></h5>

      <div className={"content-block"}>
        <h5>
          <b>Services Appointment viewer</b>
        </h5>
        <p>Select youe appointment details and Download the booking memo....</p>
        <br></br>
        <DataGrid
          id="sample"
          dataSource={serviceSatationData}
          showBorders={true}
          wordWrapEnabled={true}
          allowSearch={true}
          selection={{ mode: "single" }}
          hoverStateEnabled={true}
          rowAlternationEnabled={true}
          onExporting={onExporting}
        >
          <SearchPanel visible={true} highlightCaseSensitive={true} />

          <Editing mode="popup" />
          <Export
            enabled={true}
            formats={exportFormats}
            allowExportSelectedData={true}
          />

          <HeaderFilter visible={true} />
          <FilterPanel visible={true} />

          {/*<FilterRow
          visible={true}
    />*/}
          <Column dataField="ID" visible={false} />
          <Column dataField="fname" caption="First Name">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="lname" caption="Last Name">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="phone" visible={false} caption="Phone Number">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="email" visible={false} caption="Email Address">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="vnum" caption="Vehicle no">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="vtype" caption="Type">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="date" caption="Last Date">
            <ValidationRule type="required" />
          </Column>
        </DataGrid>
        <br></br>
        <div>
          <Button onClick={handleViewServiceList}>
            <b>View Service List</b>
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Memo;
