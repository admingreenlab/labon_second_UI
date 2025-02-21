import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <div class="same-secton my-3">
                <div className=" auto-container">
                    <div className="d-flex align-items-center gap-3 ">
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#c29958" class="bi bi-house" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                            </svg>
                        </Link>
                        {breadcrumbTitle}
                    </div>
                </div>
            </div>
            {/* <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/page-header-bg.jpg)' }} >
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <h2 className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">{breadcrumbTitle}</h2>
                        <ul className="thm-breadcrumb wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <li><Link href="/">Home</Link></li>
                            <li><span>-</span></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </section> */}


        </>
    )
}
