import flies from "../../assets/gif/flies_mobile.gif";
import closeIcon from "../../assets/img/close.png";
import open from "../../assets/audio/open.wav";
import close from "../../assets/audio/close.wav";
import plus from "../../assets/img/plus.png";
import minus from "../../assets/img/minus.png";

import s from "./Mintportal.module.css";
import classNames from "classnames";
import Canvas from "../common/Canvas/Canvas";
import React, { useEffect, useState } from 'react';
import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';

global.Buffer = global.Buffer || require('buffer').Buffer;

const Mintportal = (props) => {
    const [ isShow, setIsShow ] = useState(false);
    const [openAudio] = useState(new Audio(open));
    const [closeAudio] = useState(new Audio(close));
    const [connected, setConnected] = useState(false);
    const [ address, setAddress ] = useState('');
    const [ connector, setConnector ] = useState(null);
    const [ message, setMessage ] = useState(null);
    const [ number, setNumber ] = useState(1);
    const [ cost, setCost ] = useState("");

    const connectWallet = async () => {
        const newConnector = new WalletConnect({
            bridge: 'https://bridge.walletconnect.org',
            qrcodeModal: QRCodeModal,
            infuraId: '5af80a4c29b24c009d51a66e971713e2',
        });

        if (!newConnector.connected) {
            await newConnector.connect();
        }

        if (newConnector.connected) {
            const accounts = await newConnector.accounts;
            setAddress(accounts[0]);
            setConnected(true);
            setConnector(newConnector);
        }
    };

    const disconnectWallet = async () => {
        if (connector) {
            await connector.killSession();
            setAddress('');
            setConnected(false);
            setConnector(null);
        }
    };

    const openFun = () => {
        setIsShow(true);
        openAudio.play();
    }

    const closeFun = () => {
        setIsShow(false);
        closeAudio.play();
    }

    const connect = async () => {
        await connectWallet();
    }

    const plusFun = () => {
        if(number < 3){
            setNumber(number + 1)
        }
    }

    const minusFun = () => {
        if(1 < number){
            setNumber(number - 1)
        }
    }

    useEffect( () => {
        if(address){
            if(props.typeMintPortal === "OG LIST"){
                if(!props.walletList.OGlist.some(item => {
                    if(item === address){
                        return true
                    }
                })){
                    disconnectWallet();
                    setMessage("You are not registered to mint at this time.");
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000);
                }
            }else if(props.typeMintPortal === "FRENSLIST"){
                if(!props.walletList.Frenslist.some(item => {
                    if(item === address){
                        return true
                    }
                })){
                    disconnectWallet();
                    setMessage("You are not registered to mint at this time.");
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000);
                }
            }
        }
    }, [address]);

    useEffect( () =>{
        if(props.typeMintPortal === "OG LIST" || props.typeMintPorta === "FRENSLIST"){
            const result = (number - 1) * 0.005;
            if(result === 0){
                setCost("0.000")
            }else{
                setCost(result);
            }
        }else{
            const result = number * props.costInOpenType;

            if(result === 0){
                setCost("0.000")
            }else{
                setCost(result);
            }
        }
    }, [number]);
    return(
        <section className={classNames(s.home, {[s.unactive]: isShow})}>
            <div className={s.wrapper}>
                <div className={s.flies}>
                    <img src={flies} alt="flies" />
                </div>
            </div>
            <div className={s.navigation}>
                <div className={classNames(s.error, {[s.active]: message})}>{message}</div>
                <nav className={s.social}>
                    {
                        props.socialNetworks.twitter.isActive ?
                        <a href={props.socialNetworks.twitter.href} className={classNames(s.href, {[s.unactive]: !props.socialNetworks.twitter.isActive})}></a> :
                        <div className={classNames(s.href, {[s.unactive]: !props.socialNetworks.twitter.isActive})}></div>
                    }
                    {
                        props.socialNetworks.etherscan.isActive ?
                        <a href={props.socialNetworks.etherscan.href} className={classNames(s.href, {[s.unactive]: !props.socialNetworks.etherscan.isActive})}></a> :
                        <div className={classNames(s.href, {[s.unactive]: !props.socialNetworks.etherscan.isActive})}></div>
                    }
                    {
                        props.socialNetworks.opensea.isActive ?
                        <a href={props.socialNetworks.opensea.href} className={classNames(s.href, {[s.unactive]: !props.socialNetworks.opensea.isActive})}></a> :
                        <div className={classNames(s.href, {[s.unactive]: !props.socialNetworks.opensea.isActive})}></div>
                    }
                </nav>
                <button onClick={openFun} className={s.button}></button>
                {
                    !connected ?
                    <div className={s.form}>
                        <h1 className={s.title}>Mint status: <span className={s.special}>{props.typeMintPortal}</span></h1>
                        <div className={s.settings}>
                            <div className={s.wrap}>
                                <div className={s.caption}>Amount</div>
                                <div className={s.info}>
                                    <span className={s.dash}></span>
                                    <div className={s.text}></div>
                                </div>
                            </div>
                            <div className={s.wrap}>
                                <div className={s.caption}>Total</div>
                                <div className={s.info}>
                                    <span className={s.dash}></span>
                                    <div className={s.text}>ETH</div>
                                </div>
                            </div>
                        </div>
                        <button onClick={connect} className={s.btn}>Connect</button>
                    </div>:
                    <div className={s.form}>
                        <h1 className={s.title}>Mint status: <span className={s.special}>{props.typeMintPortal}</span></h1>
                        <div className={s.settings}>
                            <div className={s.wrap}>
                                <div className={s.caption}>Amount</div>
                                <div className={s.info}>
                                    <div className={s.choose}>
                                        <button onClick={minusFun} className={s.minus}>
                                            <img src={minus} alt="minus" />
                                        </button>
                                        <div className={s.result}>{number}</div> 
                                        <button onClick={plusFun} className={s.plus}>
                                            <img src={plus} alt="plus" />
                                        </button>
                                    </div>
                                    <button onClick={ () => { setNumber(3) } } className={s.text}>MAX</button>
                                </div>
                            </div>
                            <div className={s.wrap}>
                                <div className={s.caption}>Total</div>
                                <div className={s.info}>
                                    <div className={s.result}>{cost}</div>
                                    <div className={s.text}>ETH</div>
                                </div>
                            </div>
                        </div>
                        <button onClick={connect} className={s.btn}>Mint</button>
                    </div>
                }
            </div>
            <Canvas isShow={isShow}>
                <button onClick={closeFun} className={s.close}>
                    <img src={closeIcon} alt="close" />
                </button>
                <ul className={s.mainList}>
                    <li className={s.elem}>
                        <div className={s.headline}>OG LIST</div>
                        <ul className={s.list}>
                            <li className={s.item}>
                                <div className={s.main}>Time Duration:</div>
                                <div className={s.desc}>{props.times.OGlist}</div>
                            </li>
                            <li className={s.item}>
                                <div className={s.main}>Price:</div>
                                <div className={s.desc}>Free mint + 2 Additional mints @ 0.005ETH (Optional)</div>
                            </li>
                        </ul>
                    </li>
                    <li className={s.elem}>
                        <div className={s.headline}>FRENSLIST</div>
                        <ul className={s.list}>
                            <li className={s.item}>
                                <div className={s.main}>Time Duration:</div>
                                <div className={s.desc}>{props.times.Frenslist}</div>
                            </li>
                            <li className={s.item}>
                                <div className={s.main}>Price:</div>
                                <div className={s.desc}>Free mint + 2 Additional mints @ 0.005ETH (Optional)</div>
                            </li>
                        </ul>
                    </li>
                    <li className={s.elem}>
                        <div className={s.headline}>PUBLIC</div>
                        <ul className={s.list}>
                            <li className={s.item}>
                                <div className={s.main}>Time Duration:</div>
                                <div className={s.desc}>{props.times.Publick}</div>
                            </li>
                            <li className={s.item}>
                                <div className={s.main}>Price:</div>
                                <div className={s.desc}>{props.costInOpenType}ETH; Max 3 NFTS / TX.</div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Canvas>
        </section>
    )
}

export default Mintportal; 