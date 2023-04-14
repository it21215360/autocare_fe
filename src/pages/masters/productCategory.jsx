import React, { useEffect, useState } from "react";
import "devextreme/dist/css/dx.light.css";
import DataGrid, {
  Column,
  SearchPanel,
  Editing,
  Paging,
  Lookup,
} from "devextreme-react/data-grid";
import { Button } from "devextreme-react";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";

export default function ProductCategory() {
  const fetchURL = `${API_BASE_URL}/api/master/list-product-category`;

  const [productCategories, setProductCategories] = useState([]);
  const [isLoadingData, setIsdataLoading] = useState(true);

  //get product category info
  useEffect(() => {
    if (isLoadingData)
      axios.get(fetchURL).then((response) => {
        console.log(response);
        setProductCategories(response.data);
        setIsdataLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <div className={"content-block"}>
        <h5>Product Category</h5>
        <DataGrid
          id="sample"
          keyExpr="AutoID"
          dataSource={productCategories}
          rowAlternationEnabled={true}
          showBorders={true}
          repaintChangesOnly={true}
        >
          <SearchPanel visible={true} highlightCaseSensitive={true} />
          <Paging enabled={true} />
          <Editing
            mode="row"
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={true}
          />

          <Column dataField="Code" caption="Code" dataType="string" />
          <Column dataField="IsActive" caption="Status" />
        </DataGrid>
        <br></br>
        <div>
          <Button>View List</Button>
          <Button>Clear</Button>
        </div>
      </div>
    </React.Fragment>
  );
}
