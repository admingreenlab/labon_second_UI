"use client"
import Axios from "@/components/auth/axios";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { SearchContext } from "@/components/context/SearchContext";

const categories = {
    Shape: [
        { name: "Round", shapeicon: "ico-shp icon-round-shape" },
        { name: "Oval", shapeicon: "ico-shp icon-oval-shape" },
        { name: "Pear", shapeicon: "ico-shp icon-pear-shape" },
        { name: "Marquise", shapeicon: "ico-shp icon-marquise-shape" },
        { name: "Heart", shapeicon: "ico-shp icon-heart-shape" },
        { name: "Emerald", shapeicon: "ico-shp icon-emerald-shape" },
        { name: "Cushion", shapeicon: "ico-shp icon-cushion-shape" },
        { name: "Princess", shapeicon: "ico-shp icon-princess-shape" },
        { name: "Radiant", shapeicon: "ico-shp icon-radiant-shape" },
        { name: "Asscher", shapeicon: "ico-shp icon-asscher-shape" }
        // { name: "Others", shapeicon: "ico-shp icon-others-shape" },
    ],
    Color: ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'FANCY INTENCE PINK', 'FANCY BROWN', 'BLUE', 'FANCY INTENSE BLUE', 'FANCY INTENCE YELLOW', 'FANCY VIIVD PINK'],
    Clarity: ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2', 'SI3', 'I1', 'I2', 'I3'],
    Cut: ['ID', 'EX', 'VG'],
    Lab: ['IGI', 'GIA', 'GSI', 'NONC', 'GCAL', 'NO_CERT'],
    Polish: ['ID', 'EX', 'VG', 'GD', 'FR'],
    Symm: ['EX', 'VG', 'GD', 'FR', 'G'],
    Flour: ["NON", "FNT", "MED", "SL", "VSL", "STG", "VST"],
};

