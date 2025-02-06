'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={2}>
                {/* <section className="blog-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="blog-list__content">
                                    <div className="blog-list__single">
                                        <div className="blog-list__single-img">
                                            <img src="assets/images/blog/blog-list-img1.jpg" alt=""/>
                                            <div className="date-box">10<br/>oct</div>
                                        </div>

                                        <div className="blog-list__single-content">
                                            <ul className="meta-info">
                                                <li><span className="icon-profile-user"></span><Link href="#">Admin</Link></li>
                                                <li><span className="icon-comment"></span><Link href="#">2 Comments</Link>
                                                </li>
                                            </ul>
                                            <h2><Link href="#">Bring the tables win survival strategies</Link></h2>
                                            <p>It is a long established fact that a reader will be distracted by the readable
                                                content of a page when looking at its layout. The point of using Lorem Ipsum is
                                                that it has a more-or-less normal distribution of letters, as opposed to using
                                                'Content here, content here', making it look like readable English.</p>
                                            <div className="btn-box">
                                                <Link href="#">Read More <span className="icon-right-arrow-1"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-list__single">
                                        <div className="blog-list__single-img">
                                            <img src="assets/images/blog/blog-list-img2.jpg" alt=""/>
                                            <div className="date-box">10<br/>oct</div>
                                        </div>

                                        <div className="blog-list__single-content">
                                            <ul className="meta-info">
                                                <li><span className="icon-profile-user"></span><Link href="#">Admin</Link></li>
                                                <li><span className="icon-comment"></span><Link href="#">2 Comments</Link>
                                                </li>
                                            </ul>
                                            <h2><Link href="#">Basic Rule Of Running Web Business</Link></h2>
                                            <p>It is a long established fact that a reader will be distracted by the readable
                                                content of a page when looking at its layout. The point of using Lorem Ipsum is
                                                that it has a more-or-less normal distribution of letters, as opposed to using
                                                'Content here, content here', making it look like readable English.</p>
                                            <div className="btn-box">
                                                <Link href="#">Read More <span className="icon-right-arrow-1"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-list__single">
                                        <div className="blog-list__single-img">
                                            <img src="assets/images/blog/blog-list-img3.jpg" alt=""/>
                                            <div className="date-box">10<br/>oct</div>
                                        </div>

                                        <div className="blog-list__single-content">
                                            <ul className="meta-info">
                                                <li><span className="icon-profile-user"></span><Link href="#">Admin</Link></li>
                                                <li><span className="icon-comment"></span><Link href="#">2 Comments</Link>
                                                </li>
                                            </ul>
                                            <h2><Link href="#">Leverage Frameworks To Provide A Robust</Link></h2>
                                            <p>It is a long established fact that a reader will be distracted by the readable
                                                content of a page when looking at its layout. The point of using Lorem Ipsum is
                                                that it has a more-or-less normal distribution of letters, as opposed to using
                                                'Content here, content here', making it look like readable English.</p>
                                            <div className="btn-box">
                                                <Link href="#">Read More <span className="icon-right-arrow-1"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="styled-pagination clearfix">
                                        <li><Link href="#">1</Link></li>
                                        <li><Link href="#">2</Link></li>
                                        <li><Link href="#">3</Link></li>
                                        <li className="arrow next active"><Link href="#"><span className="icon-right-arrow-1"></span></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="sidebar">
                                    <div className="sidebar__single sidebar__search">
                                        <form action="#" className="sidebar__search-form">
                                            <input type="search" placeholder="Search"/>
                                            <button type="submit"><i className="icon-search-interface-symbol"></i></button>
                                        </form>
                                    </div>
                                    <div className="sidebar__single sidebar__post">
                                        <div className="title-box">
                                            <h3>Latest posts</h3>
                                        </div>
                                        <ul className="sidebar__post-list">
                                            <li className="active">
                                                <div className="img-box">
                                                    <img src="assets/images/blog/blog-details-img4.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <p><span className="icon-comment"></span> 02</p>
                                                    <h4><Link href="#">A social media marketing <br/>
                                                            checklist</Link></h4>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/images/blog/blog-details-img5.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <p><span className="icon-comment"></span> 02</p>
                                                    <h4><Link href="#">A social media marketing <br/>
                                                            checklist</Link></h4>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/images/blog/blog-details-img6.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <p><span className="icon-comment"></span> 02</p>
                                                    <h4><Link href="#">A social media marketing <br/>
                                                            checklist</Link></h4>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar__single sidebar__categories">
                                        <div className="title-box">
                                            <h3>Categories</h3>
                                        </div>
                                        <ul className="sidebar__categories-list">
                                            <li><Link className="active" href="#">Creative Design <span
                                                        className="icon-arrow-right"></span></Link></li>
                                            <li><Link href="#">Digital Marketing <span className="icon-arrow-right"></span></Link></li>
                                            <li><Link href="#">Graphic Design <span className="icon-arrow-right"></span></Link></li>
                                            <li><Link href="#">App Development <span className="icon-arrow-right"></span></Link></li>
                                            <li><Link href="#">Content Writting <span className="icon-arrow-right"></span></Link></li>
                                            <li><Link href="#">Web Development <span className="icon-arrow-right"></span></Link></li>
                                        </ul>
                                    </div>
                                    <div className="sidebar__single sidebar__tag">
                                        <div className="title-box">
                                            <h3>Tags</h3>
                                        </div>

                                        <ul className="sidebar__tag-list clearfix">
                                            <li><Link href="#">App Parallax</Link></li>
                                            <li><Link href="#">Creative</Link></li>
                                            <li><Link href="#">Experience</Link></li>
                                            <li><Link href="#">Innovative</Link></li>
                                            <li><Link href="#">Business</Link></li>
                                            <li><Link href="#">Design</Link></li>
                                            <li><Link href="#">Innovative</Link></li>
                                        </ul>

                                    </div>
                                    <div className="sidebar__single sidebar__comments">
                                        <div className="title-box">
                                            <h3>Recent comments</h3>
                                        </div>

                                        <ul className="sidebar__comments-list clearfix">
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-comment"></span>
                                                </div>

                                                <div className="title">
                                                    <Link href="#">A wordpress commenter on <br/>
                                                        launch new mobile app</Link>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-comment"></span>
                                                </div>

                                                <div className="title">
                                                    <Link href="#">John Doe on template: <br/>
                                                        comments</Link>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-comment"></span>
                                                </div>

                                                <div className="title">
                                                    <Link href="#">A wordpress commenter on <br/>
                                                        launch new mobile app</Link>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-comment"></span>
                                                </div>

                                                <div className="title">
                                                    <Link href="#">John Doe on template: <br/>
                                                        comments</Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <div className="container" style={{ maxWidth: "100%" }}>
                    <div className="row align-items-center">
                        <div className="col-md-6 co-12" style={{ background: "#d1cde6" }}>
                            <div className="left-img">
                                <a href="/">
                                    <img src="assets/images/services/service-details-img2.jpg" alt="Blog" style={{ width: "100%", maxWidth: "250px" }} />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 co-12" >
                            <div className="right-contant">
                                <img src="assets/images/services/svg.svg" />
                                <div className="contact-one__form m-0">
                                    <form id="contact-form" className="default-form2 contact-form-validated" >
                                        <div className="input-box">
                                            <input type="email" name="email" placeholder="EMAIL *" required="" />
                                        </div>
                                        <div className="input-box">
                                            <input type="password" placeholder="Enter your Password *" name="password" />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="form-group">
                                                <input type="checkbox" id="html" />
                                                <label for="html">Remember Me</label>
                                            </div>
                                            <a href="/register" class="forget-pwd" data-toggle="modal" style={{ color: "#c29958" }}>Forget Password?</a>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="d-flex align-items-center justify-content-CENTER">
                                                <div className="contact-one__form-btn">
                                                    <button className="thm-btn" type="btn" data-loading-text="Please wait...">
                                                        <span className="txt">- Login -</span>
                                                        <span className="bdrl"></span>
                                                        <span className="bdrr"></span>
                                                    </button>
                                                </div>
                                                <div className="contact-one__form-btn">
                                                    <a href='/register' className="thm-btn" type="btn" data-loading-text="Please wait...">
                                                        <span className="txt">Register</span>
                                                        <span className="bdrl"></span>
                                                        <span className="bdrr"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </Layout >
        </>
    )
}