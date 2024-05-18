import React from "react";
import lupa from '../assets/images/lupa.svg'
import notification from '../assets/images/notification.svg'
import avatar from '../assets/images/avatar.svg'
import './styles/rootPage.css'

import apps from '../assets/images/apps.svg'
import dashboard from '../assets/images/dashboard.svg'
import wallet from '../assets/images/wallet.svg'
import graphic from '../assets/images/graphics.svg'
import cube from '../assets/images/cubo.svg'
import user  from '../assets/images/user.svg'
import optionsPortfolio from '../assets/images/options-portfolio.svg'
import filterIcon from '../assets/images/filter.svg'
import logout from '../assets/images/logout.svg'
import bitcoin from '../assets/images/bitcoin.svg'
import litecoin from '../assets/images/litecoin.svg'
import ethereum from '../assets/images/ethereum.svg'
import arrowDown from '../assets/images/arrow-down.svg'
import bandProtocol from '../assets/images/band-protocol.svg'
import star from '../assets/images/star.svg'
import vechain from '../assets/images/vechain.svg'
import aave from '../assets/images/aave.svg'
import waves from '../assets/images/waves.svg'

const RootPage: React.FC = () => {
    return(
        <div>
            <div className="container">
                <div className="navbar">
                    <div className="icons">
                       <div className="logo">
                            <img src={dashboard} alt="Logo" />
                       </div>
                       <div className="tools">
                            <img src={apps} alt="Apps" />
                            <img src={wallet} alt="Wallet" />
                            <img src={graphic} alt="Graphic" />
                            <img src={cube} alt="Cube" />
                            <img src={user} alt="User" />
                       </div>
                       <div className="logout">
                            <img src={logout} alt="Logout" />
                       </div>
                    </div>
                </div>
                <div className="information">
                    <div className="header">
                        <div className="tittle">
                            <h1>Overview</h1>
                        </div>
                        <div className="icons-user">
                            <div className="element">
                                <img src={lupa} alt="Search" />
                            </div>
                            <div className="element">
                                <img src={notification} alt="Notification" />
                            </div>
                            <div className="user-name">
                                <img src={avatar} alt="Avatar" />
                                <p id="name-user">Frank G.</p>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-assets">
                        <div className="portfolio">
                            <div className="portfolio-tittle">
                                <p>Portfolio</p>
                            </div>
                            <div className="portfolio-info">
                                <div className="portfolio-info-options">
                                    <div className="balance-options">
                                        <div className="balance">
                                            <div className="balance-info">
                                                <p id="userBalance">
                                                    $45,000.00
                                                </p>
                                            </div>
                                            <div className="tittle-balance">
                                                <p>Portfolio balance</p>
                                            </div>
                                        </div>
                                        <div className="btn-options">
                                            <img src={optionsPortfolio} alt="Opciones" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="graphic">
                                    
                            </div>
                        </div>
                        <div className="assets">
                            <div className="assets-tittle">
                                <div className="tittle-p">
                                    <p>Your Assets</p>
                                </div>
                                <div className="filter">
                                    <img src={filterIcon} alt="Filter" />
                                </div>
                            </div>
                            <div className="assets-info">
                                <div className="bitcoin">
                                    <div className="info-btc">
                                        <div className="btc-balance">
                                            <div className="user-founds">
                                                <p id="btcFoundsUser">1.25</p>
                                                <p><b>BTC</b></p>
                                            </div>
                                            <div className="crypto-dollars">
                                                <p>$</p>
                                                <p id="convertBtcDollars">2948.04</p>
                                            </div>
                                        </div>
                                        <div className="btc-options">
                                            <img id="btnOptionsBtc" src={optionsPortfolio} alt="" />
                                        </div>
                                    </div>
                                    <div className="btc-market-status">
                                        <div className="btn-icon">
                                            <img src={bitcoin} alt="Bitcoin" />
                                        </div>
                                        <div className="btc-market">
                                            <p id="status">+</p>
                                            <p id="change">0.34</p>
                                            <p>%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="litecoin">
                                    <div className="info-ltc">
                                        <div className="litecoin-balance">
                                            <div className="litecoin-user-balance">
                                                <p id="ltcFoundsUser">1.25</p>
                                                <p><b>LTC</b></p>
                                            </div>
                                            <div className="litecoin-dollars">
                                                <p>$</p>
                                                <p id="convertLtcDollars">5548.04</p>
                                            </div>
                                        </div>
                                        <div className="ltc-options">
                                            <img id="btnOptionsLtc" src={optionsPortfolio} alt="" />
                                        </div>
                                    </div>
                                    <div className="ltc-market-status">
                                        <div className="icon-ltc">
                                            <img src={litecoin} alt="Litecoin" />
                                        </div>
                                        <div className="ltc-market">
                                            <p id="statusLtc">+</p>
                                            <p id="changeLtc">0.54</p>
                                            <p>%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ethereum">
                                    <div className="info-eth">
                                        <div className="eth-balance">
                                            <div className="eth-user-balance">
                                                <p id="ethFoundsUser">12.25</p>
                                                <p><b>ETH</b></p>
                                            </div>
                                            <div className="eth-dollars">
                                                <p>$</p>
                                                <p id="convertEthDollars">5548.04</p>
                                            </div>
                                        </div>
                                        <div className="eth-options">
                                            <img id="btnOptionsEth" src={optionsPortfolio} alt="Opciones" />
                                        </div>
                                    </div>
                                    <div className="eth-market-status">
                                        <div className="icon-eth">
                                            <img src={ethereum} alt="Ethereum" />
                                        </div>
                                        <div className="eth-market">
                                            <p id="statusEth">+</p>
                                            <p id="changeEth">0.54</p>
                                            <p>%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="market-and-earn">
                        <div className="market-and-cryptos">
                            <div className="market-status">
                                <div className="market-info">
                                    <p>Market is</p> 
                                    <p id="status">down</p>
                                    <p className="market-cycle">0.80</p>
                                    <p>%</p>
                                </div>
                                <div className="twnty-hours-and-top">
                                    <div className="twnFour-hr">
                                        <p>24h</p>
                                        <img id="24hArrowDown" src={arrowDown} alt="Desplegar " />
                                    </div>
                                    <div className="top-gainers">
                                        <p>Top gainers</p>
                                        <img id="topGainersArrow" src={arrowDown} alt="Desplegar" />
                                    </div>
                                </div>
                            </div>
                            <div className="cryptos-status">
                                <div className="table-cryptos">
                                    <div className="thead">
                                        <div className="tr">
                                            <p className="th-name">Name</p>
                                            <p className="th-price">Price</p>
                                            <p className="th-change">Change</p>
                                            <p className="th-market-cap">Market Cap</p>
                                            <p className="th">Watch</p>
                                        </div>
                                    </div>
                                    <div className="tbody">
                                        <div className="tr-tbody-crypto">
                                            <div className="td-logo-info">
                                                <div className="logo">
                                                    <img src={bandProtocol} alt="Band protocol" />
                                                </div>
                                                <div className="info">
                                                    <p><b>Band Protocol</b></p>
                                                    <p>BAND</p>
                                                </div>
                                            </div>
                                            <div className="td-price">
                                                <p>$3.53</p>
                                            </div>
                                            <div className="td-change">
                                                <p>+13.38%</p>
                                            </div>
                                            <div className="td-market-cap">
                                                <p><b>399.95 M</b></p>
                                            </div>
                                            <div className="td-star">
                                                <img src={star} alt="Estrella" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tbody">
                                        <div className="tr-tbody-crypto">
                                            <div className="td-logo-info">
                                                <div className="logo">
                                                    <img src={vechain} alt="VeChain" />
                                                </div>
                                                <div className="info">
                                                    <p><b>VeChain</b></p>
                                                    <p>VET</p>
                                                </div>
                                            </div>
                                            <div className="td-price">
                                                <p>$7.53</p>
                                            </div>
                                            <div className="td-change">
                                                <p>+11.119%</p>
                                            </div>
                                            <div className="td-market-cap">
                                                <p><b>152 M</b></p>
                                            </div>
                                            <div className="td-star">
                                                <img src={star} alt="Estrella" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tbody">
                                        <div className="tr-tbody-crypto">
                                            <div className="td-logo-info">
                                                <div className="logo">
                                                    <img src={aave} alt="Aave" />
                                                </div>
                                                <div className="info">
                                                    <p><b>Aave</b></p>
                                                    <p>AAVE</p>
                                                </div>
                                            </div>
                                            <div className="td-price">
                                                <p>$4.53</p>
                                            </div>
                                            <div className="td-change">
                                                <p>+9.38%</p>
                                            </div>
                                            <div className="td-market-cap">
                                                <p><b>255.87 M</b></p>
                                            </div>
                                            <div className="td-star">
                                                <img src={star} alt="Estrella" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tbody">
                                        <div className="tr-tbody-crypto">
                                            <div className="td-logo-info">
                                                <div className="logo">
                                                    <img src={waves} alt="Waves" />
                                                </div>
                                                <div className="info">
                                                    <p><b>Waves</b></p>
                                                    <p>WAVES</p>
                                                </div>
                                            </div>
                                            <div className="td-price">
                                                <p>$5.87</p>
                                            </div>
                                            <div className="td-change">
                                                <p>+4.38%</p>
                                            </div>
                                            <div className="td-market-cap">
                                                <p><b>39.95 M</b></p>
                                            </div>
                                            <div className="td-star">
                                                <img src={star} alt="Estrella" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="earn-cryptos">
                            <div className="earn">
                                <div className="container-earn">
                                    <div className="earn-free">
                                        <div className="first-line">
                                            <p>Earn</p>
                                            <div className="free">
                                                <div className="free-content">
                                                    <p>free</p>
                                                </div>
                                            </div>
                                            <p>crypto</p>
                                        </div>
                                        <div className="second-text">
                                            <p>with Conview Earn!</p>
                                        </div>
                                    </div>
                                    <div className="earn-msj">
                                        <p>Learn about different cryptocurrencies and earn them for free!!</p>
                                    </div>
                                    <div className="button-earn">
                                        <button id="earnNw">
                                            Earn Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RootPage;