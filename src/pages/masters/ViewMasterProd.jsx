import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';

export default function ProductCategoryview() {
    const myDataSource = [
        { AutoID: 1, CatCode: 'Tyres', Brand: 'DSI', CategoryStatus: 'true' },
        { AutoID: 1, CatCode: 'Tyres',Brand: 'Nankang', CategoryStatus: 'true' },
        { AutoID: 2, CatCode: 'Nuts', Brand: 'Anchor',CategoryStatus: 'true' },
        { AutoID: 3, CatCode: 'Bolts', Brand: 'Anchor',CategoryStatus: 'true' },
        { AutoID: 4, CatCode: 'Air Freshner', Brand: 'Airwick', CategoryStatus: 'false' }
    ]

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

                    <Column dataField='CatCode' caption='Code' dataType='string' />
                    <Column dataField='Brand' caption='Brand' dataType='string' />
                    <Column dataField='CategoryStatus' caption='Status' />
                </DataGrid>
                <br></br>
                <div>
                    <Button>Print PDF</Button>
                    <Button>Clear Table</Button>
                </div>
            </div>
        </React.Fragment>

    )
}