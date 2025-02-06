import Link from "next/link"
import React, { useState, useEffect } from 'react';

export default function Footer1() {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' }));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' }));
        }, 1000);

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, []);

    return (
        <>

            <footer className="footer-one">
                {/* Start Footer*/}
                <div className="footer">
                    <div className="container">
                        <div className="footer-one__inner">
                            <div className="logo-box text-center">
                                <Link href="/"><img src="assets/images/resources/logo-1.png" alt="#" /></Link>
                                <p style={{ marginTop: "10px", textAlign: "center" }}>We are broad supplier of an extensive inventory of Type IIA Lab-grown Diamonds <br /> at the best affordable price.</p>
                            </div>

                            <div className="footer-one__contact">
                                <div className="footer-one__contact-bdr"
                                    style={{ backgroundImage: ' url(assets/images/inner-banner.png)' }} ></div>
                                <ul>
                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-placeholder"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Visit Office</p>
                                            <h3>22 West 48th St. Suite #1101,<br />
                                                New York, NY 10036,
                                                USA
                                            </h3>
                                            <h3 style={{ marginTop: "10px" }}><Link href="tel:98210009630">(213) 688-8704</Link></h3>
                                            <h6 className="mt-1">{time}</h6>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-message"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Send email</p>
                                            <h3><Link href="mailto:sales@labondiamonds.com">sales@labondiamonds.com</Link></h3>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-placeholder"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Visit Office</p>
                                            <h3>550 S. Hill St. Suite #1123, <br />
                                                Los Angeles, CA 90013,
                                                USA</h3>

                                            <h3 style={{ marginTop: "10px" }}><Link href="tel:98210009630">(315) 207-7066</Link></h3>
                                            <h6 className="mt-1">{time}</h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer-one__menu">
                                <ul>
                                    <li><Link href="/privacy-policy">privacy policy</Link></li>
                                    <li><Link href="/about/">
                                        About Us</Link></li>
                                    <li><Link href="/contact">
                                        contact us</Link></li>
                                </ul>
                            </div>

                            <div className="footer-one__social-links">
                                <ul>
                                    <li><Link target="_blank" href="https://twitter.com/LabonDiamonds"><span className="icon-twitter"></span></Link></li>
                                    <li><Link target="_blank" href="https://www.facebook.com/LabonDiamonds"><span className="icon-facebook"></span></Link></li>
                                    <li><Link target="_blank" href="#"><span >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                        </svg>
                                    </span></Link></li>
                                    <li><Link target="_blank" href="https://www.instagram.com/LabonDiamonds"><span className="icon-instagram"></span></Link></li>
                                    <li><Link target="_blank" href="https://www.pinterest.com/LabonDiamonds"><span className="icon-pinterest"></span></Link></li>
                                    <li><Link target="_blank" href="https://www.youtube.com/channel/UCFOHYjXiRarw4FMW10DiJPQ"><span >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                                        </svg>
                                    </span></Link></li>
                                </ul>
                                <div className="border-box"></div>
                            </div>

                            <div className="footer-one__copyright">
                                <p>Â© 2025 Labon LLC. All Rights Reserved</p>
                                {/* <span>Powered by Samyak Software <a href="http://www.esamyak.com" style={{ color: "rgb(194 153 88)" }}>www.esamyak.com</a>, Mumbai, India</span> */}
                            </div>
                            <a
                                className="float"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="assets/images/whatsapp.gif" alt="gif" style={{ width: '32px', filter: "invert(1)" }} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* End Footer*/}
            </footer>

        </>
    )
}
