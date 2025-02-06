'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
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
export default function Home() {
    return (
        <>
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Portfolio Carousel">
        {/* Start Portfolio Carousel Page */}
        <section className="portfolio-carousel-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="portfolio-carousel-page__inner">
                            <Swiper {...swiperOptions} className="owl-carousel owl-theme thm-owl__carousel portfolio-carousel-page__carousel">
                                <SwiperSlide>
                                {/* Start Gallery Two Single*/}
                                <div className="gallery-two__single">
                                    <div className="gallery-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/gallery/gallery-v2-img5.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
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
                                            <img src="assets/images/gallery/gallery-v2-img8.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
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
                                            <img src="assets/images/gallery/gallery-v2-img7.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
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
                                            <img src="assets/images/gallery/gallery-v2-img5.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
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
                                            <img src="assets/images/gallery/gallery-v2-img8.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
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
                                            <img src="assets/images/gallery/gallery-v2-img7.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
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
                                            <img src="assets/images/gallery/gallery-v2-img5.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
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
                                            <img src="assets/images/gallery/gallery-v2-img8.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
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
                                            <img src="assets/images/gallery/gallery-v2-img7.jpg" alt="#"/>
                                            <div className="overlay-content">
                                                <p>Business Idea</p>
                                                <h2><Link href="#">Super Experince</Link></h2>
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
        {/* End Portfolio Carousel Page */}

        {/* Start Slogan One */}
        <section className="slogan-one">
            <div className="auto-container">
                <div className="slogan-one__inner">
                    <div className="container">
                        <div className="slogan-one__content-box">
                            <div className="text-box">
                                <h2>Get In Touch</h2>
                            </div>

                            <div className="btn-box">
                                <Link className="thm-btn" href="contact">
                                    <span className="txt">Send A Message</span>
                                    <span className="bdrl"></span>
                                    <span className="bdrr"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Slogan One */}

            </Layout>
        </>
    )
}