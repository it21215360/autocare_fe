import React, { Component, Fragment, useEffect, useState } from "react";
import "devextreme/dist/css/dx.light.css";
import DataGrid, {
  Column,
  SearchPanel,
  Editing,
} from "devextreme-react/data-grid";
import { Button } from "devextreme-react";
import { API_BASE_URL } from "../../appconfig/config";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

const Cart = () => {
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

  const onRowUpdating = (e) => {
    console.log(e);
  };

  return user.userType == "Customer" ? (
    <React.Fragment>
      <div className={"content-block"}>
        <h5>
          <b>My Cart</b>
        </h5>
        <DataGrid
          id="cart-grid"
          dataSource={cartItem}
          rowAlternationEnabled={true}
          showBorders={true}
          onRowUpdating={onRowUpdating}
        >
          <SearchPanel visible={true} highlightCaseSensitive={true} />
          <Editing mode="row" allowUpdating={true} allowDeleting={true} />

          <Column
            dataField="CustomerID"
            caption="CustomerID"
            visible={false}
            editorOptions={{
              readOnly: true,
            }}
          ></Column>
          <Column
            dataField="FirstName"
            caption="Customer"
            editorOptions={{
              readOnly: true,
            }}
          ></Column>
          <Column
            dataField="ProductID"
            caption="ProductID"
            visible={false}
          ></Column>
          <Column
            dataField="ProdName"
            caption="Product"
            editorOptions={{
              readOnly: true,
            }}
          ></Column>
          <Column
            dataField="Price"
            caption="Price"
            editorOptions={{
              readOnly: true,
              format: "LKR #,###.##",
            }}
          ></Column>
          <Column dataField="Quantity" caption="Quantity"></Column>
          <Column
            dataField="Total"
            caption="Total"
            editorOptions={{
              readOnly: true,
              format: "LKR #,###.##",
            }}
          ></Column>
        </DataGrid>
        <br></br>
        <div>
          <Link to="/ordering/Order_details">
            <Button>
              <b>Proceed to Checkout</b>
            </Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <>
      <div className={"content-block"}>
        <h6>Login as a Customer to view the cart</h6>
      </div>
    </>
  );
};

export default Cart;
