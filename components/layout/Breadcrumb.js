import Link from "next/link"
export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
         
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/page-header-bg.jpg)' }} >
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">{breadcrumbTitle}</h2>
                    <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <li><Link href="/">Home</Link></li>
                        <li><span>-</span></li>
                        <li>{breadcrumbTitle}</li>
                    </ul>
                </div>
            </div>
        </section>
      

        </>
    )
}
