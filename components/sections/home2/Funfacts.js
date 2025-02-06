'use client'
import CounterUp from "@/components/elements/CounterUp"
export default function Funfacts() {
    return (
        <>

        {/* Start Counter Two */}
        <section className="counter-two">
            <div className="auto-container">
                <div className="counter-two__inner">
                    <div className="counter-two__inner-box">
                        <div className="row">
                            {/* Start Counter Two Single*/}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow slideInUp animated" data-wow-delay="0.1s"
                                data-wow-duration="1500ms">
                                <div className="counter-two__single">
                                    <div className="counter-two__single-top">
                                        <div className="count-box">
                                            1.
                                        </div>
                                        <div className="counter-box">
                                            <h2><CounterUp end={4} /> <span className="k">k</span>
                                                <span className="plus icon-plus-1"></span>
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="counter-two__single-bottom">
                                        <p>Satisfied clients in our <br/>
                                            company</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Counter Two Single*/}

                            {/* Start Counter Two Single*/}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow slideInDown animated" data-wow-delay="0.1s"
                                data-wow-duration="1500ms">
                                <div className="counter-two__single">
                                    <div className="counter-two__single-top">
                                        <div className="count-box">
                                            2.
                                        </div>
                                        <div className="counter-box">
                                            <h2><CounterUp end={301} />
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="counter-two__single-bottom">
                                        <p>Working hours were the <br/>
                                            spent</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Counter Two Single*/}

                            {/* Start Counter Two Single*/}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow slideInUp animated" data-wow-delay="0.1s"
                                data-wow-duration="1500ms">
                                <div className="counter-two__single">
                                    <div className="counter-two__single-top">
                                        <div className="count-box">
                                            3.
                                        </div>
                                        <div className="counter-box">
                                            <h2><CounterUp end={2} /> <span className="k">k</span>
                                                <span className="plus icon-plus-1"></span>
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="counter-two__single-bottom">
                                        <p>Successful our projects <br/>
                                            completed</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Counter Two Single*/}

                            {/* Start Counter Two Single*/}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow slideInDown animated" data-wow-delay="0.1s"
                                data-wow-duration="1500ms">
                                <div className="counter-two__single">
                                    <div className="counter-two__single-top">
                                        <div className="count-box">
                                            4.
                                        </div>
                                        <div className="counter-box">
                                            <h2><CounterUp end={813} />
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="counter-two__single-bottom">
                                        <p>Our latest expert team <br/>
                                            members</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Counter Two Single*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Counter Two */}
            

        </>
    )
}
