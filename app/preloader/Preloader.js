'use client'
import React from "react";
export default function loader() {
    return (
        <>
            <div className="loader-wrap">
                <div className="layer layer-one"><span className="overlay" /></div>
                <div className="layer layer-two"><span className="overlay" /></div>
                <div className="layer layer-three"><span className="overlay" /></div>
            </div>
        </>
    )
}
