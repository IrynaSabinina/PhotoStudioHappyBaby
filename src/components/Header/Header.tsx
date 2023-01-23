import styles from "./Header.module.css";
export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <p>
          SabininaIryna <span> you professional newbornPhotographer</span>
        </p>
        <div>
          <p>tel: +48576741276</p>
          <p>email: pysarenkoiryna@gmail.com</p>
        </div>
      </div>
    </>
  );
};
