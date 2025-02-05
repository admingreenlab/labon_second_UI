'use client'
import Link from "next/link"
export default function Brands() {
    return (
        <>
        {/* Start Brand One */}
        <section className="brand-one">
            <div className="auto-container">
                <div className="brand-one__inner">
                    <ul>
                        <li><Link href="#"><img src="assets/images/brand/brand-1-1.png" alt="#"/></Link></li>
                        <li><Link href="#"><img src="assets/images/brand/brand-1-2.png" alt="#"/></Link></li>
                        <li><Link href="#"><img src="assets/images/brand/brand-1-3.png" alt="#"/></Link></li>
                        <li><Link href="#"><img src="assets/images/brand/brand-1-4.png" alt="#"/></Link></li>
                        <li><Link href="#"><img src="assets/images/brand/brand-1-5.png" alt="#"/></Link></li>
                    </ul>
                </div>
            </div>
        </section>
        {/* End Brand One */}
        </>
    )
}
