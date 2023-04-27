import React, { useEffect } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import DataGrid, {
  RequiredRule,
  Form as GridForm,
} from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
import { LoadPanel } from "devextreme-react/load-panel";
import notify from "devextreme/ui/notify";
import { useState } from "react";
import { SelectBox } from "devextreme-react";
import { Button } from "devextreme-react/button";
import { DateBox } from "devextreme-react/calendar";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";
import ReturnProdList from "./ReturnProdList";

const ReturnProduct = () => {

  const [returnProdInfo, setreturnProdInfo] = useState({});
  const [pageProperties, setPageProperties] = useState({
    ReturnProdID: 0,
    DataLoading: false,
    isDocReadOnly: false,
    UpdateMode: false,
  });

  const [showList, setShowList] = useState(false);

  

  const onSaveBtnClick = (e) => {
    try {
      pageProperties.UpdateMode ? updateReturnProd() : addReturnProd();
    } catch (error) {
      console.error(error);
    }
  };
  
  const resetPageProperties = () => {
    setPageProperties({
      ReturnProdID: 0,
      DataLoading: false,
      isDocReadOnly: false,
      UpdateMode: false,
    });
  };

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

  const updateReturnProd = () => {
    try {
      if (pageProperties.ReturnProdID > 0)
        axios
          .put(`${API_BASE_URL}/api/order/update-return-prod`, {
            ReturnProdID: pageProperties.ReturnProdID,
            ReturnProdDetails: JSON.stringify(returnProdInfo),
          })
          .then((response) => {
            console.log(response);
            if (response.data.affectedRows === 1) {
              showSuccessAlert(`Return Product Information Updated`);
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

  const addReturnProd = () => {
    try {
      axios
        .post(`${API_BASE_URL}/api/order/add-return-prod`, {
          ReturnProdDetails: JSON.stringify(returnProdInfo),
        })
        .then((response) => {
          console.log(response);
          if (response.data.affectedRows > 0) {
            showSuccessAlert(`Record created.`);
            onClearBtnClick();
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

  const OnLoadData = (returnID) => {
    try {
      axios
        .get(`${API_BASE_URL}/api/order/get-return-prod`, {
          params: {
            ReturnID: returnID,
          },
        })
        .then((res) => {
          console.log(res.data);

          setreturnProdInfo(res.data[0][0]);
          
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const onListClose = () => {
    setShowList(false);
  };

  const onListClickEvent = (viewListSelectedID) => {
    if (showList && viewListSelectedID != 0) {
      setShowList(!showList);
      setPageProperties({
        ReturnProdID: viewListSelectedID,
        DataLoading: true,
        isDocReadOnly: true,
        UpdateMode: true,
      });

      OnLoadData(viewListSelectedID);
    }
  };

  const onClearBtnClick = () => {
    resetPageProperties();
    setreturnProdInfo({});
  };




  return (
    <>
 {showList ? (
          <div className={"content-block"}>
            <ReturnProdList
              Show={showList}
              OnHide={onListClickEvent}
              HideTheList={onListClose}
            ></ReturnProdList>
          </div>
        ) : (

       <div className={'content-block'}>
                <h2>Return Product Details</h2>
                <Form formData={returnProdInfo}>
                    <GroupItem colCount={1}>
                        <Item dataField="ProductName" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Product Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="OrderID" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Order number"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="Reason" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Reason for returning"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="InvoiceID" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Payment Invoice No"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                    </GroupItem>
                </Form>


                <Navbar bg="light" variant="light" className="crud_panel_buttons">
            <Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="success"
              onClick={onSaveBtnClick}
            >
              {pageProperties.UpdateMode ? "Save Changes" : "Add"}
            </Button>
            <Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="default"
              onClick={() => setShowList(true)}
            >
              View List
            </Button>
            <Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="default"
              onClick={onClearBtnClick}
            >
              Clear
            </Button>
          </Navbar>
            </div>
            
      ) }    
          </>
  );
};

export default ReturnProduct;
