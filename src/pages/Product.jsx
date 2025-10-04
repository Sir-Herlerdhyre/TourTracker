import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="product-pag.png"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About TourTracker</h2>
          <p>
            TourTracker is your tour companion for exploring and documenting
            every corner of the globe. From vibrant cities to hidden gems, it
            helps you capture your journeys and turn them into lasting memories.
          </p>
          <p>
            With an interactive world map and smart tracking tools, you can
            relive your adventures anytime and share them effortlessly with
            friends by taking notes. Simple, intuitive, and built for
            travelers—TourTracker brings your journeys to life.
          </p>
        </div>
      </section>
    </main>
  );
}
