'use client'
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination';
import Layout from "../../components/layout/Layout"
import Axios from "@/components/auth/axios";
import withAuth from "@/components/auth/withAuth";
import { getEventBus } from "@/components/utils/EventBus";
import Loader from '@/public/assets/images/loader/Ellipsis@1x-1.3s-200px-200px.svg';
import Image from "next/image";
import { Button } from "@mui/material";


function Demo() {
    const [selectedRows, setSelectedRows] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(10);
    const [data, setData] = useState([]);
    const [clientName, setClientName] = useState('');

    const [loading, setLoading] = useState(false);

    const [tabselect, settabselect] = useState({
        single: true,
        parcel: false
    });

    const fetchData = async (single) => {
        console.log('ssingle', single);
        if (single === 'parcel') {
            setLoading(true)
            // console.log('parcel');
            const watchlistdata = JSON.parse(localStorage.getItem('watchlist'));
            // console.log(watchlistdata)
            setData(watchlistdata)
            setLoading(false)
        } else {
            setLoading(true)
            try {
                const response = await Axios.get('user/watchlist');

                if (response.status === 200) {
                    setData(response?.data?.data); // Update state only if the component is still mounted
                    setLoading(false)
                }
            }
            catch (err) {
                console.log("Failed to fetch data. Please try again."); // Set error state
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    useEffect(() => {
        const user = localStorage.getItem('user') || sessionStorage.getItem('user');
        if (user) {
            // console.log('user.FL_USER_NAME',JSON.parse(user)?.FL_USER_NAME)
            setClientName(JSON.parse(user)?.FL_USER_NAME)
        }
    }, [])


    useEffect(() => {
        console.log('selectedRows', selectedRows);
    }, [selectedRows])

    const handleRowSelect = (item) => {
        if (tabselect.single) {
            setSelectedRows((prevSelected) => {
                const isSelected = prevSelected.some(selected => selected === item.STONE);
                if (isSelected) {
                    // Remove the item if already selected
                    return prevSelected.filter(selected => selected !== item.STONE);
                } else {
                    // Add the complete item if not selected
                    return [...prevSelected, item.STONE];
                }
            });
        } else {
            setSelectedRows((prevSelected) => {
                const isSelected = prevSelected.some(selected => selected === item.FL_SUB_LOT);
                if (isSelected) {
                    // Remove the item if already selected
                    return prevSelected.filter(selected => selected !== item.FL_SUB_LOT);
                } else {
                    // Add the complete item if not selected
                    return [...prevSelected, item.FL_SUB_LOT];
                }
            });
        }
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

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data?.slice(indexOfFirstRow, indexOfLastRow);

    // const totalPages = Math.ceil(data?.length / rowsPerPage);
    const totalPages = data?.length > 0 ? Math.ceil(data.length / rowsPerPage) : 1;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totals = {
        CARATS: data?.reduce((sum, row) => sum + row.CARATS, 0),
        ASK_DISC: data?.reduce((sum, row) => sum + (row.ASK_DISC / data.length), 0),
        // pricects: data?.reduce((sum, row) => sum + (row.RAP_PRICE * (100 - Number(row.ASK_DISC)) / 100), 0),
        pricects: data?.length > 0 ?
            data?.reduce((sum, row) => sum + (row.RAP_PRICE * (100 - Number(row.ASK_DISC)) / 100) * (row.CARATS), 0) /
            data?.reduce((sum, row) => sum + row.CARATS, 0) : 0,
        amount: data?.reduce((sum, row) => sum + (row.RAP_PRICE * (100 - Number(row.ASK_DISC)) / 100) * row.CARATS, 0),
    };

    const handleaddBasket = async () => {
        if (tabselect.single) {
            if (selectedRows.length > 0) {
                setLoading(true);
                try {
                    const response = await Axios.post('user/userbasket', {
                        type: 'I',
                        stone_id: selectedRows,
                        stype: 'POLISH-SINGLE'
                    })
                    if (response.status === 200) {
                        const eventBus = getEventBus();
                        eventBus.emit("basketUpdated");

                        try {
                            const response = await Axios.delete('user/watchlist/remove', {
                                params: {
                                    lotId: selectedRows.join(',')
                                }
                            });
                            if (response.status === 200) {
                                console.log('removed')
                            }
                        } catch (error) {
                            console.error("Error removing from watchlist", error);
                            // setToastMessage(error.response.data);
                            // setShowToast(true);
                            window.alert('error while remove from watchlist');
                        }

                        window.alert('Added to basket');
                        setSelectedRows([]);
                        fetchData('single');
                    }
                } catch (error) {
                    console.error("error to handle basket", error)
                } finally {
                    setLoading(false);
                }
            } else {
                window.alert('please select stone')
            }
        } else {
            if (selectedRows.length > 0) {
                setLoading(true);
                try {
                    const response = await Axios.post('user/userbasket', {
                        type: 'I',
                        stone_id: selectedRows,
                        stype: 'POLISH-PARCEL'
                    })
                    if (response.status === 200) {
                        const eventBus = getEventBus();
                        eventBus.emit("basketUpdated");
                        window.alert('Added to basket');
                        setSelectedRows([]);
                        fetchData('parcel');
                    }
                } catch (error) {
                    console.error("error to handle basket", error)
                } finally {
                    setLoading(false);
                }
            } else {
                window.alert('please select stone')
            }
        }
    }

    const removeFromLocalStorage = (selectedRows) => {
        try {
            // 1. Get current data
            const storedData = JSON.parse(localStorage.getItem('watchlist')) || [];

            // 2. Filter out selected items
            const updatedData = storedData.filter(
                (item) => !selectedRows.includes(item.FL_SUB_LOT)
            );

            // 3. Update localStorage
            localStorage.setItem('watchlist', JSON.stringify(updatedData));

            console.log('Successfully removed selected items.');
        } catch (error) {
            console.error('Error removing items:', error);
        }
    };

    const handleClearWatchlist = async () => {
        if (tabselect.single) {
            if (selectedRows?.length === data?.length) {
                setLoading(true);
                try {
                    const response = await Axios.delete('user/watchlist/clear');
                    if (response.status === 200) {
                        setSelectedRows([]);
                        fetchData()
                    }
                } catch (error) {
                    console.error("Error removing from watchlist", error);

                } finally {
                    setLoading(false);
                }
            } else {
                window.alert('Please select all StoneIds to clear the watchlist');
            }
        } else {
            setLoading(true);
            if (selectedRows?.length !== 0) {
                removeFromLocalStorage(selectedRows);
                fetchData('parcel')
            } else {
                window.alert('Please select StoneIds to clear the watchlist');
            }
            setLoading(false);
        }
    };

    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <div className="same-secton my-3">
                    <div className=" auto-container">
                        <div className="d-flex align-items-center gap-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#c29958" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                            </svg>
                            WishList
                        </div>
                    </div>
                </div>
                <div className="text-center auto-container">
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Button
                            style={tabselect.single ? { backgroundColor: '#c29958' } : { color: '#c29958', borderColor: '#c29958' }}
                            variant={tabselect.single ? 'contained' : 'outlined'}
                            onClick={() => {
                                settabselect(prev => ({
                                    ...prev,
                                    single: true,
                                    parcel: false
                                }))
                                fetchData('single');
                                setSelectedRows([]);
                            }}>SINGLE</Button>
                        <Button
                            style={tabselect.parcel ? { backgroundColor: '#c29958' } : { color: '#c29958', borderColor: '#c29958' }}
                            variant={tabselect.parcel ? 'contained' : 'outlined'}
                            onClick={() => {
                                settabselect((prev) => ({
                                    ...prev,
                                    single: false,
                                    parcel: true
                                }))
                                fetchData('parcel');
                                setSelectedRows([]);
                            }}
                        >PARCEL</Button>
                    </div>
                </div>
                <div className="text-center auto-container">
                    <div className="mt-3 mb-2" style={{ display: 'flex' }}>
                        <div className="d-flex align-items-center gap-3">
                            <label >Client Name:</label>
                            {/* <span className="d-bock">krigel</span> */}
                            <span style={{ fontWeight: '300', marginRight: '5px', color: '#b89154' }}>{clientName}</span>
                            <button className="button" onClick={handleaddBasket}>
                                <div className="backdrop">
                                    <span>{loading ? 'Loading...' : 'Add to Basket'}</span>
                                </div>
                                <div className="overlay">
                                    <span>{loading ? 'Loading...' : 'Add to Basket'}</span>
                                </div>
                            </button>

                            <button className="button" onClick={handleClearWatchlist}>
                                <div className="backdrop">
                                    <span>{loading ? 'Loading...' : 'Clear Watch List'}</span>
                                </div>
                                <div className="overlay">
                                    <span>{loading ? 'Loading...' : 'Clear Watch List'}</span>
                                </div>
                            </button>

                        </div>
                        <div style={{ marginBottom: '10px', marginLeft: 'auto' }}>
                            <label style={{ fontWeight: '300' }}> Available: </label>
                            <button style={{ fontWeight: '300', padding: '0px 7px', marginRight: '5px', border: '1px solid #b89154', color: '#fff', background: '#b89154', borderRadius: "3px", marginLeft: "3px" }}> A </button>
                            <label style={{ fontWeight: '300' }}> Memo : </label>
                            <button style={{ fontWeight: '300', padding: '0px 7px', marginRight: '5px', border: '1px solid #b89154', color: '#fff', background: '#b89154', borderRadius: "3px", marginLeft: "3px" }}> M </button>
                        </div>
                    </div>
                    {loading && (
                        <div style={{ display: 'flex', height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image width='100' height='100' src={Loader} alt={"loading"} />
                        </div>
                    )}
                    {
                        !loading && (
                            tabselect?.single ? <>
                                <div className="table-responsive pt-10" >
                                    <Table striped bordered hover style={{ width: '100%' }} >
                                        <thead className="tablecss" >
                                            <tr>
                                                <th>
                                                    <label className="checkbox style-a">
                                                        <input type="checkbox"
                                                            onChange={() => {
                                                                if (selectedRows?.length === data?.length) {
                                                                    setSelectedRows([]);
                                                                } else {
                                                                    setSelectedRows(data?.map(item => item.STONE));
                                                                }
                                                            }}
                                                            checked={selectedRows?.length === data?.length}
                                                        />
                                                        <div className="checkbox__checkmark"></div>
                                                    </label>
                                                </th>
                                                {/* <th>SrNo</th> */}
                                                <th>Status</th>
                                                <th>StoneId</th>
                                                <th onClick={() => handleSort("LAB")}> Lab {sortBy === "LAB" ? (sortOrder === "asc" ? ' ▲' : ' ▼') : '▼'}</th>
                                                <th>Report No</th>
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
                                                <th>Amount</th>
                                                <th>Certificate</th>
                                                <th>VideoLink</th>
                                                <th>Created By</th>
                                                {/* <th>CompanyName</th> */}
                                            </tr>
                                        </thead>
                                        <tbody className="tablecss">
                                            {currentRows?.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <label className="checkbox style-a">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedRows?.some(selected => selected === item.STONE)}
                                                                onChange={() => handleRowSelect(item)}

                                                            />
                                                            <div className="checkbox__checkmark"></div>
                                                        </label>
                                                    </td>
                                                    {/* <td>{item.srNo}</td> */}
                                                    <td>{item.STATUS}</td>
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
                                                    <td><a href={`https://www.igi.org/reports/verify-your-report?r=${item.REPORTNO}`} target="_blank" style={{ color: 'blue' }}>PDF</a></td>
                                                    <td><a href={`https://www.dnav360.com/vision/dna.html?d=${item.STONE}&ic=1`} target="_blank" style={{ color: 'blue' }}>VIDEO</a></td>
                                                    <td>{clientName}</td>
                                                    {/* <td>{item.companyName}</td> */}
                                                </tr>
                                            ))}

                                            <tr className="tablecss">
                                                <th></th>
                                                <th colSpan={5}>Total</th>
                                                <th>{totals.CARATS?.toFixed(2)}</th>
                                                <th colSpan={10}></th>
                                                <th></th>
                                                <th>{totals.ASK_DISC?.toFixed(2)}</th>
                                                <th>{totals.pricects?.toFixed(2)}</th>
                                                <th>{totals.amount?.toFixed(2)}</th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                {/* <th></th> */}
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div >
                                    <Pagination>
                                        <Pagination.First onClick={() => handlePageChange(1)} />
                                        <Pagination.Prev onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)} />
                                        {[...Array(totalPages)]?.map((_, index) => (
                                            <Pagination.Item
                                                key={index + 1}
                                                active={index + 1 === currentPage}
                                                onClick={() => handlePageChange(index + 1)}
                                            >
                                                {index + 1}
                                            </Pagination.Item>
                                        ))}
                                        <Pagination.Next onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)} />
                                        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
                                    </Pagination>
                                </div>
                            </> :
                                <>
                                    <div className="table-responsive pt-10" >
                                        <Table striped bordered hover style={{ width: '100%' }} >
                                            <thead className="tablecss" >
                                                <tr>
                                                    <th>
                                                        <label className="checkbox style-a">
                                                            <input type="checkbox"
                                                                onChange={() => {
                                                                    if (selectedRows?.length === data?.length) {
                                                                        setSelectedRows([]);
                                                                    } else {
                                                                        setSelectedRows(data?.map(item => item.FL_SUB_LOT));
                                                                    }
                                                                }}
                                                                checked={selectedRows?.length === data?.length}
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
                                                {currentRows?.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <label className="checkbox style-a">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedRows?.some(selected => selected === item.FL_SUB_LOT)}
                                                                    onChange={() => handleRowSelect(item)}

                                                                />
                                                                <div className="checkbox__checkmark"></div>
                                                            </label>
                                                        </td>
                                                        {/* <td>{item.srNo}</td> */}
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
                                                ))}
                                                {/* 
                                                <tr className="tablecss">
                                                    <th></th>
                                                    <th colSpan={5}>Total</th>
                                                    <th>{totals.CARATS?.toFixed(2)}</th>
                                                    <th colSpan={10}></th>
                                                    <th></th>
                                                    <th>{totals.ASK_DISC?.toFixed(2)}</th>
                                                    <th>{totals.pricects?.toFixed(2)}</th>
                                                    <th>{totals.amount?.toFixed(2)}</th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr> */}
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div >
                                        <Pagination>
                                            <Pagination.First onClick={() => handlePageChange(1)} />
                                            <Pagination.Prev onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)} />
                                            {[...Array(totalPages)]?.map((_, index) => (
                                                <Pagination.Item
                                                    key={index + 1}
                                                    active={index + 1 === currentPage}
                                                    onClick={() => handlePageChange(index + 1)}
                                                >
                                                    {index + 1}
                                                </Pagination.Item>
                                            ))}
                                            <Pagination.Next onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)} />
                                            <Pagination.Last onClick={() => handlePageChange(totalPages)} />
                                        </Pagination>
                                    </div>
                                </>
                        )
                    }
                </div>
            </Layout >
        </>
    );
}

export default withAuth(Demo);