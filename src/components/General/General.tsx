import styles from "./General.module.css";
export const General = () => {
  return (
    <>
      <h1>Choose your package of services</h1>
      <section className={styles.section}>
        <div>
          <h3>package of services "Basic"</h3>
          <p></p>
        </div>
        <div>
          <h3>package of services "Optimal"</h3>
        </div>
        <div>
          <h3>package of services "All Include"</h3>
        </div>
      </section>
    </>
  );
};
