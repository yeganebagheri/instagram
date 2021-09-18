import HorizontalScroll from  'react-scroll-horizontal'
import Story from './Story'
import'../styles/stories.scss'
function Stories() {
    return (
        <div className="stories">
            <HorizontalScroll className="scroll" reverseScroll={true}>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
            </HorizontalScroll>
            
        </div>
    );
}

export default Stories
