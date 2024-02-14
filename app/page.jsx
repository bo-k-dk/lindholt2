import Image from "next/image";
import styles from "./home.module.css"
import Link from "next/link";

export default function Home() {
  return <div className={styles.container}>
    <article>
      <p className={styles.newsHeader}>Ekstraordinær generalforsamling</p>
      <p className={styles.bold}>19-02-24 kl. 19.15 Forsamlingshuset (Romalt Boulevard 28, 8960 Randers SØ)</p>
      <br></br>
      <p className={styles.newsSection}>Bestyrelsen indkalder hermed til ekstraordinær generalforsamling. Stemmesedler udleveres ved døren i tidsrummet 18.45-19.10.</p>
      <p className={styles.newsSection}> Af hensyn til at vi kan komme i gang rettidigt, vil vi anmode jer om ikke at komme i sidste øjeblik.</p>

      <div className={styles.pdfDiv}>
        <div className={styles.pdfLink}>
          <Link href="./19-02-24_generalforsamling.pdf" target="_blank" key="1">
            <Image src="/PDF_icon.svg" href="/" alt="PDF download link" fill />
          </Link>
        </div>
        <div>
          <p className={styles.pdfText}>
            Af praktiske hensyn skal tilmelding ske til <a href="mailto:bestyrelse@lindholt2.dk"><span className="mailLink">bestyrelse@lindholt2.dk</span></a> senest den 16. februar 2024.
          </p>
        </div>
      </div>
    </article>
    <br></br><br></br><br></br>
    <article className="pastArticle">
      <p className={styles.newsHeader}>Stiftende generalforsamling</p>
      <p className={styles.bold}>06-11-23 kl. 18.30 Forsamlingshuset (Romalt Boulevard 28, 8960 Randers SØ)</p>
      <br></br>
      <p className={styles.newsSection}>Randers Kommune indkalder til Stiftende generalforsamling af Grundejerforeningen</p>
      <p className={styles.newsSection}>Tilmelding via link i e-boks</p>

      <div className={styles.pdfDiv}>
        <div className={styles.pdfLink}>
          <Link href="./06-11-23_Stiftende generalforsamling.pdf" target="_blank" key="1">
            <Image src="/PDF_icon.svg" href="/" alt="PDF download link" fill />
          </Link>
        </div>
        <div>
          <p className={styles.pdfText}>
            Indbydelsen
          </p>
        </div>
      </div>
      <div className={styles.pdfDiv}>
        <div className={styles.pdfLink}>
          <Link href="./17-01-24_Stiftende_Referat.pdf" target="_blank" key="1">
            <Image src="/PDF_icon.svg" href="/" alt="PDF download link" fill />
          </Link>
        </div>
        <div>
          <p className={styles.pdfText}>
            Referat af Stiftende generalforsamling inkl. vedtægter
          </p>
        </div>
      </div>
    </article>
  </div>;
}

