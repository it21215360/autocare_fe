import React from 'react'
import 'devextreme/dist/css/dx.light.css';
 
import {
    Form
} from 'devextreme-react/form';
 
const employee = {
    name: 'John Heart',
    officeNumber: 901,
    hireDate: new Date(2012, 4, 13)
};
 
const App2 = () => {
    return (
        <Form
            formData={employee}>
        </Form>
    );
}
 
export default App2;
