'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect } from "react"
import SwiperCore from "swiper"

SwiperCore.use([Navigation, Pagination, Autoplay])

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',  // Next button className
        prevEl: '.swiper-button-prev',  // Previous button className
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: { slidesPerView: 2 },
        575: { slidesPerView: 3 },
        767: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1199: { slidesPerView: 5 },
        1350: { slidesPerView: 5 },
    }
}

export default function Gallery() {
    useEffect(() => {
        SwiperCore.use([Navigation, Pagination])
    }, [])
    return (
        <>
            {/* Start Gallery Two */}
            <section className="gallery-two" style={{ paddingTop: '0' }}>
                <div className="img-125">
                    <img src="assets/images/backgrounds/no-bkg-left.png" alt="#" style={{ opacity: "0.3" }} />
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
                                {/* Swiper Previous & Next Buttons */}
                                <div className="swiper-button-prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                    </svg>
                                </div> {/* Left arrow */}
                                <div className="swiper-button-next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </div> {/* Right arrow */}
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
                                                    <img src="assets/images/gallery/daimon/Round.png" alt="#" />
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
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Gallery Two */}
        </>
    )
}
