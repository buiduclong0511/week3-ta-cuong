import { v4 as uuidv4 } from "uuid";

import { Header, Sidebar } from "../../components";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  const sidebarModel = [
    {
      id: uuidv4(),
      icon: "images/dashboard.png",
      title: "Dashboard",
    },
    {
      id: uuidv4(),
      icon: "images/logs.png",
      title: "Logs",
    },
    {
      id: uuidv4(),
      icon: "images/setting.jpg",
      title: "Settings",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar sidebarModel={sidebarModel} />
      </div>
      <div className={styles.main}>
        <Header />
      </div>
    </div>
  );
};
