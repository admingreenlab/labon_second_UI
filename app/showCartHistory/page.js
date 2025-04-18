'use client';
import Layout from '../../components/layout/Layout';
import React, { useEffect, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import { redirect, useRouter } from 'next/navigation';
import Axios from '@/components/auth/axios';
import withAuth from '@/components/auth/withAuth';
// import { useNavigate } from 'react-router-dom';

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
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
    '@media (max-width: 768px)': {
        label: {
            width: '122px !important',
        },
    }
};

const WebOrderHistory = () => {

    const router = useRouter();


    const [fromDate, setFromDate] = useState(moment());
    const [toDate, setToDate] = useState(moment().add(5, 'days'));
    const [clientName, setClientName] = useState('');
    const [status, setStatus] = useState([]);


    useEffect(() => {
        const user = localStorage.getItem('user') || sessionStorage.getItem('user');
        if (user) {
            // console.log('user.FL_USER_NAME',JSON.parse(user)?.FL_USER_NAME)
            setClientName(JSON.parse(user)?.FL_USER_NAME)
        }
    }, [])

    useEffect(() => {
        let isMounted = true; // Track whether the component is still mounted

        const fetchData = async () => {
            try {
                const response = await Axios.get('/master/helper?trtype=INWARD');
                if (isMounted) {
                    console.log(response.data); // Update state only if the component is still mounted
                }
            } catch (err) {
                if (isMounted) {
                    console.log("Failed to fetch data. Please try again."); // Set error state
                }
                console.error("Error fetching data:", err);
            }
        };

        fetchData(); // Call the async function

        // Cleanup function to prevent state updates on an unmounted component
        return () => {
            isMounted = false;
        };
    }, []);


    const handleSubmit = async () => {
        const payload = {
            startDate: fromDate.format("MM-DD-YYYY"),
            endDate: toDate.format("MM-DD-YYYY"),
            // clientName,
            // transactionType: status,
            transactionType: status.join(","),
            // INVETORYTYPE: ['POLISH-SINGLE']  
        };

        const queryString = new URLSearchParams(payload).toString();
        console.log('Query String:', queryString);

        console.log('Payload:', payload);

        // try {
        // const response = await Axios.post('transation/getuserOutwardTransactionData', payload);

        // if (response.ok) {
        router.push(`/showCartHistory/searchresult?${queryString}`);
        // } else {
        // setError(data.message || 'Registration failed');
        // }
        // } catch (err) {
        //     setError('An error occurred. Please try again.');
        // }


        // alert(JSON.stringify(payload, null, 2));
    };

    const handleCheckboxChange = (value) => (e) => {
        if (e.target.checked) {
            setStatus((prevState) => [...prevState, value]);
        } else {
            setStatus((prevState) => prevState.filter((item) => item !== value));
        }
    };


    return (
        <Layout headerStyle={2} footerStyle={1}>
            <div className="same-secton my-3">
                <div className=" auto-container">
                    <div className="d-flex align-items-center gap-3 ">

                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#c29958" className="bi bi-clock-history" viewBox="0 0 16 16">
                            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                        </svg>
                        Weborder History
                    </div>
                </div>
            </div>
            <div style={styles.container}>
                <div className='orderHistory' style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ maxWidth: '700px', border: '1px solid #ccc', width: '100%' }}>
                        <h4 style={styles.header}>Weborder History</h4>
                        <h4></h4>
                        <div >
                            <div style={styles.row}   >
                                <div className='wtitle'>From</div>
                                <div style={styles.value} >
                                    <LocalizationProvider dateAdapter={AdapterMoment} className='w-100' >
                                        <DatePicker
                                            className='w-100'
                                            value={fromDate}
                                            onChange={(date) => setFromDate(date).format("MM-DD-YYYY")}
                                            // placeholder="Select start date"
                                            label="From Date"
                                            style={styles.input}
                                        />
                                    </LocalizationProvider>
                                    {/* <input style={styles.input} type="text" defaultValue="11/02/2025" /> */}
                                </div>
                            </div>
                            <div style={styles.row}>
                                <div className='wtitle'>To</div>
                                <div style={{ ...styles.value }}>
                                    <LocalizationProvider dateAdapter={AdapterMoment}>
                                        <DatePicker
                                            className='w-100'
                                            value={toDate}
                                            onChange={(date) => setToDate(date).format("MM-DD-YYYY")}
                                            label="To Date"
                                            style={{ ...styles.input }}
                                        />
                                    </LocalizationProvider>
                                    {/* <input style={styles.input} type="text" defaultValue="18/02/2025" /> */}
                                </div>
                            </div>
                            <div style={styles.row}>
                                <div className='wtitle'>Client Name</div>
                                {/* <input
                                    type="text"
                                    value={clientName}
                                    // onChange={(e) => setClientName(e.target.value)}
                                    placeholder="Enter client name"
                                    style={styles.input}
                                    disabled
                                /> */}
                                <div style={{ flex: 1, padding: '10px', textAlign: 'center' }}>{clientName}</div>
                            </div>
                            <div style={styles.row}>
                                <div className='wtitle'>Status</div>
                                <div style={{
                                    display: 'flex',
                                    gap: '20px',
                                    padding: '10px',
                                    flexWrap: 'wrap'
                                }}>
                                    <form>

                                        <div style={styles.statusItem}>
                                            <input
                                                type="checkbox"
                                                id="sold"
                                                checked={status.includes(35)}
                                                onChange={handleCheckboxChange(35)}
                                            />
                                            <label htmlFor="sold">Sold</label>
                                        </div>
                                        <div style={styles.statusItem}>
                                            <input
                                                type="checkbox"
                                                id="memo"
                                                checked={status.includes(33)}
                                                onChange={handleCheckboxChange(33)}
                                            />
                                            <label htmlFor="memo">Memo</label>
                                        </div>
                                        <div style={styles.statusItem}>
                                            <input
                                                type="checkbox"
                                                id="InterestedSlip"
                                                checked={status.includes(47)}
                                                onChange={handleCheckboxChange(47)}
                                            />
                                            <label htmlFor="interested">Hold</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <button style={styles.showCart} onClick={handleSubmit}>Show Open Cart</button>
                    </div>
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
    );
};

export default withAuth(WebOrderHistory);