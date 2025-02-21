'use client'
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination';
import Layout from "@/components/layout/Layout"
import Axios from "@/components/auth/axios";
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
    const [clientName, setClientName] = useState('');
    const [company, setCompany] = useState('');
    const [data, setData] = useState([]);

    const [selectedtotals, setSelectedTotals] = useState({})
;
    useEffect(() => {
        console.log('selectedRows', selectedRows)
    }, [selectedRows])

    const handleRowSelect = (item) => {
        setSelectedRows((prevSelected) => {
            const isSelected = prevSelected.some(selected => selected.STONE === item.STONE);
            if (isSelected) {
                // Remove the item if already selected
                return prevSelected.filter(selected => selected.STONE !== item.STONE);
            } else {
                // Add the complete item if not selected
                return [...prevSelected, item];
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

    useEffect(() => {
        const user = localStorage.getItem('user') || sessionStorage.getItem('user');
        const branchescode = localStorage.getItem('branches') || sessionStorage.getItem('branches')
        if (user) {
            setCompany(JSON.parse(branchescode)[0].FL_COMPANY_CODE);
            // console.log('user.FL_USER_NAME',JSON.parse(user)?.FL_USER_NAME)
            setClientName(JSON.parse(user)?.FL_USER_NAME)
        }
    }, [])

    const fetchData = async () => {
        try {
            const response = await Axios.post('user/userbasket', {
                type: 'S',
                stype: 'single'
            });

            if (response.status === 200) {
                setData(response?.data?.data); // Update state only if the component is still mounted
            }
        }
        catch (err) {
            console.log("Failed to fetch data. Please try again."); // Set error state
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        let newSelectedTotals = {
            pcs: selectedRows.length,
            CARATS: selectedRows?.reduce((sum, row) => sum + row.CARATS, 0),
            RAP: selectedRows?.reduce((sum, row) => sum + row.RAP_PRICE, 0),
            ASK_DISC: selectedRows?.reduce((sum, row) => sum + row.ASK_DISC, 0),
            pricects: selectedRows?.reduce((sum, row) => sum + (row.RAP_PRICE * (100 - Number(row.ASK_DISC)) / 100), 0),
            amount: selectedRows?.reduce((sum, row) => sum + (row.RAP_PRICE * (100 - Number(row.ASK_DISC)) / 100) * row.CARATS, 0),
        };

        setSelectedTotals(newSelectedTotals);

        console.log(selectedtotals)
    }, [selectedRows]);

    const totals = {
        CARATS: data?.reduce((sum, row) => sum + row.CARATS, 0),
        ASK_DISC: data?.reduce((sum, row) => sum + row.ASK_DISC, 0),
        pricects: data?.reduce((sum, row) => sum + (row.RAP_PRICE * (100 - Number(row.ASK_DISC)) / 100), 0),
        amount: data?.reduce((sum, row) => sum + (row.RAP_PRICE * (100 - Number(row.ASK_DISC)) / 100) * row.CARATS, 0),
    };

    const handleremovebasket = async () => {
        try {
            const response = await Axios.post('user/userbasket', {
                type: 'D',
                stype: 'single',
                stone_id: selectedRows.map(row => row.STONE),
            })
            if (response.status === 200) {
                window.alert('Remove from basket successfully');
                fetchData()
            }
        } catch (error) {
            console.log('error while removing basket', error)
        }
    }

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
                        <button className="basketbtn" onClick={handleremovebasket} >Remove to Basket</button>
                        <button className="basketbtn" >INTEREST SLIP</button>
                    </div>
                    <div style={{ marginBottom: '10px', fontWeight: '400', marginRight: 'auto', display: 'flex' }}>
                        <label>Client Name : </label>
                        <div>{clientName}</div>
                    </div>
                    <div className="tabletopcss">
                        <div>Total Pcs = <span>{selectedtotals?.pcs}</span></div>
                        <div style={{ marginLeft: '20px' }}>Cts = <span>{selectedtotals?.CARATS?.toFixed(2)}</span></div>
                        <div style={{ marginLeft: '20px' }}>Rap = <span>{selectedtotals?.RAP?.toFixed(2)}</span></div>
                        <div style={{ marginLeft: '20px' }}>Disc% = <span>{selectedtotals?.ASK_DISC?.toFixed(2)}</span></div>
                        <div style={{ marginLeft: '20px' }}>Price = <span>{selectedtotals?.pricects?.toFixed(2)}</span></div>
                        <div style={{ marginLeft: '20px' }}>Amt $ = <span>{selectedtotals?.amount?.toFixed(2)}</span></div>
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
                                                        setSelectedRows(data?.map(item => item.STONE));
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
                                    {/* <th>SrNo</th> */}
                                    <th>Status</th>
                                    <th>Location</th>
                                    <th>StoneId</th>
                                    <th onClick={() => handleSort("LAB")}> Lab {sortBy === "LAB" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th>ReportNo</th>
                                    <th onClick={() => handleSort("SHAPE")}>
                                        Shape {sortBy === "SHAPE" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}
                                    </th>
                                    <th onClick={() => handleSort("CARATS")}>
                                        Carats {sortBy === "CARATS" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th onClick={() => handleSort("COLOR")}>
                                        Color {sortBy === "COLOR" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th onClick={() => handleSort("CLARITY")}>
                                        Clarity {sortBy === "CLARITY" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th onClick={() => handleSort("CUT")}>
                                        Cut{sortBy === "CUT" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th onClick={() => handleSort("POLISH")}>
                                        Polish{sortBy === "POLISH" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th onClick={() => handleSort("SYMM")}>
                                        Symm{sortBy === "SYMM" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th>Measurements</th>
                                    <th>Table %</th>
                                    <th>Depth %</th>
                                    <th>Ratio</th>
                                    <th>H&A</th>
                                    <th>RapPrice</th>
                                    <th>Discount %</th>
                                    <th>Price/Cts</th>
                                    <th onClick={() => handleSort("AMOUNT")}>
                                        Amount{sortBy === "AMOUNT" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th>View Offer</th>
                                    <th>Certificate</th>
                                    <th>VideoLink</th>
                                </tr>
                            </thead>
                            <tbody className="tablecss">
                                {data?.map((item, index) => (
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
                                                    checked={selectedRows.some(selected => selected.STONE === item.STONE)}
                                                    onChange={() => handleRowSelect(item)}
                                                />
                                                <div className="checkbox__checkmark"></div>
                                            </label>
                                        </td>
                                        {/* <td>{item.srNo}</td> */}
                                        <td>{item.STATUS}</td>
                                        <td>{company}</td>
                                        <td>{item.STONE}</td>
                                        <td><a style={{ color: 'blue' }} href={`https://www.igi.org/reports/verify-your-report?r=${item.REPORTNO}`} target="_blank">{item.LAB}</a></td>
                                        <td>{item.REPORTNO}</td>
                                        <td>{item.SHAPE}</td>
                                        <td>{item.CARATS}</td>
                                        <td>{item.COLOR}</td>
                                        <td>{item.CLARITY}</td>
                                        <td>{item.CUT}</td>
                                        <td>{item.POLISH}</td>
                                        <td>{item.SYMM}</td>
                                        <td>{item.FL_MEASUREMENTS}</td>
                                        <td>{item.FL_TABLE_PER?.toFixed(2)}</td>
                                        <td>{item.FL_DEPTH_PER?.toFixed(2)}</td>
                                        <td>{item.FL_RATIO || '-'}</td>
                                        <td>{item.ha}</td>
                                        <td>{item.RAP_PRICE?.toFixed(2)}</td>
                                        <td>{item.ASK_DISC}</td>
                                        <td>{(item.RAP_PRICE * (100 - Number(item.ASK_DISC)) / 100)?.toFixed(2)}</td>
                                        <td>{((item.RAP_PRICE * (100 - Number(item.ASK_DISC)) / 100) * item.CARATS)?.toFixed(2)}</td>
                                        <td>{item.viewoffer}</td>
                                        <td><a href={`https://www.igi.org/reports/verify-your-report?r=${item.REPORTNO}`} target="_blank" style={{ color: 'blue' }}>PDF</a></td>
                                        <td><a href={`https://www.dnav360.com/vision/dna.html?d=${item.STONE}&ic=1`} target="_blank" style={{ color: 'blue' }}>VIDEO</a></td>

                                    </tr>
                                ))}

                                <tr className="tablecss">
                                    <th></th>
                                    <th colSpan={6}>Total</th>
                                    <th>{totals.CARATS?.toFixed(2)}</th>
                                    <th colSpan={10}></th>
                                    <th></th>
                                    <th>{totals.ASK_DISC}</th>
                                    <th>{totals.pricects?.toFixed(2)}</th>
                                    <th>{totals.amount?.toFixed(2)}</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Basket;
