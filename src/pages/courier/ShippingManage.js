import React from 'react'; 
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing,ValidationRule } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';

export default function  ShippingManage() {
    const myDataSource = [{DeliveryID:1 ,OrderID: 776, Address: 'Kadawatha ',  CustomerName: 'Ajith Kumar', Phone:'0777455534' , City:'Kalaniya',Province:'Western ', DeliveryCharge: 300.00, OrderedDate: '01/02/2023', Status: 'Successful'},
    { DeliveryID:2, OrderID: 27898, Address: 'No 34 Mabola Wattala', CustomerName: 'Vijitha Perera', Phone: '0765432461', City:'Jaela', Province: 'Central', DeliveryCharge: 400.00, OrderedDate: '01/02/2023', Status: 'In Progress'},
    {DeliveryID:3 , OrderaID:76776,Address: 'No 23 Kanuwana Jaela',  CustomerName: 'Ranil Fernando', Phone: '0787432460', City:'Chilaw' ,Province:'Southern', DeliveryCharge: 600.00, OrderedDate: '04/02/2023', Status: 'Successful'},
    { DeliveryID: 4,OrderID: 8776, Address: 'Kanadana Jaela',  CustomerName: 'Kavinda de Silva', Phone: '0765467461', City:'Seeduwa', Province: 'North western', DeliveryCharge: 600.00, OrderedDate: '03/02/2023',Status:'Failed'}]

    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h5><b>Delivery Requests</b></h5>
                <DataGrid id='sample'
                    dataSource={myDataSource}
                    rowAlternationEnabled={true}
                    showBorders={true}>
                    <SearchPanel visible={true} highlightCaseSensitive={true} />

                    <Editing
                        mode="popup"
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true} />

               <Column dataField='DeliveryID' caption='DeliveryID' dataType='string'> <ValidationRule type="required" /></Column>                   
               <Column dataField='OrderID' caption='Order ID' dataType='string'> <ValidationRule type="required" /></Column>     
               <Column dataField='CustomerName' caption='Customer Name' dataType='string'> <ValidationRule type="required" /></Column>
               <Column dataField='Address' caption='Address' dataType='string'> <ValidationRule type="required" /></Column>
                    <Column dataField='Phone' caption='Phone' dataType='string'> <ValidationRule type="required"/></Column>
                    <Column dataField='City' caption='City' dataType='string'> <ValidationRule type="required"/></Column>
                    <Column dataField='Province' caption='Province' dataType='string'> <ValidationRule type="required" /></Column>
                    <Column dataField='DeliveryCharge' caption='Delivery Charge ' dataType='float'> <ValidationRule type="required" /></Column>
                    <Column dataField='OrderedDate' caption='Ordered Date' dataType='date'> <ValidationRule type="required" /></Column>
                    <Column dataField='Status' caption='Order Status' dataType='String'> <ValidationRule type="required" /></Column>
                    
        
                </DataGrid>
                <br></br>
                <div>
                    <Button><b>View Order List</b></Button>
                    <Button><b>Clear</b></Button>
                    <Button><b>Export Excel Sheet</b></Button>
                    
                </div>
            </div>
        </React.Fragment>

    )
}