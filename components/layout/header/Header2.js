'use client'
import { useEffect, useState } from "react";
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu2 from "../MobileMenu2"
import Axios from "@/components/auth/axios";
import { getEventBus } from "@/components/utils/EventBus";

export default function Header2({ scroll, handlePopup, handleSidebar, handleMobileMenu }) {
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const [data, setData] = useState([]);
    const [wdata, wsetData] = useState([]);
    const [clientName, setClientName] = useState('');

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

    const handleclearstorage = () => {
        localStorage.clear();

        sessionStorage.clear();
    }

    // useEffect(() => {
    //     const handleBasketUpdate = (newBasketData) => {
    //         setData(newBasketData.length);
    //     };

    //     EventBus.on("basketUpdated", handleBasketUpdate);

    //     return () => {
    //         EventBus.off("basketUpdated", handleBasketUpdate);
    //     };
    // }, []);

    useEffect(() => {
        const eventBus = getEventBus();
        console.log('EventBus initialized:', !!eventBus);

        const fetchData = async () => {
            try {
                const response = await Axios.post('user/userbasket', {
                    type: 'S',
                    stype: 'single'
                });

                if (response.status === 200) {
                    setData(response?.data?.data);
                }

                const wresponse = await Axios.get('user/watchlist');

                if (wresponse.status === 200) {
                    wsetData(wresponse?.data?.data); // Update state only if the component is still mounted
                }
            } catch (err) {
                console.error("Failed to fetch data:", err);
            }


        };


        const handleBasketUpdate = () => {
            console.log('Basket update received');
            fetchData();
        };

        const handleWatchlistUpdate = () => {
            console.log('Watchlist update received');
            fetchData();
        };

        // Initial fetch
        fetchData();

        // Subscribe to events
        eventBus.on("basketUpdated", handleBasketUpdate);

        eventBus.on("watchlistUpdated", handleWatchlistUpdate);

        // Cleanup
        return () => {
            eventBus.off("basketUpdated", handleBasketUpdate);
            eventBus.off("watchlistUpdated", handleWatchlistUpdate);
        };
    }, []);

    useEffect(() => {
        const user = localStorage.getItem('user') || sessionStorage.getItem('user');
        // const branchescode = localStorage.getItem('branches') || sessionStorage.getItem('branches')
        if (user) {
            // setCompany(JSON.parse(branchescode)[0].FL_COMPANY_CODE);
            // console.log('user.FL_USER_NAME',JSON.parse(user)?.FL_USER_NAME)
            setClientName(JSON.parse(user)?.FL_USER_NAME)
        }
    }, [])

    return (
        <>

            {/* Start Main Header Two*/}
            <header className={`main-header main-header-two style3 ${isScrollingDown ? "header-hidden" : ""}`}>
                <div className="main-header-two__inner">
                    <nav className="main-menu main-menu-one">
                        <div className="main-menu__wrapper clearfix">
                            <div className="auto-container">
                                <div className="main-menu__wrapper-inner inner-headere">
                                    <div className="main-header-two__left">
                                        <div className="logo-box-one">
                                            <Link href="/serch">
                                                <img src="/assets/images/resources/logo-1.png" alt="Awesome Logo" title="" />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="main-menu-box">
                                        <Link href="/serch" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 534 400" fill="none">
                                                <path d="M233.666 366.667H500.333M33.666 200H500.333M233.666 33.3334H500.333" stroke="white" strokeWidth="66.6667" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>

                                        <ul className="main-menu__list">
                                            <li>
                                                <Link href="/serch">Home</Link>
                                            </li>
                                            <li className="dropdown">
                                                <Link href='#'>Stone Inventory  </Link>
                                                <ul>
                                                    <li>
                                                        <Link href="/serch">Search Stone</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/basket">Basket</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/showCartHistory">Web History</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/wishlist">Watch List</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/changepssword">Change Password</Link>
                                                    </li>
                                                </ul>
                                            </li>


                                        </ul>
                                    </div>

                                    <div className="main-header-two__right ">
                                        <div className="header-search-box">
                                            <span style={{ color: 'white', marginRight: '15px' }}>{clientName}</span>
                                            <Link href="/serch">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="header-search-box" style={{ position: 'relative' }}>
                                            <Link href="/wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                </svg>
                                                <span style={{ width: '18px', height: '18px', background: 'white', color: 'black', borderRadius: '50%', position: 'absolute', top: '-6px' }}><div style={{ position: 'absolute', top: '8px', fontSize: '12px', left: '22%', top: '9px' }}>{wdata?.length}</div></span>
                                            </Link>
                                        </div>
                                        <div className="header-search-box" style={{ position: 'relative' }}>
                                            <Link href="/basket">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                                </svg>
                                                <span style={{ width: '18px', height: '18px', background: 'white', color: 'black', borderRadius: '50%', position: 'absolute', top: '-6px' }}><div style={{ position: 'absolute', top: '8px', fontSize: '12px', left: '22%', top: '9px' }}>{data?.length}</div></span>
                                            </Link>
                                        </div>
                                        <div className="side-content-button-box" onClick={handleclearstorage}>
                                            <Link href="/login">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                                </svg>
                                            </Link>
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
                <div className="sticky-header__content ">
                    <nav className="main-menu main-menu-one">
                        <div className="main-menu__wrapper clearfix">
                            <div className="auto-container">
                                <div className="main-menu__wrapper-inner inner-headere">
                                    <div className="main-header-two__left">
                                        <div className="logo-box-one">
                                            <Link href="/serch">
                                                <img src="/assets/images/resources/logo-1.png" alt="Awesome Logo" title="" />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="main-menu-box">
                                        <Link href="/serch" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 534 400" fill="none">
                                                <path d="M233.666 366.667H500.333M33.666 200H500.333M233.666 33.3334H500.333" stroke="white" strokeWidth="66.6667" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>

                                        <ul className="main-menu__list">
                                            <li>
                                                <Link href="/serch">Home</Link>
                                            </li>
                                            <li className="dropdown">
                                                <Link href='#'>Stone Inventory  </Link>
                                                <ul>
                                                    <li>
                                                        <Link href="/serch">Search Stone</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/basket">Basket</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/showCartHistory">Web History</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/wishlist">Watch List</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/changepssword">Change Password</Link>
                                                    </li>
                                                </ul>
                                            </li>


                                        </ul>
                                    </div>

                                    <div className="main-header-two__right ">
                                        <div className="header-search-box">
                                            <span style={{ color: 'white', marginRight: '15px' }}>{clientName}</span>
                                            <Link href="/serch">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="header-search-box" style={{ position: 'relative' }}>
                                            <Link href="/wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                </svg>
                                                <span style={{ width: '18px', height: '18px', background: 'white', color: 'black', borderRadius: '50%', position: 'absolute', top: '-6px' }}><div style={{ position: 'absolute', top: '8px', fontSize: '12px', left: '22%', top: '9px' }}>{wdata?.length}</div></span>
                                            </Link>
                                        </div>
                                        <div className="header-search-box" style={{ position: 'relative' }}>
                                            <Link href="/basket">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                                </svg>
                                                <span style={{ width: '18px', height: '18px', background: 'white', color: 'black', borderRadius: '50%', position: 'absolute', top: '-6px' }}><div style={{ position: 'absolute', top: '8px', fontSize: '12px', left: '22%', top: '9px' }}>{data?.length}</div></span>
                                            </Link>
                                        </div>
                                        <div className="side-content-button-box" onClick={handleclearstorage}>
                                            <Link href="/login">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                                </svg>
                                            </Link>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/*.stricky-header */}
            <MobileMenu2 handleMobileMenu={handleMobileMenu} />


        </>
    )
}
