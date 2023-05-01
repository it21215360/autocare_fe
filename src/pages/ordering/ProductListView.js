import React from "react";
import notify from "devextreme/ui/notify";
import Button from "devextreme-react/button";
import Popup from "devextreme-react/popup";
import { productDataSource } from "./data.js";
import ProductView from "./ProductView.js";
import { Link } from "react-router-dom";
import "./productView.scss";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";

const ADD_TO_CART = "Add to Cart";
const REMOVE_FROM_CART = "Remove from Cart";

const formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "LKR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
}).format;




class ProductListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: productDataSource[0],
    };

    this.renderPopup = this.renderPopup.bind(this);
    this.showProduct = this.showProduct.bind(this);
    this.addRemoveFromCart = this.addRemoveFromCart.bind(this);
    this.handlePopupHidden = this.handlePopupHidden.bind(this);
    this.showAlert = this.showAlert.bind(this);
  }

  render() {
    return (
      <>
        <div className={"content-block"}>
          <h4>Products List</h4>
          <div className="images">
            {productDataSource.map((product) => (
              <ProductView
                singleProduct={product}
                show={this.showProduct}
                key={product.ID}
              />
            ))}
            <Popup
              width={660}
              height={540}
              showTitle={true}
              title={this.state.selectedProduct.ProductName}
              dragEnabled={false}
              hideOnOutsideClick={true}
              visible={this.state.popupVisible}
              onHiding={this.handlePopupHidden}
              contentRender={this.renderPopup}
            />
          </div>
        </div>
      </>
    );
  }

  renderPopup() {
    const { selectedProduct } = this.state;
    return (
      <div id="popup-property-details">
        <div id="popup-img">
          <img src={selectedProduct.Image} />
        </div>
        <div className="large-text">
          {formatCurrency(selectedProduct.Price)}
        </div>
        <div id="onHandQty">On Hand Qty: {selectedProduct.OnHandQty}</div>
        <p>{selectedProduct.Description}</p>
        <Button
          icon="cart"
          text={selectedProduct.AddedToTheCart ? REMOVE_FROM_CART : ADD_TO_CART}
          width={210}
          height={44}
          onClick={this.addRemoveFromCart}
          id="myButton"
        />
        <br></br>
        <div>
          <Link to="/ordering/Cart">View Cart</Link>
        </div>
      </div>
    );
  }

  showProduct(_product) {
    this.setState({
      selectedProduct: _product,
      popupVisible: true,
    });
  }

  handlePopupHidden() {
    this.setState({
      popupVisible: false,
    });
  }

  showAlert(_message, _type) {
    notify(
      {
        message: _message.toString(),
        width: 500,
      },
      _type,
      1500
    );
  }






  /*
  onSaveBtnClick = (e) => {
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




  addRemoveFromCart() {
    const { selectedProduct } = this.state;
    selectedProduct.AddedToTheCart = !selectedProduct.AddedToTheCart;

    this.renderPopup = this.renderPopup.bind(this);
    this.setState({
      selectedProduct,
    });

    //call the API endpoint
    let passingObject = {
      CustomerID: 1,
      ProductID: selectedProduct.ID,
      Quantity: 1,
      Price: selectedProduct.Price,
      Total: 1 * selectedProduct.Price,
      Add: selectedProduct.AddedToTheCart,
    };

    const postURL = `${API_BASE_URL}/api/order/add-to-cart`;
    try {
      axios
        .post(postURL, {
          productInfo: JSON.stringify(passingObject),
        })
        .then((response) => {
          console.log(response);
          if (response.data.affectedRows > 0) {
            notify(
              {
                message: `This item has been ${
                  selectedProduct.AddedToTheCart ? "added to" : "removed from"
                } the Cart!`,
                width: 500,
              },
              selectedProduct.AddedToTheCart ? "success" : "warning",
              1500
            );
          }
        })
        .catch((error) => {
          this.showAlert(error, "error");
        });
    } catch (error) {
      this.showAlert(error, "error");
    }

    
  }
}
export default ProductListView;
