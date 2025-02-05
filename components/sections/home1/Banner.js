
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}


export default function Banner() {
    return (
        <>
            <section className="main-slider main-slider-one">
                <Swiper {...swiperOptions} className="swiper-container main-slider-one__carousel">
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                        {/* Start Main Slider One*/}
                        <div className="swiper-slide">
                            <div className="image-layer" style={{ backgroundImage: ' url(assets/images/slides/slider-v1-bg.jpg)' }} >
                            </div>
                            <div className="auto-container">
                                <div className="main-slider-one__single">
                                    <div className="main-slider-one__img">
                                        <img src="assets/images/slides/slider-v1-img1.jpg" alt="#"/>
                                    </div>
                                    <div className="main-slider-one__content">
                                        <ul className="social-links">
                                            <li><Link href="#">Fb.</Link></li>
                                            <li><Link href="#">Tw.</Link></li>
                                            <li><Link href="#">In.</Link></li>
                                            <li><Link href="#">Be.</Link></li>
                                        </ul>

                                        <div className="title">
                                            <h2>
                                                Things <br/>
                                                <span className="icon-right-arrow-1"></span> creative <br/>
                                                everyday
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Main Slider One*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        {/* Start Main Slider One*/}
                        <div className="swiper-slide">
                            <div className="image-layer" style={{ backgroundImage: ' url(assets/images/slides/slider-v1-bg.jpg)' }} >
                            </div>
                            <div className="auto-container">
                                <div className="main-slider-one__single">
                                    <div className="main-slider-one__img">
                                        <img src="assets/images/slides/slider-v1-img1.jpg" alt="#"/>
                                    </div>
                                    <div className="main-slider-one__content">
                                        <ul className="social-links">
                                            <li><Link href="#">Fb.</Link></li>
                                            <li><Link href="#">Tw.</Link></li>
                                            <li><Link href="#">In.</Link></li>
                                            <li><Link href="#">Be.</Link></li>
                                        </ul>

                                        <div className="title">
                                            <h2>
                                                Things <br/>
                                                <span className="icon-right-arrow-1"></span> creative <br/>
                                                everyday
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Main Slider One*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        {/* Start Main Slider One*/}
                        <div className="swiper-slide">
                            <div className="image-layer" style={{ backgroundImage: ' url(assets/images/slides/slider-v1-bg.jpg)' }} >
                            </div>
                            <div className="auto-container">
                                <div className="main-slider-one__single">
                                    <div className="main-slider-one__img">
                                        <img src="assets/images/slides/slider-v1-img1.jpg" alt="#"/>
                                    </div>
                                    <div className="main-slider-one__content">
                                        <ul className="social-links">
                                            <li><Link href="#">Fb.</Link></li>
                                            <li><Link href="#">Tw.</Link></li>
                                            <li><Link href="#">In.</Link></li>
                                            <li><Link href="#">Be.</Link></li>
                                        </ul>

                                        <div className="title">
                                            <h2>
                                                Things <br/>
                                                <span className="icon-right-arrow-1"></span> creative <br/>
                                                everyday
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Main Slider One*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        {/* Start Main Slider One*/}
                        <div className="swiper-slide">
                            <div className="image-layer" style={{ backgroundImage: ' url(assets/images/slides/slider-v1-bg.jpg)' }} >
                            </div>
                            <div className="auto-container">
                                <div className="main-slider-one__single">
                                    <div className="main-slider-one__img">
                                        <img src="assets/images/slides/slider-v1-img1.jpg" alt="#"/>
                                    </div>
                                    <div className="main-slider-one__content">
                                        <ul className="social-links">
                                            <li><Link href="#">Fb.</Link></li>
                                            <li><Link href="#">Tw.</Link></li>
                                            <li><Link href="#">In.</Link></li>
                                            <li><Link href="#">Be.</Link></li>
                                        </ul>

                                        <div className="title">
                                            <h2>
                                                Things <br/>
                                                <span className="icon-right-arrow-1"></span> creative <br/>
                                                everyday
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Main Slider One*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        {/* Start Main Slider One*/}
                        <div className="swiper-slide">
                            <div className="image-layer" style={{ backgroundImage: ' url(assets/images/slides/slider-v1-bg.jpg)' }} >
                            </div>
                            <div className="auto-container">
                                <div className="main-slider-one__single">
                                    <div className="main-slider-one__img">
                                        <img src="assets/images/slides/slider-v1-img1.jpg" alt="#"/>
                                    </div>
                                    <div className="main-slider-one__content">
                                        <ul className="social-links">
                                            <li><Link href="#">Fb.</Link></li>
                                            <li><Link href="#">Tw.</Link></li>
                                            <li><Link href="#">In.</Link></li>
                                            <li><Link href="#">Be.</Link></li>
                                        </ul>

                                        <div className="title">
                                            <h2>
                                                Things <br/>
                                                <span className="icon-right-arrow-1"></span> creative <br/>
                                                everyday
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Main Slider One*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        {/* Start Main Slider One*/}
                        <div className="swiper-slide">
                            <div className="image-layer" style={{ backgroundImage: ' url(assets/images/slides/slider-v1-bg.jpg)' }} >
                            </div>
                            <div className="auto-container">
                                <div className="main-slider-one__single">
                                    <div className="main-slider-one__img">
                                        <img src="assets/images/slides/slider-v1-img1.jpg" alt="#"/>
                                    </div>
                                    <div className="main-slider-one__content">
                                        <ul className="social-links">
                                            <li><Link href="#">Fb.</Link></li>
                                            <li><Link href="#">Tw.</Link></li>
                                            <li><Link href="#">In.</Link></li>
                                            <li><Link href="#">Be.</Link></li>
                                        </ul>

                                        <div className="title">
                                            <h2>
                                                Things <br/>
                                                <span className="icon-right-arrow-1"></span> creative <br/>
                                                everyday
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Main Slider One*/}
                        </SwiperSlide>
                        <SwiperSlide>
                        {/* Start Main Slider One*/}
                        <div className="swiper-slide">
                            <div className="image-layer" style={{ backgroundImage: ' url(assets/images/slides/slider-v1-bg.jpg)' }} >
                            </div>
                            <div className="auto-container">
                                <div className="main-slider-one__single">
                                    <div className="main-slider-one__img">
                                        <img src="assets/images/slides/slider-v1-img1.jpg" alt="#"/>
                                    </div>
                                    <div className="main-slider-one__content">
                                        <ul className="social-links">
                                            <li><Link href="#">Fb.</Link></li>
                                            <li><Link href="#">Tw.</Link></li>
                                            <li><Link href="#">In.</Link></li>
                                            <li><Link href="#">Be.</Link></li>
                                        </ul>

                                        <div className="title">
                                            <h2>
                                                Things <br/>
                                                <span className="icon-right-arrow-1"></span> creative <br/>
                                                everyday
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Main Slider One*/}
                        </SwiperSlide>
                    </div>
                    <div className="project-one__control-wrap">
                        <div className="swiper-counter">
                            <div id="current2">01</div>
                            <div id="total2"></div>
                        </div>
                    </div>

                    <div className="scroll-pagination">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </section>
        
        </>
    )
}
