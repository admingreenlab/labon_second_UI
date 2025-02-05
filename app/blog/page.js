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
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Blog">
                {/* Start Blog Page Carousel*/}
                <section className="blog-page-carousel">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="blog-page-carousel__inner">
                                    <Swiper {...swiperOptions} className="owl-carousel owl-theme thm-owl__carousel blog-page__carousel">
                                        <SwiperSlide>
                                            {/* Start Blog Two Single*/}
                                            <div className="blog-two__single">
                                                <div className="blog-two__single-img">
                                                    <img src="assets/images/blog/blog-v12-img3.jpg" alt="#" />
                                                    <img src="assets/images/blog/blog-v12-img3.jpg" alt="#" />
                                                </div>

                                                <div className="blog-two__single-content">
                                                    <p>New</p>
                                                    <h3 className="mb-3"><Link href="#">JCK - An Ultimate Experience of bling and sparkles</Link></h3>
                                                    <p>Participating in a renowned trade show, JCK creates a stimulating and informative experience, offering the opportunity to meet industry experts, gain insights into new products and services, and network with like-minded professionals.</p>
                                                </div>
                                            </div>
                                            {/* End Blog Two Single*/}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* Start Blog Two Single*/}
                                            <div className="blog-two__single">
                                                <div className="blog-two__single-img">
                                                    <img src="assets/images/blog/blog-v12-img3.jpg" alt="#" />
                                                    <img src="assets/images/blog/blog-v12-img3.jpg" alt="#" />
                                                </div>

                                                <div className="blog-two__single-content">
                                                    <p>New</p>
                                                    <h3 className="mb-3"><Link href="#">JCK - An Ultimate Experience of bling and sparkles</Link></h3>
                                                    <p>Participating in a renowned trade show, JCK creates a stimulating and informative experience, offering the opportunity to meet industry experts, gain insights into new products and services, and network with like-minded professionals.</p>
                                                </div>
                                            </div>
                                            {/* End Blog Two Single*/}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* Start Blog Two Single*/}
                                            <div className="blog-two__single">
                                                <div className="blog-two__single-img">
                                                    <img src="assets/images/blog/blog-v12-img3.jpg" alt="#" />
                                                    <img src="assets/images/blog/blog-v12-img3.jpg" alt="#" />
                                                </div>

                                                <div className="blog-two__single-content">
                                                    <p>New</p>
                                                    <h3 className="mb-3"><Link href="#">JCK - An Ultimate Experience of bling and sparkles</Link></h3>
                                                    <p>Participating in a renowned trade show, JCK creates a stimulating and informative experience, offering the opportunity to meet industry experts, gain insights into new products and services, and network with like-minded professionals.</p>
                                                </div>
                                            </div>
                                            {/* End Blog Two Single*/}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* Start Blog Two Single*/}
                                            <div className="blog-two__single">
                                                <div className="blog-two__single-img">
                                                    <img src="assets/images/blog/blog-v12-img3.jpg" alt="#" />
                                                    <img src="assets/images/blog/blog-v12-img3.jpg" alt="#" />
                                                </div>

                                                <div className="blog-two__single-content">
                                                    <p>New</p>
                                                    <h3 className="mb-3"><Link href="#">JCK - An Ultimate Experience of bling and sparkles</Link></h3>
                                                    <p>Participating in a renowned trade show, JCK creates a stimulating and informative experience, offering the opportunity to meet industry experts, gain insights into new products and services, and network with like-minded professionals.</p>
                                                </div>
                                            </div>
                                            {/* End Blog Two Single*/}
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Blog Page Carousel */}

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