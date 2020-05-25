import React from 'react';
// import ReactDOM from 'react-dom';
import './tweet-component.css';
import moment from 'moment';

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

const Time = ({ time }) => (<span className="time">{moment(time).fromNow()}</span>);

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
    
*/