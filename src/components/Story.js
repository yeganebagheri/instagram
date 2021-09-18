import React from 'react'
import '../styles/story.scss'
import ProfileIcon from './ProfileIcon'
import User from './data/users'
function Story() {
    let userName = User[Math.floor(Math.random() * User.length)].username;

    if(userName.length > 10){
        userName = userName.substring(0,10) + "...";
    }
    
    return (
        <div className='story'>

            <ProfileIcon iconSize='big'
            storyBorder={true}/>
            <span className='accountName'>{userName}</span>
        </div>
    )
}

export default Story
