'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Portfolio Details">
                {/* Start Portfolio Details */}
                <div className="portfolio-details">
                    <div className="container">
                        <div className="portfolio-details__inner">
                            <div className="portfolio-details__img1">
                                <img src="assets/images/project/portfolio-details-img1.jpg" alt="" />
                            </div>

                            <div className="portfolio-details__text1">
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="content-box">
                                            <h2>Projects Overview</h2>
                                            <p>Tincidunt elit magnis nulla facilisis sagittis sapien nunc amet ultrices dolores
                                                sit ipsum velit purus aliquet massa fringilla leo orci. Sapien nunc amet
                                                ultrices, dolores sit ipsum velit massa fringilla leo orci dolors sit amet elit
                                                amet. </p>
                                            <p>It is a long established fact that a reader will be distracted by the readable
                                                content of a page when looking at its layout. The point of using Lorem Ipsum is
                                                that it has a more-or-less normal distribution of letters, as opposed to using
                                                'Content here, content here', making it look like readable English. Many desktop
                                                publishing packages and web page editors now use Lorem Ipsum as their default
                                                model text, and a search for 'lorem ipsum' will uncover many web sites still in
                                                their infancy. Various versions have evolved over the years, sometimes by
                                                accident, humour and the like.</p>

                                            <ul>
                                                <li>
                                                    <div className="icon-box">
                                                        <span className="icon-checked"></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet is simply free text available in the market
                                                    </p>
                                                </li>
                                                <li>
                                                    <div className="icon-box">
                                                        <span className="icon-checked"></span>
                                                    </div>
                                                    <p>Sed tempor arcu non ligula convallis suffered alternation in some form by
                                                        injected
                                                    </p>
                                                </li>
                                                <li>
                                                    <div className="icon-box">
                                                        <span className="icon-checked"></span>
                                                    </div>
                                                    <p>Fusce sodales lacus sollicitudin, if you are going to use a passage
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-xl-4">
                                        <div className="sidebar-box">
                                            <div className="sidebar-box-bg"
                                                style={{ backgroundImage: ' url(assets/images/project/portfolio-details-img2.jpg)' }} >
                                            </div>
                                            <ul className="sidebar-box-list">
                                                <li>
                                                    <h2>Clients:</h2>
                                                    <h3>Jessica brown</h3>
                                                </li>

                                                <li>
                                                    <h2>Category:</h2>
                                                    <h3>Organic, Food</h3>
                                                </li>

                                                <li>
                                                    <h2>Date:</h2>
                                                    <h3>20 Oct, 2023</h3>
                                                </li>
                                            </ul>
                                            <div className="social-links">
                                                <Link href="#"><span className="icon-twitter"></span></Link>
                                                <Link href="#"><span className="icon-facebook"></span></Link>
                                                <Link href="#"><span className="icon-pinterest"></span></Link>
                                                <Link href="#"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="portfolio-details__btn-box">
                                <div className="previous-btn">
                                    <div className="icon">
                                        <Link href="#"><span className="icon-arrow-left"></span></Link>
                                    </div>
                                    <div className="text">
                                        <Link href="#">Previous post</Link>
                                    </div>
                                </div>

                                <div className="next-btn">
                                    <div className="text">
                                        <Link href="#">Next post</Link>
                                    </div>
                                    <div className="icon">
                                        <Link href="#"><span className="icon-arrow-right"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}

                {/* Start Portfolio One */}
                <section className="portfolio-one">
                    <div className="container">
                        <div className="row">

                            {/* Start Portfolio One Single*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="portfolio-one__single">
                                    <div className="inner">
                                        <img src="assets/images/project/portfolio-v1-img1.jpg" alt="" />
                                        <div className="portfolio-one__link">
                                            <Link className="img-popup" href="assets/images/project/portfolio-v1-img1.jpg"><span
                                                className="icon-plus-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Portfolio One Single*/}

                            {/* Start Portfolio One Single*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                                <div className="portfolio-one__single">
                                    <div className="inner">
                                        <img src="assets/images/project/portfolio-v1-img2.jpg" alt="" />
                                        <div className="portfolio-one__link">
                                            <Link className="img-popup" href="assets/images/project/portfolio-v1-img2.jpg"><span
                                                className="icon-plus-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Portfolio One Single*/}

                            {/* Start Portfolio One Single*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="portfolio-one__single">
                                    <div className="inner">
                                        <img src="assets/images/project/portfolio-v1-img3.jpg" alt="" />
                                        <div className="portfolio-one__link">
                                            <Link className="img-popup" href="assets/images/project/portfolio-v1-img3.jpg"><span
                                                className="icon-plus-1"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Portfolio One Single*/}

                        </div>
                    </div>
                </section>
                {/* End Portfolio One */}
            </Layout>
        </>
    )
}