'use client'
import Link from "next/link"
export default function About() {
    return (
        <>
        {/* Start About One */}
        <section className="about-one">
            <div className="big-title1 wow slideInLeft" data-wow-delay="500ms" data-wow-duration="2500ms">
                <h2>About</h2>
            </div>
            <div className="big-title2 wow slideInRight" data-wow-delay="500ms" data-wow-duration="2500ms">
                <h2>Creative</h2>
            </div>
            <div className="container">
                <div className="about-one__inner">
                    <div className="sec-title text-center tg-heading-subheading animation-style2">
                        <div className="sec-title__tagline">
                            <p className="tg-element-title">about us</p>
                            <div className="border-box"></div>
                        </div>
                        <h2 className="sec-title__title tg-element-title">We creative best high services <br/>
                            & bold solutions for your <br/> business <span>growth</span></h2>
                    </div>
                    <div className="btn-box">
                        <Link className="thm-btn" href="contact">
                            <span className="txt">Explore More</span>
                            <span className="bdrl"></span>
                            <span className="bdrr"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        {/* End About One */}
        
        </>
    )
}
