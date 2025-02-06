import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error404() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Page Not Found">
            <section className="error-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="error-page__wrapper text-center">
                                <div className="error-page__content">
                                    <h2>404</h2>
                                    <h3>Opps! Page Not Found</h3>
                                    <p>Sorry, but the page you are looking for does not exist.</p>
                                    <div className="btn-box">
                                        <Link className="thm-btn" href="/">
                                            <span className="txt">Go To Home</span>
                                            <span className="bdrl"></span>
                                            <span className="bdrr"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        </>
    )
}
