import styles from "./SidebarItem.module.scss";

export const SidebarItem = ({ icon = "", title = "" }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <img src={icon} alt="" />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};
