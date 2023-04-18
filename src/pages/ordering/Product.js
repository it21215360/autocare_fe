import React from 'react';
import notify from 'devextreme/ui/notify';
import Button from 'devextreme-react/button';
import Popup from 'devextreme-react/popup';
import './styles.scss';
import { housesSource } from './data.js';
import Productslist from './Productslist.js';

//function ProductPage(){

const ADD_TO_CART = 'Add to Cart';
const REMOVE_FROM_CART = 'Remove from Cart';

const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
}).format;

const favButtonAttrs = {
  class: 'favorites',
};

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentHouse: housesSource[0],
    };

    this.renderPopup = this.renderPopup.bind(this);
    this.showHouse = this.showHouse.bind(this);
    this.changeFavoriteState = this.changeFavoriteState.bind(this);
    this.handlePopupHidden = this.handlePopupHidden.bind(this);
  }

  render() {
    return (
      <div className="images">
        {
          housesSource.map((h) => <Productslist
            house={h}
            show={this.showHouse}
            key={h.ID}
          />)
        }
        <Popup
          width={660}
          height={540}
          showTitle={true}
          title={this.state.currentHouse.Address}
          dragEnabled={false}
          hideOnOutsideClick={true}
          visible={this.state.popupVisible}
          onHiding={this.handlePopupHidden}
          contentRender={this.renderPopup}
        />
      </div>
    );
  }

  renderPopup() {
    const { currentHouse } = this.state;
    return (
      <div className="popup-property-details">
        <div className="large-text">{formatCurrency(currentHouse.Price)}</div>
        <div className="opacity">{currentHouse.Address}, {currentHouse.City}, {currentHouse.State}</div>
        <Button
          icon="cart"
          text={currentHouse.Favorite ? REMOVE_FROM_CART : ADD_TO_CART}
          width={210}
          height={44}
          elementAttr={favButtonAttrs}
          onClick={this.changeFavoriteState}
        />
        <div className="images">
          <img src={currentHouse.Image} />
          <img src={currentHouse.Image.replace('.jpg', 'b.jpg')} />
        </div>
        <div>{currentHouse.Features}</div>
      </div>
    );
  }

  showHouse(house) {
    this.setState({
      currentHouse: house,
      popupVisible: true,
    });
  }

  handlePopupHidden() {
    this.setState({
      popupVisible: false,
    });
  }

  changeFavoriteState() {
    const { currentHouse } = this.state;
    currentHouse.Favorite = !currentHouse.Favorite;

    this.renderPopup = this.renderPopup.bind(this);
    this.setState({
      currentHouse,
    });

    notify({
      message: `This item has been ${
        currentHouse.Favorite ? 'added to' : 'removed from'
      } the Cart!`,
      width: 450,
    },
    currentHouse.Favorite ? 'success' : 'error', 2000);
  }
}
export default Product;
//}

//export default ProductPage;