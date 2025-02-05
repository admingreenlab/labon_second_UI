'use client'
import Link from "next/link"
export default function Pricing() {

    return (
        <>

            {/* Start Pricing One */}
            <section className="pricing-one">
                <div className="container">
                    <div className="pricing-one__top">
                        <div className="sec-title tg-heading-subheading animation-style2">
                            <div className="sec-title__tagline">
                                <p className="tg-element-title">pricing plan</p>
                                <div className="border-box"></div>
                            </div>
                            <h2 className="sec-title__title tg-element-title">Explore Our Digital <br />
                                Pricing
                            </h2>
                        </div>

                        <div className="text-box">
                            <p>Mestib removes the completed market reserches our
                                abusiness high consultations we are prouds of the
                                work hards for business..</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="pricing-one__bottom">
                                <ul className="pricing-one__box">
                                    <li className="pricing-one__single wow fadeInUp" data-wow-delay=".1s">
                                        <div className="big-title">
                                            Pricing plan
                                        </div>
                                        <div className="pricing-one__single-left">
                                            <div className="pricing-box">
                                                <h2>$150 <span>/ monthly</span></h2>
                                                <h3>Standard</h3>
                                            </div>

                                            <div className="content-box">
                                                <h4>Up to 100 keyphrases optimized</h4>
                                                <p>Mestib removes the completed markete reserches our
                                                    work hards for business.. </p>
                                            </div>
                                        </div>

                                        <div className="pricing-one__single-right">
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="contact">
                                                    <span className="txt">Choose Your Plan</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="pricing-one__single wow fadeInUp" data-wow-delay=".3s">
                                        <div className="big-title">
                                            Pricing plan
                                        </div>
                                        <div className="pricing-one__single-left">
                                            <div className="pricing-box">
                                                <h2>$170 <span>/ monthly</span></h2>
                                                <h3>Premium</h3>
                                            </div>

                                            <div className="content-box">
                                                <h4>Content marketing assets:4</h4>
                                                <p>Mestib removes the completed markete reserches our
                                                    work hards for business.. </p>
                                            </div>
                                        </div>

                                        <div className="pricing-one__single-right">
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="contact">
                                                    <span className="txt">Choose Your Plan</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Pricing One */}

        </>
    )
}
