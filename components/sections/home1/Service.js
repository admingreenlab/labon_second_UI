'use client'
import Link from "next/link"
export default function Service() {
    return (
        <>
        {/* Start Services One */}
        <section className="services-one">
            <div className="container">
                <div className="row">
                    {/* Start Services One Left Content*/}
                    <div className="col-xl-5">
                        <div className="services-one__left-content">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <p className="tg-element-title">what we do</p>
                                    <div className="border-box"></div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Agency Services <br/>
                                    We Provide
                                </h2>
                            </div>

                            <div className="services-one__left-content-text">
                                <p>Mestib ulligula remove the politices project completed
                                    marketing reserch abusiness high level process
                                    consultation for business.</p>
                            </div>
                        </div>
                    </div>
                    {/* End Services One Left Content*/}

                    {/* Start Services One Right Content*/}
                    <div className="col-xl-7">
                        <div className="services-one__right-content">
                            <ul>
                                <li className="wow animated fadeInRight" data-wow-delay="0.1s">
                                    <div className="outer-box">
                                        <div className="inner">
                                            <div className="left-content">
                                                <div className="icon-box">
                                                    <span className="icon-writing"></span>
                                                </div>
                                                <div className="title-box">
                                                    <h2>Content Writings <br/>
                                                        & Marketing</h2>
                                                </div>
                                            </div>

                                            <div className="right-content">
                                                <p>Mestib ulligula remov project complete <br/>
                                                    marketing reserch to abusiness high process </p>
                                            </div>
                                        </div>

                                        <div className="overlay-content">
                                            <div className="left-content">
                                                <div className="number-box">
                                                    01
                                                </div>

                                                <div className="title-box2">
                                                    <h2>Content Writings <br/>
                                                        & Marketing</h2>
                                                </div>
                                            </div>

                                            <div className="right-content">
                                                <div className="btn-box">
                                                    <Link href="#">View Details <span className="icon-chevron"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="wow animated fadeInRight" data-wow-delay="0.3s">
                                    <div className="outer-box">
                                        <div className="inner">
                                            <div className="left-content">
                                                <div className="icon-box">
                                                    <span className="icon-web-design"></span>
                                                </div>
                                                <div className="title-box">
                                                    <h2>Graphic & Sketches <br/>
                                                        Designing</h2>
                                                </div>
                                            </div>

                                            <div className="right-content">
                                                <p>Mestib ulligula remov project complete <br/>
                                                    marketing reserch to abusiness high process </p>
                                            </div>
                                        </div>

                                        <div className="overlay-content">
                                            <div className="left-content">
                                                <div className="number-box">
                                                    02
                                                </div>

                                                <div className="title-box2">
                                                    <h2>Graphic & Sketches <br/>
                                                        Designing</h2>
                                                </div>
                                            </div>

                                            <div className="right-content">
                                                <div className="btn-box">
                                                    <Link href="#">View Details <span className="icon-chevron"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="wow animated fadeInRight" data-wow-delay="0.3s">
                                    <div className="outer-box">
                                        <div className="inner">
                                            <div className="left-content">
                                                <div className="icon-box">
                                                    <span className="icon-development"></span>
                                                </div>
                                                <div className="title-box">
                                                    <h2>Website Design And <br/>
                                                        Development</h2>
                                                </div>
                                            </div>

                                            <div className="right-content">
                                                <p>Mestib ulligula remov project complete <br/>
                                                    marketing reserch to abusiness high process </p>
                                            </div>
                                        </div>

                                        <div className="overlay-content">
                                            <div className="left-content">
                                                <div className="number-box">
                                                    03
                                                </div>

                                                <div className="title-box2">
                                                    <h2>Website Design And <br/>
                                                        Development</h2>
                                                </div>
                                            </div>

                                            <div className="right-content">
                                                <div className="btn-box">
                                                    <Link href="#">View Details <span className="icon-chevron"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End Services One Right Content*/}
                </div>
            </div>
        </section>
        {/* End Services One */}

    
        </>
    )
}
