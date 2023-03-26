import React, { useState, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form, {
  Item,
  Label,
  ButtonItem,
  ButtonOptions,
  RequiredRule,
  GroupItem,
} from "devextreme-react/form";
import LoadIndicator from "devextreme-react/load-indicator";
import notify from "devextreme/ui/notify";
import { useAuth } from "../../contexts/auth";
import { LANDING_PAGE_URL } from "../../appconfig/config";

import "./LoginForm.scss";

export default function LoginForm() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      const result = await signIn(formData.username, formData.password);
      debugger;
      if (result)
        if (!result.isOk) {
          setLoading(false);
          notify(result.message, "error", 2000);
        }
    },
    [signIn]
  );

  // const onSuccessfulLogin = useCallback(() => {
  //   navigate("/home");
  // }, [navigate]);

  const onCreateAccountClick = useCallback(() => {
    navigate("/create-account");
  }, [navigate]);

  return (
    <form className={"login-form"} onSubmit={onSubmit}>
      <Form formData={formData} disabled={loading}>
        <Item
          dataField={"username"}
          editorType={"dxTextBox"}
          editorOptions={emailEditorOptions}
        >
          <RequiredRule message="Username is required" />
          <Label visible={false} />
        </Item>
        <Item
          dataField={"password"}
          editorType={"dxTextBox"}
          editorOptions={passwordEditorOptions}
        >
          <RequiredRule message="Password is required" />
          <Label visible={false} />
        </Item>
        <GroupItem colCount={2}>
          <Item
            dataField={"isEmployee"}
            editorType={"dxCheckBox"}
            editorOptions={{
              text: "Employee",
              elementAttr: { class: "form-text" },
            }}
          >
            <Label visible={false} />
          </Item>
          <Item
            dataField={"isCourier"}
            editorType={"dxCheckBox"}
            editorOptions={{
              text: "Courier",
              elementAttr: { class: "form-text" },
            }}
          >
            <Label visible={false} />
          </Item>
        </GroupItem>
        <ButtonItem>
          <ButtonOptions
            width={"100%"}
            type={"default"}
            useSubmitBehavior={true}
          >
            <span className="dx-button-text">
              {loading ? (
                <LoadIndicator width={"24px"} height={"24px"} visible={true} />
              ) : (
                "Sign In"
              )}
            </span>
          </ButtonOptions>
        </ButtonItem>
        <Item>
          <div className={"link"}>
            <Link to={"/reset-password"}>Forgot password?</Link>
          </div>
        </Item>
        <ButtonItem>
          <ButtonOptions
            text={"Create an account"}
            width={"100%"}
            onClick={onCreateAccountClick}
          />
        </ButtonItem>
      </Form>
    </form>
  );
}

const emailEditorOptions = {
  stylingMode: "filled",
  placeholder: "Username",
};
const passwordEditorOptions = {
  stylingMode: "filled",
  placeholder: "Password",
  mode: "password",
};
