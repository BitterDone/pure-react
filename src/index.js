import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './react-hello';
import MyThing from './jsx-sxercises';
import TweetComponent from './tweet-component';
import PropExercises from './props-proptype-exercises';
import ChildrenExercises from './children-exercises';
import GithubFileList from './GithubFileList';
import Trello from './trello';
import LifecycleDemo from './LifecycleDemo';
import './index.css';

import Test from './Test.js';

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

const testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: "2016-07-18 21:24:00",
        latestCommit: {
            message: 'Added a readme'
        }
    },
    {
        id: 4,
        name: 'README2',
        type: 'file',
        updated_at: "2016-07-18 21:24:00",
        latestCommit: {
            message: 'super long to test overflow hidden with ellipses when it cuts off'
        }
    },
];
    

// ReactDOM.render(<HelloWorld />, document.querySelector('#root')); // default
// ReactDOM.render(<TweetComponent tweet={testTweet} />, document.querySelector('#root')); // default
// ReactDOM.render(<Trello fileList={testFiles}/>, document.querySelector('#root')); // default
ReactDOM.render(<Test name="Dan"/>, document.querySelector('#root')); // default
