'use client';
import Link from "next/link"
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Banner() {
    const [swiperOptions, setSwiperOptions] = useState({
        // modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        // autoplay: {
        //     delay: 8000, // Set scroll time in milliseconds (e.g., 3000ms = 3s)
        //     disableOnInteraction: false, // Keeps autoplay running even after user interaction
        // },
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });



    return (
        <>
            {/* Start Main Slider Two*/}
            <section className="main-slider main-slider-two">
                <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                            {/* Start Main Slider Two Single*/}
                            <div className="swiper-slide">
                                <div className="saliderimg">
                                    <img src="assets/images/slides/slaider-3.jpg" alt="#" />
                                </div>
                                <div className="auto-container banner-count">
                                    <div className="main-slider-two__single">
                                        <div className="main-slider-two__single-top">
                                            {/* <div className="counter-box">
                                                <div className="number">
                                                    <h2>01</h2>
                                                </div>
                                                <div className="border-box"></div>
                                            </div> */}
                                            <div className="text">
                                                <p>Step into our lab to explore innovation, technology, and perfect craftsmanship.</p>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="#">Access Inventory</Link>
                                            </div>
                                        </div>

                                        <div className="main-slider-two__single-bottom">
                                            <div className="title-box">
                                                <h2>Explore  <br />
                                                    our Laboratory </h2>
                                                <h3>Grown Diamonds</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Main Slider Two Single*/}
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* Start Main Slider Two Single*/}
                            <div className="swiper-slide" >
                                <div className="saliderimg">
                                    <img src="assets/images/slides/slaider-1.jpg" alt="#" />
                                </div>
                                <div className="auto-container banner-count">
                                    <div className="main-slider-two__single">
                                        <div className="main-slider-two__single-top">
                                            {/* <div className="counter-box">
                                                <div className="number">
                                                    <h2>02</h2>
                                                </div>
                                                <div className="border-box"></div>
                                            </div> */}
                                            <div className="text">
                                                <p>A wide range, of beautiful Type IIA, certified lab-grown diamonds that meet..
                                                </p>
                                            </div>
                                            {/* < v> */}
                                            {/* <div className="btn-box">
                                                <Link href="#">Get In Touch</Link>
                                            </div> */}
                                        </div>

                                        <div className="main-slider-two__single-bottom">
                                            <div className="title-box">
                                                <h2>Exceptional <br />
                                                    Standards.</h2>
                                                <h3>Grown Diamonds</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Main Slider Two Single*/}
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* Start Main Slider Two Single*/}
                            <div className="swiper-slide" >
                                <div className="saliderimg">
                                    <img src="assets/images/slides/slaider-2.jpg" alt="#" />
                                </div>
                            </div>
                            {/* End Main Slider Two Single*/}
                        </SwiperSlide>
                    </div>
                </Swiper>
            </section>
            {/* End Main Slider Two*/}
        </>
    )
}
