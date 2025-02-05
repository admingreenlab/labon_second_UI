'use client'
import Link from "next/link"
export default function Blog() {
    return (
        <>
        {/* Start Blog One */}
        <section className="blog-one">
            <div className="container">
                <div className="row">
                    {/* Start Blog One Content Left*/}
                    <div className="col-xl-4">
                        <div className="blog-one__content-left">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <p className="tg-element-title">our insights</p>
                                    <div className="border-box"></div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Our Latest <br/>
                                    Article & New <br/>
                                    Updates
                                </h2>
                            </div>
                            <div className="blog-one__content-text">
                                <p>Mestib ulligulia remove projects completed
                                    the marketing reserch to abusiness high process
                                    our work in high level. </p>
                            </div>
                        </div>
                    </div>
                    {/* End Blog One Content Left*/}

                    {/* Start Blog One Content Right*/}
                    <div className="col-xl-8">
                        <div className="blog-one__content-right">
                            <ul className="blog-one__content-right-list">
                                <li className="wow animated fadeInRight" data-wow-delay="0.1s">
                                    <div className="left-content">
                                        <div className="date-box">
                                            <p>Oct 2023</p>
                                        </div>
                                        <div className="text-box">
                                            <h2><Link href="#">Worldwides annual spends on <br/>
                                                    digital advertising</Link></h2>
                                            <h3>Digital Agency <span>By Rason Toy</span></h3>
                                        </div>
                                    </div>
                                    <div className="icon-box">
                                        <Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                    </div>
                                </li>

                                <li className="wow animated fadeInRight" data-wow-delay="0.3s">
                                    <div className="left-content">
                                        <div className="date-box">
                                            <p>Nov 2023</p>
                                        </div>
                                        <div className="text-box">
                                            <h2><Link href="#">The secret of change is to focus <br/>
                                                    all your energy</Link></h2>
                                            <h3>Agency/business <span>By Rason Toy</span></h3>
                                        </div>
                                    </div>
                                    <div className="icon-box">
                                        <Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                    </div>
                                </li>

                                <li className="wow animated fadeInRight" data-wow-delay="0.5s">
                                    <div className="left-content">
                                        <div className="date-box">
                                            <p>Sep 2023</p>
                                        </div>
                                        <div className="text-box">
                                            <h2><Link href="#">A Simple Social Media Marketing <br/>
                                                    Checklist</Link></h2>
                                            <h3>Digital Agency <span>By Rason Toy</span></h3>
                                        </div>
                                    </div>
                                    <div className="icon-box">
                                        <Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End Blog One Content Right*/}
                </div>
            </div>
        </section>
        {/* End Blog One */}
        </>
    )
}
