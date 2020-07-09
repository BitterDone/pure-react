import React from 'react';
// import ReactDOM from 'react-dom';
import './tweet-component.css';
import moment from 'moment';
import PropTypes from 'prop-types';

const Avatar = ({hash}) => (
    <img src={`https://www.gravatar.com/avatar/${hash || 'nothing'}`}
        className="avatar"
        alt="avatar" />
)    

const Message = ({text}) => (
    <div className="message">
        {text ? text : 'This is less than 140 characters.'}
    </div>
);
    
const Author = ({author}) => {
    const { name, handle } = author
    return  (
        <span className="author">
            <span className="name">{name || 'Your Name'}</span>
            <span className="handle">@{handle || 'yourhandle'}</span>
        </span>
    );
}

export const Time = ({ time }) => (<span className="time">{moment(time).fromNow()}</span>);

const ReplyButton = () => (<i className="fa fa-reply reply-button"/>);

const getRetweenCount = count => count > 0
    ? (<span className="retweet-count">{count}</span>)
    : null;

const RetweetButton = ({ count }) => (<span className="retweet-button">
    <i className="fa fa-retweet retweet-button"/>
    {getRetweenCount(count)}
</span>);

const LikeButton = ({ count }) => (<span className="like-button">
    <i className="fa fa-heart"/>
    {count > 0 && <span className="like-count">{count}</span>}
</span>);
const MoreOptionsButton = () => (<i className="fa fa-ellipsis-h more-options-button"/>);

    
    
const Tweet = ({tweet}) => (
    <div className="tweet">
        <Avatar hash={tweet.gravatar}/>
        <div className="content">
            <Author author={tweet.author}/>
            <Time time={tweet.timestamp}/>
            <Message text={tweet.message}/>
            <div className="buttons">
                <ReplyButton/>
                <RetweetButton count={tweet.retweets}/>
                <LikeButton count={tweet.likes}/>
                <MoreOptionsButton/>
            </div>
        </div>
    </div>)

// Works, but below for each component -> DRY -> so don't do it
// Tweet.propTypes = {
//     tweet: PropTypes.shape({
//         author: PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             handle: PropTypes.string.isRequired,
//         }).isRequired,
//         timestamp: PropTypes.string.isRequired,
//         message: PropTypes.string.isRequired,
//     }).isRequired,
// }
Avatar.propTypes = {
    gravatar: PropTypes.string,
}
Author.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired,
    }).isRequired,
}
Time.propTypes = {
    time: PropTypes.string.isRequired,
}
Message.propTypes = {
    text: PropTypes.string.isRequired,
}
RetweetButton.propTypes = {
    count: PropTypes.number,
}
LikeButton.propTypes = {
    count: PropTypes.number,
}

export default Tweet;

/*
    imported css files are recognized by webpack
    webpack learns the js file is dependent on the css file
    webpack includes the css content in the bundled js sent to the browser
    see in the browser -> dev tools -> elements -> <head> element, look for a <style> element at the bottom you didn't create

    top-down good for new or simple projects
    bottom-up good for incrementally changing a large project to react from something else

    props are read-only and therefore only flow down to children
    to communicate data back up to the parent, the parent passes a prop function
    
        const handleAction = (event) => console.log('Child did:', event)
        const Parent = () => (<Child onAction={handleAction}/>);

        const Child = ({ onAction }) => (<button onClick={onAction}/>);
    Pass the whole object vs just what it's looking for?
        -component unpacking the object and looking for a specifically named key hurts reusability
        - -all attributes have to share that key name
        -data object refactors will break the child's internal logic
    Fragments vs div/span, either work but d/s allow styling

    Forget to pass a prop or parameter?
    Use typescript or be diligent with proptypes
        array, bool, func, number, object, string, node, element
        node is anything that can be rendered
        element is a React element created by JSX or React.createElement()
        PropTypes.instanceOf(SomeClass)
        PropTypes.oneOf([array, of, specific, values])
        PropTypes.oneOfType([PropTypes.string, PropTypes.boolean])
        PropTypes.arrayOf(PropTypes.string)
        PropTypes.objectOf(PropTypes.number)
        Matches some shape, with at least these attributes:
            PropTypes.shape({
                name: PropTypes.string,
                age: PropTypes.number
            })
    A Linter is quite useful with this effort
    All PropTypes are default optional and will warn only on a type mismatch
    Custom validator
    const customValidatorName = (props, propName, componentName) => {
        if (props[propName].length < 3) { // for example
            return new Error(`Invalid prop ${propName} supplied to ${componentName}: length < 3`)
        }
    }
    These pass:
        <CustomTest myCustomProp={[1, 2, 3]}/>
        <CustomTest myCustomProp="abc"/>
    BUT
    a failed validation will only warn you
    failed validations do not prevent code from running
*/