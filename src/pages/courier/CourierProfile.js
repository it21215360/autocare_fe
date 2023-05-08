import React, { useState } from 'react';
import './CourierProfile.scss';
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";


export default function CourierProfile() {
  const [notes, setNotes] = useState(
    'Mahen Johnson'
  );
  const courier = {
    ID: 7,
    FullName: 'Mahen Johnson',
    Picture: 'images/employees/06.png',
    NIC: '19980076876',
    HireDate: new Date('2005/05/11'),
    Email:'Mahen@gmail.com',
    Phone:'0770086655',
    


  };

  const vehicle = {
    VehicleID: 778,
    VehicleType: 'Van',
    Model: 'Toyota',
    Brand: 'Mistubishi',
    VehicleNo:'789-768',

  };

  return (
    <React.Fragment>
      <h2 className={'content-block'}>My Profile</h2>

      <div className={'content-block dx-card responsive-paddings'}>
        <div className={'form-avatar1'}>
          <img
            alt={''}
            src={`https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/${
              courier.Picture

              
  }`

}

 
          />

        
        </div>
      

      </div>
      
      <h2 className={'content-block'}>My Details</h2>
      <div id="block1" className={'content-block dx-card responsive-paddings'}>
        <Form
          id={'form'}
          defaultFormData={courier}
          onFieldDataChanged={e => e.dataField === 'Notes' && setNotes(e.value)}
          labelLocation={'top'}
          colCountByScreen={colCountByScreen}
        />
      </div>
     
      <h2 className={'content-block'}>My Vehicle</h2>

      <div className={'content-block dx-card responsive-paddings'}>
        <Form
          id={'form'}
          defaultFormData={vehicle}
          onFieldDataChanged={e => e.dataField === 'Notes' && setNotes(e.value)}
          labelLocation={'top'}
          colCountByScreen={colCountByScreen}
          
        />
      </div>
    </React.Fragment>

    
  );
}

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4
};
