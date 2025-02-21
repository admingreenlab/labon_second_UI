'use client'
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination';
import Layout from "@/components/layout/Layout"
const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
    },
    orderHistory: {
        maxWidth: '1200px',
        // border: '1px solid #ccc',
        marginBottom: '40px',
    },
    header: {
        backgroundColor: '#c29958',
        color: 'white',
        padding: '10px',
        // fontWeight: 'bold',
        textAlign: 'center',
        borderBottom: '1px solid #494949c9'
    },
    content: {
        padding: '20px'
    },
    row: {
        display: 'flex',
        // marginBottom: '15px',
        borderBottom: '1px solid #494949c9'
    },
    label: {
        backgroundColor: '#c29958',
        color: 'white',
        width: '200px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    value: {
        flex: 1,
        padding: '10px',
    },
    input: {
        width: '100%',
        padding: '5px',
        border: '1px solid #ddd'
    },
    statusOptions: {
        display: 'flex',
        gap: '20px',
        padding: '10px',
    },
    statusItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    },
    showCart: {
        backgroundColor: '#c29958',
        color: 'white',
        border: 'none',
        padding: '8px 20px',
        cursor: 'pointer',
        width: '180px',
        margin: '20px auto',
        display: 'block'
    },
    bottomSections: {
        display: 'flex',
        gap: '40px',
        marginTop: '40px'
    },
    section: {
        flex: 1
    },
    heading: {
        color: '#c29958',
        marginBottom: '15px'
    },
    subscribe: {
        display: 'flex',
        marginTop: '20px'
    },
    subscribeInput: {
        flex: 1,
        padding: '8px',
        border: '1px solid #ddd'
    },
    subscribeButton: {

        color: 'rgb(204, 155, 81)',
        border: 'none',
        padding: '8px 20px',
        cursor: 'pointer'
    },
    chatIcons: {
        display: 'flex',
        gap: '15px',
        marginTop: '20px'
    },
    chatIcon: {
        width: '40px',
        height: '40px',
    },
};
function Basket() {
    const [selectedRows, setSelectedRows] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [data, setData] = useState([
        {
            srNo: 1,
            status: 'M',
            location: "NY",
            stoneId: '180777',
            lab: 'IGI',
            reportNo: '560236486',
            shape: 'ROUND',
            carats: 18.010,
            color: 'H',
            clarity: 'VS2',
            cut: 'ID',
            polish: 'EX',
            symm: 'EX',
            measurements: '16.62 * 16.72 * 10.30',
            tablePercent: 58.000,
            depthPercent: 62.00,
            ratio: 0.000,
            ha: 'No',
            rapPrice: 34000,
            discount: 97.41,
            pricePerCts: 880.60,
            amount: 15859.61,
            viewoffer: '-',
            certificate: 'PDF',
            videoLink: 'VIDEO',

        },
        {
            srNo: 2,
            status: 'M',
            location: "NY",
            stoneId: '180777',
            lab: 'IGI',
            reportNo: '560236486',
            shape: 'ROUND',
            carats: 18.010,
            color: 'H',
            clarity: 'VS2',
            cut: 'ID',
            polish: 'EX',
            symm: 'EX',
            measurements: '16.62 * 16.72 * 10.30',
            tablePercent: 58.000,
            depthPercent: 62.00,
            ratio: 0.000,
            ha: 'No',
            rapPrice: 34000,
            discount: 97.41,
            pricePerCts: 880.60,
            amount: 15859.61,
            viewoffer: '-',
            certificate: 'PDF',
            videoLink: 'VIDEO',

        },

        // Add more rows as needed
    ]);

    const handleRowSelect = (srNo) => {
        setSelectedRows((prevSelected) => {
            if (prevSelected.includes(srNo)) {
                return prevSelected.filter((id) => id !== srNo);
            } else {
                return [...prevSelected, srNo];
            }
        });
    };

    const sortfilter = (col) => {
        const sortedValue = [...data].sort((a, b) => {
            const aValue = a[col] ? a[col].toString() : "";
            const bValue = b[col] ? b[col].toString() : "";

            if (sortOrder === "asc") {
                return aValue.localeCompare(bValue);
            } else {
                return bValue.localeCompare(aValue);
            }
        });
        setData(sortedValue);
    };

    const handleSort = (col) => {
        if (sortBy === col) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(col);
            setSortOrder("asc");
        }
        sortfilter(col);
    };



    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <div className="same-secton my-3">
                    <div className=" auto-container">
                        <div className="d-flex align-items-center gap-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#c29958" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                            BasKet
                        </div>
                    </div>
                </div>
                <div className="text-center auto-container">
                    <div style={{ marginBottom: '10px', fontWeight: '300', marginRight: 'auto', display: 'flex' }}>
                        <button className="basketbtn" >Export To Excel</button>
                        <button className="basketbtn" >Remove to Basket</button>
                        <button className="basketbtn" >INTEREST SLIP</button>
                    </div>
                    <div style={{ marginBottom: '10px', fontWeight: '400', marginRight: 'auto', display: 'flex' }}>
                        <label>Client Name : </label>
                        <div> KRIGEL MESH DIAMONDS </div>
                    </div>
                    <div className="tabletopcss">
                        <div>Total Pcs = <span> 2</span></div>
                        <div style={{ marginLeft: '20px' }}>Cts = <span> 29.24</span></div>
                        <div style={{ marginLeft: '20px' }}>Rap = <span> 45905.95</span></div>
                        <div style={{ marginLeft: '20px' }}>Disc% = <span> 98.24</span></div>
                        <div style={{ marginLeft: '20px' }}>Price = <span> 809.51</span></div>
                        <div style={{ marginLeft: '20px' }}>Amt $ = <span> 23670.07</span></div>
                    </div>
                    <div className="table-responsive pt-10" >
                        <Table striped bordered hover style={{ width: '100%' }} >
                            <thead className="tablecss" >
                                <tr>
                                    <th>
                                        <label className="checkbox style-a">
                                            <input
                                                type="checkbox"
                                                onChange={() => {
                                                    if (selectedRows.length === data.length) {
                                                        setSelectedRows([]);
                                                    } else {
                                                        setSelectedRows(data.map(item => item.srNo));
                                                    }
                                                }}
                                                checked={selectedRows.length === data.length}
                                            />
                                            <div className="checkbox__checkmark"></div>
                                        </label>
                                        {/* <input
                                            type="checkbox"
                                            onChange={() => {
                                                if (selectedRows.length === data.length) {
                                                    setSelectedRows([]);
                                                } else {
                                                    setSelectedRows(data.map(item => item.srNo));
                                                }
                                            }}
                                            checked={selectedRows.length === data.length}
                                        /> */}
                                    </th>
                                    <th>SrNo</th>
                                    <th>Status</th>
                                    <th>Location</th>
                                    <th>StoneId</th>
                                    <th onClick={() => handleSort("lab")}> Lab {sortBy === "lab" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th>ReportNo</th>
                                    <th onClick={() => handleSort("shape")}>
                                        Shape {sortBy === "shape" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}
                                    </th>
                                    <th onClick={() => handleSort("carats")}>
                                        Carats {sortBy === "carats" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th onClick={() => handleSort("color")}>
                                        Color {sortBy === "color" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th onClick={() => handleSort("clarity")}>
                                        Clarity {sortBy === "clarity" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th onClick={() => handleSort("cut")}>
                                        Cut{sortBy === "cut" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th onClick={() => handleSort("polish")}>
                                        Polish{sortBy === "polish" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th onClick={() => handleSort("symm")}>
                                        Symm{sortBy === "symm" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th>Measurements</th>
                                    <th>Table %</th>
                                    <th>Depth %</th>
                                    <th>Ratio</th>
                                    <th>H&A</th>
                                    <th>RapPrice</th>
                                    <th>Discount %</th>
                                    <th>Price/Cts</th>
                                    <th onClick={() => handleSort("amount")}>
                                        Amount{sortBy === "amount" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th>View Offer</th>
                                    <th>Certificate</th>
                                    <th>VideoLink</th>
                                </tr>
                            </thead>
                            <tbody className="tablecss">
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            {/* <input
                                            type="checkbox"
                                            checked={selectedRows.includes(item.srNo)}
                                            onChange={() => handleRowSelect(item.srNo)}
                                        /> */}
                                            <label className="checkbox style-a">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedRows.includes(item.srNo)}
                                                    onChange={() => handleRowSelect(item.srNo)}
                                                />
                                                <div className="checkbox__checkmark"></div>
                                            </label>
                                        </td>
                                        <td>{item.srNo}</td>
                                        <td>{item.status}</td>
                                        <td>{item.location}</td>
                                        <td>{item.stoneId}</td>
                                        <td><a href={`https://www.igi.org/reports/verify-your-report?r=${item.reportNo}`} target="_blank">{item.lab}</a></td>
                                        <td>{item.reportNo}</td>
                                        <td>{item.shape}</td>
                                        <td>{item.carats}</td>
                                        <td>{item.color}</td>
                                        <td>{item.clarity}</td>
                                        <td>{item.cut}</td>
                                        <td>{item.polish}</td>
                                        <td>{item.symm}</td>
                                        <td>{item.measurements}</td>
                                        <td>{item.tablePercent}</td>
                                        <td>{item.depthPercent}</td>
                                        <td>{item.ratio}</td>
                                        <td>{item.ha}</td>
                                        <td>{item.rapPrice}</td>
                                        <td>{item.discount}</td>
                                        <td>{item.pricePerCts}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.viewoffer}</td>
                                        <td><a href={`https://www.igi.org/reports/verify-your-report?r=${item.reportNo}`} target="_blank">PDF</a></td>
                                        <td><a href={`https://v360.in/movie/${item.videoLink}`} target="_blank">VIDEO</a></td>

                                    </tr>
                                ))}

                                <tr className="tablecss">
                                    <th></th>
                                    <th colSpan={7}>Total</th>
                                    <th>18.01</th>
                                    <th colSpan={10}></th>
                                    <th></th>
                                    <th>97.41</th>
                                    <th>880.60</th>
                                    <th>15859.61</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                {/* <div className=" auto-container">
                    <div style={styles.bottomSections}>
                        <div style={styles.section}>
                            <h2 style={styles.heading}>Join!</h2>
                            <p>Receive our latest offers, news, updates and promotions straight to your inbox. Just enter your email address to join our world of diamonds!</p>
                            <div style={{ ...styles.subscribe, position: 'relative', width: '80%' }}>
                                <input style={{
                                    ...styles.subscribeInput, border: 'white', borderBottom: '1px solid #ddd'
                                }} type="email" placeholder="Enter your email address" />
                                <button style={{ ...styles.subscribeButton, position: 'absolute', right: 0 }}>Subscribe</button>
                            </div>
                        </div>

                        <div style={styles.section}>
                            <h2 style={styles.heading}>Chat!</h2>
                            <p>If you have any questions, feel free to live-chat with our well-experienced Lab-grown Diamond specialists by just a click away.</p>
                            <div style={styles.chatIcons}>
                                <button style={{ ...styles.chatIcon, border: '1px solid rgb(120, 120, 120', borderRadius: '50%' }} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                    <path d="M15 10C15 8.89543 13.6569 8 12 8C10.3431 8 9 8.89543 9 10C9 11.1046 10.3431 12 12 12C13.6569 12 15 12.8954 15 14C15 15.1046 13.6569 16 12 16C10.3431 16 9 15.1046 9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M18 20C20.2091 20 22 18.2091 22 16C22 14.9608 21.6037 14.0142 20.954 13.303C20.2792 12.5642 20.0562 12.2608 19.9675 11.2774C19.8052 9.47708 19.035 7.72126 17.6569 6.34315C15.4775 4.16375 12.3535 3.50467 9.60274 4.36591C8.65975 4.66116 8.29221 4.5711 7.3493 4.23329C6.92776 4.08227 6.47349 4 6 4C3.79086 4 2 5.79086 2 8C2 9.03918 2.39628 9.98581 3.04596 10.697C3.72081 11.4358 3.94384 11.7392 4.0325 12.7226C4.19482 14.5229 4.96503 16.2787 6.34315 17.6569C8.52254 19.8363 11.6465 20.4953 14.3973 19.6341C15.3403 19.3388 15.7078 19.4289 16.6507 19.7667C17.0722 19.9177 17.5265 20 18 20Z" stroke="currentColor" strokeWidth="1.5" />
                                </svg></button>
                                <button style={{ ...styles.chatIcon, border: '1px solid rgb(120, 120, 120', borderRadius: '50%' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="currentColor" strokeWidth="1.5" />
                                </svg></button>
                                <button style={{ ...styles.chatIcon, border: '1px solid rgb(120, 120, 120', borderRadius: '50%' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                    <path d="M11.9854 15.4083L15.2268 19.0936C16.4277 20.4589 17.0282 21.1416 17.6567 20.9754C18.2852 20.8092 18.5008 19.9108 18.9318 18.1138L21.3229 8.1459C21.9868 5.37832 22.3187 3.99454 21.5808 3.312C20.843 2.62947 19.564 3.13725 17.0061 4.15282L5.13876 8.86449C3.09293 9.67674 2.07001 10.0829 2.00507 10.7808C1.99842 10.8522 1.99831 10.9241 2.00474 10.9955C2.06754 11.6937 3.08921 12.1033 5.13255 12.9223C6.05838 13.2934 6.5213 13.479 6.8532 13.8344C6.89052 13.8743 6.9264 13.9157 6.96078 13.9584C7.26658 14.3384 7.39709 14.8371 7.65808 15.8344L8.14653 17.701C8.4005 18.6715 8.52749 19.1568 8.86008 19.223C9.19267 19.2891 9.48225 18.8867 10.0614 18.0819L11.9854 15.4083ZM11.9854 15.4083L11.6676 15.0771C11.3059 14.7001 11.1251 14.5117 11.1251 14.2775C11.1251 14.0433 11.3059 13.8548 11.6676 13.4778L15.2406 9.75409" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </Layout>
        </>
    );
}

export default Basket;
