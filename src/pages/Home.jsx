import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Explore the world.
          <br />
          Let TourTracker capture your journey.
        </h1>
        <h2>
          Discover a dynamic world map that follows every step you take—across
          cities, mountains, and coastlines. Relive your adventures, treasure
          your memories, and share your global story with friends.
        </h2>
        <Link to="/login" className="cta">
          Start Tracking now
        </Link>
      </section>
    </main>
  );
}
