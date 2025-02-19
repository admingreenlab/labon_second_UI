
import Layout from "../../components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Contact">
                {/* Start Contact Page*/}
                <section className="contact-page">
                    <div className="container">
                        <div className="row">
                            {/* Start Contact Page Map*/}
                            <div className="col-xl-5">
                                <div className="contact-page-google-map">
                                    <div className="my-3">
                                        <h4>Working Hours</h4>
                                        <p>Monday – Saturday : 09AM – 07PM</p>
                                    </div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d307.4364136536552!2d-73.9791499!3d40.7571215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fe5ffc7b0f%3A0x1258124275922b4!2s580%205th%20Ave%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e1!3m2!1sen!2sin!4v1604556831242!5m2!1sen!2sin"
                                        className="contact-page-google-map__one"></iframe>
                                </div>
                            </div>
                            {/* End Contact Page Map*/}

                            {/* Start Contact One Form*/}
                            <div className="col-xl-7">
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
                            {/* End Contact One Form*/}
                        </div>
                    </div>
                </section>
                {/* End Contact Page*/}

            </Layout>
        </>
    )
}