import React from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { useState } from "react";
import './Login.scss';

function EmpLogin() {

    const [LoginDetails,setLoginDetails] = useState({UserName: 'Maheesha', Password: '123'})
    return(
        <>
           <div className={'content-block'}>
            <h2>Employee Login Page</h2>
            <Form formData={LoginDetails}>
                <GroupItem caption="Login" colCount=''>
                    
                    <Item dataField="UserName" editorType="dxTextBox" editorOptions={{
                            readOnly: true,}}>
                            <Label text="User Name"></Label>
                            <RequiredRule message="Field required" />
                    </Item>

                    <Item dataField="Password" editorType="dxTextBox" editorOptions={{
                            readOnly: true,}}>
                            <Label text="PassWord"></Label>
                            <RequiredRule message="Field required" />
                    </Item>
                </GroupItem>        
            </Form>
            </div>
        </>
    )
}

export default EmpLogin