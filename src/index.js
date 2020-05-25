import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './react-hello';
import MyThing from './jsx-sxercises';
import TweetComponent from './tweet-component';
import PropExercises from './props-proptype-exercises';

const testTweet = {
    message: "Something about cats.",
    gravatar: "205e460b479e2e5b48aec07710c08d50",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2016-07-30 21:24:37"
}

// ReactDOM.render(<HelloWorld />, document.querySelector('#root')); // default
// ReactDOM.render(<TweetComponent tweet={testTweet} />, document.querySelector('#root')); // default
ReactDOM.render(<PropExercises/>, document.querySelector('#root')); // default
