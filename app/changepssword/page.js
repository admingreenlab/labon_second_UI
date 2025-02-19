'use client';
import Layout from "../../components/layout/Layout"
import React, { useEffect, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import { redirect } from 'next/navigation';

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
    },
    orderHistory: {
        maxWidth: '1200px',
        // border: '1px solid rgb(207 207 207)',
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
        borderBottom: '1px solid rgb(207 207 207)'
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
        marginTop: '40px'
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
export default function Home() {
    const [fromDate, setFromDate] = useState(moment());
    const [toDate, setToDate] = useState(moment().add(5, 'days'));
    const [clientName, setClientName] = useState('Kripal');
    const [status, setStatus] = useState([]);

    useEffect(() => {
        console.log('status', status);
    }, [status])

    const handleSubmit = () => {
        const payload = {
            fromDate,
            toDate,
            clientName,
            status,
        };

        console.log('Payload:', payload);

        redirect('/showCartHistory/searchresult');
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
        <>
            <Layout headerStyle={2} footerStyle={1} >
                {/* Start Team Details */}
                <section className="team-carousel-page">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="main-box-change">
                                    <div><h4>Change user Password</h4></div>
                                    <form id="contact-form" className="default-form2 contact-form-validated">

                                        <ul>
                                            <li>
                                                <div className="row">
                                                    <div className="col-xl-4">
                                                        <div className="left-name">Your Username:</div>
                                                    </div>
                                                    <div className="col-xl-8">
                                                        <div> krigel</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-xl-4">
                                                        <div className="left-name">New Password:</div>
                                                    </div>
                                                    <div className="col-xl-8">
                                                        <input type="password" id="pass" name="pass" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-xl-4">
                                                        <div className="left-name">Retype Password:</div>
                                                    </div>
                                                    <div className="col-xl-8">
                                                        <input type="password" id="repass" name="repass" />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="col-12 mb-3 mt-3">
                                            <div className="mainbtn">
                                                <button class="button">
                                                    <div class="backdrop">
                                                        <span>Change
                                                            Password</span>
                                                    </div>
                                                    <div class="overlay">
                                                        <span>Change
                                                            Password</span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Team Details */}
            </Layout>
        </>
    )
}