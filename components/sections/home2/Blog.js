import Link from "next/link"
export default function Blog() {
    return (
        <>

            {/* Start Blog Two */}
            <section className="blog-two">
                <div className="container">
                    <div className="blog-two__top">
                        <div className="sec-title tg-heading-subheading animation-style2">
                            <div className="sec-title__tagline">
                                <p className="tg-element-title">JBT</p>
                                <div className="border-box"></div>
                            </div>
                            <h2 className="sec-title__title tg-element-title">Jewelers Board of Trade
                            </h2>
                        </div>

                        <div className="text-box">
                            <p></p>
                        </div>
                    </div>

                    <div className="blog-two__bottom">
                        <div className="row">
                            {/* Start Blog Two Single*/}
                            <div className="col-md-4 col-12 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="blog-two__single">
                                    <div className="blog-two__single-content style2">
                                        <p>JBT peace of mind</p>
                                        <h3><Link href="#">The Jewelers Board of Trade
                                        </Link></h3>
                                        <div className="text-box">
                                            <p>The Jewelers Board of Trade is a not-profit association who’ve delivered commercial credit information, collections, marketing services, and unbiased data and statistics for over 130 years.</p>
                                        </div>
                                        {/* <div className="btn-box">
                                            <Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* End Blog Two Single*/}

                            {/* Start Blog Two Single*/}
                            <div className="col-md-8 col-12 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <div className="blog-two__single">
                                    <div className="blog-two__single-img">
                                        <img src="assets/images/blog/blog-v2-img1.jpg" alt="#" />
                                        <img src="assets/images/blog/blog-v2-img1.jpg" alt="#" />
                                    </div>

                                    {/* <div className="blog-two__single-content">
                                        <p>June 21 . 2023</p>
                                        <h3><Link href="#">Bring the tables win survival <br />
                                            strategies</Link></h3>
                                    </div> */}
                                </div>
                            </div>
                            {/* End Blog Two Single*/}

                            {/* Start Blog Two Single*/}
                            {/* <div className="col-xl-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="blog-two__single">
                                <div className="blog-two__single-img">
                                    <img src="assets/images/blog/blog-v2-img2.jpg" alt="#"/>
                                    <img src="assets/images/blog/blog-v2-img2.jpg" alt="#"/>
                                </div>

                                <div className="blog-two__single-content">
                                    <p>may 17 . 2023</p>
                                    <h3><Link href="#">The quality of life insurance in <br/>
                                            the company</Link></h3>
                                </div>
                            </div>
                        </div> */}
                            {/* End Blog Two Single*/}
                        </div>
                    </div>
                </div>
            </section>
            {/* End Blog Two */}

        </>
    )
}
