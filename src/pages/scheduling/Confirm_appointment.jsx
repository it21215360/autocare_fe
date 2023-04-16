import React, { Component } from "react";
import DataGrid, { Column, SearchPanel, Editing} from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react/button';
import './Confirm.scss';
function Confirm(){
  const myCancellation = [{ fname: 'Nimali', lname: 'Silva', phone: '01123456789', email: 'nimali123@gmail.com', vnumber: 'ABC123', vtype: 'Jeep', date: '10/05/2023', time: '4.00', venue: 'Dehiwala' },
    ]

    return(
              
        <React.Fragment>
            
            <div className={'content-block'}>
                <h3>Confirm  Appointment</h3>
                <DataGrid id='sample'
                    dataSource={myCancellation}
                    rowAlternationEnabled={true}
                    showBorders={true}>
                    <SearchPanel visible={true} highlightCaseSensitive={true} />

                    <Editing
                        mode="popup"
                        allowUpdating={false}
                        allowDeleting={false}
                        allowAdding={false} />

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
                
            </div>
            
            <Button className="button"  stylingMode="contained" >Confirm Appointment</Button>
            <Button className="button"  stylingMode="contained" >Update Appointment</Button>
            <Button className="button"  stylingMode="contained" >Delete Appointment</Button>

         
        </React.Fragment>
          
     
    )
    }
    export default Confirm