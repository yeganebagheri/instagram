import {ReactComponent as CardButton} from "../images/cardButton.svg"
import ProfileIcon from './ProfileIcon'
import Profile from './Profile'
import CardMenu from "./CardMenu"
import Comment from "./Comment"
import '../styles/card.scss'
function Card(props) {
    const {storyBorder, image ,likedByNumber , likedByText , comments , hours}= props;
    return (
        <div className="card">
            <header><Profile iconSize="medium"
            storyBorder={storyBorder}/>
            <CardButton className="cardButton"/></header>
            <img className="cardImage" src={image} alt="card content" />
            <CardMenu/>
            <div className="likedBy">
                <ProfileIcon iconSize='small' />
                <span>
                    Liked by <strong>{likedByText}</strong> and{""}
                    <strong>{likedByNumber}others</strong>
                </span>
            </div>
            <div className="comments">
                {comments.map((comment) => {
                    return (
                        <Comment
                            key={comment.id}
                            accountName={comment.user}
                            comment={comment.text}/>
                    );

                })}
            </div>
            <div className="timePosted">
                {hours} Hours ago
            </div>
            <div className="addComment">
            <div className="commentText">Add a comment...</div>
            <div className="postText">Post</div>
            </div>
        </div>
    )
}

export default Card
