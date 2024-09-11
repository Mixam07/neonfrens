import terminal_desktop from "../../assets/gif/terminal/desktop/terminal.gif";
import terminal_mobile from "../../assets/gif/terminal/mobile/terminal.gif";
import labs from "../../assets/audio/labs.wav";
import glass_desktop from "../../assets/gif/incubator/desktop/glass.png";
import neonx from "../../assets/gif/neonx.gif";
import glass_mobile from "../../assets/gif/incubator/mobile/glass.png";
import open from "../../assets/audio/open.wav";
import close from "../../assets/audio/close.wav";

import s from "./Labs.module.css";
import { NavLink } from "react-router-dom";
import Canvas from "../common/Canvas/Canvas";
import { useState } from "react";
import classNames from "classnames";

const Labs = (props) => {
    const [ isShow, setIsShow ] = useState(false);
    const [openAudio] = useState(new Audio(open));
    const [closeAudio] = useState(new Audio(close));

    const openFun = () => {
        setIsShow(true);
        openAudio.play();
    }
    const closeFun = () => {
        setIsShow(false);
        closeAudio.play();
    }
    return(
        <section className={classNames(s.labs, {[s.unactive]: isShow})}>
            <div className={s.wrapper}>
                <div className={classNames(s.incubator, s.desktop)}>
                    <div className={s.neonx}>
                        <img src={neonx} alt="neonx" />
                    </div>
                    <div>
                        <img src={glass_desktop} alt="glass" />
                    </div>
                </div>
                <div className={classNames(s.incubator, s.mobile)}>
                    <div className={s.neonx}>
                        <img src={neonx} alt="neonx" />
                    </div>
                    <div>
                        <img src={glass_mobile} alt="glass" />
                    </div>
                </div>
                <div className={classNames(s.terminal, s.desktop)}>
                    <img src={terminal_desktop} alt="incubator" />
                </div>
                <div className={classNames(s.terminal, s.mobile)}>
                    <img src={terminal_mobile} alt="incubator" />
                </div>
                <audio src={labs} autoPlay loop></audio>
            </div>
            <div className={s.navigation}>
                <NavLink to="/home" className={s.home}></NavLink>
                <button onClick={openFun} className={s.incubatorBtn}></button>
            </div>
            <Canvas type={1} isShow={isShow}>
                <div className={s.info}>
                    <h1 className={s.title}>Welcome To NEONXLAB, The Newly founded NFT lab Curated for any and everyone</h1>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <h2 className={s.caption}>100% Artwork</h2>
                            <p className={s.desc}>We offer no empty claims of future tech development. Instead, we are focused on delivering high quality art for all to enjoy and be inspired by.</p>
                        </li>
                        <li className={s.item}>
                            <h2 className={s.caption}>100% Community</h2>
                            <p className={s.desc}>We look forward to providing people, of diverse backgrounds, the opportunity to be a part of a unique and inclusive group.</p>
                        </li>
                    </ul>
                    <div className={s.text}>Prepare to witness, <span className={s.special}>the Power of X.</span></div>
                </div>
                <button onClick={closeFun} className={s.close}></button>
            </Canvas>
        </section>
    )
}

export default Labs;