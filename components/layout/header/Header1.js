import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, handlePopup, handleMobileMenu, handleSidebar }) {
    return (
        <>

        {/* Start Main Header One*/}
        <header className="main-header main-header-one">
            <div className="main-header-one__inner">
                <nav className="main-menu main-menu-one">
                    <div className="main-menu__wrapper clearfix">
                        <div className="auto-container">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                        <i className="fa fa-bars"></i>
                                    </Link>

                                    <Menu/>
                                </div>

                                <div className="main-header-one__middle">
                                    <div className="logo-box-one">
                                        <Link href="/">
                                            <img src="assets/images/resources/logo-1.png" alt="Awesome Logo" title="" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="main-header-one__right">
                                    <ul className="Reg-login-box">
                                        <li>
                                            <Link href="#">Register</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Login</Link>
                                        </li>
                                    </ul>

                                    <div className="header-search-box">
                                        <Link href="#" className="main-menu__search search-toggler icon-search-interface-symbol" onClick={handlePopup}>
                                        </Link>
                                    </div>

                                    <div className="header-cart-box">
                                        <Link href="#">
                                            <i className="icon-bag"></i>
                                            <span className="count">3</span>
                                        </Link>
                                    </div>

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
        {/* End Main Header One*/}
        
        <div className={`stricky-header stricky-header--one stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
            <nav className="main-menu main-menu-one">
                    <div className="main-menu__wrapper clearfix">
                        <div className="auto-container">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                        <i className="fa fa-bars"></i>
                                    </Link>

                                    <Menu/>
                                </div>

                                <div className="main-header-one__middle">
                                    <div className="logo-box-one">
                                        <Link href="/">
                                            <img src="assets/images/resources/logo-1.png" alt="Awesome Logo" title="" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="main-header-one__right">
                                    <ul className="Reg-login-box">
                                        <li>
                                            <Link href="#">Register</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Login</Link>
                                        </li>
                                    </ul>

                                    <div className="header-search-box">
                                        <Link href="#" className="main-menu__search search-toggler icon-search-interface-symbol" onClick={handlePopup}>
                                        </Link>
                                    </div>

                                    <div className="header-cart-box">
                                        <Link href="#">
                                            <i className="icon-bag"></i>
                                            <span className="count">3</span>
                                        </Link>
                                    </div>

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
