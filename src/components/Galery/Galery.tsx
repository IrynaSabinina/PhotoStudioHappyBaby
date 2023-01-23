import styles from "./Galery.module.css";
export const Galery = () => {
  return (
    <>
      <div className={styles.galery}>
        <img className={styles.img} src="/images/IMG_5996.jpg" alt="1" />
        <img className={styles.img} src="/images/IMG_6060.jpg" alt="2" />
        <img className={styles.img} src="/images/IMG_5895.jpg" alt="3" />
        <img className={styles.img} src="/images/IMG_2047.jpg" alt="4" />
        {/* <img className={styles.img} src="/images/IMG_2703.jpg" alt="5" /> */}
        <img className={styles.img} src="/images/IMG_2873.jpg" alt="6" />
      </div>
    </>
  );
};
