import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>


            <ul className="main-menu__list">
                <li>
                    <Link href="/">Home</Link>
                    {/* <ul>
                        <li>
                            <Link href="/">Home One</Link>
                        </li>
                        <li><Link href="index-2">Home Two</Link></li>
                    </ul> */}
                </li>



                <li className="dropdown">
                    <Link href='#'>Education </Link>
                    <ul>
                        <li><Link href="/evolution">Evolution</Link></li>
                        <li>
                            <Link href="4cs">4CS</Link>
                        </li>
                        <li>
                            <Link href="shapes">Shapes</Link>
                        </li>
                        <li>
                            <Link href="anatomy">Anatomy</Link>
                        </li>
                        {/* <li>
                            <Link href="farming-products">Farming Products</Link>
                        </li> */}
                    </ul>
                </li>
                {/* 
                <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul>
                        <li><Link href="portfolio">Portfolio</Link></li>
                        <li><Link href="portfolio-carousel">Portfolio Carousel</Link></li>
                        <li>
                            <Link href="portfolio-details">Portfolio Details</Link>
                        </li>
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="team-carousel">Team Carousel</Link></li>
                        <li><Link href="team-details">Team Details</Link></li>
                        <li><Link href="testimonial">Testimonial</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="faq">Faq</Link></li>
                        <li><Link href="404">404 Error</Link></li>
                    </ul>
                </li> */}

                {/* <li className="dropdown">
                    <Link href="#">Exhibition Stock </Link>
                    <ul>
                        <li><Link href="../AuctionInventoryStockReport">Download Exhibition Stock</Link></li>
                        <li><Link href="blog-carousel">Blog Carousel</Link></li>
                        <li><Link href="blog-list">Blog List</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                </li> */}
                <li>
                    <Link href="about">About Us</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
                <li>
                    <Link href="/jck-events">Appointment at JCK</Link>
                </li>
                <li>
                    <Link href="/login">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                    </Link>
                </li>
            </ul>
        </>
    )
}
