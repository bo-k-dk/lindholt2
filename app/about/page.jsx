import Image from "next/image";
import style from "./about.module.css"

export default function About() {
    return <div>
        <div className={style.imgContainer}>
            <Image src="/about.png" alt="" fill />
        </div>

    </div>
};
