'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
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
            slidesPerView: 2,
            
        },
        991: {
            slidesPerView: 3,
            
        },
        1199: {
            slidesPerView: 4,
            
        },
        1350: {
            slidesPerView: 4,
            
        },
    }



}
export default function Home() {

    return (
        <>
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Team Carousel">
        {/* Start Team Carousel Page*/}
        <section className="team-carousel-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="team-carousel-page__inner">
                            <Swiper {...swiperOptions} className="owl-carousel owl-theme thm-owl__carousel team-carousel-page__carousel">
                                <SwiperSlide>
                                {/* Start Team Two Single*/}
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img1.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Alrans Mit</Link></h2>
                                        <p>Designer</p>
                                    </div>
                                </div>
                                {/* End Team Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Team Two Single*/}
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img2.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Delon Singh</Link></h2>
                                        <p>founder</p>
                                    </div>
                                </div>
                                {/* End Team Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Team Two Single*/}
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img3.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Manira Roy</Link></h2>
                                        <p>Manager</p>
                                    </div>
                                </div>
                                {/* End Team Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Team Two Single*/}
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img4.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Ravico Lacok</Link></h2>
                                        <p>Co-founder</p>
                                    </div>
                                </div>
                                {/* End Team Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Team Two Single*/}
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img1.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Alrans Mit</Link></h2>
                                        <p>Designer</p>
                                    </div>
                                </div>
                                {/* End Team Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Team Two Single*/}
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img2.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Delon Singh</Link></h2>
                                        <p>founder</p>
                                    </div>
                                </div>
                                {/* End Team Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Team Two Single*/}
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img3.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Manira Roy</Link></h2>
                                        <p>Manager</p>
                                    </div>
                                </div>
                                {/* End Team Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Team Two Single*/}
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img4.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Ravico Lacok</Link></h2>
                                        <p>Co-founder</p>
                                    </div>
                                </div>
                                {/* End Team Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Team Two Single*/}
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img1.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Alrans Mit</Link></h2>
                                        <p>Designer</p>
                                    </div>
                                </div>
                                {/* End Team Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Team Two Single*/}
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img2.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Delon Singh</Link></h2>
                                        <p>founder</p>
                                    </div>
                                </div>
                                {/* End Team Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Team Two Single*/}
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img3.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Manira Roy</Link></h2>
                                        <p>Manager</p>
                                    </div>
                                </div>
                                {/* End Team Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Team Two Single*/}
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img4.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Ravico Lacok</Link></h2>
                                        <p>Co-founder</p>
                                    </div>
                                </div>
                                {/* End Team Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Team Two Single*/}
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img1.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Alrans Mit</Link></h2>
                                        <p>Designer</p>
                                    </div>
                                </div>
                                {/* End Team Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Team Two Single*/}
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img2.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Delon Singh</Link></h2>
                                        <p>founder</p>
                                    </div>
                                </div>
                                {/* End Team Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Team Two Single*/}
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img3.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Manira Roy</Link></h2>
                                        <p>Manager</p>
                                    </div>
                                </div>
                                {/* End Team Two Single*/}
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Team Two Single*/}
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/images/team/team-v2-img4.jpg" alt="#"/>
                                            <ul className="social-links">
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link href="#">Ravico Lacok</Link></h2>
                                        <p>Co-founder</p>
                                    </div>
                                </div>
                                {/* End Team Two Single*/}
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Team Carousel Page*/}

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