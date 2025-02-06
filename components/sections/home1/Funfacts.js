'use client'
import CounterUp from "@/components/elements/CounterUp"
export default function Funfacts() {
    return (
        <>
        {/* Start Counter One */}
        <section className="counter-one">
            <div className="big-title">
                <h2>Counters</h2>
            </div>
            <div className="auto-container">
                <div className="row">
                    {/* Start Counter One Single*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="counter-one__single">
                            <div className="border-box wow animated fadeInLeft" data-wow-delay="0.1s"></div>
                            <div className="counter-one__content wow animated fadeInRight" data-wow-delay="0.1s">
                                <h2><CounterUp end={2} /> <span className="k">k</span> </h2>
                                <p>Expert Members</p>
                            </div>
                        </div>
                    </div>
                    {/* End Counter One Single*/}

                    {/* Start Counter One Single*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="counter-one__single">
                            <div className="border-box wow animated fadeInLeft" data-wow-delay="0.1s"></div>
                            <div className="counter-one__content wow animated fadeInRight" data-wow-delay="0.1s">
                                <h2><CounterUp end={213} /> </h2>
                                <p>Award Winners</p>
                            </div>
                        </div>
                    </div>
                    {/* End Counter One Single*/}

                    {/* Start Counter One Single*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="counter-one__single">
                            <div className="border-box wow animated fadeInLeft" data-wow-delay="0.1s"></div>
                            <div className="counter-one__content wow animated fadeInRight" data-wow-delay="0.1s">
                                <h2><CounterUp end={1} /> <span className="k">k</span> </h2>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                    {/* End Counter One Single*/}

                    {/* Start Counter One Single*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="counter-one__single">
                            <div className="border-box wow animated fadeInLeft" data-wow-delay="0.1s"></div>
                            <div className="counter-one__content wow animated fadeInRight" data-wow-delay="0.1s">
                                <h2><CounterUp end={12} /> <span className="k">k</span> </h2>
                                <p>Cup of Tea</p>
                            </div>
                        </div>
                    </div>
                    {/* End Counter One Single*/}
                </div>
            </div>
        </section>
        {/* End Counter One */}
    
            

        </>
    )
}
