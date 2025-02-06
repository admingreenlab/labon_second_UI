'use client'
import Link from "next/link"
export default function Team() {
    return (
        <>
        {/* Start Team One */}
        <section className="team-one">
            <div className="container">
                {/* Start Team One Top*/}
                <div className="team-one__top">
                    <div className="container">
                        <div className="team-one__top-inner">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <p className="tg-element-title">our professionals</p>
                                    <div className="border-box"></div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Dedicated Our Team
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
                {/* End Team One Top*/}

                <div className="team-one__bottom">
                    <div className="container filter-layout masonary-layout">
                        <div className="row">
                            {/* Start Team One Single*/}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="team-one__single">
                                    <div className="team-one__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v1-img1.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <h2><Link href="#">Tomas Whites</Link></h2>
                                                <p>Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Start Team One Single*/}

                            {/* Start Team One Single*/}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="team-one__single mt40">
                                    <div className="team-one__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v1-img2.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <h2><Link href="#">Tomas Whites</Link></h2>
                                                <p>Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Start Team One Single*/}

                            {/* Start Team One Single*/}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="team-one__single mt80">
                                    <div className="team-one__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v1-img3.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <h2><Link href="#">Tomas Whites</Link></h2>
                                                <p>Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Start Team One Single*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Team One */}
        
            
        </>
    )
}
