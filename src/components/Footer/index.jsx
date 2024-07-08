import React from 'react'
import "./style.css"


const Footer = () => {

    return <>

        <div className='dark_blue_background'>

            <div className='footer_part'>
                <p>More over <span style={{ fontSize: "19px", fontWeight: "700" }}>3500+ Students</span></p>
                <p className='style_title'>Subscribe our Newsletter</p>
                <p>Get details update about our Courses, Events, Offers and so on</p>
                <div className='text_area_button'>
                    <input type="text" className='text_area'
                        placeholder='Enter your email' />
                    <button className='button_to_subscribe'>subscribe</button>
                </div>
            </div>

        </div>

        <div className='max_width_3_footer'>
            <div className='back_footer_light'>
                <div className='sector_1'>
                    <img src="https://assets.website-files.com/649189cd213c45a9d650f194/649274769d9c387565201023_logo.png" alt="" />
                    <p className='career_title'>Make better future for your Career</p>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <p style={{ fontSize: "20px" }}>More Weflow Template</p>
                </div>
                <div className='sector_2'>
                    <ul>
                        <p>Academic Info</p>
                        <li>Our Professors</li>
                        <li>About Us</li>
                        <li>Scholarship</li>
                        <li>Our Products</li>
                        <li>Our Courseses</li>
                        <li>Admission</li>
                    </ul>
                </div>
                <div className='sector_3'>
                    <ul>
                        <p>Useful Links</p>
                        <li>Upcoming Events</li>
                        <li>Career Opportunities</li>
                        <li>Terms & Conditions</li>
                        <li>Rules & Regulations</li>
                        <li>Our Departments</li>
                        <li>Our Blog Post</li>
                    </ul>
                </div>
                <div className='sector_4'>
                    <p style={{ fontSize: "22px", fontWeight: "500" }}>Contact info</p>
                    <p>512/F, Central Road, Main Town Jackson Heights. New York</p>
                    <p>info@admissionexample.com www.admissionexample.com</p>
                    <p style={{ fontSize: "18px", fontWeight: "500" }}>+12345 678 910/+12345 678 910</p>
                </div>
            </div>
        </div>
        <div className='footer_closing_line'>
            <p>Copyright © Maxion | Designed by Brandbase - Powred by <span style={{fontSize:"15px",fontWeight:"600"}}>Webflow</span></p>
        </div>

    </>


}

export default Footer