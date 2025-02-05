'use client'
import Link from "next/link"
export default function Slogan() {
    return (
        <>
        {/* Start Slogan One */}
        <section className="slogan-one">
            <div className="auto-container">
                <div className="slogan-one__inner">
                    <div className="container">
                        <div className="slogan-one__content-box">
                            <div className="text-box tg-heading-subheading animation-style2">
                                <h2 className="tg-element-title">Get In Touch</h2>
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
        </>
    )
}
