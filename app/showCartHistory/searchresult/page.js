'use client'
import Axios from '@/components/auth/axios';
import Layout from '../../../components/layout/Layout';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import withAuth from '@/components/auth/withAuth';
import Loader from '@/public/assets/images/loader/Ellipsis@1x-1.3s-200px-200px.svg';
import Image from 'next/image';
import { Pagination } from 'react-bootstrap';

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
        backgroundColor: '#c19a6b',
        color: 'white',
        padding: '10px',
        // fontWeight: 'bold',
        textAlign: 'center',
    },
    content: {
        padding: '20px'
    },
    row: {
        display: 'flex',
        // marginBottom: '15px',
        borderBottom: '1px solid rgb(153, 153, 153)'
    },
    label: {
        backgroundColor: '#c19a6b',
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
        backgroundColor: '#c19a6b',
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
        marginTop: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: '20px'
    },
    section: {
        flex: 1
    },
    heading: {
        color: '#c19a6b',
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

const InvoiceTable = () => {
    const searchParams = useSearchParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pageSize, setPageSize] = useState(50);
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setcount] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const startDate = searchParams.get('startDate');
                const endDate = searchParams.get('endDate');
                const transactionType = searchParams.get('transactionType');

                console.log("sddssd", transactionType)

                // Check if we have the required parameters
                if (!startDate || !endDate) {
                    setIsLoading(false);
                    return;
                }

                const payload = {
                    startDate,
                    endDate,
                    // clientName,
                    // transactionType: status,
                    ...(transactionType && { transactionType: transactionType.split(",").map((value) => Number(value)) }),
                    // INVETORYTYPE: ['POLISH-SINGLE']  
                }

                console.log(payload);

                // const cleanPayload = Object.fromEntries(
                //     Object.entries(payload).filter(([_, value]) => value !== undefined && value !== "" && !(Array.isArray(value) && value.length === 0))
                // );

                // console.log(cleanPayload);


                const response = await Axios.post(`transation/getuserOutwardTransactionData?page=${currentPage}&pageSize=${pageSize}`, payload);

                if (!response.ok) {
                    console.log('Failed to fetch invoice data');
                }


                setData(response.data?.Data);
                setcount(response?.data?.count)
            } catch (err) {
                console.log(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [searchParams,currentPage]);

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${month}/${day}/${year} ${hours}:${minutes.toString().padStart(2, '0')}`;
    };

    const calculateDays = (transactionDate) => {
        const today = new Date();
        const transDate = new Date(transactionDate);
        const diffTime = Math.abs(today - transDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const totals = {
        pcs: data?.reduce((sum, row) => sum + row.PCS, 0),
        cts: data?.reduce((sum, row) => sum + row.CTS, 0),
        invoiceTotal: data?.reduce((sum, row) => sum + row.INV_AMT, 0),
        totalAmtS: data?.reduce((sum, row) => sum + row.INV_AMT, 0),
    };

    const totalRecords = count.COUNT;
    const totalPages = Math.ceil(totalRecords / pageSize);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        console.log('currentPage', currentPage)
    },[currentPage])

    if (isLoading) {
        return (
            <div style={{ display: 'flex', height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Image width='100' height='100' src={Loader} alt={"loading"} />
            </div>
        );
    }


    return (

        <Layout headerStyle={2} footerStyle={1}>
            <div className="w-full overflow-x-auto " style={{ marginBottom: '30px', overflow: 'overlay', marginTop: '65px' }}>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#C19A6B] text-black" style={{ backgroundColor: 'rgb(201 177 138)' }}>
                            <th className="p-2 border border-gray-300 text-left">No</th>
                            <th className="p-2 border border-gray-300 text-left">OrderNo</th>
                            {/* <th className="p-2 border border-gray-300 text-left">Date</th> */}
                            {/* <th className="p-2 border border-gray-300 text-left">Memo Terms</th> */}
                            <th className="p-2 border border-gray-300 text-left">No. Of Days</th>
                            <th className="p-2 border border-gray-300 text-left">CreatedBy</th>
                            <th className="p-2 border border-gray-300 text-left">Customer Name</th>
                            <th className="p-2 border border-gray-300 text-left">Pcs</th>
                            <th className="p-2 border border-gray-300 text-left">Cts</th>
                            <th className="p-2 border border-gray-300 text-left">Invoice Total</th>
                            <th className="p-2 border border-gray-300 text-left">Total Amt $</th>
                            <th className="p-2 border border-gray-300 text-left">Inv Report</th>
                            <th className="p-2 border border-gray-300 text-left">Memo Report</th>
                            {/* <th className="p-2 border border-gray-300 text-left">Trans Type</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="p-2 border border-gray-300">{row?.RN}</td>
                                <td className="p-2 border border-gray-300">{row?.FL_BILL_NO}</td>
                                {/* <td className="p-2 border border-gray-300">{formatDate(row.FL_TRANS_DATE)}</td> */}
                                {/* <td className="p-2 border border-gray-300">{row?.TERM_NAME}</td> */}
                                <td className="p-2 border border-gray-300">{calculateDays(row.FL_TRANS_DATE)}</td>
                                <td className="p-2 border border-gray-300">{row?.USERID}</td>
                                <td className="p-2 border border-gray-300">{row?.PARTY_NAME}</td>
                                <td className="p-2 border border-gray-300">{row?.PCS}</td>
                                <td className="p-2 border border-gray-300">{row?.CTS?.toFixed(2)}</td>
                                <td className="p-2 border border-gray-300">{row?.INV_AMT?.toFixed(2)}</td>
                                <td className="p-2 border border-gray-300">{row?.INV_AMT?.toFixed(2)}</td>
                                <td className="p-2 border border-gray-300">{row?.INV_TYPE}</td>
                                <td className="p-2 border border-gray-300">{row?.memoReport}</td>
                                {/* <td className="p-2 border border-gray-300">{row?.TRANS_TYPE}</td> */}
                            </tr>
                        ))}
                        <tr className="bg-[#C19A6B] text-black font-bold">
                            <td colSpan={5} className="p-2 border border-gray-300 text-left">Total</td>
                            <td className="p-2 border border-gray-300">{totals?.pcs}</td>
                            <td className="p-2 border border-gray-300">{totals?.cts?.toFixed(2)}</td>
                            <td className="p-2 border border-gray-300">{totals?.invoiceTotal?.toFixed(2)}</td>
                            <td className="p-2 border border-gray-300">{totals?.totalAmtS?.toFixed(2)}</td>
                            <td colSpan={3} className="p-2 border border-gray-300"></td>
                        </tr>
                    </tbody>
                </table>
                {
                    !isLoading && <Pagination>
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
        </Layout>
    );
};

export default withAuth(InvoiceTable);