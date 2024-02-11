import Image from "next/image";
import style from "./about.module.css"

export default function About() {
    return <div>
        <div className={style.imgContainer}>
            <Image src="https://images.pexels.com/photos/19927917/pexels-photo-19927917/free-photo-of-police-car-near-radio-city-music-hall-in-new-york.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill />
        </div>

    </div>
};
