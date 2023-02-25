import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';

export default function ProductCategory() {
    const myDataSource = [{ AutoID: 1, CategoryCode: 'Tyres', CategoryStatus: 'true' },
    { AutoID: 1, CategoryCode: 'Tyres', CategoryStatus: 'true' },
    { AutoID: 2, CategoryCode: 'Nuts', CategoryStatus: 'true' },
    { AutoID: 3, CategoryCode: 'Bolts', CategoryStatus: 'true' },
    { AutoID: 4, CategoryCode: 'Air Freshner', CategoryStatus: 'false' }]

    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h5>Product Category</h5>
                <DataGrid id='sample'
                    dataSource={myDataSource}
                    rowAlternationEnabled={true}
                    showBorders={true}>
                    <SearchPanel visible={true} highlightCaseSensitive={true} />

                    <Editing
                        mode="row"
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true} />

                    <Column dataField='CategoryCode' caption='Code' dataType='string' />
                    <Column dataField='CategoryStatus' caption='Status' />
                </DataGrid>
                <br></br>
                <div>
                    <Button>View List</Button>
                    <Button>Clear</Button>
                </div>
            </div>
        </React.Fragment>

    )
}