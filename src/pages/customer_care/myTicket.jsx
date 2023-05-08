import React from "react";
import { useState, useEffect } from "react";
import "devextreme/dist/css/dx.light.css";
import DataGrid, {
  Column,
  SearchPanel,
  Editing,
} from "devextreme-react/data-grid";
import { Button } from "devextreme-react";
import { Navbar } from "react-bootstrap";
import { API_BASE_URL } from "../../appconfig/config";
import axios from "axios";

export default function MyTicket() {
  const ticketInfo = [
    {
      AutoID: 1,
      TicketID: "1005",
      TktCategory: "Request an Order Summary",
      DeptCategory: "Product Retailing Department",
      date: "21/11/2022",
      Status: "Processing",
    },
    {
      AutoID: 2,
      TicketID: "1001",
      TktCategory: "Question regarding the Registration",
      DeptCategory: "IT Department",
      date: "20/09/2022",
      Status: "Completed",
    },
    {
      AutoID: 3,
      TicketID: "1002",
      TktCategory: "Apply for Refund",
      DeptCategory: "Finance Department",
      date: "02/07/2022",
      Status: "Completed",
    },
    {
      AutoID: 4,
      TicketID: "1003",
      TktCategory: "Get online Service Support",
      DeptCategory: "Customer Service Department",
      date: "21/01/2022",
      Status: "Completed",
    },
    {
      AutoID: 5,
      TicketID: "1004",
      TktCategory: "Request product offer details",
      DeptCategory: "Product Retailing Department",
      date: "05/10/2021",
      Status: "Completed",
    },
  ];

  /*const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };*/

  const MyTicket = (props) => {
    const [ticketInfo, setTicketInfo] = useState([]);
    const [isLoadingData, setIsdataLoading] = useState(true);
    const fetchURL = `${API_BASE_URL}/api/customer/get-ticket`;

  useEffect(() => {
    if(isLoadingData){
      axios.get(fetchURL).then((response) => {
        console.log(response);
        setTicketInfo(response.data);
        setIsdataLoading(false);
      });
    }  
  }, []);
}

  return (
    <React.Fragment>
      <div className={"content-block"}>
        <h5>
          <b>My Tickets</b>
        </h5>
        <DataGrid
          classNAme={"dx-card wide-card"}
          dataSource={ticketInfo}
          rowAlternationEnabled={true}
          showBorders={true}
        >
          <SearchPanel visible={true} highlightCaseSensitive={true} />

          <Editing mode="popup" allowDeleting={true} />

          <Column
            dataField="TicketID"
            caption="Ticket ID"
            dataType="string"
          ></Column>
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
            dataField="Status"
            caption="Status"
            dataType="tinyint"
          ></Column>
        </DataGrid>
        <br></br>
        <div>
          <Navbar bg="light" variant="light" className="crud_panel_buttons">
          <Button className="crud_panel_buttons" stylingMode="contained" type="default">
            <b>Submit a Ticket</b>
            </Button>
            </Navbar>
        </div>
      </div>
    </React.Fragment>
  );
}
