import Link from "next/link"
import Links from "./links/links"
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>LINDHOLT 2</Link>
            <div>
                <Links />
            </div>
        </div>
    )
}