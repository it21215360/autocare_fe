import React from "react";
import Popover from "devextreme-react/popover";
import "./productView.scss";

const formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "LKR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
}).format;

const position = {
  offset: "0, 2",
  at: "bottom",
  my: "top",
  collision: "fit flip",
};

class ProductView extends React.PureComponent {
  constructor(props) {
    super(props);

    this.show = this.show.bind(this);
    this.renderAgentDetails = this.renderAgentDetails.bind(this);
  }

  render() {
    const { singleProduct } = this.props;
    return (
      <>
        <div className="productBox">
          <div onClick={this.show} className="item-content">
            <img
              src={singleProduct.Image}
              style={{ width: "200px", height: "auto" }}
            />

            <div className="item-options">
              <div>
                <div id="productTitle">{singleProduct.ProductName}</div>
                <div className="price large-text">
                  {formatCurrency(singleProduct.Price)}
                </div>
                <div id="onHandQty">On Hand Qty: {singleProduct.OnHandQty}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  renderAgentDetails() {
    return <></>;
  }

  show() {
    this.props.show(this.props.singleProduct);
  }
}

export default ProductView;
