import React, { useState } from "react";

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
    Othershape: [
        { name: "Half Moon", shapeicon: "ico-shp icon-radiant-shape" },
        { name: "Baguette", shapeicon: "ico-shp icon-baguette-shape" },
        { name: "Triangle", shapeicon: "ico-shp icon-trillion-shape" },
        { name: "European", shapeicon: "ico-shp icon-trillion-shape" },
        { name: "Old Miner", shapeicon: "ico-shp icon-trillion-shape" },
        { name: "Briolette", shapeicon: "ico-shp icon-trillion-shape" },
        { name: "Shield Cut", shapeicon: "ico-shp icon-trillion-shape" },
        { name: "Star Cut", shapeicon: "ico-shp icon-trillion-shape" },
        { name: "Bullet Cut", shapeicon: "ico-shp icon-trillion-shape" },
        { name: "Octagon", shapeicon: "ico-shp icon-trillion-shape" },
        { name: "Hexagon", shapeicon: "ico-shp icon-trillion-shape" },
        { name: "Pentagon", shapeicon: "ico-shp icon-trillion-shape" },
        { name: "Portrait", shapeicon: "ico-shp icon-trillion-shape" },
        { name: "Kite", shapeicon: "ico-shp icon-trillion-shape" },
        { name: "Trapazoid", shapeicon: "ico-shp icon-trillion-shape" },
        { name: "Pear Rose", shapeicon: "ico-shp icon-pear-shape" },
        { name: "Rough", shapeicon: "ico-shp icon-pear-shape" },
        { name: "RAD", shapeicon: "ico-shp icon-pear-shape" },
        { name: "CARR", shapeicon: "ico-shp icon-pear-shape" },
        { name: "Rosecut", shapeicon: "ico-shp icon-pear-shape" },
        { name: "SQ. Radiant", shapeicon: "ico-shp icon-radiant-shape" },
        { name: "Old European", shapeicon: "ico-shp icon-radiant-shape" },
        { name: "Long Kite", shapeicon: "ico-shp icon-radiant-shape" },
        { name: "Pear Rose Cut", shapeicon: "ico-shp icon-pear-shape" },
        { name: "Carre", shapeicon: "ico-shp icon-pear-shape" },
        { name: "Long", shapeicon: "ico-shp icon-pear-shape" },
        { name: "Hex Step Cut", shapeicon: "ico-shp icon-pear-shape" },
        { name: "Old Miner", shapeicon: "ico-shp icon-pear-shape" },
        { name: "Emerald", shapeicon: "ico-shp icon-pear-shape" },
        { name: "Crisscut", shapeicon: "ico-shp icon-pear-shape" },
        { name: "CRSC", shapeicon: "ico-shp icon-pear-shape" },
        { name: "Rose Cut", shapeicon: "ico-shp icon-pear-shape" },
        { name: "Old European Long Cushion 2", shapeicon: "ico-shp icon-cushion-shape" },
        { name: "Oval Rose Cut", shapeicon: "ico-shp icon-oval-shape" },
        { name: "Trapeze", shapeicon: "ico-shp icon-oval-shape" },
        { name: "Octagonal", shapeicon: "ico-shp icon-oval-shape" },
        { name: "Portuguese", shapeicon: "ico-shp icon-oval-shape" }
    ],
    Color: ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Fancy Intense Pink", "Fancy Brown", "Blue", "Fancy Intense Blue", "Fancy Intense Yellow", "Fancy Vivid Pink"],
    Clarity: ["FL", "IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2", "SI3", "I1", "I2", "I3", "VS1-"],
    Cut: ["ID", "EX", "VG", "GD", "FR", "N/A"],
    Lab: ["IGI", "GIA", "GSI", "NONC", "GCAL", "NO-CERT"],
    Polish: ["ID", "EX", "VG", "GD", "FR"],
    Symm: ["EX", "VG", "GD", "FR", "G"],
    Flour: ["NON", "FNT", "MED", "SL", "VSL", "STG", "VST"],
};

const DiamondFilter = () => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [carat, setCarat] = useState({ from: "", to: "" });
    const [US$CT, setUS$CT] = useState({ from: "", to: "" });
    const [stoneId, setStoneId] = useState("");

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

    return (
        <div className="">
            <div className="row">
                <div className="col-12">

                    <div className="main-box">
                        <div className="checkbox-group">
                            {categories.Shape.map((option) => (
                                <span key={option.name}
                                    className={`checkbox-label ${selectedOptions.Shape?.includes(option.name) ? 'selected' : ''}`}
                                    onClick={() => handleCheckboxChange("Shape", option.name)}>
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
                                    {categories.Othershape.map((option) => (
                                        <span key={option.name}
                                            className={`checkbox-label ${selectedOptions.Othershape?.includes(option.name) ? 'selected' : ''}`}
                                            onClick={() => handleCheckboxChange("Othershape", option.name)}>
                                            {option.name}
                                            <i className={option.shapeicon}></i>
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
                <div className="col-12 mb-3">
                    <div className="mainbtn">
                        <button class="button">
                            <div class="backdrop">
                                <span>Search</span>
                            </div>
                            <div class="overlay">
                                <span>Search</span>
                            </div>
                        </button>
                        <button class="button">
                            <div class="backdrop">
                                <span>Advance Search</span>
                            </div>
                            <div class="overlay">
                                <span>Advance Search</span>
                            </div>
                        </button>
                        <button class="button">
                            <div class="backdrop">
                                <span>Post Your Demand</span>
                            </div>
                            <div class="overlay">
                                <span>Post Your Demand</span>
                            </div>
                        </button>
                    </div>
                </div>
                {/* {["Color", "Clarity", "Cut", "Lab", "Polish", "Symm", "Flour"].map((category) => (
                    <div className="col-6" key={category}>
                        <div className="main-box">
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
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default DiamondFilter;
