import { Link } from "react-router-dom";

import { PATH_LOGIN } from "../../routes";
import styles from "./UserInfo.module.scss";

export const UserInfo = () => {
  const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
  return (
    <div className={styles.wrapper}>
      {userInfo ? (
        <>
          <div className={styles.avatar}>
            <img src="images/account.png" alt="" />
          </div>
          <div className={styles.name}>Welcome {userInfo.username}</div>
        </>
      ) : (
        <Link to={PATH_LOGIN} className={styles.loginBtn}>
          Login
        </Link>
      )}
    </div>
  );
};
