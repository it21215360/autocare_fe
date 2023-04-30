const OnLoadData = (ProdID) => {
  try {
    axios
      .get(`${API_BASE_URL}/api/order/get-cart`, {
        params: {
          ProductID: ProdID,
        },
      })
      .then((res) => {
        console.log(res.data);

        setCartItem(res.data[0][0]);
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
      ProdID: viewListSelectedID,
      DataLoading: true,
      isDocReadOnly: true,
      UpdateMode: true,
    });

    OnLoadData(viewListSelectedID);
  }
};
