import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import User from "./User";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.user}>
        <User />
      </div>
      <Logo />
      <AppNav />
      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by TourTracker Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
