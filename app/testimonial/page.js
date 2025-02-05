'use client'
import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"
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
export default function Home() {

    return (
        <>
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Testimonials">
        {/* Start Testimonials One */}
        <section className="testimonials-one testimonials-one--testimonials">
            <div className="container">
                <div className="testimonials-one__top">
                    <div className="sec-title tg-heading-subheading animation-style2">
                        <div className="sec-title__tagline">
                            <p className="tg-element-title">Testimonials</p>
                            <div className="border-box"></div>
                        </div>
                        <h2 className="sec-title__title tg-element-title">Our Expert Clients
                        </h2>
                    </div>

                    <div className="btn-box">
                        <Link className="thm-btn" href="contact">
                            <span className="txt">Client Feedback</span>
                            <span className="bdrl"></span>
                            <span className="bdrr"></span>
                        </Link>
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
                                            <span className="icon-left-quote"></span>
                                        </div>
                                        <div className="text-box">
                                            <p>Ramitas Malika</p>
                                            <span>Co-Founder</span>
                                        </div>
                                    </div>

                                    <div className="right-content">
                                        <div className="text-box">
                                            <p>Dolor massa, a pellentesque nulla congue quis fusce convallis diam. Nam
                                                torister
                                                tempor faucibus imperdiet feli sed, vestibulligula. remove the politices
                                                for
                                                this projects marketing reserch business high levels in the process we
                                                try
                                                to
                                                best consultations in our work for futures..</p>
                                        </div>

                                        <div className="rating-box">
                                            <ul>
                                                <li>
                                                    <span className="icon-pointed-star"></span>
                                                </li>
                                                <li>
                                                    <span className="icon-pointed-star"></span>
                                                </li>
                                                <li>
                                                    <span className="icon-pointed-star"></span>
                                                </li>
                                                <li>
                                                    <span className="icon-pointed-star"></span>
                                                </li>
                                                <li>
                                                    <span className="icon-pointed-star"></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="img-box">
                                            <img src="assets/images/testimonial/testimonials-v1-img1.png" alt=""/>
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
                                            <span className="icon-left-quote"></span>
                                        </div>
                                        <div className="text-box">
                                            <p>Ramitas Malika</p>
                                            <span>Co-Founder</span>
                                        </div>
                                    </div>

                                    <div className="right-content">
                                        <div className="text-box">
                                            <p>Dolor massa, a pellentesque nulla congue quis fusce convallis diam. Nam
                                                torister
                                                tempor faucibus imperdiet feli sed, vestibulligula. remove the politices
                                                for
                                                this projects marketing reserch business high levels in the process we
                                                try
                                                to
                                                best consultations in our work for futures..</p>
                                        </div>

                                        <div className="rating-box">
                                            <ul>
                                                <li>
                                                    <span className="icon-pointed-star"></span>
                                                </li>
                                                <li>
                                                    <span className="icon-pointed-star"></span>
                                                </li>
                                                <li>
                                                    <span className="icon-pointed-star"></span>
                                                </li>
                                                <li>
                                                    <span className="icon-pointed-star"></span>
                                                </li>
                                                <li>
                                                    <span className="icon-pointed-star"></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="img-box">
                                            <img src="assets/images/testimonial/testimonials-v1-img1.png" alt=""/>
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
                                            <span className="icon-left-quote"></span>
                                        </div>
                                        <div className="text-box">
                                            <p>Ramitas Malika</p>
                                            <span>Co-Founder</span>
                                        </div>
                                    </div>

                                    <div className="right-content">
                                        <div className="text-box">
                                            <p>Dolor massa, a pellentesque nulla congue quis fusce convallis diam. Nam
                                                torister
                                                tempor faucibus imperdiet feli sed, vestibulligula. remove the politices
                                                for
                                                this projects marketing reserch business high levels in the process we
                                                try
                                                to
                                                best consultations in our work for futures..</p>
                                        </div>

                                        <div className="rating-box">
                                            <ul>
                                                <li>
                                                    <span className="icon-pointed-star"></span>
                                                </li>
                                                <li>
                                                    <span className="icon-pointed-star"></span>
                                                </li>
                                                <li>
                                                    <span className="icon-pointed-star"></span>
                                                </li>
                                                <li>
                                                    <span className="icon-pointed-star"></span>
                                                </li>
                                                <li>
                                                    <span className="icon-pointed-star"></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="img-box">
                                            <img src="assets/images/testimonial/testimonials-v1-img1.png" alt=""/>
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
        {/* End Testimonials One */}

        {/* Start Counter Two */}
        <section className="counter-two counter-two--testimonials">
            <div className="auto-container">
                <div className="counter-two__inner">
                    <div className="row">
                        {/* Start Counter Two Single*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-two__single">
                                <div className="counter-two__single-top">
                                    <div className="count-box">
                                        1.
                                    </div>
                                    <div className="counter-box">
                                        <h2><CounterUp end={4} /> <span className="k">k</span>
                                            <span className="plus icon-plus-1"></span>
                                        </h2>
                                    </div>
                                </div>

                                <div className="counter-two__single-bottom">
                                    <p>Satisfied clients in our <br/>
                                        company</p>
                                </div>
                            </div>
                        </div>
                        {/* End Counter Two Single*/}

                        {/* Start Counter Two Single*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-two__single">
                                <div className="counter-two__single-top">
                                    <div className="count-box">
                                        2.
                                    </div>
                                    <div className="counter-box">
                                        <h2><CounterUp end={301} />
                                        </h2>
                                    </div>
                                </div>

                                <div className="counter-two__single-bottom">
                                    <p>Working hours were the <br/>
                                        spent</p>
                                </div>
                            </div>
                        </div>
                        {/* End Counter Two Single*/}

                        {/* Start Counter Two Single*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-two__single">
                                <div className="counter-two__single-top">
                                    <div className="count-box">
                                        3.
                                    </div>
                                    <div className="counter-box">
                                        <h2><CounterUp end={2} /> <span className="k">k</span>
                                            <span className="plus icon-plus-1"></span>
                                        </h2>
                                    </div>
                                </div>

                                <div className="counter-two__single-bottom">
                                    <p>Successful our projects <br/>
                                        completed</p>
                                </div>
                            </div>
                        </div>
                        {/* End Counter Two Single*/}

                        {/* Start Counter Two Single*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-two__single">
                                <div className="counter-two__single-top">
                                    <div className="count-box">
                                        4.
                                    </div>
                                    <div className="counter-box">
                                        <h2><CounterUp end={813} />
                                        </h2>
                                    </div>
                                </div>

                                <div className="counter-two__single-bottom">
                                    <p>Our latest expert team <br/>
                                        members</p>
                                </div>
                            </div>
                        </div>
                        {/* End Counter Two Single*/}
                    </div>
                </div>
            </div>
        </section>
        {/* End Counter Two */}

        </Layout>
        </>
    )
}