'use client'
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import { useRouter } from 'next/navigation'
import Axios, { setAuthToken } from '@/components/auth/axios'

export default function Home() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            const response = await Axios.post('/userauth', JSON.stringify({
                username: formData.username,
                password: formData.password,
            }),
            )

            if (response.status === 200) {
                setAuthToken(response.data, formData.rememberMe)
                router.push('/serch') // Redirect to dashboard after successful login
            } else {
                setError(data.message || 'Login failed')
            }
        } catch (err) {
            setError('An error occurred. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <div className="main-containe">
                    <div className="container" style={{ maxWidth: "100%" }}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-5 co-12">
                                <div className="right-contant">
                                    <h3 className="text-center my-3">Login</h3>
                                    {error && (
                                        <div className="alert alert-danger text-center">
                                            {error}
                                        </div>
                                    )}
                                    <div className="contact-one__form m-0">
                                        <form onSubmit={handleSubmit} className="default-form2 contact-form-validated">
                                            <div className="input-box">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    placeholder="Username or Email *"
                                                    value={formData.username}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="input-box">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    placeholder="Enter your Password *"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="form-group">
                                                    <input
                                                        type="checkbox"
                                                        id="rememberMe"
                                                        name="rememberMe"
                                                        checked={formData.rememberMe}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="rememberMe">Remember Me</label>
                                                </div>
                                                <a href="/forgot-password" className="forget-pwd" style={{ color: "#c29958" }}>
                                                    Forget Password?
                                                </a>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <div className="contact-one__form-btn">
                                                        <button
                                                            className="thm-btn"
                                                            type="submit"
                                                            disabled={loading}
                                                        >
                                                            <span className="txt">
                                                                {loading ? 'Logging in...' : '- Login -'}
                                                            </span>
                                                            <span className="bdrl"></span>
                                                            <span className="bdrr"></span>
                                                        </button>
                                                    </div>
                                                    <div className="contact-one__form-btn">
                                                        <a href='/register' className="thm-btn">
                                                            <span className="txt">Register</span>
                                                            <span className="bdrl"></span>
                                                            <span className="bdrr"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}