const DiamondFilter = () => {
    const { setSearchState } = useContext(SearchContext);
    const router = useRouter();
    const [selectedOptions, setSelectedOptions] = useState({});
    const [carat, setCarat] = useState({ from: "", to: "" });
    const [US$CT, setUS$CT] = useState({ from: "", to: "" });
    const [stoneId, setStoneId] = useState("");
    const [data, setData] = useState();
    const [isOpen, setIsOpen] = useState(false);

    const [error, setError] = useState(false);

    const [isAdvanceSearchOpen, setIsAdvanceSearchOpen] = useState(false);
    const [advanceSearchFields, setAdvanceSearchFields] = useState({
        tableFrom: "",
        tableTo: "",
        depthFrom: "",
        depthTo: "",
        ratioFrom: "",
        ratioTo: "",
        memo: false,
        available: false,
        hold: false,
    });


    const handleCheckboxChange = (category, option) => {
        setSelectedOptions((prev) => {
            const newSelected = { ...prev };
            if (!newSelected[category]) newSelected[category] = [];
            if (newSelected[category].includes(option)) {
                newSelected[category] = newSelected[category].filter((item) => item !== option);
            } else {
                newSelected[category] = [...newSelected[category], option];
            }
            return newSelected;
        });
    };
    const [showVVS2, setShowVVS2] = useState(false); // State to show/hide VVS2

    const handleOthersClick = () => {
        setShowVVS2((prev) => !prev); // Toggle visibility
    };

    useEffect(() => {
        let isMounted = true; // Track whether the component is still mounted

        const fetchData = async () => {
            try {
                const response = await Axios.get('search/parmas?type=single');
                if (isMounted) {
                    setData(response.data.data); // Update state only if the component is still mounted
                }
            } catch (err) {
                if (isMounted) {
                    setError("Failed to fetch data. Please try again."); // Set error state
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


    // Handle advance search toggle
    const handleAdvanceSearchClick = () => {
        setIsAdvanceSearchOpen((prev) => !prev);
    };

    // Handle input changes for advance search fields
    const handleAdvanceSearchInputChange = (field, value) => {
        setAdvanceSearchFields((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const [remark, setRemark] = useState('');


    const handleSubmit = async () => {

        const payload = {
            CLARITY: selectedOptions.Clarity || [],
            COLOR: selectedOptions.Color || [],
            CUT: selectedOptions.Cut || [],
            FromCarate: carat.from || "",
            ToCarate: carat.to || "",
            FromUSCT: US$CT.from || "",
            ToUSCT: US$CT.to || "",
            LAB: selectedOptions.Lab || [],
            POLISH: selectedOptions.Polish || [],
            SHAPE: selectedOptions.SHAPES || [],
            SYMM: selectedOptions.Symm || [],
            stoneCert: stoneId || "",
            FLOUR: selectedOptions.Flour || [],
            ...(isAdvanceSearchOpen && {

                FromTable_per: advanceSearchFields.tableFrom || "",
                ToTable_per: advanceSearchFields.tableTo || "",

                FromDepth_per: advanceSearchFields.depthFrom || "",
                ToDepth_per: advanceSearchFields.depthTo || "",

                FromRatio: advanceSearchFields.ratioFrom || "",
                ToRatio: advanceSearchFields.ratioTo || "",

                ...(advanceSearchFields.available && { A: true }),
                ...(advanceSearchFields.memo && { Memo: true }),
                ...(advanceSearchFields.hold && { Hold: true }),
            }),
        };

        const cleanPayload = Object.fromEntries(
            Object.entries(payload).filter(([_, value]) => value !== undefined && value !== "" && !(Array.isArray(value) && value.length === 0))
        );

        const formData = {
            remark: remark,
            data: cleanPayload
        };

        try {
            const response = await Axios.post('mail/postdemand', JSON.stringify(formData));

            if (response.status === 200) {
                console.log('search seuccess', response.data)
                setIsOpen(false);
                setRemark('');
            } else {
                console.log(data.message || 'failed');
            }
        } catch (err) {
            console.log('An error occurred. Please try again.', err);
        }

    };



    const handlesearch = async () => {
        const payload = {
            CLARITY: selectedOptions.Clarity || [],
            COLOR: selectedOptions.Color || [],
            CUT: selectedOptions.Cut || [],
            FromCarate: carat.from || "",
            ToCarate: carat.to || "",
            FromUSCT: US$CT.from || "",
            ToUSCT: US$CT.to || "",
            LAB: selectedOptions.Lab || [],
            POLISH: selectedOptions.Polish || [],
            SHAPE: selectedOptions.SHAPES || [],
            SYMM: selectedOptions.Symm || [],
            stoneCert: stoneId || "",
            FLOUR: selectedOptions.Flour || [],
            ...(isAdvanceSearchOpen && {

                FromTable_per: advanceSearchFields.tableFrom || "",
                ToTable_per: advanceSearchFields.tableTo || "",

                FromDepth_per: advanceSearchFields.depthFrom || "",
                ToDepth_per: advanceSearchFields.depthTo || "",

                FromRatio: advanceSearchFields.ratioFrom || "",
                ToRatio: advanceSearchFields.ratioTo || "",

                ...(advanceSearchFields.available && { A: true }),
                ...(advanceSearchFields.memo && { Memo: true }),
                ...(advanceSearchFields.hold && { Hold: true }),
            }),
        };

        const cleanPayload = Object.fromEntries(
            Object.entries(payload).filter(([_, value]) => value !== undefined && value !== "" && !(Array.isArray(value) && value.length === 0))
        );

        setSearchState(cleanPayload);

        router.push(`/serch/searchcriteria`)

        // try {
        //     const response = await Axios.post('/search/stoneUser', JSON.stringify(cleanPayload));

        //     if (response.status === 200) {
        //         router.push(`/serch/searchcriteria`)
        //         console.log('search seuccess')
        //     } else {
        //         setError(data.message || 'Registration failed');
        //     }
        // } catch (err) {
        //     setError('An error occurred. Please try again.');
        // }
    };


    return (
        <div className="">
            <div className="row">
                <div className="col-12">

                    <div className="main-box">
                        <div className="checkbox-group">
                            {categories.Shape.map((option) => (
                                <span key={option.name}
                                    className={`checkbox-label ${selectedOptions.SHAPES?.includes(option.name.toUpperCase()) ? 'selected' : ''}`}
                                    onClick={() => handleCheckboxChange("SHAPES", option.name.toUpperCase())}>
                                    {option.name}
                                    <i className={option.shapeicon}></i>
                                </span>
                            ))}

                            <div className="checkbox-group">
                                {/* Others - Click to Toggle VVS2 */}
                                <span className="checkbox-label" onClick={handleOthersClick}>
                                    Others
                                    <i className="ico-shp icon-others-shape"></i>
                                </span>
                            </div>
                            {showVVS2 && (
                                <div className="checkbox-group">
                                    {data?.SHAPE?.map((option) => (
                                        <span key={option.name}
                                            className={`checkbox-label ${selectedOptions.SHAPES?.includes(option.name.toUpperCase()) ? 'selected' : ''}`}
                                            onClick={() => handleCheckboxChange("SHAPES", option.name.toUpperCase())}>
                                            {option.name}
                                            <i className={option.CLASS_NAME}></i>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="main-box">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="mainbox">
                                    <h5>Carat</h5>
                                    <div className="row">
                                        <div className="col-6">
                                            <input
                                                type="text"
                                                placeholder="From"
                                                value={carat.from}
                                                onChange={(e) => setCarat({ ...carat, from: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <input
                                                type="text"
                                                placeholder="To"
                                                value={carat.to}
                                                onChange={(e) => setCarat({ ...carat, to: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="mainbox">
                                    <h5>Stone Id #/Cert #</h5>
                                    <textarea
                                        placeholder="Enter Stone Id or Certificate Number"
                                        value={stoneId}
                                        onChange={(e) => setStoneId(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="main-box">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                {["Color"].map((category) => (
                                    <div className="mainbox" key={category}>
                                        <h5>{category}</h5>
                                        <div className="checkbox-group">
                                            {categories[category].map((option) => (
                                                <span key={option}
                                                    className={`checkbox-label ${selectedOptions[category]?.includes(option) ? 'selected' : ''}`}
                                                    onClick={() => handleCheckboxChange(category, option)}>
                                                    {option}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-6 col-12">
                                {["Clarity"].map((category) => (
                                    <div className="mainbox" key={category}>
                                        <h5>{category}</h5>
                                        <div className="checkbox-group">
                                            {categories[category].map((option) => (
                                                <span key={option}
                                                    className={`checkbox-label ${selectedOptions[category]?.includes(option) ? 'selected' : ''}`}
                                                    onClick={() => handleCheckboxChange(category, option)}>
                                                    {option}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="main-box">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                {["Cut"].map((category) => (
                                    <div className="mainbox" key={category}>
                                        <h5>{category}</h5>
                                        <div className="checkbox-group">
                                            {categories[category].map((option) => (
                                                <span key={option}
                                                    className={`checkbox-label ${selectedOptions[category]?.includes(option) ? 'selected' : ''}`}
                                                    onClick={() => handleCheckboxChange(category, option)}>
                                                    {option}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-6 col-12">
                                {["Lab"].map((category) => (
                                    <div className="mainbox" key={category}>
                                        <h5>{category}</h5>
                                        <div className="checkbox-group">
                                            {categories[category].map((option) => (
                                                <span key={option}
                                                    className={`checkbox-label ${selectedOptions[category]?.includes(option) ? 'selected' : ''}`}
                                                    onClick={() => handleCheckboxChange(category, option)}>
                                                    {option}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="main-box">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                {["Polish"].map((category) => (
                                    <div className="mainbox" key={category}>
                                        <h5>{category}</h5>
                                        <div className="checkbox-group">
                                            {categories[category].map((option) => (
                                                <span key={option}
                                                    className={`checkbox-label ${selectedOptions[category]?.includes(option) ? 'selected' : ''}`}
                                                    onClick={() => handleCheckboxChange(category, option)}>
                                                    {option}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="mainbox">
                                    <h5>US$/CT</h5>
                                    <div className="row">
                                        <div className="col-6">
                                            <input
                                                type="text"
                                                placeholder="From"
                                                value={US$CT.from}
                                                onChange={(e) => setUS$CT({ ...US$CT, from: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <input
                                                type="text"
                                                placeholder="To"
                                                value={US$CT.to}
                                                onChange={(e) => setUS$CT({ ...US$CT, to: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="main-box">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                {["Symm"].map((category) => (
                                    <div className="mainbox" key={category}>
                                        <h5>{category}</h5>
                                        <div className="checkbox-group">
                                            {categories[category].map((option) => (
                                                <span key={option}
                                                    className={`checkbox-label ${selectedOptions[category]?.includes(option) ? 'selected' : ''}`}
                                                    onClick={() => handleCheckboxChange(category, option)}>
                                                    {option}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-6 col-12">
                                {["Flour"].map((category) => (
                                    <div className="mainbox" key={category}>
                                        <h5>{category}</h5>
                                        <div className="checkbox-group">
                                            {categories[category].map((option) => (
                                                <span key={option}
                                                    className={`checkbox-label ${selectedOptions[category]?.includes(option) ? 'selected' : ''}`}
                                                    onClick={() => handleCheckboxChange(category, option)}>
                                                    {option}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {isAdvanceSearchOpen && (
                    <>
                        <div className="col-12">
                            <div className="main-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="mainbox">
                                            <h5>Table %</h5>
                                            <div className="row">
                                                <div className="col-6">
                                                    <input
                                                        type="number"
                                                        placeholder="From"
                                                        value={advanceSearchFields.tableFrom}
                                                        onChange={(e) =>
                                                            handleAdvanceSearchInputChange("tableFrom", e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <input
                                                        type="number"
                                                        placeholder="To"
                                                        value={advanceSearchFields.tableTo}
                                                        onChange={(e) =>
                                                            handleAdvanceSearchInputChange("tableTo", e.target.value)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <div className="mainbox">
                                            <h5>Depth %</h5>
                                            <div className="row">
                                                <div className="col-6">
                                                    <input
                                                        type="number"
                                                        placeholder="From"
                                                        value={advanceSearchFields.depthFrom}
                                                        onChange={(e) =>
                                                            handleAdvanceSearchInputChange("depthFrom", e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <input
                                                        type="number"
                                                        placeholder="To"
                                                        value={advanceSearchFields.depthTo}
                                                        onChange={(e) =>
                                                            handleAdvanceSearchInputChange("depthTo", e.target.value)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-12">
                            <div className="main-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="mainbox">
                                            <h5>Ratio</h5>
                                            <div className="row">
                                                <div className="col-6">
                                                    <input
                                                        type="number"
                                                        placeholder="From"
                                                        value={advanceSearchFields.ratioFrom}
                                                        onChange={(e) =>
                                                            handleAdvanceSearchInputChange("ratioFrom", e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <input
                                                        type="number"
                                                        placeholder="To"
                                                        value={advanceSearchFields.ratioTo}
                                                        onChange={(e) =>
                                                            handleAdvanceSearchInputChange("ratioTo", e.target.value)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <div className="mainbox">
                                            <h5>Status</h5>
                                            <div className="" style={{ display: 'flex', gap: '25px' }}>
                                                <div className="" style={{ display: 'flex' }} >
                                                    <label style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                                        <input
                                                            type="checkbox"
                                                            checked={advanceSearchFields.available}
                                                            onChange={(e) =>
                                                                handleAdvanceSearchInputChange(
                                                                    "available",
                                                                    e.target.checked
                                                                )
                                                            }
                                                            style={{ width: '23px' }}
                                                        />
                                                        Available
                                                    </label>
                                                </div>
                                                <div className="" style={{ display: 'flex' }} >
                                                    <label style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                                        <input
                                                            type="checkbox"
                                                            checked={advanceSearchFields.memo}
                                                            onChange={(e) =>
                                                                handleAdvanceSearchInputChange("memo", e.target.checked)
                                                            }
                                                            style={{ width: '23px' }}
                                                        />
                                                        Memo
                                                    </label>
                                                </div>
                                                <div className="" style={{ display: 'flex' }} >
                                                    <label style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                                        <input
                                                            type="checkbox"
                                                            checked={advanceSearchFields.hold}
                                                            onChange={(e) =>
                                                                handleAdvanceSearchInputChange("hold", e.target.checked)
                                                            }
                                                            style={{ width: '23px' }}
                                                        />
                                                        Hold
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                <div className="col-12 mb-3">
                    <div className="mainbtn">
                        <span className="button">
                            <div className="backdrop">
                                <button onClick={handlesearch} style={{ color: 'white' }}>Search</button>
                            </div>
                            <div className="overlay">
                                <button onClick={handlesearch} style={{ color: 'white' }}>Search</button>
                            </div>
                        </span>
                        <span className="button">
                            <div className="backdrop">
                                <button style={{ color: 'white' }} onClick={handleAdvanceSearchClick}>
                                    {isAdvanceSearchOpen ? "Close Advance Search" : "Advance Search"}
                                </button>
                            </div>
                            <div className="overlay">
                                <button style={{ color: 'white' }} onClick={handleAdvanceSearchClick}>
                                    {isAdvanceSearchOpen ? "Close Advance Search" : "Advance Search"}
                                </button>
                            </div>
                        </span>
                        <button className="button" onClick={() => setIsOpen(true)}>
                            <div className="backdrop">
                                <span>Post Your Demand</span>
                            </div>
                            <div className="overlay">
                                <span>Post Your Demand</span>
                            </div>
                        </button>
                        {/* <button
                            
                            className="px-4 py-2 bg-blue-500 text-white rounded-md">
                            Open Modal
                        </button> */}

                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h2>Post Your Demand</h2>
                            <span onClick={() => setIsOpen(false)} className="close-btn">✖</span>
                        </div>

                        {/* Modal Body */}
                        <div className="modal-body">
                            <label>Remark
                            <input
                                type="text"
                                placeholder="ADD Remark"
                                className="input-box"
                                value={remark}
                                onChange={(e) => setRemark(e.target.value)}
                            />
                            </label>
                        </div>

                        {/* Modal Footer */}
                        <div className="modal-footer">
                            <button onClick={() => setIsOpen(false)} className="cancel-btn">Cancel</button>
                            <button onClick={handleSubmit} className="submit-btn">Submit</button>
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
};

export default DiamondFilter;
