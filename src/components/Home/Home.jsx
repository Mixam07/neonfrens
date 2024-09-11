import home from "../../assets/audio/home.wav";
import head_desktop from "../../assets/gif/fountain/desktop/head.png";
import ring_desktop from "../../assets/gif/fountain/desktop/ring.png";
import water_desktop from "../../assets/gif/fountain/desktop/water.gif";
import mouth_desktop from "../../assets/gif/fountain/desktop/mouth.gif"; 
import head_mobile from "../../assets/gif/fountain/mobile/head.png";
import ring_mobile from "../../assets/gif/fountain/mobile/ring.png";
import water_mobile from "../../assets/gif/fountain/mobile/water.gif";
import mouth_mobile from "../../assets/gif/fountain/mobile/mouth.gif"; 
import flies from "../../assets/gif/flies.gif";
import open from "../../assets/audio/open.wav";
import close from "../../assets/audio/close.wav";

import s from "./Home.module.css";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { useState } from "react";
import Canvas from "../common/Canvas/Canvas";

const Home = (props) => {
    const [ isShowPremint, setIsShowPremint ] = useState(false);
    const [ isShowPostmint, setIsShowPostmint ] = useState(false);
    const [openAudio] = useState(new Audio(open));
    const [closeAudio] = useState(new Audio(close));

    const openFun = (fun) => {
        fun(true);
        openAudio.play();
    }
    const closeFun = (fun) => {
        fun(false);
        closeAudio.play();
    }
    return(
        <section className={classNames(s.home, {[s.unactive]: isShowPremint || isShowPostmint})}>
            <div className={s.wrapper}>
                <div className={classNames(s.fountain, s.desktop)}>
                    <div>
                        <img src={ring_desktop} alt="ring" />
                    </div>
                    <div>
                        <img src={water_desktop} alt="water" />
                    </div>
                    <div>
                        <img src={head_desktop} alt="head" />
                    </div>
                    <div>
                        <img src={mouth_desktop} alt="mouth" />
                    </div>
                </div>
                <div className={classNames(s.fountain, s.mobile)}>
                    <div>
                        <img src={ring_mobile} alt="ring" />
                    </div>
                    <div>
                        <img src={water_mobile} alt="water" />
                    </div>
                    <div>
                        <img src={head_mobile} alt="head" />
                    </div>
                    <div>
                        <img src={mouth_mobile} alt="mouth" />
                    </div>
                </div>
                <div className={s.flies}>
                    <img src={flies} alt="flies" />
                </div>
                <audio src={home} autoPlay loop></audio>
            </div>
            <div className={s.navigation}>
                <nav className={s.social}>
                    {
                        props.socialNetworks.opensea.isActive ?
                        <a href={props.socialNetworks.opensea.href} className={classNames(s.href, {[s.unactive]: !props.socialNetworks.opensea.isActive})}></a> :
                        <div className={classNames(s.href, {[s.unactive]: !props.socialNetworks.opensea.isActive})}></div>
                    }
                    {
                        props.socialNetworks.twitter.isActive ?
                        <a href={props.socialNetworks.twitter.href} className={classNames(s.href, {[s.unactive]: !props.socialNetworks.twitter.isActive})}></a> :
                        <div className={classNames(s.href, {[s.unactive]: !props.socialNetworks.twitter.isActive})}></div>
                    }
                    {
                        props.socialNetworks.discord.isActive ?
                        <a href={props.socialNetworks.discord.href} className={classNames(s.href, {[s.unactive]: !props.socialNetworks.discord.isActive})}></a> :
                        <div className={classNames(s.href, {[s.unactive]: !props.socialNetworks.discord.isActive})}></div>
                    }
                </nav>
                <NavLink to="/labs" className={s.labs}></NavLink>
                <NavLink to="/frenslistchecker" className={s.frenslistChecker}></NavLink>
                {
                    props.type === 1 ? <button onClick={ () => { openFun(setIsShowPremint) } } className={s.mintPortal}></button>:
                    props.type === 2 ? <NavLink to="/mintportal" className={s.mintPortal}></NavLink>:
                    props.type === 3 ? <button onClick={ () => { openFun(setIsShowPostmint) } } className={s.mintPortal}></button>: null
                }
            </div>
            <Canvas type={2} isShow={isShowPremint}>
                <button onClick={ () => { closeFun(setIsShowPremint) } } className={classNames(s.closePremint)}></button>
                <div className={s.premint}>
                    <h1 className={s.title}>PORTAL STATUS : <span className={s.special}>DEACTIVATED</span></h1>
                    <a href={props.socialNetworks.twitter.href} className={s.link}>Follow us on Twitter</a>
                    <div className={s.desc}>for up-to-date information  regarding mint details</div>
                </div>
            </Canvas>
            <Canvas type={3} isShow={isShowPostmint}>
                <button onClick={ () => { closeFun(setIsShowPostmint) } } className={classNames(s.closePostmint)}></button>
                <div className={s.postmint}>
                    <h1 className={s.title}>PORTAL STATUS : <span className={s.special}>DEACTIVATED</span></h1>
                    <div className={s.desc}>All <span className={s.green}>Neon</span> <span className={s.red}>Frens</span> have been minted</div>
                    <a href={props.socialNetworks.opensea.href} className={s.link}>View OpenSea</a>
                </div>
            </Canvas>
        </section>
    )
}

export default Home;