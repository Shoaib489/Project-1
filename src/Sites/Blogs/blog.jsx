import React from 'react'
import "./style.css"
import Navbar from '../../components/A_Navbar'
import Footer from '../../components/Footer'
import Blogcontainer from '../../cards_UI/blogpost'
import { IconArrowBigRight } from '@tabler/icons-react';




const Blog = () => {

    const info_1 = [{

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6496be27097ff1c4dfdf8a57_64918aab8d54aaf0c550fa41_blog-grid-four.jpeg",
        date: "- February 20, 2023",
        heading: "Why Diversity and Inclusion are Essential in Education",
    },
    {

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6496be24c6e5c200dd801583_64918aab8d54aaf0c550fa3d_blog-grid-two.jpeg",
        date: "Isabel Janet - February 20, 2023",
        heading: "Self-care And Stress Management",
    },
    {

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6496be234a0d18e5d8a3e666_64918aab8d54aaf0c550fa47_blog-grid-seven.jpeg",
        date: "- February 20, 2023",
        heading: "Why Diversity and Inclusion are Essential in Education",
    },
    {

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6496be237aa6dc5ede812da6_64918aab8d54aaf0c550fa3f_blog-grid-three.jpeg",
        date: "- February 20, 2023",
        heading: "Why Diversity and Inclusion are Essential in Education",
    },
    {

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6496be22b8c97a582bcf7041_64918aab8d54aaf0c550fa4b_blog-grid-eight.jpeg",
        date: "- February 20, 2023",
        heading: "Why Diversity and Inclusion are Essential in Education",
    },
    {

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6496be22e1f4b7318bb8639e_64918aab8d54aaf0c550fa3a_blog-grid-one.jpeg",
        date: "- February 20, 2023",
        heading: "Why Diversity and Inclusion are Essential in Education",
    },
    {

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6496be218ce13492dc04ec87_64918aab8d54aaf0c550fa43_blog-grid-five.jpeg",
        date: "- February 20, 2023",
        heading: "Why Diversity and Inclusion are Essential in Education",
    },
    {

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6496be21d4f2b0fd1587ffe1_64918aab8d54aaf0c550fa45_blog-grid-six.jpeg",
        date: "- February 20, 2023",
        heading: "Why Diversity and Inclusion are Essential in Education",
    },
    {

        image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6496be2101cc1b057b4f7135_64918aab8d54aaf0c550fa49_blog-grid-nine.jpeg",
        date: "- February 20, 2023",
        heading: "Why Diversity and Inclusion are Essential in Education",
    },

    ]


    return <>
        <Navbar />

        <Blogcontainer heading="Blog-Post" post="Home-Blog" />

        <div className='max_width_2'>
            <div className="articles">
                {info_1.map(
                    (value, index) => {
                        return <div className="card_1">
                            <div className='increase_width_size'>
                                <img src={value?.image} alt="" className='image_inside' />
                            </div>
                            <div className='description'>
                                <p style={{ fontSize: "16px", color: "grey" }}>{value?.date}
                                </p>
                                <p className='hover_heading'>{value?.heading}
                                </p>
                                <div className='arrow_icons_to_move'>
                                    <p style={{ fontSize: "16px", color: "grey" }}>Read More
                                    </p>
                                    <div>
                                        <IconArrowBigRight />
                                    </div>
                                </div>

                            </div>

                        </div>
                    }
                )
                }
            </div>
        </div>
        <Footer />
    </>


}

export default Blog
