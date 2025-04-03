'use client'
import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table'
import Link from "next/link"
import Pagination from 'react-bootstrap/Pagination';
import Layout from "../../components/layout/Layout"
import { PolishContext } from "@/components/context/PolishContext";
import Axios, { baseURL } from "@/components/auth/axios";
import * as XLSX from 'xlsx';
import withAuth from "@/components/auth/withAuth";
import { getEventBus } from "@/components/utils/EventBus";
import Image from "next/image";
import Loader from '@/public/assets/images/loader/Ellipsis@1x-1.3s-200px-200px.svg';



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
function Polish() {

    const { searchpolish, clearPolishState } = useContext(PolishContext);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
    const [selectedRows, setSelectedRows] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [data, setData] = useState([]);
    const [pageSize, setPageSize] = useState(100);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const hasFetched = useRef(false);

    useEffect(() => {
        if (!hasFetched.current) {
            hasFetched.current = true;
            const fetchdata = async () => {
                setLoading(true);
                try {
                    const response = await Axios.post('search/bulk/stoneUser', searchpolish);
                    setData(response.data.result);
                } catch (err) {
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            };
            fetchdata();
        }
    }, [searchpolish]);

    const transformData = (data) => {
        const csvData = data?.map((item) => ({
            'LOT NO': item.FL_SUB_LOT,
            Type: item.FL_TYPE,
            Carats: item.FL_CARATS,
            Clarity: item.FL_CLARITY,
            Color: item.FL_COLOR,
            'Co ID': item.FL_COID,
            Height: item.FL_HIGHT,
            Length: item.FL_LENGTH,
            Main_LOT: item.FL_MAIN_LOT,
            Shape: item.FL_SHAPE_NAME,
            'MM Size': item.FL_SIZE,
            'Width': item.FL_WIDTH,
            'Location': item.FL_BRID
        }));

        return csvData;
    };

    const convertToCSV = (data) => {
        if (!Array.isArray(data) || data.length === 0) return '';

        // Extract headers (keys of the first object)
        const headers = Object.keys(data[0]);

        // Convert each row to a CSV line
        const rows = data.map((row) =>
            headers.map((header) => `"${row[header] ?? ''}"`).join(',')
        );

        // Combine headers and rows
        return [headers.join(','), ...rows].join('\n');
    };

    // Function to trigger CSV download
    const downloadCSV = (csvData, fileName = 'data.csv') => {
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handledownload = () => {
        if (selectedRows.length === 0) {
            window.alert('Please select stones to export.');
            return;
        }
        const transformedData = transformData((selectedRows));
        const csvData = convertToCSV(transformedData);
        downloadCSV(csvData, 'diamond_data.csv');
        console.log(transformedData);
    }


    const handleRowSelect = (item) => {
        setSelectedRows((prevSelected) => {
            const isSelected = prevSelected.some(selected => selected.FL_SUB_LOT === item.FL_SUB_LOT);
            if (isSelected) {
                // Remove the item if already selected
                return prevSelected.filter(selected => selected.FL_SUB_LOT !== item.FL_SUB_LOT);
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
        ASK_DISC: data?.reduce((sum, row) => sum + (row.ASK_DISC / data.length), 0),
        // pricects: data?.reduce((sum, row) => sum + (row.RAP_PRICE * (100 - Number(row.ASK_DISC)) / 100), 0),
        pricects: data?.length > 0 ?
            data?.reduce((sum, row) => sum + (row.RAP_PRICE * (100 - Number(row.ASK_DISC)) / 100) * (row.CARATS), 0) /
            data?.reduce((sum, row) => sum + row.CARATS, 0) : 0,
        amount: data?.reduce((sum, row) => sum + (row.RAP_PRICE * (100 - Number(row.ASK_DISC)) / 100) * row.CARATS, 0),
        // {(item.RAP_PRICE * (100 - Number(item.ASK_DISC)) / 100)}
        // {(item.RAP_PRICE * (100 - Number(item.ASK_DISC)) / 100) * item.CARATS}
    };


    const handleaddwatchlist = () => {
        if (selectedRows.length === 0) {
            window.alert('Please select stones to add to the Watchlist.');
            return;
        }
    
        let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    
        selectedRows.forEach(item => {
            const alreadyInWatchlist = watchlist.some(watchlistItem => watchlistItem.FL_SUB_LOT === item.FL_SUB_LOT);
            if (!alreadyInWatchlist) {
                watchlist.push(item);
            }
        });
    
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
        window.alert('Added to Watchlist!');
    }
    


    const handleaddBasket = async () => {
        try {
            const response = await Axios.post('user/userbasket', {
                type: 'I',
                stone_id: selectedRows.map(row => row.FL_SUB_LOT),
                stype: 'POLISH-PARCEL'
            })
            if (response.status === 200) {
                const eventBus = getEventBus();
                eventBus.emit("basketUpdated");
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


    const handleExportSelectedToExcel = async () => {

        if (selectedRows.length === 0) {
            window.alert('Please select stones to export.');
            return;
        }

        try {
            // console.log('selectedRows', selectedRows)
            const payload = {
                stoneCert: selectedRows?.map(row => row.FL_SUB_LOT).join(' '), // Converts the array of STONE IDs into a space-separated string
            };

            const response = await Axios.post('/search/bulk?type=excel', payload);

            if (response.data.status === 'success') {
                window.open(`${baseURL}exports/${response.data.fileName}`)
            }


        } catch (error) {
            console.log(error)
        }
    }

    const handleExportAllToExcel = async () => {
        if (data.length === 0) {
            window.alert('No data available to export.');
            return;
        }

        try {
            const payload = {
                stoneCert: "",
                ...searchState
            }
            const response = await Axios.post('/search/stoneUser?type=excel', payload);

            if (response.data.status === 'success') {
                window.open(`${baseURL}exports/${response.data.fileName}`)
            }


        } catch (error) {
            console.log(error)
        }
    }



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
                        <div className="d-flex align-items-center  gap-2" style={{ flexWrap: 'wrap' }}>

                            <button className="button" onClick={handleaddBasket}>
                                <div className="backdrop">
                                    <span>Add To Basket</span>
                                </div>
                                <div className="overlay">
                                    <span>Add To Basket</span>
                                </div>
                            </button>


                            {/* <button className="button" onClick={handleExportSelectedToExcel}>
                                <div className="backdrop">
                                    <span>Export to Excel</span>
                                </div>
                                <div className="overlay">
                                    <span>Export to Excel</span>
                                </div>
                            </button> */}

                            <button className="button" onClick={handledownload}>
                                <div className="backdrop">
                                    <span>Export to Excel</span>
                                </div>
                                <div className="overlay">
                                    <span>Export to Excel</span>
                                </div>
                            </button>

                            <Link href="/polish">
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

                    {loading && (
                        <div style={{ display: 'flex', height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image width='100' height='100' src={Loader} alt={"loading"} />
                        </div>
                    )}
                    {/* <div style={{ marginBottom: '10px', fontWeight: '400', marginRight: 'auto', display: 'flex', gap: "10px" }}>
                        <label>Client Name : </label>
                        <div style={{ color: "#b8863b" }}> KRIGEL MESH DIAMONDS </div>
                    </div> */}
                    {
                        !loading &&
                        <>
                            <div className="controls text-start my-3 d-flex align-items-center gap-3">
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
                                        <option value={100}>100</option>
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
                                            <th style={{ minWidth: '30px' }}>
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
                                            <th>Type</th>
                                            <th>Location</th>
                                            <th>In Stock</th>
                                            <th>LOT NO</th>
                                            <th>Carats</th>
                                            <th>Clarity</th>
                                            <th>CO ID</th>
                                            <th>Color</th>
                                            <th>Height</th>
                                            <th>Length</th>
                                            <th>Main_LOT</th>
                                            <th>Shape</th>
                                            <th>MM Size</th>
                                            <th>Width</th>


                                        </tr>
                                    </thead>
                                    <tbody className="tablecss">
                                        {paginatedData?.length > 0 ? (
                                            paginatedData.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    onMouseEnter={(e) => handleMouseEnter(e, item)}
                                                    onMouseMove={handleMouseMove}
                                                    onMouseLeave={handleMouseLeave}
                                                    className="hover:bg-[#f3e8d8]"
                                                >
                                                    <td style={{ maxWidth: '30px' }}>
                                                        <label className="checkbox style-a" style={{ maxWidth: '30px' }}>
                                                            <input
                                                                style={{ maxWidth: '30px' }}
                                                                type="checkbox"
                                                                checked={selectedRows.some(selected => selected.FL_SUB_LOT === item.FL_SUB_LOT)}
                                                                onChange={() => handleRowSelect(item)}
                                                            />
                                                            <div className="checkbox__checkmark"></div>
                                                        </label>
                                                    </td>
                                                    {/* <td>{index + 1}</td> */}
                                                    <td>{item.FL_TYPE}</td>
                                                    <td>{item.FL_BRID}</td>
                                                    <td>A</td>
                                                    <td>{item.FL_SUB_LOT}</td>
                                                    <td>{item.FL_CARATS}</td>
                                                    <td>{item.FL_CLARITY}</td>
                                                    <td>{item.FL_COID}</td>
                                                    <td>{item.FL_COLOR}</td>
                                                    <td>{item.FL_HIGHT}</td>
                                                    <td>{item.FL_LENGTH}</td>
                                                    <td>{item.FL_MAIN_LOT}</td>
                                                    <td>{item.FL_SHAPE_NAME}</td>
                                                    <td>{item.FL_SIZE}</td>
                                                    <td>{item.FL_WIDTH}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="14" className="text-center">
                                                    No data found.
                                                </td>
                                            </tr>
                                        )}

                                    </tbody>
                                </Table>
                            </div>
                        </>
                    }

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
                                            <td className="p-1 border-0 font-bold"><b>LOT NO : </b>
                                                {hoveredRow.FL_SUB_LOT}</td>
                                        </th>
                                        <th border colSpan={3} style={{ background: "#c29958", textAlign: "center" }}>
                                            <td className="p-1 border-0 font-bold text-center"><b>Status : </b>
                                                {hoveredRow.FL_BRID}</td>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td className="p-1 border font-bold"><b>Type :</b></td>
                                        <td className="p-1 border">{hoveredRow.FL_TYPE}</td>
                                        <td className="p-1 border font-bold"><b>Carat :</b></td>
                                        <td className="p-1 border">{hoveredRow.FL_CARATS}</td>
                                        <td className="p-1 border font-bold"><b>Clarity :</b></td>
                                        <td className="p-1 border">{hoveredRow.FL_CLARITY}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-1 border font-bold"><b>Color :</b></td>
                                        <td className="p-1 border">{hoveredRow.FL_COLOR}</td>
                                        <td className="p-1 border font-bold"><b>Height :</b></td>
                                        <td className="p-1 border">{hoveredRow.FL_HIGHT}</td>
                                        <td className="p-1 border font-bold"><b>Length :</b></td>
                                        <td className="p-1 border">{hoveredRow.FL_LENGTH}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-1 border font-bold"><b>Shape :</b></td>
                                        <td className="p-1 border">{hoveredRow.FL_SHAPE_NAME}</td>
                                        <td className="p-1 border font-bold"><b>MM Size:</b></td>
                                        <td className="p-1 border">{hoveredRow.FL_SIZE}</td>
                                        <td className="p-1 border font-bold"><b>Width:</b></td>
                                        <td className="p-1 border">{hoveredRow.FL_WIDTH}</td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    )}
                    {
                        !loading && <Pagination>
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
                    }
                </div>
            </Layout >
        </>
    );
}

export default withAuth(Polish);
