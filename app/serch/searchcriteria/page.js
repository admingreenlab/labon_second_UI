'use client'
import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table'
import Link from "next/link"
import Pagination from 'react-bootstrap/Pagination';
import Layout from "../../../components/layout/Layout"
import { SearchContext } from "@/components/context/SearchContext";
import Axios from "@/components/auth/axios";
import * as XLSX from 'xlsx';

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
    const { searchState } = useContext(SearchContext);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
    const [selectedRows, setSelectedRows] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [data, setData] = useState([]);

    // const totalRecords = 33070; // Total number of records
    const [pageSize, setPageSize] = useState(100); // Default page size
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        console.log('selectedRows', selectedRows, selectedRows.length)
    }, [selectedRows])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await Axios.post('/search/stoneUser', JSON.stringify(searchState));

                if (response.status === 200) {
                    setData(response.data.result);
                    console.log('search seuccess', response.data)
                } else {
                    console.log(data.message || 'Registration failed');
                }
            } catch (err) {
                console.log('An error occurred. Please try again.', err);
            }
        }
        fetchdata();
    }, [searchState])


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

    const totalRecords = data.length;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalRecords);
    const paginatedData = data.slice(startIndex, endIndex);
    const totalPages = Math.ceil(totalRecords / pageSize);
    // const handleMouseEnter = (event, row) => {
    //     setHoveredRow(row);
    //     setTooltipPos({ x: event.clientX, y: event.clientY });
    // };

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const totals = {
        CARATS: data?.reduce((sum, row) => sum + row.CARATS, 0),
        ASK_DISC: data?.reduce((sum, row) => sum + row.ASK_DISC, 0),
        pricects: data?.reduce((sum, row) => sum + (row.RAP_PRICE * (100 - Number(row.ASK_DISC)) / 100), 0),
        amount: data?.reduce((sum, row) => sum + (row.RAP_PRICE * (100 - Number(row.ASK_DISC)) / 100) * row.CARATS, 0),
        // {(item.RAP_PRICE * (100 - Number(item.ASK_DISC)) / 100)}
        // {(item.RAP_PRICE * (100 - Number(item.ASK_DISC)) / 100) * item.CARATS}
    };


    const handleaddwatchlist = () => {
        if (selectedRows?.length < 1) {
            window.alert('Please select stone to add watchlist')
        } else {

            const existingWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

            // Filter out rows that are already in the watchlist (based on stoneId)
            const uniqueSelectedRows = selectedRows.filter(row =>
                !existingWatchlist.some(existingRow => existingRow.STONE === row.STONE)
            );

            // Combine existing watchlist with new rows
            const updatedWatchlist = [...existingWatchlist, ...uniqueSelectedRows];

            // Save the updated watchlist back to localStorage
            localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));

            window.alert('stones added to watch');

        }
    }


    const handleaddBasket = async () => {
        try {
            const response = await Axios.post('user/userbasket', {
                type: 'I',
                stone_id: selectedRows.map(row => row.STONE),
                stype: 'POLISH-SINGLE'
            })
            if (response.status === 200) {
                window.alert('Added to basket')
            }
        } catch (error) {
            console.error("error to handle basket", error)
        }
    }


    const handleMouseEnter = (event, row) => {
        setHoveredRow(row);
        setTooltipPos({ x: event.clientX, y: event.clientY });
    };

    const handleMouseMove = (event) => {
        setTooltipPos({ x: event.clientX + 10, y: event.clientY + 10 });
    };

    const handleMouseLeave = () => {
        setHoveredRow(null);
    };
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <div className="same-secton my-3">
                    <div className=" auto-container">
                        <div className="d-flex align-items-center gap-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#c29958" className="bi bi-home" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                            DashBoard
                        </div>
                    </div>
                </div>
                <div className="text-center auto-container">
                    <div style={{ marginBottom: '10px', fontWeight: '300', marginRight: 'auto', display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                        <div className="d-flex align-items-center  gap-2">

                            <button className="button" onClick={handleaddBasket}>
                                <div className="backdrop">
                                    <span>Add To Basket</span>
                                </div>
                                <div className="overlay">
                                    <span>Add To Basket</span>
                                </div>
                            </button>


                            <button className="button">
                                <div className="backdrop">
                                    <span>Export to Excel</span>
                                </div>
                                <div className="overlay">
                                    <span>Export to Excel</span>
                                </div>
                            </button>

                            <button className="button">
                                <div className="backdrop">
                                    <span>Export All to Excel</span>
                                </div>
                                <div className="overlay">
                                    <span>Export All to Excel</span>
                                </div>
                            </button>

                            <Link href="/serch">
                                <button className="button">
                                    <div className="backdrop">
                                        <span>Modify Search</span>
                                    </div>
                                    <div className="overlay">
                                        <span>Modify Search</span>
                                    </div>
                                </button>
                            </Link>

                            <button className="button" onClick={handleaddwatchlist}>
                                <div className="backdrop">
                                    <span>Add To WatchList</span>
                                </div>
                                <div className="overlay">
                                    <span>Add To WatchList</span>
                                </div>
                            </button>

                        </div>
                        <div>
                            <div style={{ marginBottom: '10px', marginLeft: 'auto' }}>
                                <label style={{ fontWeight: '300' }}> Available: </label>
                                <button style={{ fontWeight: '300', padding: '0px 7px', marginRight: '5px', border: '1px solid #b89154', color: '#fff', background: '#b89154', borderRadius: "3px", marginLeft: "3px" }}> A </button>
                                <label style={{ fontWeight: '300' }}> Memo : </label>
                                <button style={{ fontWeight: '300', padding: '0px 7px', marginRight: '5px', border: '1px solid #b89154', color: '#fff', background: '#b89154', borderRadius: "3px", marginLeft: "3px" }}> M </button>
                                <label style={{ fontWeight: '300' }}> ArrivingSoon :  </label>
                                <button style={{ fontWeight: '300', padding: '0px 7px', marginRight: '5px', border: '1px solid #b89154', color: '#fff', background: '#b89154', borderRadius: "3px", marginLeft: "3px" }}> AS </button>
                            </div>
                        </div>
                    </div>
                    {/* <div style={{ marginBottom: '10px', fontWeight: '400', marginRight: 'auto', display: 'flex', gap: "10px" }}>
                        <label>Client Name : </label>
                        <div style={{ color: "#b8863b" }}> KRIGEL MESH DIAMONDS </div>
                    </div> */}
                    <div className="controls text-start my-3 d-flex align-items-center justify-content-between gap-3">
                        <div>
                            <label>Page Size :</label>
                            <select
                                value={pageSize}
                                onChange={(e) => {
                                    setPageSize(Number(e.target.value));
                                    setCurrentPage(1); // Reset to first page on page size change
                                }}
                                className="dropdown"
                                style={{ marginLeft: "10px" }}
                            >
                                <option value={1}>1</option>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={data?.length}>All</option>
                            </select>
                        </div>
                        <span className="record-info">
                            Showing {startIndex + 1} - {endIndex} out of {totalRecords}
                        </span>
                    </div>
                    <div className="table-responsive pt-10">
                        <Table striped bordered hover>
                            <thead className="tablecss">
                                <tr>
                                    <th>
                                        <label className="checkbox style-a">
                                            <input
                                                type="checkbox"
                                                onChange={() => {
                                                    if (selectedRows.length === data.length) {
                                                        setSelectedRows([]);
                                                    } else {
                                                        setSelectedRows(data.map(item => item));
                                                    }
                                                }}
                                                checked={selectedRows.length === data.length}
                                            />
                                            <div className="checkbox__checkmark"></div>
                                        </label>
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
                                    <th onClick={() => handleSort("RAP_PRICE")}>
                                        Amount{sortBy === "RAP_PRICE" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                    <th>View Offer</th>
                                    <th>Certificate</th>
                                    <th>VideoLink</th>
                                </tr>
                            </thead>
                            <tbody className="tablecss">
                                {paginatedData?.map((item, index) => (
                                    // {.map((item)
                                    // {data.map((item, index) => (
                                    <tr
                                        key={index}
                                        onMouseEnter={(e) => handleMouseEnter(e, item)}
                                        onMouseMove={handleMouseMove}
                                        onMouseLeave={handleMouseLeave}
                                        className="hover:bg-[#f3e8d8]"
                                    >
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
                                        {/* <td>{index + 1}</td> */}
                                        <td>{item.STATUS}</td>
                                        <td>{item.FL_BRID}</td>
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
                                        <td>{(item.RAP_PRICE * (100 - Number(item.ASK_DISC)) / 100).toFixed(2)}</td>
                                        <td>{((item.RAP_PRICE * (100 - Number(item.ASK_DISC)) / 100) * item.CARATS)?.toFixed(2)}</td>
                                        <td>{item.viewoffer}</td>
                                        <td><a href={`https://www.igi.org/reports/verify-your-report?r=${item.REPORTNO}`} target="_blank" style={{ color: 'blue' }}>PDF</a></td>
                                        <td><a href={`https://www.dnav360.com/vision/dna.html?d=${item.STONE}&ic=1`} target="_blank" style={{ color: 'blue' }}>VIDEO</a></td>

                                    </tr>
                                ))}
                                <tr className="tablecss">
                                    <th></th>
                                    <th colSpan={6}></th>
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

                    {/* Tooltip */}
                    {hoveredRow && (
                        <div
                            className="absolute bg-white shadow-lg p-1 border border-gray-300 rounded-md text-sm z-50"
                            style={{
                                top: `${tooltipPos.y}px`,
                                left: `${tooltipPos.x}px`,
                                minWidth: "200px",
                                position: "fixed",
                                pointerEvents: "none",
                                zIndex: 1000,
                            }}
                        >
                            <table className="tablehover text-sm text-left border border-gray-300">
                                <tbody>
                                    <tr border className="text-center">
                                        <th border colSpan={3} style={{ background: "#c29958", textAlign: "center" }}>
                                            <td className="p-1 border-0 font-bold"><b>Stone ID:</b>
                                                {hoveredRow.STONE}</td>
                                        </th>
                                        <th border colSpan={3} style={{ background: "#c29958", textAlign: "center" }}>
                                            <td className="p-1 border-0 font-bold text-center"><b>Status :</b>
                                                {hoveredRow.FL_BRID}</td>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td className="p-1 border font-bold"><b>Lab:</b></td>
                                        <td className="p-1 border">{hoveredRow.LAB}</td>
                                        <td className="p-1 border font-bold"><b>Carat:</b></td>
                                        <td className="p-1 border">{hoveredRow.CARATS}</td>
                                        <td className="p-1 border font-bold"><b>Ratio:</b></td>
                                        <td className="p-1 border">{hoveredRow.FL_RATIO || '-'}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-1 border font-bold"><b>Report No:</b></td>
                                        <td className="p-1 border">{hoveredRow.REPORTNO}</td>
                                        <td className="p-1 border font-bold"><b>Color:</b></td>
                                        <td className="p-1 border">{hoveredRow.COLOR}</td>
                                        <td className="p-1 border font-bold"><b>Polish:</b></td>
                                        <td className="p-1 border">{hoveredRow.POLISH}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-1 border font-bold"><b>Clarity:</b></td>
                                        <td className="p-1 border">{hoveredRow.CLARITY}</td>
                                        <td className="p-1 border font-bold"><b>Shape:</b></td>
                                        <td className="p-1 border">{hoveredRow.SHAPE}</td>
                                        <td className="p-1 border font-bold"><b>Symm:</b></td>
                                        <td className="p-1 border">{hoveredRow.SYMM}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-1 border font-bold"><b>Table %:</b></td>
                                        <td className="p-1 border">{hoveredRow.FL_TABLE_PER?.toFixed(2)}</td>
                                        <td className="p-1 border font-bold"><b>Depth %:</b></td>
                                        <td className="p-1 border">{hoveredRow.FL_DEPTH_PER?.toFixed(2)}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    )}
                    <Pagination>
                        <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
                        <Pagination.Prev onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)} disabled={currentPage === 1} />

                        {/* Show Pagination Items (Max 5 at a time) */}
                        {totalPages > 1 && (
                            [...Array(totalPages)].slice(
                                Math.max(0, currentPage - 3),
                                Math.min(totalPages, currentPage + 2)
                            ).map((_, index) => {
                                const pageNumber = Math.max(1, currentPage - 2) + index;
                                return (
                                    <Pagination.Item
                                        key={pageNumber}
                                        active={pageNumber === currentPage}
                                        onClick={() => handlePageChange(pageNumber)}
                                    >
                                        {pageNumber}
                                    </Pagination.Item>
                                );
                            })
                        )}

                        <Pagination.Next onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)} disabled={currentPage === totalPages} />
                        <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
                    </Pagination>
                </div>
            </Layout >
        </>
    );
}

export default Basket;
