'use client'
import Link from "next/link"
export default function Features() {
    return (
        <>
       {/*Feature One Start*/}
        <section className="feature-one">
            <div className="feature-one__wrap">
                <div className="feature-one__title-box">
                    <h2 className="feature-one__title"><span className="icon-right-arrow-1 icon-one"></span>Marketing</h2>
                </div>
                <div className="feature-one__title-box">
                    <h2 className="feature-one__title"><span className="icon-right-arrow-1 icon-two"></span>Marketing</h2>
                </div>

                <div className="feature-one__title-box">
                    <h2 className="feature-one__title"><span className="icon-right-arrow-1 icon-one"></span>Marketing</h2>
                </div>
            </div>
        </section>
        {/*Feature One End*/}
       
        </>
    )
}
