import React, { useEffect } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import FileUploader from 'devextreme-react/file-uploader';
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
import ProductMasterList from "./masterProductList";

const ProductMaster = () => {
  const [prodBasicInfo, setProdBasicInfo] = useState({});
  const [prodSubCatInfo, setProdSubCatInfo] = useState({});
  const [prodCatInfo, setProdCatInfo] = useState({});
  const [pageProperties, setPageProperties] = useState({
    ProductID: 0,
    DataLoading: false,
    isDocReadOnly: false,
    UpdateMode: false,
  });

  const [showList, setShowList] = useState(false);

  const currencyFormat = `LKR #,###.##`;

  const onSaveBtnClick = (e) => {
    try {
      pageProperties.UpdateMode ? updateProduct() : addProduct();
    } catch (error) {
      console.error(error);
    }
  };

  const resetPageProperties = () => {
    setPageProperties({
      ProductID: 0,
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
      "Error Occurred!",
      3000
    );
  };

  const showSuccessAlert = (successMsg) => {
    notify(
      {
        message: successMsg.toString(),
        width: 450,
      },
      "Process Success",
      3000
    );
  };

  const updateProduct = () => {
    try {
      if (pageProperties.ProductID > 0)
        axios
          .put(`${API_BASE_URL}/api/product/update-product`, {
            ProductID: pageProperties.ProductID,
            ProdBasicInfo: JSON.stringify(prodBasicInfo),
            ProdCatInfo: JSON.stringify(prodCatInfo),
            ProdSubCatInfo: JSON.stringify(prodSubCatInfo),
          })
          .then((response) => {
            console.log(response);
            if (response.data.affectedRows === 1) {
              showSuccessAlert(`Product Information Updated`);
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

  const addProduct = () => {
    try {
      axios
        .post(`${API_BASE_URL}/api/product/add-product`, {
          ProdBasicInfo: JSON.stringify(prodBasicInfo),
          ProdCatInfo: JSON.stringify(prodCatInfo),
          ProdSubCatInfo: JSON.stringify(prodSubCatInfo),
        })
        .then((response) => {
          console.log(response);
          if (response.data.affectedRows > 0) {
            showSuccessAlert(`New Product Item Created.`);
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

  const OnLoadData = (prodId) => {
    try {
      axios
        .get(`${API_BASE_URL}/api/product/get-product`, {
          params: {
            ProdID: prodId,
          },
        })
        .then((res) => {
          console.log(res.data);

          setProdBasicInfo(res.data[0][0]);
          setProdCatInfo(res.data[3][0]);
          setProdSubCatInfo(res.data[1][0]);
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
        ProductID: viewListSelectedID,
        DataLoading: true,
        isDocReadOnly: true,
        UpdateMode: true,
      });

      OnLoadData(viewListSelectedID);
    }
  };

  const onClearBtnClick = () => {
    resetPageProperties();
    setProdBasicInfo({});
    setProdCatInfo({});
    setProdSubCatInfo({});
  };

  return (
    <>
      {showList ? (
        <div className={"content-block"}>
          <ProductMasterList
            Show={showList}
            OnHide={onListClickEvent}
            HideTheList={onListClose}
          ></ProductMasterList>
        </div>
      ) : (
        <div className={"content-block"}>
          <h2>Product Master</h2>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>
                <h6>Product Data</h6>
              </Card.Title>
              <Form formData={prodBasicInfo}>
                <GroupItem colCount={4}>
                  <Item
                    dataField="ProdID"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: true,
                    }}
                  >
                    <Label text="Product ID"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="ProdCatID"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Product Cat_ID"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="ProdSubCatID"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Product SubCat_ID"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="ProdName"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Product Name"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="Brand"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Brand"></Label>
                    <RequiredRule message="Field required" />
                  </Item>

                  <Item
                    dataField="Price"
                    editorType="dxNumberBox"
                    editorOptions={{
                      readOnly: false,
                      format: "LKR #,###.##",
                    }}
                  >
                    <Label text="Product Price"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="OnHandQty"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="On Hand Quantity"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="Rating"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Rating"></Label>
                  </Item>
                  <Item
                    dataField="CreatedDate"
                    editorType="dxDateBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Created Date"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="UpdatedDate"
                    editorType="dxDateBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Updated Date"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="Description"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Description"></Label>
                  </Item>       
                </GroupItem>
                <br />
                <p>&nbsp; &nbsp;Product Reference*</p>
                <FileUploader selectButtonText="Select photo" labelText="" accept="image/*" uploadMode="useForm" dataField="ImageFileName" /> 
              </Form>
            </Card.Body>
          </Card>

          <Card style={{ width: "100%", paddingTop: "20px" }}>
            <Card.Body>
              <Card.Title>
                <h6>Product Category</h6>
              </Card.Title>
              <Card.Text></Card.Text>
              <Form formData={prodCatInfo}>
                <GroupItem colCount={4}>
                  <Item
                    dataField="AutoID"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: true,
                    }}
                  >
                    <Label text="ID"></Label>
                  </Item>

                  <Item
                    dataField="Code"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Code"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="IsActive"
                    editorType="dxSelectBox"
                    editorOptions={{
                      items: [
                        { AutoID: 1, Name: "Active" },
                        { AutoID: 0, Name: "Inactive" },
                      ],
                      searchEnabled: true,
                      displayExpr: "Name",
                      valueExpr: "AutoID",
                    }}
                  >
                    <Label text="Is Active"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="CreatedDate"
                    editorType="dxDateBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Created Date"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="UpdatedDate"
                    editorType="dxDateBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Updated Date"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                </GroupItem>
              </Form>
            </Card.Body>
          </Card>

          <Card style={{ width: "100%", paddingTop: "20px" }}>
            <Card.Body>
              <Card.Title>
                <h6>Product Sub Category Data</h6>
              </Card.Title>
              <Card.Text></Card.Text>
              <Form formData={prodSubCatInfo}>
                <GroupItem colCount={3}>
                  <Item
                    dataField="AutoID"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: true,
                    }}
                  >
                    <Label text="ID"></Label>
                  </Item>
                  <Item
                    dataField="ProdCategoryID"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Product Category_ID"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="IsActive"
                    editorType="dxSelectBox"
                    editorOptions={{
                      items: [
                        { AutoID: 1, Name: "Active" },
                        { AutoID: 0, Name: "Inactive" },
                      ],
                      searchEnabled: true,
                      displayExpr: "Name",
                      valueExpr: "AutoID",
                    }}
                  >
                    <Label text="Is Active"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="UpdatedDate"
                    editorType="dxDateBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Updated Date"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                </GroupItem>
              </Form>
            </Card.Body>
          </Card>

          <br></br>
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
              Discard
            </Button>
          </Navbar>
        </div>
      )}
    </>
  );
};

export default ProductMaster;
