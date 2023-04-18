import React from "react";
import "devextreme/dist/css/dx.light.css";
import DataGrid, {
  Column,
  SearchPanel,
  Editing,
  ValidationRule,
} from "devextreme-react/data-grid";
import { Button } from "devextreme-react";

export default function TrackTicket() {
  const myDataSource = [
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
  ];

  return (
    <React.Fragment>
      <div className={"content-block"}>
        <h5>
          <b>Track Tickets</b>
        </h5>
        <DataGrid
          classNAme={"dx-card wide-card"}
          dataSource={myDataSource}
          rowAlternationEnabled={true}
          showBorders={true}
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
          ></Column>
        </DataGrid>
        <br></br>
        <div>
          <button>
            <b>COMPLETED</b>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
