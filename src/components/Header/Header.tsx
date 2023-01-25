import styles from "./Header.module.css";
export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <p>
          <span className={styles.logo}>SabininaIryna</span>{" "}
          <span> you professional newbornPhotographer</span>
        </p>
        <div className={styles.text}>
          <p>tel: +48576741276</p>
          <p>email: pysarenkoiryna@gmail.com</p>
        </div>
      </div>
    </>
  );
};
