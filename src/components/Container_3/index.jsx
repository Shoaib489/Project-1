import React from 'react'
import "./style.css"


const F3_container = () => {
    const info_2 = [{

        imageurl: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492c2a362650c92e210cdbd_64918aab8d54aaf0c550fa03_event-grid-6.jpeg",
        date: "March 15,2023 | 7 pm - 9 pm",
        name: "Teaching for Social Justice",
        venue: "Central Hall, New York",
        decribe: "Events of the most popular topics that can some changes for our daily life & nature life is more specific and delicious"

    },
    {

        imageurl: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492c2a353eef670a1cc74a6_64918aab8d54aaf0c550f9fe_event-grid-3.jpeg",
        date: "March 15,2023 | 7 pm - 9 pm",
        name: "Teaching for Social Justice",
        venue: "Central Hall, New York",
        decribe: "Events of the most popular topics that can some changes for our daily life & nature life is more specific and delicious"

    },
    {

        imageurl: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492c29fc199c2640fd73db2_64918aab8d54aaf0c550fa08_event-grid-1.jpeg",
        date: "March 15,2023 | 7 pm - 9 pm",
        name: "Teaching for Social Justice",
        venue: "Central Hall, New York",
        decribe: "Events of the most popular topics that can some changes for our daily life & nature life is more specific and delicious"

    },
    {

        imageurl: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492c29f6751d8f29f5c0201_64918aab8d54aaf0c550fa01_event-grid-5.jpeg",
        date: "March 15,2023 | 7 pm - 9 pm",
        name: "Teaching for Social Justice",
        venue: "Central Hall, New York",
        decribe: "Events of the most popular topics that can some changes for our daily life & nature life is more specific and delicious"

    },
    ]

    return <>

        <div className='ek_or_background_color'>
            <div className='max_width_fir_se'>
                <div className='description_of_data'>
                    <p className='Events'>Upcoming Events</p>
                    <p className='are_yaar_yeh_kya_hogya'>Provide most popular courses that your want to join and lets start the course for the most simply way in here</p>
                </div>
                <div className='map_image_card'>

                    {info_2.map(
                        (value, index) => {
                            return <div className="card_banao">

                                <div className='image_inside_1'>
                                    <img src={value?.imageurl} alt="" className='image_2' />
                                </div>

                                <div className='map_venue'>
                                    <p style={{ color: "#098B51", fontSize: "15px" }}>{value?.date}</p>
                                    <div>
                                        <p style={{ fontSize: "21px", fontWeight: "500" }}>{value?.name}</p>
                                        <p style={{ fontSize: "15px", fontWeight: "500" }}>Venue : {value?.venue}</p>
                                    </div>
                                    <p style={{ fontSize: "15px" }}>{value?.decribe}</p>
                                    <p style={{ fontSize: "15px" }} className='details_hover'>Details --/</p>
                                </div>
                            </div>
                        }
                    )
                    }
                </div>
            </div>
        </div>


    </>

}
export default F3_container