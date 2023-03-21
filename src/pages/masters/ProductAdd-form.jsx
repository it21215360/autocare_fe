import React from 'react';
import 'devextreme/dist/css/dx.light.css';
 
import {
    Form
} from 'devextreme-react/form';
 
const Appform = () => {
    return (
        <div className={'content-block'}>
            <Form id="form">
                {/* Configuration goes here */}
            </Form>
        </div>
    );
}
 
export default Appform;