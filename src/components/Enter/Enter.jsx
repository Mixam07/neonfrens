import arrow from "../../assets/img/arrow.svg";

import s from "./Enter.module.css";
import { NavLink } from 'react-router-dom';

const Enter = (props) => {
    return(
        <section className={s.enter}>
            <div className={s.background}></div>
            <div className={s.wrapper}>
                <div className={s.title}><samp className={s.green}>NEON</samp> <span className={s.red}>FRENS</span></div>
                <NavLink to="/home" className={s.href}>
                    <div className={s.arrow}>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className={s.text}>enter</div>
                    <div className={s.arrow}>
                        <img src={arrow} alt="arrow" />
                    </div>
                </NavLink>
            </div>
        </section>
    )
}

export default Enter;