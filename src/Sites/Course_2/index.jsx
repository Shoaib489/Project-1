import React from 'react'
import "./style.css"
import Navbar from '../../components/A_Navbar'
import Footer from '../../components/Footer'
import Blogcontainer from '../../cards_UI/blogpost'
import { IconArrowElbowRight } from '@tabler/icons-react'
import F7_container from '../../components/Container_7'



const Course_2 = () => {

    return <>
        <Navbar />
        <Blogcontainer heading="Courses" post="Home-Courses" />
        <div className='courses_type'>
            <p className='course_3_paragraph'>Choose your Course and build your Future</p>
            <button className='get_started'>Get Started</button>
            <img src="https://assets.website-files.com/649189cd213c45a9d650f194/6496abecdc53508436726f5d_group-study-student.png" alt="" />
        </div>
        <F7_container />
        <Footer />
    </>

}

export default Course_2