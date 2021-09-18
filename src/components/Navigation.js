import React from 'react'
import '../styles/navigation.scss'
import Logo from "../images/instagramLogo.png"
import Menu from './Menu'
import SearchIcon from '../images/searchIcon.png'
function Navigation() {
    return (
        <div className='nav'>
            <div className='nav-container'>
                <img className='instaLogo' src={Logo} alt='instagramLogo'/>
                <div className='search'>
                    <img className='searchLogo' src={SearchIcon} alt='searchIcon'/>
                    <span className='search-span'>Search</span>
                </div>
                <div className='nav-menu'>
                    <Menu/>
                </div>
            </div>
            
        </div>
    )
}

export default Navigation
