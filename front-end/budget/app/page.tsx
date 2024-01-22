import Image from "next/image";
import styles from './main.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className={styles.flex}>
        <div className="ml-10">
            <h1 className={styles.header}>Save Money With Penny Wise.</h1>
            <h2 className={styles.secondHeader}>Create Budgets. See Results.</h2>
            <Link href="sign-in/"><button className="btn">Start Now</button></Link>
          </div>
          <div className={styles.graph}>
            <div className={styles.third}></div>
            <div className={styles.second}></div>
            <div className={styles.first}></div>
          </div>
      </div>
    </main>
  );
}
