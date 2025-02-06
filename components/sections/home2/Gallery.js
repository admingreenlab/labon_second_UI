'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 10,
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
            slidesPerView: 4,

        },
        575: {
            slidesPerView: 3,

        },
        767: {
            slidesPerView: 3,

        },
        991: {
            slidesPerView: 4,

        },
        1199: {
            slidesPerView: 5,

        },
        1350: {
            slidesPerView: 5,

        },
    }
}

export default function Gallery() {
    return (
        <>
            {/* Start Gallery Two */}
            <section className="gallery-two" style={{ paddingTop: '0' }}>
                <div className="img-125">
                    <img src="assets/images/shaps.gif" alt="#" />
                </div>
                <div className="container">
                    <div className="sec-title tg-heading-subheading animation-style2">
                        <div className="sec-title__tagline">
                            <p className="tg-element-title">Explore Unique Shapes</p>
                            <div className="border-box"></div>
                        </div>
                        <h2 className="sec-title__title tg-element-title">Shop by Shapes</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="gallery-two__inner">
                                <Swiper {...swiperOptions} className="owl-carousel owl-theme thm-owl__carousel gallery-two__carousel">
                                    <SwiperSlide>
                                        {/* Start Gallery Two Single*/}
                                        <div className="gallery-two__single">
                                            <div className="gallery-two__single-img">
                                                <div className="inner">
                                                    <img src="assets/images/gallery/daimon/asscher.png" alt="#" />
                                                    <div className="overlay-content">
                                                        <p>Diamond shapes</p>
                                                        <h2><Link href="#">Asscher</Link></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Gallery Two Single*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* Start Gallery Two Single*/}
                                        <div className="gallery-two__single">
                                            <div className="gallery-two__single-img">
                                                <div className="inner">
                                                    <img src="assets/images/gallery/daimon/round.png" alt="#" />
                                                    <div className="overlay-content">
                                                        <p>Diamond shapes</p>
                                                        <h2><Link href="#">Round</Link></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Gallery Two Single*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* Start Gallery Two Single*/}
                                        <div className="gallery-two__single">
                                            <div className="gallery-two__single-img">
                                                <div className="inner">
                                                    <img src="assets/images/gallery/daimon/radiant.png" alt="#" />
                                                    <div className="overlay-content">
                                                        <p>Diamond shapes</p>
                                                        <h2><Link href="#">Radiant</Link></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Gallery Two Single*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* Start Gallery Two Single*/}
                                        <div className="gallery-two__single">
                                            <div className="gallery-two__single-img">
                                                <div className="inner">
                                                    <img src="assets/images/gallery/daimon/princess.png" alt="#" />
                                                    <div className="overlay-content">
                                                        <p>Diamond shapes</p>
                                                        <h2><Link href="#">Princess</Link></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Gallery Two Single*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* Start Gallery Two Single*/}
                                        <div className="gallery-two__single">
                                            <div className="gallery-two__single-img">
                                                <div className="inner">
                                                    <img src="assets/images/gallery/daimon/pear.png" alt="#" />
                                                    <div className="overlay-content">
                                                        <p>Diamond shapes</p>
                                                        <h2><Link href="#">Pear</Link></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Gallery Two Single*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* Start Gallery Two Single*/}
                                        <div className="gallery-two__single">
                                            <div className="gallery-two__single-img">
                                                <div className="inner">
                                                    <img src="assets/images/gallery/daimon/oval.png" alt="#" />
                                                    <div className="overlay-content">
                                                        <p>Diamond shapes</p>
                                                        <h2><Link href="#">Oval</Link></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Gallery Two Single*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* Start Gallery Two Single*/}
                                        <div className="gallery-two__single">
                                            <div className="gallery-two__single-img">
                                                <div className="inner">
                                                    <img src="assets/images/gallery/daimon/Heart.png" alt="#" />
                                                    <div className="overlay-content">
                                                        <p>Diamond shapes</p>
                                                        <h2><Link href="#">Heart</Link></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Gallery Two Single*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* Start Gallery Two Single*/}
                                        <div className="gallery-two__single">
                                            <div className="gallery-two__single-img">
                                                <div className="inner">
                                                    <img src="assets/images/gallery/daimon/emerald.png" alt="#" />
                                                    <div className="overlay-content">
                                                        <p>Diamond shapes</p>
                                                        <h2><Link href="#">Emerald</Link></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Gallery Two Single*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* Start Gallery Two Single*/}
                                        <div className="gallery-two__single">
                                            <div className="gallery-two__single-img">
                                                <div className="inner">
                                                    <img src="assets/images/gallery/daimon/cushion.png" alt="#" />
                                                    <div className="overlay-content">
                                                        <p>Diamond shapes</p>
                                                        <h2><Link href="#">Cushion</Link></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Gallery Two Single*/}
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Gallery Two */}
        </>
    )
}
