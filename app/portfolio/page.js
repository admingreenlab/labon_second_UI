'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
    return (
        <>
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Portfolio">
        {/* Start Gallery Two */}
        <section className="gallery-two gallery-two--portfolio">
            <div className="container">
                <div className="sec-title text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <p className="tg-element-title">latest projects</p>
                        <div className="border-box"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Our Working Gallery</h2>
                </div>

                <div className="row">
                    {/* Start Gallery Two Single*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
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
                    </div>
                    {/* End Gallery Two Single*/}

                    {/* Start Gallery Two Single*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="gallery-two__single">
                            <div className="gallery-two__single-img">
                                <div className="inner">
                                    <img src="assets/images/gallery/gallery-v2-img6.jpg" alt="#"/>
                                    <div className="overlay-content">
                                        <p>Business Idea</p>
                                        <h2><Link href="#">Super Experince</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Gallery Two Single*/}

                    {/* Start Gallery Two Single*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
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
                    </div>
                    {/* End Gallery Two Single*/}

                    {/* Start Gallery Two Single*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
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
                    </div>
                    {/* End Gallery Two Single*/}

                    {/* Start Gallery Two Single*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="gallery-two__single">
                            <div className="gallery-two__single-img">
                                <div className="inner">
                                    <img src="assets/images/gallery/gallery-v2-img9.jpg" alt="#"/>
                                    <div className="overlay-content">
                                        <p>Business Idea</p>
                                        <h2><Link href="#">Super Experince</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Gallery Two Single*/}

                    {/* Start Gallery Two Single*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                        <div className="gallery-two__single">
                            <div className="gallery-two__single-img">
                                <div className="inner">
                                    <img src="assets/images/gallery/gallery-v2-img10.jpg" alt="#"/>
                                    <div className="overlay-content">
                                        <p>Business Idea</p>
                                        <h2><Link href="#">Super Experince</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Gallery Two Single*/}
                </div>
            </div>
        </section>
        {/* End Gallery Two */}
        </Layout>
        </>
    )
}