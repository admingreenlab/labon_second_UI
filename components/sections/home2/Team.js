'use client'
import Link from "next/link"

export default function Team() {
    return (
        <>
        
        {/* Start Team Two */}
        <section className="team-two">
            <div className="container">
                {/* Start Team Two Top*/}
                <div className="team-two__top">
                    <div className="container">
                        <div className="team-two__top-inner">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <p className="tg-element-title">professionals</p>
                                    <div className="border-box"></div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Meet Our Experts
                                </h2>
                            </div>

                            <div className="btn-box">
                                <Link className="thm-btn" href="contact">
                                    <span className="txt">View More Details</span>
                                    <span className="bdrl"></span>
                                    <span className="bdrr"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Team Two Top*/}

                <div className="team-two__bottom">
                    <div className="container">
                        <div className="row">
                            {/* Start Team Two Single*/}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img1.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Alrans Mit</Link></h2>
                                        <p>Designer</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Two Single*/}

                            {/* Start Team Two Single*/}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay=".3s">
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img2.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Delon Singh</Link></h2>
                                        <p>founder</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Two Single*/}

                            {/* Start Team Two Single*/}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img3.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Manira Roy</Link></h2>
                                        <p>Manager</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Two Single*/}

                            {/* Start Team Two Single*/}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay=".3s">
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img4.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Ravico Lacok</Link></h2>
                                        <p>Co-founder</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Two Single*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Team Two */}
        
        </>
    )
}
