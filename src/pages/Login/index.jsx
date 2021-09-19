import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

import { InputField, Button } from "../../components";
import { PASSWORD, USERNAME } from "../../constants";
import { PATH_DASHBOARD } from "../../routes";
import styles from "./Login.module.scss";

export const Login = () => {
  const [loginValue, setLoginValue] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const handleChangeUsername = (event) => {
    // rest
    setLoginValue({
      ...loginValue,
      username: event.target.value,
    });
  };

  const handleChangePassword = (event) => {
    // rest
    setLoginValue({
      ...loginValue,
      password: event.target.value,
    });
  };

  const handleLogin = () => {
    // if (loginValue.username === USERNAME && loginValue.password === PASSWORD) {
    //   history.push(PATH_DASHBOARD);
    // }
    axios
      .post("/login", loginValue)
      .then((res) => {
        window.localStorage.setItem("userInfo", JSON.stringify(res.data.data));
        toast.success("Login successfully!");
        history.push(PATH_DASHBOARD);
      })
      .catch((err) => toast.error(err.response.data.message));
    // console.log(loginValue);
  };

  return (
    <div className={styles.wrapper}>
      <form action="">
        <h2 className={styles.heading}>SOIOT SYSTEM</h2>
        <div className={styles.input}>
          <InputField
            placeholder="Username"
            value={loginValue.username}
            onChange={handleChangeUsername}
          />
        </div>
        <div className={styles.input}>
          <InputField
            placeholder="Password"
            value={loginValue.password}
            onChange={handleChangePassword}
            type="password"
          />
        </div>
        <div className={styles.listBtns}>
          <Button onClick={handleLogin}>Login</Button>
          <span className={styles.navToRegister}>or create new account</span>
        </div>
      </form>
    </div>
  );
};
