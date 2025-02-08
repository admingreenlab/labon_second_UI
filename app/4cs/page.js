'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
// import Table from 'react-bootstrap/Table';
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
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="4Cs of Diamonds">
                {/* Start Service Details */}
                <section className="service-details">
                    <div className="container">
                        <div className="row">
                            {/* Start Service Details Content*/}
                            <div className="col-xl-12">
                                <div className="service-details__content">
                                    <div className="service-details__content-img1">
                                        <div className="inner">
                                            <img src="assets/images/services/service-details-img4.jpg" alt="" />
                                        </div>
                                        <div className="icon-box">
                                            <span className="icon-creative-idea"></span>
                                        </div>
                                    </div>

                                    <div className="service-details__content-text1">
                                        <h2>4Cs of Diamonds</h2>
                                        <p>Diamond is one of the world’s most valued natural resources, not to mention one of the most highly desired gemstones. Diamond is naturally made with an enormous variety of characteristics, making each individual diamond unique. The combinations of these characteristics determine the quality and value of a diamond.</p>

                                        <p>The Four C’s stand for Cut, Color, Clarity, and Carat Weight . The diamond grading system has transformed the diamond trade and today is used by nearly every professional in the industry and diamond enthusiasts across the globe. Because individual diamond varies so immensely in quality and price, it is vital for consumers to be familiar with the Four C’s as well. We’ve outlined the basics of this grading system below, to help give consumers the resources they need to make educated purchases.</p>
                                        <p>The 4Cs of a diamond are the most important factors that play a critical role in determining the price of a diamond. These include diamond carat weight, diamond color, diamond clarity, and diamond cut. While the first three a natural elements, the fourth one depends on the quality of the craftsmanship, so cut is a human factor.</p>
                                        <p>It is very important to note that you would have to learn more about each C in order to understand how important that C is while considering a diamond.</p>
                                    </div>

                                    {/* <div className="service-details__content-text2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="img-box">
                                                    <img src="assets/images/services/service-details-img2.jpg" alt="" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="content-box">
                                                    <h2>Why choose?</h2>
                                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-checked"></span>
                                                            </div>
                                                            <p>Refresing to get such a touch</p>
                                                        </li>

                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-checked"></span>
                                                            </div>
                                                            <p>Duis aute irure dolor in in voluptate</p>
                                                        </li>

                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-checked"></span>
                                                            </div>
                                                            <p>Velit esse cillum eu fugiat pariatur</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div> */}

                                    <div className="service-details__faq">
                                        <div className="service-details__faq-inner">
                                            <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                    <div className="accrodion-title">
                                                        <h4>Cut</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <h3 className="text-center mb-3">Cut of Diamonds</h3>
                                                            <p>The diamond cut is the most important element to consider when buying a diamond. The cut is the biggest factor in creating sparkle and fire, and without a high cut grade even a diamond of high quality can appear dull and lifeless. A diamond cut poorly and too deep can face-up smaller than it actually is. A well-cut diamond will direct more light through the crown. A diamond with a depth that's too shallow or too deep will allow light to escape through the sides or the bottom of the stone.</p>
                                                            <p>A diamond’s clarity, colour and carat weight cannot be altered, but it is a high quality cut of diamond that can release that extra special sparkle.</p>
                                                            <div className="row my-5">
                                                                <div className="col-lg-4 col-sm-6 col-12 text-center">
                                                                    <h3>Ideal Cut </h3>
                                                                    <img src="assets/images/services/D-1.GIF" alt="" />
                                                                    <p>A well cut diamond will reflect ligth back through the crown of the diamond and into the observer's view.</p>
                                                                </div>
                                                                <div className="col-lg-4 col-sm-6 col-12 text-center">
                                                                    <h3>Shallow Cut </h3>
                                                                    <img src="assets/images/services/D-2.GIF" alt="" />
                                                                    <p>A well cut diamond will reflect ligth back through the crown of the diamond and into the observer's view.</p>
                                                                </div>
                                                                <div className="col-lg-4 col-sm-6 col-12 text-center">
                                                                    <h3>Deep Cut</h3>
                                                                    <img src="assets/images/services/D-3.GIF" alt="" />
                                                                    <p>A well cut diamond will reflect ligth back through the crown of the diamond and into the observer's view.</p>
                                                                </div>
                                                            </div>
                                                            <h3 className="text-center mb-3">Grading the Cut of a Diamonds</h3>
                                                            <p>A diamond’s cut grade is the only factor that is influenced by a human hand. A master cutter will apprentice for at least 10 years before touching a 1 carat diamond. These highly-skilled craftsmen bring the ultimate beauty of the diamond to life by adhering to specific parameters in order to maximize sparkle. Several individual factors are evaluated to determine the cut grade of a diamond including its proportions, depth, symmetry, polish and finish.</p>
                                                            <p>A diamond’s clarity, colour and carat weight cannot be altered, but it is a high quality cut of diamond that can release that extra special sparkle.</p>
                                                            <p>The GIA uses the following scale to grade round brilliant diamonds:</p>
                                                            <h4 className="mt-3 mb-1" style={{ color: "rgb(194 153 88)" }} >EXCELLENT</h4>
                                                            <p>An excellet cut diamond has a maximum amount of scintillation, brilliance and fire. Light enters the diamond and refracts back out with very little light lost. This exceptional grade represents roughly the top three-percent of diamonds.</p>
                                                            <h4 className="mt-3 mb-1" style={{ color: "rgb(194 153 88)" }} >VERY GOOD</h4>
                                                            <p>A diamond with a very good cut grade will reflect most of the light and will appear somewhat similar to an ideal cut diamond. This diamond will have superior sparkle, brilliance and fire.</p>
                                                            <h4 className="mt-3 mb-1" style={{ color: "rgb(194 153 88)" }} >GOOD</h4>
                                                            <p>Reflecting most of the light entering the diamond, this diamond cut has above average beauty. Diamonds with this grade won’t have as much brilliance and fire as higher cuts.</p>
                                                            <h4 className="mt-3 mb-1" style={{ color: "rgb(194 153 88)" }} >FAIR</h4>
                                                            <p>FAIR</p>
                                                            <h4 className="mt-3 mb-1" style={{ color: "rgb(194 153 88)" }} >POOR</h4>
                                                            <p>Diamonds with a poor cut may appear dull because the majority of the light is lost through the bottom or sides of the diamond. With a noticeable decrease in sparkle, even an untrained eye can see a sharp difference between this and higher cuts.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                    <div className="accrodion-title">
                                                        <h4>Clarity</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <div className="right-said mt-2 mb-3">
                                                                <h3 className="text-center position-relative">
                                                                    Clarity Of Diamond
                                                                </h3>
                                                                <p>
                                                                    This refers to the inclusions (internal) or blemishes
                                                                    (external) held by the stone. A diamond’s clarity is
                                                                    determined under a 10x loupe magnification with the highest
                                                                    grading called Flawless which has no internal or external
                                                                    flaws. Flawless and Internally Flawless diamonds are
                                                                    incredibly rare. We then enter the realms of VVS, VS, SI and I
                                                                    which all include variations of the word imperfect such as
                                                                    very very slightly imperfect, very slightly imperfect,
                                                                    slightly imperfect and imperfect.
                                                                </p>
                                                                <p>
                                                                    It is important to remember that officially these clarity
                                                                    terms only become apparent under 10x loupe magnification and
                                                                    shouldn’t affect your experience looking at your diamond with
                                                                    the naked eye.
                                                                </p>
                                                            </div>
                                                            <div className="clarity-lab">
                                                                <div className="right-said mt-4 mb-3">
                                                                    <h6 className="position-relative">
                                                                        The GIA uses the following scale to grade round brilliant
                                                                        diamonds:
                                                                    </h6>
                                                                </div>
                                                                <div className="table-heading">
                                                                    <h4 className="mb-2">Clarity of Diamonds</h4>
                                                                </div>
                                                                <div className='main-table'>
                                                                    <table className="clarity-lab-inner" style={{ width: '100%', borderCollapse: 'collapse' }}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td style={{ padding: '10px', textAlign: 'center' }}>
                                                                                    <img src="assets/images/services/claraty-1.svg" alt="" />
                                                                                    {/* <img src={require('./img/claraty-1.svg').default} alt="" /> */}
                                                                                </td>
                                                                                <td style={{ padding: '10px', textAlign: 'center' }}>
                                                                                    <img src="assets/images/services/claraty-2.svg" alt="" />
                                                                                    {/* <img src={require('./img/claraty-2.svg').default} alt="" /> */}
                                                                                </td>
                                                                                <td style={{ padding: '10px', textAlign: 'center' }}>
                                                                                    <img src="assets/images/services/claraty-3.svg" alt="" />
                                                                                    {/* <img src={require('./img/claraty-3.svg').default} alt="" /> */}
                                                                                </td>
                                                                                <td style={{ padding: '10px', textAlign: 'center' }}>
                                                                                    <img src="assets/images/services/claraty-4.svg" alt="" />
                                                                                    {/* <img src={require('./img/claraty-4.svg').default} alt="" /> */}
                                                                                </td>
                                                                                <td style={{ padding: '10px', textAlign: 'center' }}>
                                                                                    <img src="assets/images/services/claraty-5.svg" alt="" />
                                                                                    {/* <img src={require('./img/claraty-5.svg').default} alt="" /> */}
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="p-0 border-0" style={{ border: '1px solid white' }}>
                                                                                    <table style={{ width: '100%' }}>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td>Flawless</td>
                                                                                                <td>Internally Flawless</td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                                <td className="p-0 border-0" style={{ border: '1px solid white' }}>
                                                                                    <table style={{ width: '100%' }}>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td>VVS1</td>
                                                                                                <td>VVS2</td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                                <td className="p-0 border-0" style={{ border: '1px solid white' }}>
                                                                                    <table style={{ width: '100%' }}>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td>VS1</td>
                                                                                                <td>VS2</td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                                <td className="p-0 border-0" style={{ border: '1px solid white' }}>
                                                                                    <table style={{ width: '100%' }}>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td>SI1</td>
                                                                                                <td>SI2</td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                                <td className="p-0 border-0" style={{ border: '1px solid white' }}>
                                                                                    <table style={{ width: '100%' }}>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td>I1</td>
                                                                                                <td>I2</td>
                                                                                                <td>I3</td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td />
                                                                                <td>Very Very Slightly Included</td>
                                                                                <td>Very Slightly Included</td>
                                                                                <td>Slightly Included</td>
                                                                                <td>Included</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>


                                                                </div>
                                                                <div className="right-said mt-4 mb-3">
                                                                    <h5 className="position-relative">
                                                                        The Diamond Clarity Scale is segmented into six categories:
                                                                    </h5>
                                                                </div>
                                                                <div className="container">
                                                                    <div className="row align-items-center">
                                                                        <div className="col-md-3 col-12">
                                                                            <div className="left-said">
                                                                                <img src="assets/images/services/icone-time-15.svg" alt="" />
                                                                                {/* <img src={require('./img/icone-time-15.svg').default} alt="img" /> */}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-9 col-12">
                                                                            <div className="right-said">
                                                                                <h5>Flawless (FL)</h5>
                                                                                <p>
                                                                                    A diamond that is graded as Flawless contains no
                                                                                    inclusions or blemishes apparent to the grader under
                                                                                    magnification.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 col-12">
                                                                            <div className="left-said">
                                                                                <img src="assets/images/services/icone-time-16.svg" alt="" />
                                                                                {/* <img src={require('./img/icone-time-16.svg').default} alt="img" /> */}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-9 col-12">
                                                                            <div className="right-said">
                                                                                <h5>Internally Flawless (IF)</h5>
                                                                                <p>
                                                                                    These diamonds do not contain any inclusions but may
                                                                                    contain a very small blemish under magnification.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 col-12">
                                                                            <div className="left-said">
                                                                                <img src="assets/images/services/icone-time-17.svg" alt="" />
                                                                                {/* <img src={require('./img/icone-time-17.svg').default} alt="img" /> */}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-9 col-12">
                                                                            <div className="right-said">
                                                                                <h5>Very, Very Slightly Included (VVS1, VVS2)</h5>
                                                                                <p>
                                                                                    These diamonds may contain inclusions so minute that
                                                                                    they are barely visible, even to the trained grader
                                                                                    under magnification.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 col-12">
                                                                            <div className="left-said">
                                                                                <img src="assets/images/services/icone-time-18.svg" alt="" />
                                                                                {/* <img src={require('./img/icone-time-18.svg').default} alt="img" /> */}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-9 col-12">
                                                                            <div className="right-said">
                                                                                <h5>Very Slightly Included (VS1, VS2)</h5>
                                                                                <p>
                                                                                    These diamonds contain minor inclusions not visible to
                                                                                    the naked eye, but are apparent under magnification
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 col-12">
                                                                            <div className="left-said">
                                                                                <img src="assets/images/services/icone-time-19.svg" alt="" />
                                                                                {/* <img src={require('./img/icone-time-19.svg').default} alt="img" /> */}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-9 col-12">
                                                                            <div className="right-said">
                                                                                <h5>Slightly Included (SI1, SI2)</h5>
                                                                                <p>
                                                                                    These diamonds contain inclusions that are visible
                                                                                    under magnification, and can occasionally be visible
                                                                                    to the naked eye under close inspection.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 col-12">
                                                                            <div className="left-said">
                                                                                <img src="assets/images/services/icone-time-20.svg" alt="" />
                                                                                {/* <img src={require('./img/icone-time-20.svg').default} alt="img" /> */}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-9 col-12">
                                                                            <div className="right-said">
                                                                                <h5>Included (I1, I2, I3)</h5>
                                                                                <p>
                                                                                    These diamonds contain noticeable inclusions that are
                                                                                    almost always visible to the naked eye.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                    <div className="accrodion-title">
                                                        <h4>Color</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <div className="right-said mt-2 mb-3">
                                                                <h3 className="text-center position-relative mb-3">Color Of Diamond</h3>
                                                                <p>
                                                                    Diamonds are graded in colour from D to Z, the scale begins
                                                                    with D (colourless) and finishes at Z (light yellow or brown),
                                                                    a diamond of a light yellow or a brown colour. A colourless
                                                                    stone will allow the maximum amount of light to travel through
                                                                    increasing its brilliance and fire so therefore the whiter a
                                                                    diamond the higher its price.
                                                                </p>
                                                                <p>
                                                                    The Gemological Institute of America (GIA) grades diamond
                                                                    color on a scale of D to Z. D to Z diamonds are also known as
                                                                    white diamonds, even though most diamonds, including H color
                                                                    diamonds and G color diamonds, have varying amounts of color.
                                                                </p>
                                                                <p>
                                                                    It's very difficult to tell the difference from one color
                                                                    grade to another color grade. That's why it's important to
                                                                    compare diamonds side by side. Colorless is the most rare and
                                                                    therefore the most expensive. Yellow is the least rare and
                                                                    therefore the least expensive.
                                                                </p>
                                                            </div>
                                                            <div className="clarity-lab">
                                                                <div className="right-said mt-4 mb-3">
                                                                    <h4 className="position-relative">
                                                                        The GIA uses the following scale to grade round brilliant
                                                                        diamonds:
                                                                    </h4>
                                                                </div>
                                                                <div className="table-heading">
                                                                    <h3 className=" mb-3">Color Of Diamond</h3>
                                                                </div>
                                                                <table className="clarity-lab-inner clarity-lab-inner-1 W-100">
                                                                    <tbody><tr>
                                                                        <td />
                                                                        <td>
                                                                            <img src="assets/images/services/icone-time-21.svg" alt="" />
                                                                        </td>
                                                                        <td>
                                                                            <img src="assets/images/services/icone-time-22.svg" alt="" />
                                                                        </td>
                                                                        <td>
                                                                            <img src="assets/images/services/icone-time-23.svg" alt="" />
                                                                        </td>
                                                                        <td>
                                                                            <img src="assets/images/services/icone-time-24.svg" alt="" />
                                                                        </td>
                                                                        <td>
                                                                            <img src="assets/images/services/icone-time-24.svg" alt="" />
                                                                        </td>
                                                                    </tr>
                                                                        <tr>
                                                                            <td>Color</td>
                                                                            <td>DEF</td>
                                                                            <td>GHIJ</td>
                                                                            <td>KLM</td>
                                                                            <td>NOPQR</td>
                                                                            <td>STUVWXYZ</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Scale</td>
                                                                            <td>Colourless</td>
                                                                            <td>Near Colourless</td>
                                                                            <td>Faint Yellow</td>
                                                                            <td>Very Ligth Yellow</td>
                                                                            <td>Ligth Yellow</td>
                                                                        </tr>
                                                                    </tbody></table>
                                                                <div className="right-said mt-4 mb-3">
                                                                    <h4 className="position-relative">Fancy Colored Diamonds</h4>
                                                                    <p>
                                                                        Fancy colored diamonds are not graded on the same scale as
                                                                        colorless diamonds and are rarer, making them more valuable
                                                                        and expensive.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                                    <div className="accrodion-title">
                                                        <h4>Carat</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <div className="right-said mt-2 mb-3">
                                                                <h3 className="text-center position-relative">Carat Weight</h3>
                                                                <p>
                                                                    Diamond carat is often misunderstood and refers to a diamond's
                                                                    weight, not necessarily its size. When comparing diamond carat
                                                                    sizes, take a diamond's cut into consideration as well: a
                                                                    high-carat diamond with a poor cut grade may look smaller,
                                                                    often cut deeper, than a diamond with smaller carat weight and
                                                                    a better cut.
                                                                </p>
                                                            </div>
                                                            <div className="clarity-lab">
                                                                <div className="right-said mt-4 mb-3">
                                                                    <h4 className="position-relative">
                                                                        The GIA uses the following scale to grade round brilliant
                                                                        diamonds:
                                                                    </h4>
                                                                </div>
                                                                <div className="table-heading">
                                                                    <h5 className="mb-2">Diamonds' Size by Carat Weight</h5>
                                                                </div>
                                                                <table className="clarity-lab-inner clarity-lab-inner-1">
                                                                    <tbody><tr>
                                                                        <td>Carat Weight</td>
                                                                        <td>0.50</td>
                                                                        <td>0.75</td>
                                                                        <td>1.00</td>
                                                                    </tr>
                                                                        <tr>
                                                                            <td>Approx. size</td>
                                                                            <td>
                                                                                <img src="assets/images/services/icone-time-25.svg" alt="" style={{ padding: "10px" }} />
                                                                            </td>
                                                                            <td>
                                                                                <img src="assets/images/services/icone-time-25.svg" alt="" style={{ padding: "10px" }} />
                                                                            </td>
                                                                            <td>
                                                                                <img src="assets/images/services/icone-time-25.svg" alt="" style={{ padding: "10px" }} />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Diameter (mm)</td>
                                                                            <td>5.0</td>
                                                                            <td>6.0</td>
                                                                            <td>6.5</td>
                                                                        </tr>
                                                                    </tbody></table>
                                                                <div className="right-said mt-4 mb-3">
                                                                    <h4 className="position-relative">Fancy Colored Diamonds</h4>
                                                                    <p>
                                                                        Fancy colored diamonds are not graded on the same scale as
                                                                        colorless diamonds and are rarer, making them more valuable
                                                                        and expensive.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                                    <div className="accrodion-title">
                                                        <h4>Fifth C</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <div className="right-said mt-2 mb-3">
                                                                <h3 className="text-center position-relative">
                                                                    Fifth C of Diamonds
                                                                </h3>
                                                                <p>
                                                                    Technically speaking, there are no more C's of Diamonds other
                                                                    than Cut, Color, Clarity and Carat. However, there is another
                                                                    Criteria which we at Diabon, refer to as the Fifth C of
                                                                    Diamond Grading and it is the Certification of Diamonds and we
                                                                    would even go further and state the IGI certificate.
                                                                </p>
                                                                <p>
                                                                    Everybody can issue a certificate specifying the Four C's of a
                                                                    bespoken diamond. But the question is are they qualified and
                                                                    professional enough to do so? (and that assuming they have the
                                                                    integrity to do so). Over the years many reputable jewelry
                                                                    companies issued their own certificate of authenticity as for
                                                                    the diamond's quality and attributes. But those companies have
                                                                    the incentive to lie (or at least to round it up) towards
                                                                    their own sake. A minor "mistake" of grading a diamond as D
                                                                    instead of E means A LOT of money. Therefore, only trust the
                                                                    objective certificate of a gemological institute and the IGI's
                                                                    certificate is known to be strict non-compromising and
                                                                    accurate. Why settle for anything else?
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Service Details Content*/}

                            {/* Start Sidebar*/}

                            {/* End Sidebar*/}
                        </div>
                    </div>
                </section>
                {/* End Service Details */}

            </Layout>
        </>
    )
}