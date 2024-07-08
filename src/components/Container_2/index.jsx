import React from 'react'
import "./style.css"


const F2_container = () => {
  const info_2 = [{

    logoimg: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b1d1773c4bf3446b31a2_64918aab8d54aaf0c550fa52_economy.png",
    title: "Economics",
    course: "Course:18",
  },
  {

    logoimg: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b1d11371d99bc9c6b69a_64918aab8d54aaf0c550fa55_technology.png",
    title: "Technology",
    course: "Course:18",
  },
  {

    logoimg: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b1d14ef774c717603ece_64918aab8d54aaf0c550fa57_science.png",
    title: "Science",
    course: "Course:18",
  },
  {

    logoimg: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b1d1f65d6e4dffe52286_64918aab8d54aaf0c550fa4e_research.png",
    title: "Research",
    course: "Course:18",
  },
  {

    logoimg: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b1d17abed2b0fd07c6ee_64918aab8d54aaf0c550fa50_medical.png",
    title: "Medical",
    course: "Course:18",
  },
  {

    logoimg: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b1d15674f58481d0ce0e_64918aab8d54aaf0c550fa59_maths.png",
    title: "Mathemetics",
    course: "Course:18",
  },
  {

    logoimg: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b1d024b9a7966e918099_64918aab8d54aaf0c550fa54_marketing.png",
    title: "Marketing",
    course: "Course:18",
  },
  {

    logoimg: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b1d062650c92e2fd1e7f_64918aab8d54aaf0c550fa56_health.png",
    title: "Health & Fitness",
    course: "Course:18",
  },
  ]

  return <>
    <div className='max_width_conatainer_2'>
      <div className='center_mein_karo'>
        <div className='dikkat_aarahi_he'>
          <p className='Department'>Department</p>
          <p className='Provide_para
          '>Provide most popular courses that your want to join and lets start the course for the most simply way in here</p>
        </div>
        <div className='View_more'>
          <p>View All Course --<span className='rotate_A'>/</span></p>
        </div>
      </div>
      <div className='max_width_5'>
        <div className='divide_in_parts'>
          {info_2.map(
            (value, index) => {
              return <div className="courses_no_1">
                <div className='logo_size'>
                  <img src={value?.logoimg} alt="" className='logo_inside_1' />
                </div>
                <div className='description_1'>
                  <p className='kya_fayda_style_ka' style={{ fontSize: "25px", fontWeight: "600" }}>{value?.title}
                  </p>
                  <p style={{ fontSize: "15px", fontWeight: "500", color: "grey" }} >{value?.course}
                  </p>
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

export default F2_container