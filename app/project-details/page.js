import Link from "next/link"
import Layout from "../../components/layout/Layout"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Project Details">
                {/*Start Project Details*/}
                <section className="project-details">
                    <div className="container">
                        <div className="project-details__inner">
                            <div className="project-details__img1">
                                <div className="inner">
                                    <img src="assets/images/project/project-details-img1.jpg" alt="" />
                                </div>

                                <div className="project-details__img1-content wow fadeInRight" data-wow-delay="0ms"
                                    data-wow-duration="1500ms">
                                    <div className="title-box">
                                        <h2>Project Details</h2>
                                    </div>
                                    <div className="project-details__img1-content-list">
                                        <ul className="clearfix">
                                            <li>
                                                <div className="title">
                                                    <h2>Category:</h2>
                                                </div>

                                                <div className="text">
                                                    <p>Quality Equipment </p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="title">
                                                    <h2>Client:</h2>
                                                </div>

                                                <div className="text">
                                                    <p>Mack Straing </p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="title">
                                                    <h2>Location:</h2>
                                                </div>

                                                <div className="text">
                                                    <p>USA </p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="title">
                                                    <h2>Value:</h2>
                                                </div>

                                                <div className="text">
                                                    <p>$500K </p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="title">
                                                    <h2>Website:</h2>
                                                </div>

                                                <div className="text">
                                                    <p><Link href="https://www.google.com/">www.google.com</Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="title">
                                                    <h2>Share:</h2>
                                                </div>

                                                <div className="social-links">
                                                    <Link href="#"><span className="icon-facebook-f"></span></Link>
                                                    <Link href="#"><span className="icon-instagram"></span></Link>
                                                    <Link href="#"><span className="icon-twitter1"></span></Link>
                                                    <Link href="#"><span className="icon-linkedin"></span></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Project Details*/}
            </Layout>
        </>
    )
}