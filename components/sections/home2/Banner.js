'use client';
import Link from "next/link"
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Banner() {
    const [autoplayEnabled, setAutoplayEnabled] = useState(false);


    const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: autoplayEnabled ? { delay: 1000 } : false,
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    useEffect(() => {
        if (typeof window === "undefined") return;

        const updateAutoplay = () => {
            setAutoplayEnabled(window.innerWidth > 768);
        };

        updateAutoplay(); // Initial check
        window.addEventListener("resize", updateAutoplay);

        return () => {
            window.removeEventListener("resize", updateAutoplay);
        };
    }, []);

    // window.addEventListener('resize', () => {
    //     if (window.innerWidth <= 768) {
    //         swiper.autoplay.stop();
    //     } else {
    //         swiper.autoplay.start();
    //     }
    // });
    return (
        <>
            {/* Start Main Slider Two*/}
            <section className="main-slider main-slider-two">
                <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                            {/* Start Main Slider Two Single*/}
                            <div className="swiper-slide">
                                <div className="image-layer"
                                    style={{ backgroundImage: ' url(assets/images/slides/slider-v2-img1.jpg)' }} ></div>
                                <div className="main-slider-two__bg"
                                    style={{ backgroundImage: ' url(assets/images/slides/slider-v2-img2.jpg)' }} ></div>
                                <div className="auto-container">
                                    <div className="main-slider-two__single">
                                        <div className="main-slider-two__single-top">
                                            <div className="counter-box">
                                                <div className="number">
                                                    <h2>01</h2>
                                                </div>
                                                <div className="border-box"></div>
                                            </div>
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
                            <div className="swiper-slide">
                                <div className="image-layer"
                                    style={{ backgroundImage: ' url(assets/images/slides/slider-v2-img3.jpg)' }} ></div>
                                <div className="main-slider-two__bg"
                                    style={{ backgroundImage: ' url(assets/images/slides/slider-v2-img4.jpg)' }} ></div>
                                <div className="auto-container">
                                    <div className="main-slider-two__single">
                                        <div className="main-slider-two__single-top">
                                            <div className="counter-box">
                                                <div className="number">
                                                    <h2>02</h2>
                                                </div>
                                                <div className="border-box"></div>
                                            </div>
                                            <div className="text">
                                                <p>A wide range, of beautiful Type IIA, certified lab-grown diamonds that meet..
                                                </p>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="#">.</Link>
                                            </div>
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
                            <div className="swiper-slide">
                                <div className="image-layer"
                                    style={{ backgroundImage: ' url(assets/images/slides/slider-v4-img1.jpg)' }} ></div>
                                <div className="main-slider-two__bg"
                                    style={{ backgroundImage: ' url(assets/images/slides/slider-v4-img4.jpg)' }} ></div>
                                <div className="auto-container">
                                    <div className="main-slider-two__single">
                                        <div className="main-slider-two__single-top">
                                            <div className="counter-box">
                                                <div className="number">
                                                    <h2>03</h2>
                                                </div>
                                                <div className="border-box"></div>
                                            </div>
                                            <div className="text">
                                                <p>Backed by Greenlab, World's Leading Producer of Lab Grown Diamonds.

                                                    www.greenlab.diamonds</p>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="#">.</Link>
                                            </div>
                                            {/* <div className="btn-box">
                                                <Link href="#">Get In Touch</Link>
                                            </div> */}
                                        </div>

                                        <div className="main-slider-two__single-bottom">
                                            <div className="title-box">
                                                <h2>Labon <br />
                                                    B2B App</h2>
                                                <h3>Introducing</h3>
                                            </div>
                                        </div>
                                    </div>
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
