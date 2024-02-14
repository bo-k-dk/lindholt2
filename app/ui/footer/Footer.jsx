import styles from "./footer.module.css"

export default function Footer() {
    return (
        <div className={styles.container}>
            <p>Grundejerforening for Lindholt Etape 2 - <a href="mailto:skriv@tilbo.dk"><span className="mailLink">skriv@tilbo.dk</span></a></p>
        </div>
    )
}