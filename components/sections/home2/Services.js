'use client'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
export default function Service() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {/* Start Services Two */}
            {/* <section className="services-two">
                <div className="container">
                    <div className="sec-title tg-heading-subheading animation-style2">
                        <div className="sec-title__tagline">
                            <p className="tg-element-title">Evolution of Diamond</p>
                            <div className="border-box"></div>
                        </div>
                        <h2 className="sec-title__title tg-element-title">What We Offer
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="services-two__inner">
                                <div className="services-two__middle-content">
                                    <div className="img-box float-bob-y">
                                        <img src="assets/images/resources/services-v2-img1.jpg" alt="" />
                                    </div>

                                    <div className="services-two__video">
                                        <div className="video-box">
                                            <a className="video-popup" title="Video Gallery"
                                                onClick={() => setOpen(true)}
                                                style="visibility: visible;">
                                                <i className="icon-play-button-1" aria-hidden="true"></i>
                                                <span className="ripple"></span>
                                            </a>
                                        </div>

                                        <div className="title-box">
                                            <h3>Watch Video</h3>
                                        </div>
                                    </div>
                                </div>

                                <ul className="services-two__list">
                                    <li className="services-two__list-item wow fadeInLeft" data-wow-delay="100ms"
                                        data-wow-duration="1000ms">
                                        <div className="icon-box">
                                            <span className="icon-project-management"></span>
                                        </div>

                                        <div className="content-box">
                                            <h2><Link href="#">Develope</Link></h2>
                                            <p>Mestib removes the completed
                                                marketing reserch abusiness high
                                                consultations..</p>
                                        </div>
                                    </li>

                                    <li className="services-two__list-item style2 wow fadeInRight" data-wow-delay="0ms"
                                        data-wow-duration="1000ms">
                                        <div className="icon-box">
                                            <span className="icon-creative-idea"></span>
                                        </div>

                                        <div className="content-box">
                                            <h2><Link href="#">Creative</Link></h2>
                                            <p>Mestib removes the completed
                                                marketing reserch abusiness high
                                                consultations..</p>
                                        </div>
                                    </li>
                                </ul>

                                <ul className="services-two__list style2">
                                    <li className="services-two__list-item wow fadeInLeft" data-wow-delay="100ms"
                                        data-wow-duration="1000ms">
                                        <div className="icon-box">
                                            <span className="icon-promotion"></span>
                                        </div>

                                        <div className="content-box">
                                            <h2><Link href="#">Marketing</Link></h2>
                                            <p>Mestib removes the completed
                                                marketing reserch abusiness high
                                                consultations..</p>
                                        </div>
                                    </li>

                                    <li className="services-two__list-item style2 wow fadeInRight" data-wow-delay="0ms"
                                        data-wow-duration="1000ms">
                                        <div className="icon-box">
                                            <span className="icon-interior-design"></span>
                                        </div>

                                        <div className="content-box">
                                            <h2><Link href="#">Designing</Link></h2>
                                            <p>Mestib removes the completed
                                                marketing reserch abusiness high
                                                consultations..</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="pricing-one">
                <div className="container">
                    <div className="pricing-one__top">
                        <div className="sec-title tg-heading-subheading animation-style2">
                            <div className="sec-title__tagline">
                                <p className="tg-element-title">pricing plan</p>
                                <div className="border-box"></div>
                            </div>
                            <h2 className="sec-title__title tg-element-title">Explore Our Digital <br />
                                Pricing
                            </h2>
                        </div>

                        <div className="text-box">
                            <p>Mestib removes the completed market reserches our
                                abusiness high consultations we are prouds of the
                                work hards for business..</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="pricing-one__bottom">
                                <ul className="pricing-one__box">
                                    <li className="pricing-one__single wow fadeInUp" data-wow-delay=".1s">
                                        <div className="big-title">
                                            Pricing plan
                                        </div>
                                        <div className="pricing-one__single-left">
                                            <div className="pricing-box">
                                                <h2>$150 <span>/ monthly</span></h2>
                                                <h3>Standard</h3>
                                            </div>

                                            <div className="content-box">
                                                <h4>Up to 100 keyphrases optimized</h4>
                                                <p>Mestib removes the completed markete reserches our
                                                    work hards for business.. </p>
                                            </div>
                                        </div>

                                        <div className="pricing-one__single-right">
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="contact">
                                                    <span className="txt">Choose Your Plan</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="pricing-one__single wow fadeInUp" data-wow-delay=".3s">
                                        <div className="big-title">
                                            Pricing plan
                                        </div>
                                        <div className="pricing-one__single-left">
                                            <div className="pricing-box">
                                                <h2>$170 <span>/ monthly</span></h2>
                                                <h3>Premium</h3>
                                            </div>

                                            <div className="content-box">
                                                <h4>Content marketing assets:4</h4>
                                                <p>Mestib removes the completed markete reserches our
                                                    work hards for business.. </p>
                                            </div>
                                        </div>

                                        <div className="pricing-one__single-right">
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="contact">
                                                    <span className="txt">Choose Your Plan</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Start Services Two */}
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />


        </>
    )
}
