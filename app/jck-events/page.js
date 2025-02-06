
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Awards from "@/components/sections/home1/Awards"
export default function Home() {

    return (
        <>
            <Layout headerStyle={12} footerStyle={11} >
                {/* Start Blog Details */}
                <section className="header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-3 col-12">
                                <div className="left">
                                    <a href="/">
                                        <img src="assets/images/logo-inner.svg" alt="#" style={{ maxWidth: "180px", width: "100%", maxWidth: "185px" }} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-9 col-12">
                                <div className="right">
                                    <div className="footer-one__contact pb-0">
                                        <ul className="justify-content-end">
                                            <li>
                                                <div className="icon-box" style={{ width: "auto" }}>
                                                    <span className="icon-message"></span>
                                                </div>

                                                <div className="text-box">
                                                    <Link style={{ color: "white", display: "block", fontSize: "14px" }} href="tel:+916352241283">+91 6352 241 283</Link>
                                                    <Link style={{ color: "white", display: "block", fontSize: "14px" }} href="mailto:sales@labondiamonds.com">sales@labondiamonds.com</Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="comment-form__btn-box">
                                                    <button type="submit" className="black-btn"><span
                                                        className="txt">BOOK <span>APPOINTMENT</span></span>
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-details">
                    <div className="container">
                        <div className="row">
                            {/* Start Blog Details Content*/}
                            <div className="col-xl-12">
                                <div className="blog-details__content">
                                    <div className="blog-details__content-img1">
                                        <img src="assets/images/inner-banner.jpg" alt="#" />
                                        <div className="date-box">
                                            JCK
                                        </div>
                                    </div>
                                    <div className="contact-in">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6 col-12">
                                                    <h3 className="mb-3">JCK TRADE SHOW</h3>
                                                    <p>JCK is the largest and trendiest trade event in the jewels business, with over 30 years of expertise. Organized in the City of Lights, Las Vegas, it provides an unprecedented experience for all the major sectors of the jewellery market.</p>
                                                    <p>We will delve into this world of the extravaganza that brings industry merchants and enthusiasts under one roof.</p>
                                                    <h6 className="mt-2"><b>MEET US AT #8131</b></h6>
                                                    <img src="assets/images/fill.svg" alt="tight" className="fill" style={{ marginLeft: "auto", marginTop: "50px" }} />
                                                    <img src="assets/images/fill1.svg" alt="tight" className="fill1" style={{ marginLeft: "auto", marginTop: "50px" }} />
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="contact-one__form">
                                                        <form id="contact-form" className="default-form2 contact-form-validated">
                                                            <div className="row">
                                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                                    <div className="input-box">
                                                                        <input type="text" name="name" placeholder="Name *" required="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                                    <div className="input-box">
                                                                        <input type="email" name="email" placeholder="Firm Name *" required="" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                                    <div className="input-box">
                                                                        <input type="text" placeholder="Email *" name="phone" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                                    <div className="input-box">
                                                                        <input type="text" placeholder="Contact Number *" name="Subject" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                                    <div className="input-box">
                                                                        <input type="date" placeholder="Date*" name="Subject" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-xl-12">
                                                                    <div className="contact-one__form-btn">
                                                                        <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                                            <span className="txt">Register Now</span>
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
                                    </div>
                                    <Awards />
                                    {/* <div className="blog-details__content-text1">
                                        <ul className="meta-box">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-offer"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link href="#">Apartment</Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-profile-user"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link href="#">by Admin</Link></p>
                                                </div>
                                            </li>
                                        </ul>
                                        <h2><Link href="#">Bring the tables win-win survival strategies</Link></h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but majority have
                                            suffered alteration in some form, by injected humour, or randomised words which
                                            don't look even slightly believable. If you are going to use a passage of Lorem
                                            Ipsum. There are many variations of passages of Lorem Ipsum available, but majority
                                            have suffered alteration in some form, by injected humour, or randomised words which
                                            don't look even slightly believable. If you are going to use a passage of Lorem
                                            Ipsum. Suspendisse ultricies vestibulum vehicula. Proin laoreet porttitor lacus.
                                            Duis auctor vel ex eu elementum. Fusce eu volutpat felis. Proin sed eros tincidunt,
                                            sagittis sapien eu, porta diam. Aenean finibus scelerisque nulla non facilisis.
                                            Fusce vel orci sed quam gravida condimentum. Aliquam condimentum, massa vel mollis
                                            volutpat, erat sem pharetra quam, ac mattis arcu elit non massa. Nam mollis nunc
                                            velit, vel varius arcu fringilla tristique. Cras elit nunc, sagittis eu bibendum eu,
                                            ultrices placerat sem. Praesent vitae metus dolor. Nulla a erat et orci mattis
                                            auctor.</p>
                                        <p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam
                                            quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod
                                            nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a
                                            rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed
                                            vitae leo vitae nisl pellentesque semper.</p>
                                    </div> */}

                                    {/* <div className="blog-details__content-text2">
                                        <div className="blog-details__content-text2-tag">
                                            <div className="title-box">
                                                <h3>Tags</h3>
                                            </div>

                                            <ul>
                                                <li><Link href="#">Dairy</Link></li>
                                                <li><Link href="#">Food</Link></li>
                                            </ul>
                                        </div>

                                        <div className="social-links">
                                            <Link href="#"><span className="icon-twitter"></span></Link>
                                            <Link href="#"><span className="icon-facebook"></span></Link>
                                            <Link href="#"><span className="icon-pinterest"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                        </div>
                                    </div>

                                    <div className="comment-one">
                                        <h2 className="comment-one__title">2 Comments</h2>

                                        <div className="comment-one__single">
                                            <div className="comment-one__image">
                                                <img src="assets/images/blog/blog-details-img2.jpg" alt="#" />
                                            </div>

                                            <div className="comment-one__content">
                                                <div className="comment-one__content-top">
                                                    <div className="name">
                                                        <h3>Kevin martin</h3>
                                                    </div>

                                                    <div className="btn-box">
                                                        <Link href="#">Reply</Link>
                                                    </div>
                                                </div>

                                                <p>It is a long established fact that a reader will be distracted by the
                                                    readable content of a page when looking at its layout. The point of using
                                                    Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                            </div>
                                        </div>

                                        <div className="comment-one__single style2">
                                            <div className="comment-one__image">
                                                <img src="assets/images/blog/blog-details-img3.jpg" alt="#" />
                                            </div>

                                            <div className="comment-one__content">
                                                <div className="comment-one__content-top">
                                                    <div className="name">
                                                        <h3>Sarah albert</h3>
                                                    </div>

                                                    <div className="btn-box">
                                                        <Link href="#">Reply</Link>
                                                    </div>
                                                </div>

                                                <p>It is a long established fact that a reader will be distracted by the
                                                    readable content of a page when looking at its layout. The point of using
                                                    Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="comment-form">
                                        <h3 className="comment-form__title">Leave a Comment</h3>
                                        <form className="comment-one__form contact-form-validated"
                                        >
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="comment-form__input-box">
                                                        <input type="text" placeholder="Full Name*" name="name" />
                                                    </div>
                                                </div>

                                                <div className="col-xl-6">
                                                    <div className="comment-form__input-box">
                                                        <input type="email" placeholder="Email Address*" name="email" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="comment-form__input-box text-message-box">
                                                        <textarea name="message" placeholder="Your Comments *"></textarea>
                                                    </div>
                                                    <div className="comment-form__btn-box">
                                                        <button type="submit" className="comment-form__btn thm-btn"><span
                                                            className="txt">Submit Comment</span>
                                                            <span className="bdrl"></span>
                                                            <span className="bdrr"></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div> */}
                                </div>
                            </div>

                            {/* End Blog Details Content*/}
                        </div>
                    </div>
                </section>
                <footer className="footer-one">
                    {/* Start Footer*/}
                    <div className="footer">
                        <div className="container">
                            <div className="footer-one__inner">
                                <div className="logo-box text-center">
                                    <Link href="/"><img src="assets/images/resources/logo-1.png" alt="#" /></Link>
                                </div>



                                <div className="footer-one__social-links">
                                    <ul>
                                        <li><Link target="_blank" href="https://twitter.com/LabonDiamonds"><span className="icon-twitter"></span></Link></li>
                                        <li><Link target="_blank" href="https://www.facebook.com/LabonDiamonds"><span className="icon-facebook"></span></Link></li>
                                        <li><Link target="_blank" href="https://www.facebook.com/LabonDiamonds"><span >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                            </svg>
                                        </span></Link></li>
                                        <li><Link target="_blank" href="https://www.instagram.com/LabonDiamonds"><span className="icon-instagram"></span></Link></li>

                                    </ul>
                                    <div className="border-box"></div>
                                </div>

                                <div className="footer-one__copyright">
                                    <p>Â© 2025 Labon LLC. All Rights Reserved</p>
                                </div>
                                <a
                                    className="float"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="assets/images/whatsapp.gif" alt="gif" style={{ width: '32px', filter: "invert(1)" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* End Footer*/}
                </footer>

                {/* End Blog Details */}

            </Layout>
        </>
    )
}