import React, { useState } from 'react';
import './CourierProfile.scss';
import Form from 'devextreme-react/form';

export default function CourierProfile() {
  const [notes, setNotes] = useState(
    'Ruwan is our new courier man '
  );
  const Courier = {
    ID: 7,
    FirstName: 'Ruwan',
    LastName: 'Perera',
    Prefix: 'Mr.',
    Position: 'Delivery Driver',
    Picture: 'image/Courier/delivery.jpg',
    NIC: '73892829282',
    JoinDate: new Date('2022/05/11'),
    Notes: notes,
    Address: '46/B  Colombo Rd.'
  };

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Courier Profile</h2>

      <div className={'content-block dx-card responsive-paddings'}>
        <div className={'form-avatar1'}>
          <img
            alt={''}
            src={`https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/${
              Courier.Picture
  }`}
          />
        </div>
        <span>{notes}</span>
      </div>

      <div className={'content-block dx-card responsive-paddings'}>
        <Form
          id={'form'}
          defaultFormData={Courier}
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
