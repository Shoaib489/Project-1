import React from 'react'
import "./style.css"
import { IconChevronsRight } from '@tabler/icons-react'


const F7_container = () => {

    const info_2 = [{

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b4c1b45c012e440f7fe8_64918aab8d54aaf0c550f9f9_course-grid-twelve.jpeg",
        hastag: "# Arts & Design",
        heading: "Advanced Drawing & Sketch System",
        duration: "Duration: 4 Years",
        fee: "Fee: $3500",
        rating: "Rating: 4.9"
    },
    {

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b4c0f65d6e4dffe88578_64918aab8d54aaf0c550f998_course-grid-eight.jpeg",
        heading: "Advanced Drawing & Sketch System",
        hastag: "# Biology",
        duration: "Duration: 4 Years",
        fee: "Fee: $3500",
        rating: "Rating: 4.9"
    },
    {

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b4c01db1ae634e2994eb_64918aab8d54aaf0c550f9cd_course-grid-7.jpeg",
        hastag: "# Diploma",
        heading: "Advanced Drawing & Sketch System",
        duration: "Duration: 4 Years",
        fee: "Fee: $3500",
        rating: "Rating: 4.9"
    },
    {

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b4c024b9a7966e9527e1_64918aab8d54aaf0c550f962_course-grid-seven.jpeg",
        hastag: "# Economics",
        heading: "Advanced Drawing & Sketch System",
        duration: "Duration: 4 Years",
        fee: "Fee: $3500",
        rating: "Rating: 4.9"
    },
    {

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b4c039fcf6a7203a15fc_64918aab8d54aaf0c550f9f1_course-grid-eleven.jpeg",
        hastag: "# Arts & Design",
        heading: "Advanced Drawing & Sketch System",
        duration: "Duration: 4 Years",
        fee: "Fee: $3500",
        rating: "Rating: 4.9"
    },
    {

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b4c0b10b1ce8c8cd6a9c_64071eae5af5e92f3fcf53b6_course-grid-six.jpeg",
        hastag: "# Arts & Design",
        heading: "Advanced Drawing & Sketch System",
        duration: "Duration: 4 Years",
        fee: "Fee: $3500",
        rating: "Rating: 4.9"
    },
    {

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b4bf1db1ae634e299390_64918aab8d54aaf0c550f924_course-grid-four.jpeg",
        hastag: "# Arts & Design",
        heading: "Diploma in Fashion Design & Creative Arts",
        duration: "Duration: 4 Years",
        fee: "Fee: $3500",
        rating: "Rating: 4.9"
    },
    {

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b4bf04b5f3c57d374027_64918aab8d54aaf0c550f879_course-grid-two.jpeg",
        hastag: "# Arts & Design",
        heading: "Bachelor of Electrical & Electronics Engineering",
        duration: "Duration: 4 Years",
        fee: "Fee: $3500",
        rating: "Rating: 4.9"
    },
    ]
    return <>
        <div className='back_of_content_7'>
            <div className='tile_kya he'>
                <p className='Courses_name'>Our Courses</p>
                <p className='gumnaam'>Provide most popular courses that your want to join and lets start the course for the most simply way in here</p>
            </div>

            <div className='max_width_A'>
                <div className="article_15">
                    {info_2.map(
                        (value, index) => {
                            return <div className="card_10a">
                                <div className='bahut_sari_photos'>
                                    <img src={value?.image} alt="" className='image_inside_ab' />
                                </div>
                                <div className='details_course'>
                                    <div  className='details_of_course'>
                                    <p style={{fontSize:"14px",color:"#0C8B51",fontWeight:"600"}}>{value?.hastag}</p>
                                    <p style={{fontSize:"18px",fontWeight:"500"}}>{value?.heading}</p>
                                    <div className='duration_fee'>
                                        <p style={{fontSize:"14px",fontWeight:"600"}}>{value?.duration}</p>
                                        <p style={{fontSize:"14px",fontWeight:"700"}}>{value?.fee}</p>
                                    </div>
                                    <hr />
                                    <div className='rating_details'>
                                        <p style={{fontSize:"14px",fontWeight:"500"}}>{value?.rating}</p>
                                        <div className='arrow_icons_to_move'>
                                    <p style={{ fontSize: "16px", color: "grey" }}>Details
                                    </p>
                                    <div>
                                        <IconChevronsRight className='dull_color'/>
                                    </div>
                                </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        }
                    )
                    }
                </div>
            </div>

            <button className='mein_toh_toot_gaya'>view all courses</button>
            <br /><br /><br />

        </div>

    </>
}

export default F7_container