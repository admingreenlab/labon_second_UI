'use client'
import Link from "next/link"
export default function Advantages() {
    return (
        <>
          
        {/* Start Advantages One */}
        <section className="advantages-one">
            <div className="container">
                <div className="advantages-one__inner">
                    <ul className="row">
                        <li className="col-xl-4">
                            <div className="advantages-one__single">
                                <div className="advantages-one__single-img">
                                    <div className="btn-box">
                                        <Link href="#">Show all More</Link>
                                        <div className="border-box"></div>
                                    </div>
                                    <div className="inner">
                                        <img src="assets/images/resources/advantages-v1-img1.jpg" alt="#"/>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="col-xl-4">
                            <div className="advantages-one__single">
                                <div className="advantages-one__single-content">
                                    <div className="tagline">
                                        <Link href="#">advantages</Link>
                                        <div className="border-box"></div>
                                    </div>

                                    <div className="title-box">
                                        <h2>Design <br/>
                                            <span>Creatively</span> <br/>
                                            Beauty</h2>
                                    </div>

                                    <p>Mestib ulligula. remove the politices for this projects
                                        marketing reserch abusiness high levels process
                                        we try to best consultations</p>

                                    <div className="btn-box">
                                        <Link className="thm-btn" href="contact">
                                            <span className="txt">View More</span>
                                            <span className="bdrl"></span>
                                            <span className="bdrr"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="col-xl-4">
                            <div className="advantages-one__single">
                                <div className="advantages-one__single-img">
                                    <div className="btn-box">
                                        <Link href="#">Show all More</Link>
                                        <div className="border-box"></div>
                                    </div>
                                    <div className="inner">
                                        <img src="assets/images/resources/advantages-v1-img2.jpg" alt="#"/>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/* End Advantages One */}
        
        </>
    )
}
