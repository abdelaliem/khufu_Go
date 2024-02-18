import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <p>Loading Your location</p>
    </div>
  );
}

export default Spinner;
