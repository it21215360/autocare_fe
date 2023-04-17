import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing} from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';

export default function Cancel() {
    const myCancellation = [{ fname: 'Nimali', lname: 'Silva', phone: '01123456789', email: 'nimali123@gmail.com', vnumber: 'ABC123', vtype: 'Jeep', date: '10/05/2023', time: '4.00', venue: 'Dehiwala' },
    { fname: 'Sumali', lname: 'Silva', phone: '01177778892', email: 'sumali09@gmail.com', vnumber: 'CAW1234', vtype: 'Car', date: '30/05/2023', time: '5.00', venue: 'Kollupitiya' },
    { fname: 'Kusum', lname: 'kumari', phone: '0119988773', email: 'kusum02@gmail.com', vnumber: 'DDS7687', vtype: 'Van', date: '10/12/2023', time: '7.00', venue: 'Wallawatte' },
    { fname: 'Amal', lname: 'Perera', phone: '0778822345', email: 'amalm122@gmail.com', vnumber: 'YRT3456', vtype: 'Jeep', date: '31/05/2023', time: '4.00', venue: 'Kollopitiya' },
    { fname: 'Aruni', lname: 'Gomas', phone: '0112343234', email: 'arunigomas1234@gmail.com', vnumber: 'EDC9988', vtype: 'Jeep', date: '10/11/2023', time: '3.00', venue: 'Dehiwala' },

    ]

    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h3>Cancel Appointment</h3>
                <DataGrid id='sample'
                    dataSource={myCancellation}
                    rowAlternationEnabled={true}
                    showBorders={true}>
                    <SearchPanel visible={true} highlightCaseSensitive={true} />

                    <Editing
                        mode="popup"
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true} />

                    <Column dataField='fname' caption='First Name' dataType='string'></Column>
                    <Column dataField='lname' caption='Last Name' dataType='string'></Column>
                    <Column dataField='phone' caption='Phone Number' dataType='int'></Column>
                    <Column dataField='email' caption='Email Address' dataType='email'></Column>
                    <Column dataField='vnumber' caption='Vehicle Number' dataType='int'></Column>
                    <Column dataField='vtype' caption='Vehicle Type' dataType='String'></Column>
                    <Column dataField='date' caption='Scehduled Date' dataType='date'></Column>
                    <Column dataField='time' caption='Time' dataType='time'></Column>
                    <Column dataField='venue' caption='Venue' dataType='String'></Column>

                </DataGrid>
                <br></br>
                {/** 
                <div>
                    <Button><b>View Order List</b></Button>
                    <Button><b>Clear</b></Button>
                </div>*/}
            </div>
        </React.Fragment>

    )
}