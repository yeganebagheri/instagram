import Profile from './Profile'
import '../styles/suggestions.scss'
function Suggestions() {
    return (
        <div className="container">
            <div>
                <div className="titleContainer">
                    <div className="title">Suggestions For You</div>
                    <a href="/">See All</a>
                </div>
                
                <div className="profileContainer
                "> 
                <Profile caption="Follow by mohadese + 3 more" urlText='Follow'
                iconSize='medium'
                captionSize='small'
                storyBorder={true}/>

                <Profile caption="Follow by mohadese + 3 more" urlText='Follow'
                iconSize='medium'
                captionSize='small'
                />

                <Profile caption="Follow by mohadese + 3 more" urlText='Follow'
                iconSize='medium'
                captionSize='small'
                storyBorder={true}/>

                </div>
            
            </div>
            
        </div>
    )
}

export default Suggestions
