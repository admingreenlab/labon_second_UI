'use client'
import Link from "next/link"
export default function Testimonial() {
    return (
        <>

        {/* Start Testimonials Two */}
        <section className="testimonials-two">
            <div className="container">
                <div className="row">
                    {/* Start Testimonials Two Left*/}
                    <div className="col-xl-4">
                        <div className="testimonials-two__left">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <p className="tg-element-title">testimonials</p>
                                    <div className="border-box"></div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">What Our Client <br/>
                                    Says Us
                                </h2>
                            </div>
                            <div className="testimonials-two__left-text">
                                <p>Mestib remove the completed market reserch
                                    abusiness high consultations we are proud
                                    work hards for business.. </p>
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
                    {/* End Testimonials Two Left*/}

                    {/* Start Testimonials Two Right*/}
                    <div className="col-xl-8">
                        <div className="testimonials-two__right">
                            <ul className="testimonials-two__right-list">
                                <li className="testimonials-two__right-list-item wow animated fadeInRight"
                                    data-wow-delay="0.1s">
                                    <div className="testimonials-two__right-list-left">
                                        <div className="count-box">1.</div>
                                        <div className="title-box">
                                            <h2><Link href="#">Aniyan Loinck</Link></h2>
                                            <p>Manager</p>
                                        </div>
                                    </div>

                                    <div className="testimonials-two__right-list-right">
                                        <p>Mestib remove the completed market reserch
                                            abusiness high consultations we are proud
                                            work hards for business.. </p>
                                    </div>
                                    <div className="testimonials-two__img"><img className="testimonials-two__img-hover"
                                            src="assets/images/testimonial/testimonials-v2-img1.png" alt="#"/></div>
                                </li>

                                <li className="testimonials-two__right-list-item wow animated fadeInRight"
                                    data-wow-delay="0.3s">
                                    <div className="testimonials-two__right-list-left">
                                        <div className="count-box">2.</div>
                                        <div className="title-box">
                                            <h2><Link href="#">Jason Buttler</Link></h2>
                                            <p>Designer</p>
                                        </div>
                                    </div>

                                    <div className="testimonials-two__right-list-right">
                                        <p>Mestib remove the completed market reserch
                                            abusiness high consultations we are proud
                                            work hards for business.. </p>
                                    </div>
                                    <div className="testimonials-two__img"><img className="testimonials-two__img-hover"
                                            src="assets/images/testimonial/testimonials-v2-img1.png" alt="#"/></div>
                                </li>

                                <li className="testimonials-two__right-list-item wow animated fadeInRight"
                                    data-wow-delay="0.5s">
                                    <div className="testimonials-two__right-list-left">
                                        <div className="count-box">3.</div>
                                        <div className="title-box">
                                            <h2><Link href="#">Radico monir</Link></h2>
                                            <p>Founder</p>
                                        </div>
                                    </div>

                                    <div className=" testimonials-two__right-list-right">
                                        <p>Mestib remove the completed market reserch
                                            abusiness high consultations we are proud
                                            work hards for business.. </p>
                                    </div>
                                    <div className="testimonials-two__img"><img className="testimonials-two__img-hover"
                                            src="assets/images/testimonial/testimonials-v2-img1.png" alt="#"/></div>
                                </li>
                            </ul>

                        </div>
                    </div>
                    {/* End Testimonials Two Right*/}
                </div>
            </div>
        </section>
        {/* End Testimonials Two */}
            
        </>
    )
}
