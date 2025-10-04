// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple Pricing.
            <br />
            Only $9/month.
          </h2>
          <p>
            Enjoy unlimited access to TourTracker’s features with one
            straightforward plan. No hidden fees, no surprises—just everything
            you need to capture and share your travel adventures.
          </p>
        </div>

        <img
          src="pricing-page.png"
          alt="overview of a large city with skyscrapers"
        />
      </section>
    </main>
  );
}
