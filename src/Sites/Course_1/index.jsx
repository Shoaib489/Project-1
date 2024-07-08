import React from 'react'
import "./style.css"
import Navbar from '../../components/A_Navbar'
import Footer from '../../components/Footer'
import Blogcontainer from '../../cards_UI/blogpost'
import { IconArrowElbowRight } from '@tabler/icons-react'
import F4_container from '../../components/container_4'
import F5_container from '../../components/Container_5'
import F7_container from '../../components/Container_7'



const Course_1 = () => {

    return <>
        <Navbar />
        <Blogcontainer heading="Courses" post="Home-Courses" />
            <div className='kya_karoon_2'>
                <div className='sundar_kanya_2'>
                    <img src="https://assets.website-files.com/649189cd213c45a9d650f194/649291b216eed3fa15bff60f_home-about-two.png" alt="" />
                    <div className='extra_logo_in_left'>
                        <img src="https://assets.website-files.com/649189cd213c45a9d650f194/649290101371d99bc99d7997_course-badge.png" alt="" />
                        <p>100% Students Satisfaction</p>
                    </div>
                </div>
                <div className='describe_details_2'>
                    <p className='para_a1' style={{ fontSize: "50px", fontWeight: "600" }}>Improve your Knowledge with our Course</p>
                    <p style={{ fontSize: "20px" }}>Provide most popular courses that your want to join and lets start the course for the most simply courses here you can build so we can complete the all others opportunity which is more best</p>
                    <div className='jaldi_kar_bhai_2'>
                        <div className='a9'>
                            <img src="https://assets.website-files.com/64918aab8d54aaf0c550f84e/64918aab8d54aaf0c550f8ea_teacher-icon.svg" alt="" />
                        </div>
                        <div className='mein_toh_gaya_kaam_se'>
                            <p style={{ fontSize: "21px", fontWeight: "500" }}>
                                Experts Teacher</p>
                            <p>Provide most popular courses and lets start the course for</p>
                        </div>
                    </div>
                    <div className='jaldi_kar_bhai_2'>
                        <div className='a9'>
                            <img src="https://assets.website-files.com/649189cd213c45a9d650f194/649291b216eed3fa15bff60e_note-icon.svg" alt="" />
                        </div>
                        <div className='mein_toh_gaya_kaam_se'>
                            <p style={{ fontSize: "21px", fontWeight: "500" }}>Skill Based Scholarships</p>
                            <p>Provide most popular courses and lets start the course for</p>
                        </div>
                    </div>

                </div>

            </div>

        <F7_container />
        <F4_container />
        <Footer />
    </>


}

export default Course_1