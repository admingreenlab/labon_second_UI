import Link from "next/link"
import Layout from "../../components/layout/Layout"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} >
                {/* Start Team Details */}
                <section className="team-carousel-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="contact-one__form">
                                    <div className="sec-title tg-heading-subheading animation-style2">
                                        <div className="sec-title__tagline">
                                            <p className="tg-element-title">Join</p>
                                            <div className="border-box"></div>
                                        </div>
                                        <h2 className="sec-title__title tg-element-title">Contact Us
                                        </h2>
                                        <p>Do You Have Questions About Lab Grown Diamonds, Our Services, or Anything Else? Get in Touch!</p>
                                    </div>

                                    <form id="contact-form" className="default-form2 contact-form-validated"
                                    >
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="text" name="name" placeholder="NAME *" required="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="email" name="email" placeholder="EMAIL *" required="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="text" placeholder="PHONE *" name="phone" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="text" placeholder="SUBJECT *" name="Subject" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="input-box">
                                                    <textarea name="message" placeholder="WRITE YOUR MESSAGE *"></textarea>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-one__form-btn">
                                                    <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                        <span className="txt">Contact</span>
                                                        <span className="bdrl"></span>
                                                        <span className="bdrr"></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Team Details */}
            </Layout>
        </>
    )
}