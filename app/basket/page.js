'use client'
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination';

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
            <Container fluid className="text-center">
                <h6 className="mt-3">Basket</h6>
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
                                    <td>    <input
                                        type="checkbox"
                                        checked={selectedRows.includes(item.srNo)}
                                        onChange={() => handleRowSelect(item.srNo)}
                                    /></td>
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
            </Container>

        </>
    );
}

export default Basket;
