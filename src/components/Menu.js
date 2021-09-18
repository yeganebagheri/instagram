import React from 'react'
import '../styles/menu.scss'
import {ReactComponent as Home} from '../images/home.svg'
import {ReactComponent as Direct} from '../images/direct.svg'
import {ReactComponent as Explore} from '../images/explore.svg'
import {ReactComponent as Activity} from '../images/activity.svg'
import Image from '../images/profile.jpg'
import ProfileIcon from './ProfileIcon'

function Menu() {
    return (
        <div className='menu'>
            <Home className='icon'/>
            <Direct className='icon'/>
            <Explore className='icon'/>
            <Activity className='icon'/>
            <ProfileIcon image={Image} iconSize='small' />
            
            
        </div>
    )
}

export default Menu
