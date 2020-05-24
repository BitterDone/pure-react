import React from 'react';
// import ReactDOM from 'react-dom';
import './tweet-component.css';

const Avatar = () => (
    <img src="https://www.gravatar.com/avatar/nothing"
        className="avatar"
        alt="avatar" />
)

const Message = () => (
    <div className="message">
        This is less than 140 characters.
    </div>
);
    
const Author = () => (
    <span className="author">
        <span className="name">Your Name</span>
        <span className="handle">@yourhandle</span>
    </span>
);

const Time = () => (<span className="time">3h ago</span>);

const ReplyButton = () => (<i className="fa fa-reply reply-button"/>);

const RetweetButton = () => (<i className="fa fa-retweet retweet-button"/>);

const LikeButton = () => (<i className="fa fa-heart like-button"/>);

const MoreOptionsButton = () => (<i className="fa fa-ellipsis-h more-options-button"/>);

    
    
const Tweet = () => (
    <div className="tweet">
        <Avatar />
        <div className="content">
            <Author/><Time/>
            <Message/>
            <div className="buttons">
                <ReplyButton/>
                <RetweetButton/>
                <LikeButton/>
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

*/