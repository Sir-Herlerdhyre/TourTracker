import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.map}>
        <Map />
      </div>
      {/* <div className={styles.user}>
        <User />
      </div> */}
    </div>
  );
}

export default AppLayout;
