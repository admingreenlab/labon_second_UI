'use client'
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
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
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="About Us">
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            {/* Start Service Details Content*/}
                            <div className="col-xl-12">
                                <div className="service-details__content">

                                    <div className="service-details__content-text2">
                                        <div className="row align-items-center">
                                            <div className="col-xl-6 col-lg-6 col-md-6 py-2">
                                                <div className="img-box">
                                                    <img src="assets/images/services/service-details-img2.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 py-2">
                                                <div className="content-box">
                                                    <h2>Who We Are ?</h2>

                                                    <ul>
                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-checked"></span>
                                                            </div>
                                                            <p>We at LABON LLC, are one of the leading wholesaler and supplier of CVD Lab-grown Diamonds. We hold the sustainable capacity to deliver all sizes of Type IIA, Conflict-Free & Ethically manufactured, Certified & Non-certified CVD Lab-grown Diamonds to the B2B Clienteles, Retailers and Jewellery Traders globally, by assuring them to supply these genuine diamonds at the best and affordable price with consistency in Quality as well as Quantity. Moreover, We are capable to tie up with clients for customized programs for specific ventures.</p>
                                                        </li>


                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-xl-6 col-lg-6 col-md-6 py-2">
                                                <div className="content-box">
                                                    <h2>What We Do ?</h2>
                                                    <ul>
                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-checked"></span>
                                                            </div>
                                                            <p>At Labon, we supply an extensive inventory of lab-grown diamonds ranging from 0.30 to 6.00 carats in different shapes and at the best price.</p>
                                                        </li>

                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-checked"></span>
                                                            </div>
                                                            <p>Chemically, physically, and optically identical to mined diamonds, lab-grown diamonds have been rapidly increasing in popularity over the last few years. Since lab-grown are eco-friendly, ethically responsible, and completely conflict-free, we feel they are the clear choice for consumers. They are not ‘synthetic’ nor ‘artificial.’ They are genuine diamonds and they are on track to become the new norm of the diamond industry.</p>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 py-2 order1">
                                                <div className="img-box">
                                                    <img src="assets/images/services/2.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-xl-6 col-lg-6 col-md-6 py-2">
                                                <div className="img-box">
                                                    <img src="assets/images/services/3.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 py-2">
                                                <div className="content-box">
                                                    <h2>Why to Choose LABON ?</h2>
                                                    <ul>
                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-checked"></span>
                                                            </div>
                                                            <p>Labon believes in adding value to its customer, and therefore we are constantly expanding our base and knowledge in product offering and quality standards. We offer various varieties of diamonds shapes such as Brilliant Round, Cushion, Heart, Marquise, Pear, Princess, Radiant, Square Radiant, Emerald and Oval. The colour ranges from D to J, with varieties of clarities like Hearts & Arrows, Certificated Fine makes, Excellent Makes, Single Stones and Mixed Parcel Category etc, at the best price and with different sizes starting from 0.30 to 6.00 Carats.</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-xl-6 col-lg-6 col-md-6 py-2">
                                                <div className="content-box">
                                                    <h2>What We Care About ?</h2>
                                                    <ul>
                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-checked"></span>
                                                            </div>
                                                            <p>Considering the predicament and perception of mined diamonds, we believe the world deserves a better source of diamonds. Mined Diamonds have been defiling our ecosystem and environment for hundreds of years. Soil erosion, deforestation, and ecosystem destruction are some of the issues faced globally due to excessive mining activities</p>
                                                        </li>

                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-checked"></span>
                                                            </div>
                                                            <p>As leading diamond supplier, we understand that ethical diamonds are more than just eco-friendly. They help averse human injustice as they have 100% derivative origins. Our promise assures affordable and timeless diamonds that are laboratory grown, eco-friendly, humane, and conflict-free.</p>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 py-2 order1">
                                                <div className="img-box">
                                                    <img src="assets/images/services/4.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            {/* End Service Details Content*/}

                        </div>
                    </div>
                </section>
            </Layout >
        </>
    )
}


