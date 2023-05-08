import React from "react";
import { useState } from "react";
//import "./payroll.scss";
import DataGrid, {
  Column,
  SearchPanel,
  Editing,
  ValidationRule,
} from "devextreme-react/data-grid";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { Navbar, ListGroup } from "react-bootstrap";
import { Button } from "devextreme-react/button";

function Storage() {
  const [toggleState, setToggleState] = useState(1);
  const [inventoryStock] = [{}];
  const [inventorySummary] = [{}];

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={"content-block"}>
      <div className="container1">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Stock
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Inventory
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content1  active-content" : "content1"
            }
          >
            <div className={"content-block"}>
              <h4>Stock</h4>
              <hr />
              <DataGrid
                id="sample"
                dataSource={inventoryStock}
                rowAlternationEnabled={true}
                showBorders={true}
              >
                <SearchPanel visible={true} highlightCaseSensitive={true} />

                <Editing
                  mode="popup"
                  allowUpdating={true}
                  allowDeleting={true}
                  allowAdding={true}
                />

                <Column
                  dataField="ProductCategory"
                  caption="Product Category"
                  dataType="string"
                >
                  <ValidationRule type="required" />
                </Column>
                <Column
                  dataField="ProductName"
                  caption="Product Name"
                  dataType="string"
                >
                  <ValidationRule type="required" />
                </Column>
                <Column dataField="Quantity" caption="Quantity" dataType="int">
                  <ValidationRule type="required" />
                </Column>
                <Column
                  dataField="UnitPrice"
                  caption="Unit Price"
                  dataType="float"
                >
                  <ValidationRule type="required" />
                </Column>
                <Column
                  dataField="ReorderLevel"
                  caption="Reorder Level"
                  dataType="int"
                >
                  <ValidationRule type="required" />
                </Column>
                <Column dataField="StoredDate" caption="Date" dataType="date">
                  <ValidationRule type="required" />
                </Column>
              </DataGrid>
            </div>
            <br></br>
            <div>
              <Button>
                <b>View Storage List</b>
              </Button>
              <Button>
                <b>Clear</b>
              </Button>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content1  active-content" : "content1"
            }
          >
            <h4>Inventory Summary</h4>
            <hr />
            <DataGrid
              id="sample"
              dataSource={inventorySummary}
              rowAlternationEnabled={true}
              showBorders={true}
            >
              <SearchPanel visible={true} highlightCaseSensitive={true} />

              <Editing
                mode="popup"
                allowUpdating={true}
                allowDeleting={true}
                allowAdding={true}
              />

              <Column
                dataField="ProductID"
                caption="Product ID"
                dataType="string"
              >
                <ValidationRule type="required" />
              </Column>
              <Column
                dataField="StartInventory"
                caption="Starting Inventory"
                dataType="int"
              >
                <ValidationRule type="required" />
              </Column>
              <Column
                dataField="ReceivedInventory"
                caption="Inventory Received"
                dataType="int"
              >
                <ValidationRule type="required" />
              </Column>
              <Column
                dataField="ShippedInventory"
                caption="Inventory Shipped"
                dataType="int"
              >
                <ValidationRule type="required" />
              </Column>
              <Column
                dataField="OnHandInventory"
                caption="Inventory On Hand"
                dataType="int"
              >
                <ValidationRule type="required" />
              </Column>
            </DataGrid>
            <br></br>
            <div>
              <Button>
                <b>View Inventory Summary</b>
              </Button>
              <Button>
                <b>Clear</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Storage;
