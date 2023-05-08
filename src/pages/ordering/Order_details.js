import React, { Component , useEffect} from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule } from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
import DataGrid, { Column, ValidationRule, EmailRule } from 'devextreme-react/data-grid';
//import { LoadPanel } from "devextreme-react/load-panel";
import { useState } from "react";
//import { SelectBox } from "devextreme-react";
import notify from "devextreme/ui/notify";
import { Button } from 'devextreme-react/button';
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";
import OrderList from "./Orders_Admin";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";


const CardForm = () => {

  const { user } = useAuth();
  const [cartItem, setCartItem] = useState([]);
  const [isLoadingData, setIsdataLoading] = useState(true);
  const fetchURL = `${API_BASE_URL}/api/order/get-cart-info?CustomerID=${user.ID}`;
  
  useEffect(() => {
    if (isLoadingData && user.ID)
      axios.get(fetchURL).then((response) => {
        console.log(response.data);
        if (response.data) {
          setCartItem(response.data);
        }

        setIsdataLoading(false);
      });
  }, []);



const [orderInfo, setorderInfo] = useState({});
const [pageProperties, setPageProperties] = useState({
  OrderID: 0,
  DataLoading: false,
  isDocReadOnly: false,
  UpdateMode: false,
});

const [showList, setShowList] = useState(false);



const onSaveBtnClick = (e) => {
  try {
    pageProperties.UpdateMode ? updateOrders() : addOrders();
  } catch (error) {
    console.error(error);
  }
};

const resetPageProperties = () => {
  setPageProperties({
    OrderID: 0,
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

const updateOrders = () => {
  try {
    if (pageProperties.OrderID > 0)
      axios
        .put(`${API_BASE_URL}/api/order/update-orders`, {
          OrderID: pageProperties.OrderID,
          ReturnProdDetails: JSON.stringify(orderInfo),
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

const addOrders = () => {
  try {
    axios
      .post(`${API_BASE_URL}/api/order/add-orderdet`, {
        OrderDetails: JSON.stringify(orderInfo),
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

const OnLoadData = (orderID) => {
  try {
    axios
      .get(`${API_BASE_URL}/api/order/get-order`, {
        params: {
          orderingID: orderID,
        },
      })
      .then((res) => {
        console.log(res.data);

        setorderInfo(res.data[0][0]);
        
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
      OrderID: viewListSelectedID,
      DataLoading: true,
      isDocReadOnly: true,
      UpdateMode: true,
    });

    OnLoadData(viewListSelectedID);
  }
};

const onClearBtnClick = () => {
  resetPageProperties();
  setorderInfo({});
};



//return user.userType == "Customer" ? (
    return (
        <>
        {showList ? (
          <div className={"content-block"}>
            <OrderList
              Show={showList}
              OnHide={onListClickEvent}
              HideTheList={onListClose}
            ></OrderList>
          </div>
        ) : (

            <div className={'content-block'}>
                <h2>Order Form</h2>
                <Form formData={orderInfo}>
                    <GroupItem colCount={2}>
                    {/*<Item dataField="CustomerID" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Customer ID"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="CartID" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Cart ID"></Label>
                            <RequiredRule message="Field required" />
                      </Item> */}
                        <Item dataField="FName" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="First Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="LName" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Last Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="Address" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Address"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="City" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="City"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="PhoneNum" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Phone Number"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="Email" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Email"></Label>
                            <RequiredRule message="Field required" />
                            <EmailRule message="Invalid email address" />
                        </Item>
                    </GroupItem>
                    <GroupItem colCount={2}>
                        <Item
                            dataField="PayMethod"
                            editorType="dxSelectBox"
                            editorOptions={{
                                items: [
                                  { Name: "Direct Bank Transfer" }, 
                                  { Name: "Card Payment" }],
                                searchEnabled: true,
                                displayExpr: "Name",
                                valueExpr: "Name",
                            }}
                        >
                            <Label text="Payment Method"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        
                    </GroupItem>
                </Form>


       <React.Fragment>

           <div className={'content-block'}>
               <h5><b>Ordered Items</b></h5>
               <DataGrid id='sample'
                   dataSource={cartItem}
                   rowAlternationEnabled={true}
                   showBorders={true}>

                   <Column dataField='ProductID' caption='Product ID' dataType='string'><ValidationRule type="hidden" /></Column>
                   <Column dataField='Price' caption='Price' dataType='float'><ValidationRule type="required" /></Column>
                   <Column dataField='Quantity' caption='Quantity' dataType='int'><ValidationRule type="required" /></Column>
                   <Column dataField='Total' caption='Total' dataType='float'><ValidationRule type="required" /></Column>

               </DataGrid>
               <br></br>
           </div>
       </React.Fragment>


        <Navbar bg="light" variant="light">
            <Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="success"
              onClick={onSaveBtnClick}
            >
              {pageProperties.UpdateMode ? "Save Changes" : "Add"}
            </Button>
            {/*<Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="default"
              onClick={() => setShowList(true)}
            >
              View List
                          </Button>*/}
            
          <Link to="/ordering/Card_details">
            <Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="default"
            >
              Proceed to Pay 
            </Button></Link>


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
        )}    
        </>
    );
}

export default CardForm