'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    // Navigation
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
            slidesPerView: 2,

        },
        1199: {
            slidesPerView: 3,

        },
        1350: {
            slidesPerView: 3,

        },
    }



}

export default function Awards() {
    return (
        <>

            {/* Start Awards One */}
            <section className="awards-one">
                <div className="container">
                    <div className="awards-one__box">
                        <div className="border-box2"></div>

                        <div className="sec-title tg-heading-subheading animation-style2">
                            <div className="sec-title__tagline">
                                <p className="tg-element-title">JCK Summary</p>
                                <div className="border-box"></div>
                            </div>
                            <h2 className="sec-title__title tg-element-title">JCK SYNOPSIS</h2>
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="awards-one__inner">
                                    <Swiper {...swiperOptions} className="awards-one__carousel">
                                        <SwiperSlide>
                                            {/* Start Awards One Single*/}
                                            <div className="awards-one__single text-center">
                                                <div className="awards-one__single-top">
                                                    <div className="awards-one__single-icon">
                                                        <img src="assets/images/30year.png" alt="#" />
                                                    </div>
                                                    <div className="awards-one__single-content">
                                                        <h2>30+ Years <br />Experience </h2>
                                                    </div>
                                                </div>

                                                <div className="awards-one__single-counter">
                                                    <h3>01</h3>
                                                </div>

                                                <div className="awards-one__single-bottom">
                                                    <div className="awards-one__single-content">
                                                        <h2>30+ Years<br /> Experience</h2>
                                                    </div>
                                                    <div className="overlay-icon">
                                                        <img src="assets/images/30year.png" alt="#" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Awards One Single*/}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* Start Awards One Single*/}
                                            <div className="awards-one__single text-center">
                                                <div className="awards-one__single-top">
                                                    <div className="awards-one__single-icon">
                                                        <img src="assets/images/visitor.png" alt="#" />
                                                    </div>
                                                    <div className="awards-one__single-content">
                                                        <h2>17000+ Visitors</h2>
                                                    </div>
                                                </div>

                                                <div className="awards-one__single-counter">
                                                    <h3>02</h3>
                                                </div>

                                                <div className="awards-one__single-bottom">
                                                    <div className="awards-one__single-content">
                                                        <h2>17000+ Visitors</h2>
                                                    </div>
                                                    <div className="overlay-icon">
                                                        <img src="assets/images/visitor.png" alt="#" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Awards One Single*/}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* Start Awards One Single*/}
                                            <div className="awards-one__single text-center">
                                                <div className="awards-one__single-top">
                                                    <div className="awards-one__single-icon">
                                                        <img src="assets/images/exhibitors.png" alt="#" />
                                                    </div>
                                                    <div className="awards-one__single-content">
                                                        <h2>1800 Exhibitors</h2>
                                                    </div>
                                                </div>

                                                <div className="awards-one__single-counter">
                                                    <h3>03</h3>
                                                </div>
                                                <div className="awards-one__single-bottom">
                                                    <div className="awards-one__single-content">
                                                        <h2>1800 Exhibitors</h2>
                                                    </div>
                                                    <div className="overlay-icon">
                                                        <img src="assets/images/exhibitors.png" alt="#" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Awards One Single*/}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* Start Awards One Single*/}
                                            <div className="awards-one__single text-center">
                                                <div className="awards-one__single-top">
                                                    <div className="awards-one__single-icon">
                                                        <img src="assets/images/country.png" alt="#" />
                                                    </div>
                                                    <div className="awards-one__single-content">
                                                        <h2>130 Countries</h2>
                                                    </div>
                                                </div>

                                                <div className="awards-one__single-counter">
                                                    <h3>04</h3>
                                                </div>

                                                <div className="awards-one__single-bottom">
                                                    <div className="awards-one__single-content">
                                                        <h2>130 Countries</h2>
                                                    </div>
                                                    <div className="overlay-icon">
                                                        <img src="assets/images/country.png" alt="#" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Awards One Single*/}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* Start Awards One Single*/}
                                            <div className="awards-one__single text-center">
                                                <div className="awards-one__single-top">
                                                    <div className="awards-one__single-icon">
                                                        <img src="assets/images/pan-india.png" alt="#" />
                                                    </div>
                                                    <div className="awards-one__single-content">
                                                        <h2>30,000 Industry<br /> Professionals </h2>
                                                    </div>
                                                </div>

                                                <div className="awards-one__single-counter">
                                                    <h3>05</h3>
                                                </div>

                                                <div className="awards-one__single-bottom">
                                                    <div className="awards-one__single-content">
                                                        <h2>30,000 Industry<br /> Professionals </h2>
                                                    </div>
                                                    <div className="overlay-icon">
                                                        <img src="assets/images/pan-india.png" alt="#" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Awards One Single*/}
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Awards One */}

        </>
    )
}
