import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (

  <main className={styles.main}>
    <div className={styles.card}>
      <div>
        {/* <img className={styles.qr_image}
            src="image-qr-code.png"
            alt="Picture of the author"
        /> */}
        <Image 
          src="/image-qr-code.png"
          width={576}
          height={576}
          alt="Picture of the author"
          />
      </div>
      <div className={styles.cardItem}>some stuff here</div>
      <div className={styles.cardItem}>Four score and seven years ago, our founding fathers</div>
    </div>
  </main>
  );
}
