'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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


export default function Testimonial() {
    return (
        <>
        {/* Start Testimonials One */}
        <section className="testimonials-one">
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
                            <Swiper {...swiperOptions} className="testimonials-one__carousel">
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
       

            
        </>
    )
}
