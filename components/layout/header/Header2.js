
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, handlePopup, handleSidebar, handleMobileMenu }) {
    return (
        <>

            {/* Start Main Header Two*/}
            <header className="main-header main-header-two">
                <div className="main-header-two__inner">
                    <nav className="main-menu main-menu-one">
                        <div className="main-menu__wrapper clearfix">
                            <div className="auto-container">
                                <div className="main-menu__wrapper-inner">
                                    <div className="main-header-two__left">
                                        <div className="logo-box-one">
                                            <Link href="/">
                                                <img src="assets/images/resources/logo-1.png" alt="Awesome Logo" title="" />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                            <i className="fa fa-bars"></i>
                                        </Link>

                                        <Menu />
                                    </div>

                                    <div className="main-header-two__right">
                                        {/* <div className="header-search-box">
                                            <Link href="#"
                                                className="main-menu__search search-toggler icon-search-interface-symbol" onClick={handlePopup}>
                                            </Link>
                                        </div> */}

                                        <div className="side-content-button-box">
                                            <div className="side-content-button">
                                                <Link className="navSidebar-button" href="#" onClick={handleSidebar}>
                                                    <span className="icon-menu"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
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
                                                <img src="assets/images/resources/logo-1.png" alt="Awesome Logo" title="" />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                            <i className="fa fa-bars"></i>
                                        </Link>

                                        <Menu />
                                    </div>

                                    <div className="main-header-two__right">
                                        {/* <div className="header-search-box">
                                            <Link href="#"
                                                className="main-menu__search search-toggler icon-search-interface-symbol" onClick={handlePopup}>
                                            </Link>
                                        </div> */}

                                        <div className="side-content-button-box">
                                            <div className="side-content-button">
                                                <Link className="navSidebar-button" href="#" onClick={handleSidebar}>
                                                    <span className="icon-menu"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                {/*.sticky-header__content */}
            </div>
            {/*.stricky-header */}
            <MobileMenu handleMobileMenu={handleMobileMenu} />


        </>
    )
}
