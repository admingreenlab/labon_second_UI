'use client'
import Layout from "../../components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Slogan from "../../components/sections/home2/Slogan"
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        // Navigation
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.srn',
            prevEl: '.srp',
        },
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,

            },
            575: {
                slidesPerView: 1,

            },
            767: {
                slidesPerView: 1,

            },
            991: {
                slidesPerView: 1,

            },
            1199: {
                slidesPerView: 1,

            },
            1350: {
                slidesPerView: 1,

            },
        }
    }

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Agriculture services">
                <section className="testimonials-one testimonials-one--testimonials">
                    <div className="container">
                        <div className="testimonials-one__top">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <p className="tg-element-title">Anatomy</p>
                                    <div className="border-box"></div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">The Anatomy of a Diamond
                                </h2>
                                <p>While every diamond is unique, all diamonds share certain structural features. A diamond’s anatomy, or its basic structure, determines its proportions, brilliance, dispersion and scintillation. Each part of the diamond has a specific name, and having a basic understanding of how each part contributes to the diamond as a whole will help you find your perfect diamond. A diamond is comprised of the eight main components. They are Table, Crown, Girdle, Pavilion, and Culet. Below is a brief description of each part of a diamond and its location.</p>
                                <img src="assets/images/backgrounds/anatomy_3.gif" alt="" style={{ width: "100%", height: "100%", margin: "50px 0" }} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="testimonials-one__inner">
                                    <Swiper {...swiperOptions} className="owl-carousel owl-theme thm-owl__carousel testimonials-one__carousel">
                                        <SwiperSlide>
                                            {/* Start Testimonials One Single*/}
                                            <div className="testimonials-one__single">
                                                <div className="left-content">
                                                    <div className="icon-box">
                                                        <img src="assets/images/backgrounds/1.gif" alt="" style={{ width: "100%", maxWidth: "140px", height: "100%" }} />
                                                    </div>
                                                    <div className="text-box text-center">
                                                        <p>Table</p>
                                                    </div>
                                                </div>

                                                <div className="right-content">
                                                    <div className="text-box">
                                                        <p>The largest facet of a diamond is always a flat surface, resembling a tabletop in appearance. It is commonly referred to as the "table" and plays a crucial role in reflecting light, significantly enhancing the diamond's brilliance and sparkle.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Testimonials One Single*/}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* Start Testimonials One Single*/}
                                            <div className="testimonials-one__single">
                                                <div className="left-content">
                                                    <div className="icon-box">
                                                        <img src="assets/images/backgrounds/2.gif" alt="" style={{ width: "100%", maxWidth: "140px", height: "100%" }} />
                                                    </div>
                                                    <div className="text-box text-center">
                                                        <p>Crown</p>
                                                    </div>
                                                </div>

                                                <div className="right-content">
                                                    <div className="text-box">
                                                        <p>Extends from the table
                                                            Ends at the top of the girdle
                                                            Step or brilliant cut facets</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Testimonials One Single*/}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* Start Testimonials One Single*/}
                                            <div className="testimonials-one__single">
                                                <div className="left-content">
                                                    <div className="icon-box">
                                                        <img src="assets/images/backgrounds/3.gif" alt="" style={{ width: "100%", maxWidth: "140px", height: "100%" }} />
                                                    </div>
                                                    <div className="text-box text-center">
                                                        <p>Girdle</p>
                                                    </div>
                                                </div>

                                                <div className="right-content">
                                                    <div className="text-box">
                                                        <p>Outer edge of diamond
                                                            Widest point on a diamond
                                                            Where crown & pavilion meet
                                                            Either rough, polished or faceted</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Testimonials One Single*/}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* Start Testimonials One Single*/}
                                            <div className="testimonials-one__single">
                                                <div className="left-content">
                                                    <div className="icon-box">
                                                        <img src="assets/images/backgrounds/41.gif" alt="" style={{ width: "100%", maxWidth: "140px", height: "100%" }} />
                                                    </div>
                                                    <div className="text-box text-center">
                                                        <p>Pavilion</p>
                                                    </div>
                                                </div>

                                                <div className="right-content">
                                                    <div className="text-box">
                                                        <p>Located at the bottom
                                                            Bridges the girdle & culet
                                                            Determines light reflection
                                                            Quality cuts allow for max light</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Testimonials One Single*/}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* Start Testimonials One Single*/}
                                            <div className="testimonials-one__single">
                                                <div className="left-content">
                                                    <div className="icon-box">
                                                        <img src="assets/images/backgrounds/bottom.gif" alt="" style={{ width: "100%", maxWidth: "140px", height: "100%" }} />
                                                    </div>
                                                    <div className="text-box text-center">
                                                        <p>Culet</p>
                                                    </div>
                                                </div>

                                                <div className="right-content">
                                                    <div className="text-box">
                                                        <p>Smallest facet of a diamond
                                                            Located at the very bottom tip
                                                            Used to protect the pavilion
                                                            Modern methods renders it unnecessary, but it's still in use</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Testimonials One Single*/}
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Slogan />
            </Layout>
        </>
    )
}