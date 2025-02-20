'use client'
import Layout from "../../components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Diamond Shapes">
                <section className="blog-one blog-one--blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <h3 className="mb-3 text-center">Diamond Shapes</h3>
                                <p>Diamonds have been around for billions of years, but only a few hundred years ago did man discover that an uncut diamond can be transformed into a faceted gem, and by doing so more light and beauty could be unleashed. This discovery lead to more diamond and shapes and cuts.</p>
                                <p>Diamond shapes refer to the form or general outline of a diamond. It is not uncommon to confuse the ‘shape’ and ‘cut’ of a diamond, as they are considered to be synonyms, which is understandable because diamond “names” include the word cut, such as princess cut or emerald cut. However, there is a significant difference between the shape and cut of a diamond. Shape describes a diamond's form, symmetry and proportions (e.g. round, square, triangle) whereas cut refers to the specifications (e.g. ideal, excellent, very good) of a diamond.

                                    The shape of a diamond is a customer’s first priority when selecting a diamond for an engagement ring, wedding band or piece of jewelry, whether that is a pendant, bracelet or a pair of earrings.</p>
                            </div>
                        </div>
                        <div className="row">
                            {/* Start Blog One Content Right*/}
                            <div className="col-xl-12">
                                <div className="blog-one__content-right">
                                    <ul className="blog-one__content-right-list">
                                        <li className="wow animated fadeInRight" data-wow-delay="0.1s">
                                            <div className="left-content">
                                                <div className="date-box">
                                                    <img src="assets/images/services/1.gif" alt="" style={{ maxWidth: "150px", width: "100%", height: 'auto' }} />
                                                </div>
                                                <div className="text-box">
                                                    <h2><Link href="#">Round Brilliant</Link></h2>
                                                    <p>The round cut is, by far, the most preferred diamond shape, the cut is also the most optically brilliant because of its 360°-degree symmetrical shape. A round brilliant is a great choice if you want the most sparkle and the most enduring classic shape. The round silhouette works with almost every mounting, from classic solitaires to the most avant-garde designs.</p>
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="#" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                                    <span className="txt">360°</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                    <div className="icon-box">
                                                        <Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="wow animated fadeInRight" data-wow-delay="0.1s">
                                            <div className="left-content">
                                                <div className="date-box">
                                                    <img src="assets/images/services/10.gif" alt="" style={{ maxWidth: "150px", width: "100%", height: 'auto' }} />
                                                </div>
                                                <div className="text-box">
                                                    <h2><Link href="#">Princess</Link></h2>
                                                    <p>The Princess Cut combines the liveliness of a Round diamond and the contemporary shape of an Emerald or Square cut to create one of the most brilliant fancy shapes of all. The princess cut is a modern classic with clean, square lines and beautiful sparkle. The shape of the Princess is distinguishable by its sharp right-angle corners and it is second most popular shape, after the round brilliant.</p>
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="#" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                                    <span className="txt">360°</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                    <div className="icon-box">
                                                        <Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="wow animated fadeInRight" data-wow-delay="0.1s">
                                            <div className="left-content">
                                                <div className="date-box">
                                                    <img src="assets/images/services/5.gif" alt="" style={{ maxWidth: "150px", width: "100%", height: 'auto' }} />
                                                </div>
                                                <div className="text-box">
                                                    <h2><Link href="#">Cushion</Link></h2>
                                                    <p>The Cushion Cut is an elegantly shaped diamond that has recently gained popularity because of the heightened demand for vintage-styled jewelry. Combining the cut characteristics of both the round and the oval, the Cushion Cut's rounded corners and larger facets increase this special diamond's brilliance.</p>
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="#" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                                    <span className="txt">360°</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                    <div className="icon-box">
                                                        <Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="wow animated fadeInRight" data-wow-delay="0.1s">
                                            <div className="left-content">
                                                <div className="date-box">
                                                    <img src="assets/images/services/4.gif" alt="" style={{ maxWidth: "150px", width: "100%", height: 'auto' }} />
                                                </div>
                                                <div className="text-box">
                                                    <h2><Link href="#">Emerald</Link></h2>
                                                    <p>The emerald-cut is defined by its special facet arrangement, which is cut with parallel facets to create a unique optical appearance. The top (the table) is large and open, and the special “step-like” cut highlights the clarity of a diamond. The emerald shape is traditionally rectangular, but the length-to-width ratio can vary.</p>
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="#" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                                    <span className="txt">360°</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                    <div className="icon-box">
                                                        <Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="wow animated fadeInRight" data-wow-delay="0.1s">
                                            <div className="left-content">
                                                <div className="date-box">
                                                    <img src="assets/images/services/3.gif" alt="" style={{ maxWidth: "150px", width: "100%", height: 'auto' }} />
                                                </div>
                                                <div className="text-box">
                                                    <h2><Link href="#">Radiant</Link></h2>
                                                    <p>A radiant cut combines the outline of an emerald with the brilliance of a round. The faceting pattern is quite similar to a round brilliant, though the outline is either square or rectangular, with the corners cut. Similar to a princess cut, radiants carry more weight in the depth of the diamond and have higher color concentration than other shapes.</p>
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="#" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                                    <span className="txt">360°</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                    <div className="icon-box">
                                                        <Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="wow animated fadeInRight" data-wow-delay="0.1s">
                                            <div className="left-content">
                                                <div className="date-box">
                                                    <img src="assets/images/services/12.gif" alt="" style={{ maxWidth: "150px", width: "100%", height: 'auto' }} />
                                                </div>
                                                <div className="text-box">
                                                    <h2><Link href="#">Oval</Link></h2>
                                                    <p>The oval-cut diamonds are slightly identical to the brilliance of the round ones, but their elongated shape adds a lengthening look on the finger. The face-up ratio of the Oval-cut diamonds will determine the outline when looked from the top. A traditional range of oval-shaped diamonds usually varies from the ratio of 1.33 to 1.66. They’re a popular choice among the East-West settings.</p>
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="#" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                                    <span className="txt">360°</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                    <div className="icon-box">
                                                        <Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="wow animated fadeInRight" data-wow-delay="0.1s">
                                            <div className="left-content">
                                                <div className="date-box">
                                                    <img src="assets/images/services/11.gif" alt="" style={{ maxWidth: "150px", width: "100%", height: 'auto' }} />
                                                </div>
                                                <div className="text-box">
                                                    <h2><Link href="#">Asscher</Link></h2>
                                                    <p>Introduced in 1902 by renowned diamond cutter Joseph Asscher, this diamond shape utilizes many of the same cutting techniques as the emerald cut. What sets asscher diamonds apart are their uniquely angled and cropped corners creating a timeless look. The most famous Asscher cut is the Cullinan diamond. An Asscher cut diamond is technically known as a ‘square emerald cut’. The ideal length to width ratio is between 1.00 and 1.05:1.</p>
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="#" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                                    <span className="txt">360°</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                    <div className="icon-box">
                                                        <Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="wow animated fadeInRight" data-wow-delay="0.1s">
                                            <div className="left-content">
                                                <div className="date-box">
                                                    <img src="assets/images/services/7.gif" alt="" style={{ maxWidth: "150px", width: "100%", height: 'auto' }} />
                                                </div>
                                                <div className="text-box">
                                                    <h2><Link href="#">Pear</Link></h2>
                                                    <p>The Pear shape is a unique hybrid cut, shaped like a tear drop and combining the best of the marquise and round brilliant cut. Well proportioned, it gives a depth of scintillation to the point of the diamond. Pear shapes are extremely popular in rings, earrings and pendants. Pear shapes are typically polished with 58 facets, and the optimal length-to-width ratio is between 1.50 and 1.75:1.</p>
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="#" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                                    <span className="txt">360°</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                    <div className="icon-box">
                                                        <Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="wow animated fadeInRight" data-wow-delay="0.1s">
                                            <div className="left-content">
                                                <div className="date-box">
                                                    <img src="assets/images/services/2.gif" alt="" style={{ maxWidth: "150px", width: "100%", height: 'auto' }} />
                                                </div>
                                                <div className="text-box">
                                                    <h2><Link href="#">Marquise</Link></h2>
                                                    <p>The Marquise has a slender shape characterised by two sharp points on either end. Like the Oval, the Marquise accentuates long, slender fingers and has a large surface area. The standard number of facets on a Marquise cut is 58.

                                                        The Marquise Cut was inspired by the fetching smile of the Marquise de Pompadour and commissioned by King Louis XIV, who wanted a diamond to match the smile. The optimal ratio of length-to-width is 2:1, although a range between 1.75 and 2.25:1 is also acceptable.</p>
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="#" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                                    <span className="txt">360°</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                    <div className="icon-box">
                                                        <Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="wow animated fadeInRight" data-wow-delay="0.1s">
                                            <div className="left-content">
                                                <div className="date-box">
                                                    <img src="assets/images/services/8.gif" alt="" style={{ maxWidth: "150px", width: "100%", height: 'auto' }} />
                                                </div>
                                                <div className="text-box">
                                                    <h2><Link href="#">Heart Shape</Link></h2>
                                                    <p>Living up to its name, the heart cut diamond has become synonymous with love and affection, making it an excellent choice for an anniversary or engagement ring. One of the most demanding diamond cuts to create, a heart shaped stone requires great skill and dexterity from the diamond cutter.

                                                    </p>
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="#" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                                    <span className="txt">360°</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                    <div className="icon-box">
                                                        <Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="wow animated fadeInRight" data-wow-delay="0.1s">
                                            <div className="left-content">
                                                <div className="date-box">
                                                    <img src="assets/images/services/9.gif" alt="" style={{ maxWidth: "150px", width: "100%", height: 'auto' }} />
                                                </div>
                                                <div className="text-box">
                                                    <h2><Link href="#">Triangular Brilliants
                                                    </Link></h2>
                                                    <p>Triangular Brilliants, also known as Trillions and Trilliants, are mixed cuts with three equally straight or slightly curved sides. They are typically shallow and are often cut from flattened, triangular rough called macles. Triangular Brilliants are often seen as side stones for other fancy shapes, but when well proportioned, one can also be a stunning centrepiece in an engagement ring.</p>
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="#" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                                    <span className="txt">360°</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                    <div className="icon-box">
                                                        <Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Blog One Content Right*/}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}