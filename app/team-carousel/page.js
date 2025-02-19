'use client'
import Layout from "@/components/layout/Layout"
import PolishSinglesearch from "@/app/home-2/home"
import Link from "next/link"

export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                {/* Start Team Carousel Page*/}
                <section className="team-carousel-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <PolishSinglesearch />
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Team Carousel Page*/}
            </Layout>
        </>
    )
}