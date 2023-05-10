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
import { API_BASE_URL } from "../../appconfig/config";
import axios from "axios";
import "./LoginForm.scss";

export default function LoginForm() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let fetchURL = `${API_BASE_URL}/api/user/authenticate`;
    axios
      .get(fetchURL, {
        params: {
          userName: formData.username,
          password: formData.password,
        },
      })
      .then(
        (response) => {
          if (response.data.length == 0) {
            setLoading(false);
            notify("Access denied", "error", 2000);
          } else {
            setLoading(false);
            notify("Access granted", "success", 3000);
            signIn(response.data[0]);
          }
        },
        (error) => {
          setLoading(false);
          notify(error, "error", 2000);
        }
      );
  };

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
