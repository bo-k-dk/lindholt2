"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink"

export default function Links() {

    const [open, setOpen] = useState(false);
    const links = [
        {
            title: "Nyheder",
            path: "/",
        },
        {
            title: "Historie",
            path: "/about",
        },
        {
            title: "Kontakt",
            path: "/contact",
        },
    ];

    const session = false;
    const isAdmin = false;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link => (
                    <NavLink item={link} key={link.title} />
                )))}
                {session ? (
                    <>
                        {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )}
            </div>

            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>MENU</button>

            {
                open && <div className={styles.mobileLinks} >
                    {links.map((link => (
                        <NavLink item={link} key={link.title} />
                    )))}
                </div>
            }
        </div>

    )
}