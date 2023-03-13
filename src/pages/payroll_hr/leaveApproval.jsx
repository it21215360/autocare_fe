import React from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import LeaveRequestForm from "./LeaveRequestForm";

const LeaveApproval = (props) => {
    return (
        <>
            <div className={'content-block'}>
                <h2>Employee Leave Approval</h2>
                <Form>
                    <GroupItem colCount={1}>
                        <Item>
                            <Label text="First Name"></Label>
                            <p value={props.name} />
                        </Item>

                    </GroupItem>
                </Form>
            </div>
        </>
    )
}

export default LeaveApproval