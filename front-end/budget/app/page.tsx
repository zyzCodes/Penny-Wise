import Image from "next/image";
import styles from './main.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
        <div className={styles.flex}>
          <div className="flex flex-col justify-center items-center ml-10">
              <h1 className={styles.header}>Budget Wise.</h1>
              <h2 className={styles.secondHeader}>Make Budgets. See Results.</h2>
              <Link href="sign-in/"><button className="btn bg-sky-600 text-white animate-button-fade">Start Now</button></Link>
            </div>
          <div className={styles.graph}>
            <div className={styles.third}></div>
            <div className={styles.second}></div>
            <div className={styles.first}></div>
          </div>
        </div>

        <div className="flex justify-evenly">
        </div>
      </div>
  );
}
