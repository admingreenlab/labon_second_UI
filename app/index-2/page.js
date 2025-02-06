'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Blog from "@/components/sections/home2/Blog"
import Services from "@/components/sections/home2/Services"
import Team from "@/components/sections/home2/Team"
import Testimonial from "@/components/sections/home2/Testimonial"
import Gallery from "@/components/sections/home2/Gallery"
import Pricing from "@/components/sections/home2/Pricing"
import Features from "@/components/sections/home2/Features"
import Slogan from "@/components/sections/home2/Slogan"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                <section className="services-two">
                    <div className="container-fluid">
                        <div className="sec-title tg-heading-subheading animation-style2">
                            <div className="sec-title__tagline">
                                <p className="tg-element-title">IGI-Certified Lab-Grown Diamonds</p>
                                <div className="border-box"></div>
                            </div>
                            <h2 className="sec-title__title tg-element-title">Certified and Trusted Quality
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
                                                    <img src="assets/images/gallery/logo.svg" alt="#" />
                                                    <span className="ripple"></span>
                                                </a>
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
                                                <h2><Link href="#">
                                                    Eco-conscious</Link></h2>
                                                <p>Lab-grown diamonds are manufactured in a sustainable manner. Reducing carbon emissions by 7 times and using 85% less water than mined diamonds.</p>
                                            </div>
                                        </li>

                                        <li className="services-two__list-item style2 wow fadeInRight" data-wow-delay="0ms"
                                            data-wow-duration="1000ms">
                                            <div className="icon-box icon-box1">
                                                <span className="icon-creative-idea"></span>
                                            </div>

                                            <div className="content-box">
                                                <h2><Link href="#">100% Conflict-free</Link></h2>
                                                <p>Our collection of ethical and affordable conflict-free grown diamonds are more beautiful than anything we will ever get out of the earth and come free of any negative environmental or social impact.</p>
                                            </div>
                                        </li>
                                    </ul>

                                    <ul className="services-two__list style2">
                                        <li className="services-two__list-item wow fadeInLeft" data-wow-delay="100ms"
                                            data-wow-duration="1000ms">
                                            <div className="icon-box icon-box2">
                                                <span className="icon-promotion"></span>
                                            </div>

                                            <div className="content-box">
                                                <h2><Link href="#">Affordable</Link></h2>
                                                <p>Lab-grown diamonds are substantially cheaper than mined diamonds allowing consumers to either upgrade in size of diamond or spend less. Labon aims to provide its clients with the best choice in Lab Grown Diamonds at the most competitive price.</p>
                                            </div>
                                        </li>

                                        <li className="services-two__list-item style2 wow fadeInRight" data-wow-delay="0ms"
                                            data-wow-duration="1000ms">
                                            <div className="icon-box icon-box3">
                                                <span className="icon-interior-design"></span>
                                            </div>

                                            <div className="content-box">
                                                <h2><Link href="#">Certified</Link></h2>
                                                <p>Certified Diamonds have always provided the much needed trust and confidence to clients. Labon's offers diamonds certified by the International Gemological Institute (IGI) which assures trust and confidence to the clients.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Gallery />
                <section className="advantages-one">

                    <div className="container">
                        <div className="advantages-one__inner">
                            <ul className="row" style={{ alignItems: "center" }}>
                                <li className="col-md-8 col-12">
                                    <div className="advantages-one__single">
                                        <div className="advantages-one__single-img">
                                            {/* <div className="btn-box">
                                                <Link href="#">Show all More</Link>
                                                <div className="border-box"></div>
                                            </div> */}
                                            <div className="inner">
                                                <img src="assets/images/resources/advantages-v1-img3.jpg" alt="#" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-md-4 col-12">
                                    <div className="advantages-one__single">
                                        <div className="advantages-one__single-content">
                                            <div className="tagline">
                                                <Link href="#">IGI</Link>
                                                <div className="border-box"></div>
                                            </div>

                                            <div className="title-box">
                                                <h2>Certification  <br />
                                                    <span>Institute</span> <br />
                                                    IGI</h2>
                                            </div>

                                            <p>Lab grown diamonds are a relatively new offering on the market and certification ensures trust. IGI has been leading from the start in terms of certification of Lab Grown Diamonds. Currently IGI is the most reliable certification institute for Lab Grown Diamonds. Almost all diamonds offered by Labon are certified by the IGI.</p>

                                            {/* <div className="btn-box">
                                                <Link className="thm-btn" href="contact">
                                                    <span className="txt">View More</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                </Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </li>

                            </ul>

                        </div>
                    </div>
                </section>
                <Blog />
                {/* <Testimonial />
                <Team />
                <Pricing />
                <Features /> */}
                <Slogan />
            </Layout>
        </>
    )
}