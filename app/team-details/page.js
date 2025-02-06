import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Team Details">
                {/* Start Team Details */}
                <section className="team-details">
                    <div className="container">
                        {/* Start Team Details Top*/}
                        <div className="team-details__top">
                            <div className="row">
                                {/* Start Team Details Top Left */}
                                <div className="col-xl-5">
                                    <div className="team-details__top-left">
                                        <div className="img-box">
                                            <img src="assets/images/team/team-details-img1.jpg" alt="" />
                                            <div className="overlay-content">
                                                <h3>William Singh</h3>
                                                <p>Co-Founder</p>
                                            </div>
                                        </div>
                                        <div className="social-links">
                                            <ul>
                                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                                <li><Link href="#"><span className="icon-dribbble-1"></span></Link></li>
                                                <li><Link href="#"><span className="icon-share"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End Team Details Top Left */}

                                {/* Start Team Details Top Content */}
                                <div className="col-xl-7">
                                    <div className="team-details__top-content">
                                        <div className="title-box">
                                            <h2>Hello I am Albert, from <br />
                                                the Therapy Expert</h2>
                                            <p>Day likeness that may. Seed multiply image beginning. First fruits
                                                waters blessed likeness s earth fill great him blessed thirds rules fors
                                                lesser one you their there meat Were was Itself saying. </p>
                                        </div>

                                        <div className="team-details__top-content-text1">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="single-contact-info">
                                                        <ul>
                                                            <li>
                                                                <h3><span>Phone : </span><Link href="tel:123456789">00-451-362-91</Link></h3>
                                                            </li>

                                                            <li>
                                                                <h3><span>Email : </span><Link href="mailto:yourmail@email.com">Example@gmail.com</Link>
                                                                </h3>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="single-contact-info">
                                                        <ul>
                                                            <li>
                                                                <h3><span>Address : </span> Raselina, New York</h3>
                                                            </li>

                                                            <li>
                                                                <h3><span>Website : </span><Link href="https://www.webexample.com/">Webexample.com</Link>
                                                                </h3>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="team-details__top-content-text1-btn">
                                                <Link className="thm-btn" href="contact">
                                                    <span className="txt">contact me</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Team Details Top Content */}
                            </div>
                        </div>
                        {/* End Team Details Top*/}

                        {/* Start Team Details Bottom*/}
                        <div className="team-details__bottom">
                            <div className="row">
                                {/* Start Team Details Bottom Content*/}
                                <div className="col-xl-9">
                                    <div className="team-details__bottom-content">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="team-details__bottom-content-single">
                                                    <div className="title">
                                                        <h2>Qualifications :</h2>
                                                    </div>

                                                    <div className="text-one">
                                                        <h3>Education/Certification:</h3>
                                                        <p>Bachelor’s Degree required in Business
                                                            Administration, HR or related field</p>
                                                    </div>

                                                    <div className="text-one">
                                                        <h3>Experience Required:</h3>
                                                        <p>Minimum 5 years of progressively
                                                            responsible and related experience in
                                                            Human Resources, with a focus on
                                                            talent development</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6">
                                                <div className="team-details__bottom-content-single">
                                                    <div className="title">
                                                        <h2>Skills/Abilities:</h2>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-checked"></span>
                                                            </div>
                                                            <p>Effective presentation skills</p>
                                                        </li>

                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-checked"></span>
                                                            </div>
                                                            <p>Ability to influence at a senior level</p>
                                                        </li>

                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-checked"></span>
                                                            </div>
                                                            <p>Effective presentation skills</p>
                                                        </li>

                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-checked"></span>
                                                            </div>
                                                            <p>Must be able to meet deadlines</p>
                                                        </li>

                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-checked"></span>
                                                            </div>
                                                            <p>Must possess strong knowledge</p>
                                                        </li>

                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-checked"></span>
                                                            </div>
                                                            <p>Advanced computer literacy</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Team Details Bottom Content*/}

                                {/* Start Team Details Bottom Img*/}
                                <div className="col-xl-3">
                                    <div className="team-details__bottom-img">
                                        <img src="assets/images/team/team-details-img2.jpg" alt="" />
                                    </div>
                                </div>
                                {/* End Team Details Bottom Img*/}

                            </div>
                        </div>
                        {/* End Team Details Bottom*/}
                    </div>
                </section>
                {/* End Team Details */}
            </Layout>
        </>
    )
}