'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Evolution of Diamond">
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
                                            <img src="assets/images/resources/services-v2-img2.jpg" alt="" />
                                        </div>

                                        <div className="services-two__video">
                                            <div className="video-box">
                                                <a className="video-popup" title="Video Gallery"
                                                    onClick={() => setOpen(true)}
                                                >
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
                <section className="pricing-one pricing-one--pricing">
                    <div className="container">
                        <div className="pricing-one__top">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <p className="tg-element-title">Evolution</p>
                                    <div className="border-box"></div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">The Evolution Of <br />
                                    Diamond
                                </h2>
                            </div>

                            <div className="text-box">
                                <p>"Tracing the Journey of Diamonds: Uncover the fascinating history, transformation, and timeless allure of diamonds through the ages."</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="pricing-one__bottom">
                                    <ul className="pricing-one__box">
                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".1s">
                                            <div className="big-title">
                                                3 Billion
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-6.png" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2>3 <span>/ Billion Years Ago</span></h2>
                                                <h3></h3>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>Carbon Begins to evolve into todays diamonds </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".3s">
                                            <div className="big-title">
                                                BC
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-5.png" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2>400 BC </h2>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>Earliest Signs of diamond trading in india </p>
                                                </div>
                                            </div>


                                        </li>
                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".6s">
                                            <div className="big-title">
                                                1400
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-4.png" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2>1400  </h2>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>Diamond Becomes Fashionable Amongst Europe's elite</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".9s">
                                            <div className="big-title">
                                                1797
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-2.png" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2>1797  </h2>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>It is discovered that diamonds are pure Carbon. First unsuccesful attempts at creating diamonds</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".12s">
                                            <div className="big-title">
                                                1879
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-3.png" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2> 1879  </h2>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>Earliest success at growing lab diamonds.(James Ballantyne Hannay, Scotland)</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".16s">
                                            <div className="big-title">
                                                1888
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-7.svg" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2> 1888  </h2>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>Cecil Rhodes establishes the company De Beers</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".19s">
                                            <div className="big-title">
                                                1905
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-1.png" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2> 1905  </h2>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>3106,75 carat cullinan diamond found in south africa ( Biggest Natural Diamond Ever Found)</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".22s">
                                            <div className="big-title">
                                                1931
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-8.SVG" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2> 1931  </h2>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>The Gemological institute of america (GIA) is founded</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".26s">
                                            <div className="big-title">
                                                1941
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-2.png" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2> 1941  </h2>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>General Electric's diamond synthesis project started (USA)</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".36s">
                                            <div className="big-title">
                                                1947
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-7.svg" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2> 1947  </h2>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>De Beers coins the famous Slogan "A diamond is Forever</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".39s">
                                            <div className="big-title">
                                                1951
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-3.png" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2> 1951  </h2>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>EVO16</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".42s">
                                            <div className="big-title">
                                                1954
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-7.svg" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2> 1954  </h2>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>EVO17</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".45s">
                                            <div className="big-title">
                                                2003
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-10.png" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2> 2003  </h2>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>Chemical Vapour Deposition (CVD) process diamond begin to appear</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".45s">
                                            <div className="big-title">
                                                2003
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-11.png" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2> 2003  </h2>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>Kimberly Process established to regulate the flow of legal diamonds with many flaws in system</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".45s">
                                            <div className="big-title">
                                                2009
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-14.gif" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2> 2009  </h2>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>It is estimated that 15 million carats of conflict diamonds are laundered every year via Dubai and Hong Kong</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".45s">
                                            <div className="big-title">
                                                2012
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-12.png" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2> 2012  </h2>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>586 million crates of lab diamond are imported to US</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pricing-one__single wow fadeInUp" data-wow-delay=".45s">
                                            <div className="big-title">
                                                2018
                                            </div>
                                            <div className="pricing-one__single-right">
                                                <div className="btn-box">
                                                    <img src="assets/images/backgrounds/icone-time-13.svg" alt="" style={{ width: "111px", height: "111px" }} />
                                                </div>
                                            </div>
                                            <div className="pricing-box">
                                                <h2> 2018  </h2>
                                            </div>
                                            <div className="pricing-one__single-left">

                                                <div className="content-box">
                                                    <p>FTC has dropped the word 'natural' from the definition of diamond and has ruled that diamond is a diamond,no matter if it's grown or mined.Lab Grown diamonds are widely accepted by consumers worldwide</p>
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
                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} /> */}

                {/* Start Brand One */}
                {/* <section className="brand-one brand-one--two">
                    <div className="auto-container">
                        <div className="brand-one__inner">
                            <ul>
                                <li><Link href="#"><img src="assets/images/brand/brand-1-1.png" alt="#" /></Link></li>
                                <li><Link href="#"><img src="assets/images/brand/brand-1-2.png" alt="#" /></Link></li>
                                <li><Link href="#"><img src="assets/images/brand/brand-1-3.png" alt="#" /></Link></li>
                                <li><Link href="#"><img src="assets/images/brand/brand-1-4.png" alt="#" /></Link></li>
                                <li><Link href="#"><img src="assets/images/brand/brand-1-5.png" alt="#" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </section> */}
                {/* End Brand One */}


            </Layout>
        </>
    )
}