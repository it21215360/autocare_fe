import React from "react";
import "devextreme/dist/css/dx.light.css";
import DataGrid, {
  Column,
  SearchPanel,
  Editing,
} from "devextreme-react/data-grid";
import { Button } from "devextreme-react";

export default function Purchase() {
  const myDataSource = [
    {
      AutoID: 1,
      PurchasedProducts: "Brake Oil",
      Quantity: 200,
      Amount: 500000.0,
      PurchasedStatus: "Received",
      PurchasedDate: "16 / 02 / 2023",
    },
    {
      AutoID: 2,
      PurchasedProducts: "Nut",
      Quantity: 1000,
      Amount: 50000.0,
      PurchasedStatus: "Received",
      PurchasedDate: "20 / 02 / 2023",
    },
    {
      AutoID: 3,
      PurchasedProducts: "Bolts",
      Quantity: 1000,
      Amount: 20000.0,
      PurchasedStatus: "Not Received",
      PurchasedDate: "13 / 03 / 2023",
    },
    {
      AutoID: 4,
      PurchasedProducts: "Fuel Filters",
      Quantity: 50,
      Amount: 500000.0,
      PurchasedStatus: "In Progress",
      PurchasedDate: "15 / 03 / 2023",
    },
  ];

  return (
    <></>
    // <React.Fragment>
    //   <div className={"content-block"}>
    //     <h5>
    //       <b>Stock Purchase</b>
    //     </h5>
    //     <DataGrid
    //       id="sample"
    //       dataSource={myDataSource}
    //       rowAlternationEnabled={true}
    //       showBorders={true}
    //     >
    //       <SearchPanel visible={true} highlightCaseSensitive={true} />

    //       <Editing
    //         mode="popup"
    //         allowUpdating={true}
    //         allowDeleting={true}
    //         allowAdding={true}
    //       />

    //       <Column
    //         dataField="PurchasedProducts"
    //         caption="Purched Product Name"
    //         dataType="string"
    //       >
    //         <ValidationRule type="required" />
    //       </Column>
    //       <Column
    //         dataField=" Quantity"
    //         caption="Product Quantity"
    //         dataType="int"
    //       >
    //         <ValidationRule type="required" />
    //       </Column>
    //       <Column dataField="Amount" caption="Total Amount" dataType="float">
    //         <ValidationRule type="required" />
    //       </Column>
    //       <Column dataField="Status" caption="Status">
    //         <ValidationRule type="required" />
    //       </Column>
    //       <Column
    //         dataField="PurchasedDate"
    //         caption="Purchased Date"
    //         dataType="date"
    //       >
    //         <ValidationRule type="required" />
    //       </Column>
    //     </DataGrid>
    //     <br></br>
    //     <div>
    //       <Button>
    //         <b>View Purchased List</b>
    //       </Button>
    //       <Button>
    //         <b>Clear</b>
    //       </Button>
    //     </div>
    //   </div>
    // </React.Fragment>
  );
}
