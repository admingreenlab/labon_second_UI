'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
        subMenuKey: "",
    });

    const handleToggle = (key, subMenuKey = "") => {
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            setIsActive({
                status: false,
                key: "",
                subMenuKey: "",
            });
        } else {
            setIsActive({
                status: true,
                key,
                subMenuKey,
            });
        }
    };
    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu} ></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} ><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <Link href="/" aria-label="logo image"><img src="/assets/images/resources/logo-1.png" width="150" alt="" style={{ filter: "invert(1)" }} /></Link>
                    </div>

                    <div className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="main-menu__list">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                                    {/* <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/">Home One</Link></li>
                                        <li><Link href="index-2">Home Two</Link></li>
                                    </ul>
                                    <button className={isActive.key == 1 ? "expanded open" : ""} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></button> */}
                                </li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href='#'>Education</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li>
                                            <Link href="/evolution">Evolution</Link>
                                        </li>
                                        <li>
                                            <Link href="4cs">4CS</Link>
                                        </li>
                                        <li>
                                            <Link href="shapes">Shapes</Link>
                                        </li>
                                        <li>
                                            <Link href="anatomy">Anatomy</Link>
                                        </li>
                                    </ul>
                                    <button className={isActive.key == 2 ? "expanded open" : ""} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></button>
                                </li>

                                {/* <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Exhibition Stock</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="portfolio">Download Exhibition Stock</Link></li>
                                    </ul>
                                    <button className={isActive.key == 3 ? "expanded open" : ""} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></button>
                                </li> */}
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/about">Blog</Link></li>
                                {/* <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#">Blog</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li><Link href="blog">Blog</Link></li>
                                        <li><Link href="blog-carousel">Blog Carousel</Link></li>
                                        <li><Link href="blog-list">Blog List</Link></li>
                                        <li><Link href="blog-details">Blog Details</Link></li>
                                    </ul>
                                    <button className={isActive.key == 4 ? "expanded open" : ""} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></button>
                                </li> */}
                                <li><Link href="/contact">Contact</Link></li>
                                <li><Link href="/jck-events">Appointment at JCK</Link> </li>
                                <li>
                                    <Link href="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <Link href="mailto:sales@labondiamonds.com">sales@labondiamonds.com</Link>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <Link href="tel:+1 315 207 7066">+1 315 207 7066</Link>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <Link target="_blank" href="https://twitter.com/LabonDiamonds"><span className="icon-twitter"></span></Link>
                            <Link target="_blank" href="https://www.facebook.com/LabonDiamonds"><span className="icon-facebook"></span></Link>
                            <Link target="_blank" href="#"><span >
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </span></Link>
                            <Link target="_blank" href="https://www.instagram.com/LabonDiamonds"><span className="icon-instagram"></span></Link>
                            <Link target="_blank" href="https://www.pinterest.com/LabonDiamonds"><span className="icon-pinterest"></span></Link>
                            <Link target="_blank" href="https://www.youtube.com/channel/UCFOHYjXiRarw4FMW10DiJPQ"><span >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                                </svg>
                            </span></Link>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
export default MobileMenu;
