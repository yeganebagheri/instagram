import React from 'react'
import Sticky from 'react-sticky-el'
import image from "../images/profile.jpg"
import Profile from "./Profile"
import Suggestions from "./Suggestions"
import Footer from "./Footer"
import "../styles/sidebar.scss"

function Sidebar() {
    return (
        
            <Sticky topOffset={-80}>
                <div className='sidebar'>
                    <Profile 
                        username="yegane"
                        caption="yegane bagheri"
                        urlText="Switch"
                        iconSize="big"
                        image={image}
                    />
                    <Suggestions/>
                    <Footer/>

                </div>
            </Sticky>
        
    )
}

export default Sidebar
