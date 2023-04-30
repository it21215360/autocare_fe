import React, { Component, Fragment, useEffect, useState } from "react";
import "devextreme/dist/css/dx.light.css";
import DataGrid, {
  Column,
  SearchPanel,
  Editing,
} from "devextreme-react/data-grid";
import { Button } from "devextreme-react";
import notify from "devextreme/ui/notify";
import { API_BASE_URL } from "../../appconfig/config";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

const Cart = () => {
  const { user } = useAuth();
  const [cartItem, setCartItem] = useState([]);
  const [isLoadingData, setIsdataLoading] = useState(true);
  const fetchURL = `${API_BASE_URL}/api/order/get-cart-info?CustomerID=${user.ID}`;
  const [cartInfo, setCartInfo] = useState({});
  const [pageProperties, setPageProperties] = useState({
    CartID: 0,
    DataLoading: false,
    isDocReadOnly: false,
    UpdateMode: true,
  });

  //const [showList, setShowList] = useState(false);

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

    try {
      if (pageProperties.CartID > 0)
        axios
          .put(`${API_BASE_URL}/api/order/update-cart`, {
            CartID: pageProperties.CartID,
            productInfo: JSON.stringify(cartInfo),
          })
          .then((response) => {
            console.log(response);
            if (response.data.affectedRows === 1) {
              showSuccessAlert(`Quantity Updated`);
            }
          })
          .catch((error) => {
            showErrorAlert(error);
          });
    } catch (error) {
      console.error(error);
      showErrorAlert(error);
    }

    /*
      // Validate and process the updated data
      const updatedData = { ...e.oldData, ...e.newData }; // Merge old and new data
      // Add any additional validation or processing here
    
      // Make an API call to update the data source
      fetch(`/api/data/${updatedData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update data');
        }
        // Handle successful response
      })
      .catch(error => {
        console.error(error);
        // Handle error response
      });
    */
    
    //console.log(e);
  };

  //const [cartItems, setCartItems] = useState([]);

  const handleQuantityUpdate = (ProductID, newQuantity) => {
    const newCartItems = cartItem.map((item) => {
      if (item.id === ProductID) {
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });
    setCartItem(newCartItems);
  };

/*
  const onSaveBtnClick = (e) => {
    try {
      pageProperties.UpdateMode ? updateCart() : addRemoveFromCart();
    } catch (error) {
      console.error(error);
    }
  };*/
/*
  const updateCart = () => {
    try {
      if (pageProperties.CartID > 0)
        axios
          .put(`${API_BASE_URL}/api/order/update-cart`, {
            CartID: pageProperties.CartID,
            productInfo: JSON.stringify(cartInfo),
          })
          .then((response) => {
            console.log(response);
            if (response.data.affectedRows === 1) {
              showSuccessAlert(`Quantity Updated`);
            }
          })
          .catch((error) => {
            showErrorAlert(error);
          });
    } catch (error) {
      console.error(error);
      showErrorAlert(error);
    }
  };*/
/*
  const OnLoadData = (cartId) => {
    try {
      axios
        .get(`${API_BASE_URL}/api/order/get-cart-info`, {
          params: {
            CartId: cartId,
          },
        })
        .then((res) => {
          console.log(res.data);

          setCartInfo(res.data[0][0]);
          
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
*/


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
          onRowUpdated={handleQuantityUpdate}
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
