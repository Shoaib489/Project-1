import React from 'react'
import "./style.css"
import Navbar from '../../components/A_Navbar'
import Footer from '../../components/Footer'
import Blogcontainer from '../../cards_UI/blogpost'
import { IconArrowElbowRight, IconShoppingCart } from '@tabler/icons-react'
// import { IconShoppingCart } from '@tabler/icons-react';



const Shop_2 = () => {
    const shopping = [{

        pro_img: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6493e35bbe6fb2ad9a9c49dc_product-3.png",
        price: "$ 10.00 USD",
        product: "Note Book",
    },
    {

        pro_img: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6493e40323c5269e2f6f89b8_product-9.png",
        price: "$ 10.00 USD",
        product: "Note Book",
    },
    {

        pro_img: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6493e43e35cf63e96975770d_product-11.png",
        price: "$ 10.00 USD",
        product: "Note Book",
    },
    {

        pro_img: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6493e45b5df34d5000a5e08b_product-10.png",
        price: "$ 10.00 USD",
        product: "Note Book",
    },
    {

        pro_img: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6493e7c9be6fb2ad9aa23e3a_product-7.png",
        price: "$ 10.00 USD",
        product: "Note Book",
    },
    {

        pro_img: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6493e494e6967eb6addf7c1d_product-6.png",
        price: "$ 10.00 USD",
        product: "Note Book",
    },
    {

        pro_img: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6493e4af71fbb5f2385691e3_product-5.png",
        price: "$ 10.00 USD",
        product: "Note Book",
    },
    {

        pro_img: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6493e4c7e4949b66bd4a691e_product-4.png",
        price: "$ 10.00 USD",
        product: "Note Book",
    },
    {

        pro_img: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6493e4e97a1a98426be8db71_product-2.png",
        price: "$ 10.00 USD",
        product: "Note Book",
    },
    {

        pro_img: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6493e51023c5269e2f70db1a_product-12.png",
        price: "$ 10.00 USD",
        product: "Note Book",
    },
    {

        pro_img: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6493e532c32a3c2b9f9dc86b_product.png",
        price: "$ 10.00 USD",
        product: "Note Book",
    },
    {

        pro_img: "https://assets.website-files.com/64927699b818c4b9d737f9ad/6493e54ac9b9e7a685e5d453_product-8.png",
        price: "$ 10.00 USD",
        product: "Note Book",
    },

    ]

    return <>
        <Navbar />
        <Blogcontainer heading="Shop" post="Home-Shop" />


        <div className='max_width_karo'>
            <div className='shop_2_searchbar'>
                <p>Showing 1 - 12 of 150 Result</p>

                <div class="dropdown_2">
                    <div className='icons_in_search_bar'>
                        <li class="dropbtn_2">Shop</li>
                        <div>
                            <IconArrowElbowRight />
                        </div>
                    </div>
                    <div className='extra_line_bottom'>

                    </div>

                    <div class="dropdown-content_2">
                        <li>Calculators</li>
                        <li>Penholder</li>
                        <li>Books</li>
                        <li>Geometry books</li>
                        <li>Pencil set</li>
                        <li>Bags</li>
                        <li>File holders</li>
                    </div>

                </div>
            </div>
            <div className='grid_use_karo'>
                {shopping.map(
                    (value, index) => {
                        return <div className="products_and_pricing">
                            <div className='green_back_color'>
                                <img src={value?.pro_img} alt="" className='product_images' />
                            </div>
                            <div className='sale_sale'>
                                <div>
                                    <p style={{ fontSize: "19px", fontWeight: "700" }}>{value?.price}</p>
                                    <p style={{ fontSize: "15px", fontWeight: "400" }}>{value?.product}</p>
                                </div>
                                <div>
                                    <div className='change_color_of_import_icons'>
                                        <IconShoppingCart  className='size_change'/>
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

export default Shop_2