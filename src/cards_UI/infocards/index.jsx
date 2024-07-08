import React from 'react'
import "./style.css"


const Infocards_1 = ({ value, index }) => {


    return <>
        <div key={index} className="card_10a">
            <div className='bahut_sari_photos'>
                <img src={value?.image} alt="" className='image_inside_ab' />
            </div>
            <div className='details_course'>
                <div className='details_of_course'>
                    <p style={{ fontSize: "14px", color: "#0C8B51", fontWeight: "600" }}>{value?.hastag}</p>
                    <p style={{ fontSize: "18px", fontWeight: "500" }}>{value?.heading}</p>
                    <div className='duration_fee'>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>{value?.duration}</p>
                        <p style={{ fontSize: "14px", fontWeight: "700" }}>{value?.fee}</p>
                    </div>
                    <hr />
                    <div className='rating_details'>
                        <p style={{ fontSize: "14px", fontWeight: "500" }}>{value?.rating}</p>
                        <p className='hover_details' style={{ fontSize: "14px", fontWeight: "500" }}>Details -/</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Infocards_1
