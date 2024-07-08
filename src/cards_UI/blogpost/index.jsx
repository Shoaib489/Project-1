import React from 'react'


const Blogcontainer = ({heading, post}) => {

    return <>
<div className='light_green_background'>
<div className='blog_post_title'>
    <img src="https://assets.website-files.com/649189cd213c45a9d650f194/64928aa1dac5954a7568f1fa_page-banner-icon.png" alt="" />
    <h1>{heading}</h1>
    <p>{post}</p>
</div>
</div>
</>
}
export default Blogcontainer