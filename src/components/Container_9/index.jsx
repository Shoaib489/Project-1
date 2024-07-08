import React from 'react'
import "./style.css"
import Infocards_1 from '../../cards_UI/infocards'


const F9_container = () => {
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

    image: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b4bf04b5f3c57d374027_64918aab8d54aaf0c550f879_course-grid-two.jpeg",
    hastag: "# Arts & Design",
    heading: "Bachelor of Electrical & Electronics Engineering",
    duration: "Duration: 4 Years",
    fee: "Fee: $3500",
    rating: "Rating: 4.9"
  },
  ]


  return <>
    <div className='new_card_css_1'>
      <div className='overflow_css'>
        {info_2?.map((value, index) => {
          console.log(value, "shoaib")
          return <Infocards_1 value={value} key={index} />
        })}
      </div>
    </div>
  </>

}

export default F9_container