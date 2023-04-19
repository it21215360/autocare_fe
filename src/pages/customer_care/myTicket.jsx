import React from "react";
import "devextreme/dist/css/dx.light.css";
import DataGrid, {
  Column,
  SearchPanel,
  Editing,
} from "devextreme-react/data-grid";
import { Button } from "devextreme-react";

export default function MyTicket() {
  const myDataSource = [
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

  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <React.Fragment>
      <div className={"content-block"}>
        <h5>
          <b>My Tickets</b>
        </h5>
        <DataGrid
          classNAme={"dx-card wide-card"}
          dataSource={myDataSource}
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
          <Button style={buttonStyle}>
            <b>Submit a Ticket</b>
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
