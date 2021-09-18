import React from 'react'
import '../styles/profileIcon.scss'

function ProfileIcon(props) {
  
    const{image , iconSize , storyBorder} = props;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;}

        let randomId= getRandomInt(1,70);
        let profileImage= image ? image : `https://i.pravatar.cc/150?img=${randomId}`;
        
    return (
        <div className={storyBorder ? "storyBorder" : ""}>
      <img
        className={`profileIcon ${iconSize}`}
        src={profileImage}
        alt="profile"
      />
    </div>
    )
}

export default ProfileIcon
