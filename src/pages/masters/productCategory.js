import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import { DataGrid } from 'devextreme-react/data-grid';

export default function ProductCategory() {
    return (
        <React.Fragment>
            <div>
                <h5>Product Category</h5>
                <DataGrid id='sample'></DataGrid>
            </div>
        </React.Fragment>

    )
}