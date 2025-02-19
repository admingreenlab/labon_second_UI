'use client'
import { useEffect, useState } from "react";
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, handlePopup, handleSidebar, handleMobileMenu }) {
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsScrollingDown(true);
            } else {
                // Scrolling up
                setIsScrollingDown(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);
    return (
        <>

            {/* Start Main Header Two*/}
            <header className={`main-header main-header-two style3 ${isScrollingDown ? "header-hidden" : ""}`}>
                <div className="main-header-two__inner">
                    <nav className="main-menu main-menu-one">
                        <div className="main-menu__wrapper clearfix">
                            <div className="auto-container">
                                <div className="main-menu__wrapper-inner">
                                    <div className="main-header-two__left">
                                        <div className="logo-box-one">
                                            <Link href="/">
                                                <img src="/assets/images/resources/logo-1.png" alt="Awesome Logo" title="" />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 534 400" fill="none">
                                                <path d="M233.666 366.667H500.333M33.666 200H500.333M233.666 33.3334H500.333" stroke="white" stroke-width="66.6667" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </Link>

                                        <Menu />
                                    </div>

                                    {/* <div className="main-header-two__right">
                                        <div className="header-search-box">
                                            <Link href="#"
                                                className="main-menu__search search-toggler icon-search-interface-symbol" onClick={handlePopup}>
                                            </Link>
                                        </div>

                                        <div className="side-content-button-box">
                                            <div className="side-content-button">
                                                <Link className="navSidebar-button" href="#" onClick={handleSidebar}>
                                                    <span className="icon-menu"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* End Main Header Two*/}

            <div className={`stricky-header stricky-header--one stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
                <div className="sticky-header__content">
                    <nav className="main-menu main-menu-one">
                        <div className="main-menu__wrapper clearfix">
                            <div className="auto-container">
                                <div className="main-menu__wrapper-inner">
                                    <div className="main-header-two__left">
                                        <div className="logo-box-one">
                                            <Link href="/">
                                                <img src="/assets/images/resources/logo-1.png" alt="Awesome Logo" title="" />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 534 400" fill="none">
                                                <path d="M233.666 366.667H500.333M33.666 200H500.333M233.666 33.3334H500.333" stroke="white" stroke-width="66.6667" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </Link>

                                        <Menu />
                                    </div>

                                    {/* <div className="main-header-two__right">
                                        <div className="header-search-box">
                                            <Link href="#"
                                                className="main-menu__search search-toggler icon-search-interface-symbol" onClick={handlePopup}>
                                            </Link>
                                        </div>

                                        <div className="side-content-button-box">
                                            <div className="side-content-button">
                                                <Link className="navSidebar-button" href="#" onClick={handleSidebar}>
                                                    <span className="icon-menu"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/*.stricky-header */}
            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </>
    )
}
