import styles from "./footer.module.css"

export default function Footer() {
    return (
        <div className={styles.container}>
            <p>Grundejerforening for Lindholt Etape 2 - Bestyrelse kan kontaktes på: <a href="mailto:bestyrelse@lindholt2.dk"><span className="mailLink">bestyrelse@lindholt2.dk</span></a></p>
        </div>
    )
}