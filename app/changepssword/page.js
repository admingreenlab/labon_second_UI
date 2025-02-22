'use client';
import Axios from "@/components/auth/axios";
import Layout from "../../components/layout/Layout";
import React, { useState } from 'react';

export default function Home() {
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        retypePassword: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate passwords
        if (formData.newPassword !== formData.retypePassword) {
            setError('New password and retype password do not match.');
            return;
        }

        try {
            // Send data to the backend
            const response = await Axios.post('user/changePassword', {
                old_password: formData.oldPassword,
                new_password: formData.newPassword,
            });

            const result = await response.data;



            if (response.status === 200) {
                // Success
                setSuccess(result.message);
                setError('');
                setFormData({ oldPassword: '', newPassword: '', retypePassword: '' }); // Reset form
            } else {
                // Error
                setError(result.message || 'An error occurred while changing the password.');
                setSuccess('');
            }
        } catch (err) {
            // if (response.data.message === "Old password is incorrect") {
                // setError("Old password is incorrect");
            // console.error(err);
            setError(err.response.data.message);
            setSuccess('');
        }
    };

    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <div className="same-secton my-3">
                    <div className="auto-container">
                        <div className="d-flex align-items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#c29958" className="bi bi-key" viewBox="0 0 16 16">
                                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
                                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                            </svg>
                            Change User Password
                        </div>
                    </div>
                </div>

                {/* Start Team Details */}
                <section className="team-carousel-page">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="main-box-change">
                                    <div>
                                        <h4>Change User Password</h4>
                                    </div>
                                    <form id="contact-form" className="default-form2 contact-form-validated" onSubmit={handleSubmit}>
                                        {error && <div className="text-danger mb-3">{error}</div>}
                                        {success && <div className="text-success mb-3">{success}</div>}
                                        <ul>
                                            <li>
                                                <div className="row">
                                                    <div className="col-xl-4">
                                                        <div className="left-name">Old Password:</div>
                                                    </div>
                                                    <div className="col-xl-8">
                                                        <input
                                                            type="password"
                                                            placeholder="Type Old Password"
                                                            name="oldPassword"
                                                            value={formData.oldPassword}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-xl-4">
                                                        <div className="left-name">New Password:</div>
                                                    </div>
                                                    <div className="col-xl-8">
                                                        <input
                                                            type="password"
                                                            placeholder="Type New Password"
                                                            name="newPassword"
                                                            value={formData.newPassword}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-xl-4">
                                                        <div className="left-name">Retype Password:</div>
                                                    </div>
                                                    <div className="col-xl-8">
                                                        <input
                                                            type="password"
                                                            placeholder="Retype New Password"
                                                            name="retypePassword"
                                                            value={formData.retypePassword}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="col-12 mb-3 mt-3">
                                            <div className="mainbtn">
                                                <button className="button" type="submit">
                                                    <div className="backdrop">
                                                        <span>Change Password</span>
                                                    </div>
                                                    <div className="overlay">
                                                        <span>Change Password</span>
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
            </Layout>
        </>
    );
}