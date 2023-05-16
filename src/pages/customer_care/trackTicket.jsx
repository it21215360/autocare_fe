import React from "react";
import { useState, useEffect, Fragment } from "react"
import "devextreme/dist/css/dx.light.css";
import DataGrid, {
  Column,
  SearchPanel,
  Lookup,
  Editing,
  ValidationRule,
} from "devextreme-react/data-grid";
import { Button } from "devextreme-react";
import { Navbar, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config.js";
import notify from "devextreme/ui/notify";

const TrackTicket = (props) => {
  const [ticketInfo, setTicketInfo] = useState([]);
  const [isLoadingData, setIsdataLoading] = useState(true);
  const [pageProperties, setPageProperties] = useState({
    TicketID: 0,
    DataLoading: false,
    isDocReadonly: false,
    UpdateMode: false,
  });

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
  const [StatusList, setStatusList] = useState([]);

  const fetchURL = `${API_BASE_URL}/api/employee/update-ticket`;

  useEffect(() => {
    if (isLoadingData) {
      axios.get(fetchURL).then((response) => {
        console.log(response);
        setStatusList(response.data);
        setIsdataLoading(false);
      });
    }
  }, []);

  const onRowUpdated = (e) => {
    if (e.data) {
      updateTicketStatus(e.data.TicketID, e.data.Status);
    }
  };

  const updateTicketStatus = (TicketID, status) => {
    axios
      .put(`${API_BASE_URL}/api/employee/update-ticket`, {
        TicketID: TicketID,
        Status: status,
      })
      .then((response) => {
        console.log(response);
        if (response.data.affectedRows > 0) {
          //has to change
          showSuccessAlert(`Ticket Status updated`);
        }
      })
      .catch((error) => {
        showErrorAlert(error);
      });
  };

  const onSaveBtnClick = (e) => {
    try {
      let putTicketBody = [];
      ticketInfo.forEach((element) => {
        putTicketBody.push({
          TicketID: element.TicketID,
          Status: element.Status,
        });
      });

      console.log("###", putTicketBody);
      axios
        .put(`${API_BASE_URL}/api/employee/update-ticket`, {
          TicketInfo: JSON.stringify(putTicketBody),
        })
        .then((response) => {
          console.log(response);
          if (response.data.affectedRows >= 1) {
            //has to change
            showSuccessAlert(`Status updated`);
            setPageProperties({
              ...pageProperties,
              UpdateMode: false,
            });
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

 /* const myDataSource = [
    {
      AutoID: 1,
      TicketID: "1005",
      CusID: "2001",
      email: "abcd@gmail.com",
      TktCategory: "Request an Order Summary",
      DeptCategory: "Product Retailing Department",
      date: "21/11/2022",
      AssignedTo: "ABC Fernando",
      Status: "Processiong",
    },
    {
      AutoID: 2,
      TicketID: "1001",
      CusID: "2002",
      email: "efgh@gmail.com",
      TktCategory: "Question regarding the Registration",
      DeptCategory: "IT Department",
      date: "20/09/2022",
      AssignedTo: " NCDK Perera",
      Status: "Completed",
    },
    {
      AutoID: 3,
      TicketID: "1002",
      CusID: "2003",
      email: "ijkl@gmail.com",
      TktCategory: "Apply for Refund",
      DeptCategory: "Finance Department",
      date: "02/07/2022",
      AssignedTo: "BSJ Peiris",
      Status: "Completed",
    },
    {
      AutoID: 4,
      TicketID: "1003",
      CusID: "2004",
      email: "mnop@gmail.com",
      TktCategory: "Get online Service Support",
      DeptCategory: "Customer Service Department",
      date: "21/01/2022",
      AssignedTo: "KHG Ferreira",
      Status: "Completed",
    },
    {
      AutoID: 5,
      TicketID: "1004",
      CusID: "2005",
      email: "qrst@gmail.com",
      TktCategory: "Request product offer details",
      DeptCategory: "Product Retailing Department",
      date: "05/10/2021",
      AssignedTo: "KJH Silva",
      Status: "Completed",
    },
  ];*/

  const statusList = [
    { ID: 0, Name: "Pending" },
    { ID: 1, Name: "Under Review" },
    { ID: 2, Name: "Addressed" },
  ];

  return (
    <React.Fragment>
      <div className={"content-block"}>
        <h5>
          <b>Track Tickets</b>
        </h5>
        <DataGrid
          classNAme={"dx-card wide-card"}
          dataSource={ticketInfo}
          rowAlternationEnabled={true}
          showBorders={true}
          wordWrapEnabled={true}
          allowSearch={true}
          selection={{ mode: "single" }}
          hoverStateEnabled={true}
          onRowUpdated={onRowUpdated}
        >
          <SearchPanel visible={true} highlightCaseSensitive={true} />

          <Editing mode="popup" allowUpdating={true} allowDeleting={true} />

          <Column
            dataField="TicketID"
            caption="Ticket ID"
            dataType="string"
          ></Column>
          <Column
            dataField="CusID"
            caption="Customer ID"
            dataType="string"
          ></Column>
          <Column dataField="email" caption="Email" dataType="string"></Column>
          <Column
            dataField="TktCategory"
            caption="Ticket Category"
            dataType="string"
          ></Column>
          <Column
            dataField="DeptCategory"
            caption="Department"
            dataType="string"
          ></Column>
          <Column
            dataField="date"
            caption="Date Created"
            dataType="date"
          ></Column>
          <Column
            dataField="AssignedTo"
            caption="Assigned To"
            dataType="string"
          ></Column>
          <Column
            dataField="Status"
            caption="Status"
            dataType="tinyint"
          >
            <Lookup
              value={1}
              dataSource={statusList}
              displayExpr="Name"
              valueExpr="ID"
            />
          </Column>
        </DataGrid>
        <br></br>
        <div>
        <Navbar bg="light" variant="light" className="crud_panel_buttons">
          <Button  className="crud_panel_buttons"stylingMode="contained" type="default">
            COMPLETED
          </Button>
          </Navbar>
        </div>
      </div>
    </React.Fragment>
  );
  };

export default TrackTicket;
