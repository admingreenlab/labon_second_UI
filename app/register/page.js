'use client'
import Link from "next/link"
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";


const countryStateCityInfo = {
    "Australia": {
        "Western Australia": {
            "Broome": ["6725", "6318", "6701"],
            "Coolgardie": ["6429", "6432"]
        },
        "Tasmania": {
            "Hobart": ["7000", "7520"],
            "Launceston": ["7250", "7334"],
            "Burnie": ["7320", "7315"]
        }
    },
    "Belgium": {
        "Flanders": {
            "Antwerp": ["2000", "2018", "2020"],
            "Ghent": ["9000", "9001", "9031"]
        },
        "Wallonia": {
            "Namur": ["5000", "5001", "5002"],
            "Liège": ["4000", "4020", "4030"]
        }
    },
    "Canada": {
        "Alberta": {
            "Calgary": ["8033", "8333", "8035"],
            "Edmonton": ["9040", "9403", "9040"]
        },
        "Manitoba": {
            "Brandon": ["6030", "6030"],
            "Winnipeg": ["5524", "5547", "5248"]
        }
    },
    "China": {
        "Beijing": {
            "Chaoyang": ["100020", "100025", "100028"],
            "Haidian": ["100080", "100081", "100083"]
        },
        "Shanghai": {
            "Pudong": ["200120", "200135", "200136"],
            "Huangpu": ["200001", "200002", "200003"]
        }
    },
    "Germany": {
        "Bavaria": {
            "Munich": ["80331", "80333", "80335"],
            "Nuremberg": ["90402", "90403", "90404"]
        },
        "Hessen": {
            "Frankfurt": ["60306", "60309", "60310"],
            "Darmstadt": ["64283", "64285", "64289"]
        }
    },
    "Hong Kong": {
        "Hong Kong Island": {
            "Central": ["0001", "0002"],
            "Sheung Wan": ["0003", "0004"]
        },
        "Kowloon": {
            "Mong Kok": ["0005", "0006"],
            "Tsim Sha Tsui": ["0007", "0008"]
        }
    },
    "India": {
        "Maharashtra": {
            "Mumbai": ["400001", "400002", "400003"],
            "Pune": ["411001", "411002", "411003"]
        },
        "Karnataka": {
            "Bangalore": ["560001", "560002", "560003"],
            "Mysore": ["570001", "570002"]
        }
    },
    "Israel": {
        "Central District": {
            "Petah Tikva": ["49001", "49002"],
            "Netanya": ["42001", "42002"]
        },
        "Tel Aviv District": {
            "Tel Aviv": ["61000", "61001"],
            "Ramat Gan": ["52000", "52001"]
        }
    },
    "Italy": {
        "Lazio": {
            "Rome": ["00118", "00119", "00120"],
            "Frosinone": ["03100", "03101"]
        },
        "Lombardy": {
            "Milan": ["20121", "20122", "20123"],
            "Bergamo": ["24121", "24122"]
        }
    },
    "Japan": {
        "Tokyo": {
            "Shibuya": ["150-0001", "150-0002"],
            "Shinjuku": ["160-0001", "160-0002"]
        },
        "Osaka": {
            "Osaka": ["530-0001", "530-0002"],
            "Sakai": ["590-0001", "590-0002"]
        }
    },
    "Singapore": {
        "Central Region": {
            "Orchard": ["238841", "238842"],
            "Bugis": ["188021", "188022"]
        },
        "East Region": {
            "Tampines": ["529501", "529502"],
            "Bedok": ["460001", "460002"]
        }
    },
    "Spain": {
        "Catalonia": {
            "Barcelona": ["08001", "08002"],
            "Girona": ["17001", "17002"]
        },
        "Andalusia": {
            "Seville": ["41001", "41002"],
            "Malaga": ["29001", "29002"]
        }
    },
    "Thailand": {
        "Bangkok": {
            "Sukhumvit": ["10110", "10111"],
            "Silom": ["10500", "10501"]
        },
        "Chiang Mai": {
            "Nimmanhaemin": ["50200", "50201"],
            "Old City": ["50202", "50203"]
        }
    },
    "UAE": {
        "Dubai": {
            "Deira": ["0001", "0002"],
            "Jumeirah": ["0003", "0004"]
        },
        "Abu Dhabi": {
            "Corniche": ["0005", "0006"],
            "Al Reem": ["0007", "0008"]
        }
    },
    "UK": {
        "England": {
            "London": ["EC1A", "WC1A"],
            "Manchester": ["M1", "M2"]
        },
        "Scotland": {
            "Edinburgh": ["EH1", "EH2"],
            "Glasgow": ["G1", "G2"]
        }
    },
    "USA": {
        "California": {
            "Los Angeles": ["90001", "90002"],
            "San Francisco": ["94101", "94102"]
        },
        "New York": {
            "New York City": ["10001", "10002"],
            "Buffalo": ["14201", "14202"]
        }
    }

};
export default function Faq() {

    const [inputValue, setInputValue] = useState("");
    const [dropdownValue, setDropdownValue] = useState("");
    const options = ["MRS.", "MS."];

    const [selected, setSelected] = useState("");

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [zips, setZips] = useState([]);

    const handleCountryChange = (e) => {
        const country = e.target.value;
        setSelectedCountry(country);
        setSelectedState("");
        setSelectedCity("");
        setStates(Object.keys(countryStateCityInfo[country] || {}));
        setCities([]);
        setZips([]);
    };

    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);
        setSelectedCity("");
        setCities(Object.keys(countryStateCityInfo[selectedCountry][state] || {}));
        setZips([]);
    };

    const handleCityChange = (e) => {
        const city = e.target.value;
        setSelectedCity(city);
        setZips(countryStateCityInfo[selectedCountry][selectedState][city] || []);
    };

    return (
        <>
            <div className="container" style={{ maxWidth: "100%" }}>
                <div className="row     justify-content-center">
                    <div className="col-md-8 co-12 my-5" >
                        <div className="right-contant">
                            <a href="/">

                                <img src="assets/images/services/svg.svg" style={{ width: "195px", margin: "auto", marginBottom: "20px", display: 'flex', filter: ' invert(1)' }} />
                            </a>
                            <h3 className="text-center my-3">Register</h3>
                            <div className="contact-one__form m-0">
                                <form id="contact-form" className="default-form2 contact-form-validated" >
                                    <div className="input-box">
                                        <input type="text" name="text" placeholder=" Company Name of Account Applicant as appears officially *" required="" />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="input-box flex flex-col">
                                                <label className="text-lg font-medium" style={{ display: "flex" }}>
                                                    <select
                                                        value={dropdownValue}
                                                        onChange={(e) => setDropdownValue(e.target.value)}
                                                        className="rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                    >
                                                        <option value="">
                                                            MR
                                                        </option>
                                                        {options.map((option, index) => (
                                                            <option key={index} value={option}>
                                                                {option}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <input
                                                        type="text"
                                                        name="text"
                                                        value={inputValue}
                                                        onChange={(e) => setInputValue(e.target.value)}
                                                        placeholder="First Name *"
                                                        className="w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                    />
                                                </label>


                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="input-box">
                                                <input type="text" placeholder="Last Name *" name="password" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="input-box">
                                                <input type="email" placeholder="Enter your Email" name="password" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="input-box main-selct">
                                                <select value={selectedCountry} onChange={handleCountryChange}>
                                                    <option value="">Select Country</option>
                                                    {Object.keys(countryStateCityInfo).map((country) => (
                                                        <option key={country} value={country}>
                                                            {country}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            {/* <ReactFlagsSelect
                                                selected={selected}
                                                string
                                                onSelect={(code) => setSelected(code)}
                                                searchPlaceholder="Search state"
                                            /> */}
                                            <div className="input-box main-selct">
                                                <select
                                                    value={selectedState}
                                                    onChange={handleStateChange}
                                                    disabled={!selectedCountry}
                                                >
                                                    <option value="">Select State</option>
                                                    {states.map((state) => (

                                                        <option key={state} value={state}>
                                                            {state}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="input-box main-selct">
                                                <select
                                                    value={selectedCity}
                                                    onChange={handleCityChange}
                                                    disabled={!selectedState}
                                                >
                                                    <option value="">Select City</option>
                                                    {cities.map((city) => (
                                                        <option key={city} value={city}>
                                                            {city}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="input-box">
                                                <input type="text" name="number" placeholder=" Number *" required="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="input-box">
                                                <input type="text" name="about" placeholder="How did you know about us? *" required="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-box">
                                        <input type="email" name="email" placeholder="EMAIL *" required="" />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="input-box">
                                                <input type="password" placeholder="Password *" name="password" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="input-box">
                                                <input type="password" placeholder="Confirm Password *" name="password" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="input-box main-selct">
                                                <select id="country">
                                                    <option value="" selected>Select SecurityQuestion </option>
                                                    <option value="" >What was your childhood nickname</option>
                                                    <option value="" >In what city or town was your first job</option>
                                                    <option value="" >What are the last 5 digits of your drivers license number</option>
                                                    <option value="" >Who was your childhood hero</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="input-box">
                                                <input type="text" placeholder="Answer *" name="password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="form-group">
                                            <input type="checkbox" id="html" />
                                            <label for="html">I agree to the Terms and Conditions</label>
                                        </div>
                                        <a href="/login" class="forget-pwd" data-toggle="modal" style={{ color: "#c29958" }}>Login?</a>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="contact-one__form-btn">
                                                <button className="thm-btn" type="btn" data-loading-text="Please wait...">
                                                    <span className="txt">Register</span>
                                                    <span className="bdrl"></span>
                                                    <span className="bdrr"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}