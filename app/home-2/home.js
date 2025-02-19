import React, { useState } from "react";


const categories = {
    Shape: ["Round", "Oval", "Pear", "Marquise", "Heart", "Emerald", "Cushion", "Princess", "Radiant", "Asscher", "Others"],
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

    return (
        <div className="filter-container">
            <div className="carat-section">
                <h3>Carat</h3>
                <input
                    type="number"
                    placeholder="From"
                    value={carat.from}
                    onChange={(e) => setCarat({ ...carat, from: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="To"
                    value={carat.to}
                    onChange={(e) => setCarat({ ...carat, to: e.target.value })}
                />
            </div>

            <div className="stone-id-section">
                <h3>Stone Id #/Cert #</h3>
                <textarea
                    placeholder="Enter Stone Id or Certificate Number"
                    value={stoneId}
                    onChange={(e) => setStoneId(e.target.value)}
                />
            </div>

            {Object.keys(categories).map((category) => (
                <div key={category} className="category-section">
                    <h3>{category}</h3>
                    <div className="checkbox-group">
                        {categories[category].map((option) => (
                            <label key={option} className={`checkbox-label ${selectedOptions[category]?.includes(option) ? 'selected' : ''}`}>
                                <input
                                    type="checkbox"
                                    checked={selectedOptions[category]?.includes(option) || false}
                                    onChange={() => handleCheckboxChange(category, option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default DiamondFilter;
