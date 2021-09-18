import '../styles/profile.scss';
import users from './data/users';
import ProfileIcon from './ProfileIcon'
function Profile(props) {
    const{
        username,
        caption,
        urlText,
        iconSize,
        captionSize,
        storyBorder,
        hideAccountName,
        image
    } = props;

        let accountName = username
            ? username : users[Math.floor(Math.random() * users.length)].username;

    return (
        <div className="profile">
            <ProfileIcon 
            iconSize={iconSize}
            storyBorder={storyBorder}
            image={image}
            />
            {(accountName || caption)&& !hideAccountName && (
                <div className="textContainer">
                    <sapn className="accountName">{accountName}</sapn>
                    <span className={`caption ${captionSize}`}>
                    {caption}
                    </span>
                </div>
            )}
            <a href='/'>{urlText}</a>

            
        </div>
    )
}

export default Profile

