import React from 'react';
// import ReactDOM from 'react-dom';

const HelloWorld = () => (<div>Hello world!</div>)
const Hello = () => (<span>Hallo</span>)
const World = () => (<span>world!</span>)
const HelloAndWorld = () => (<div><Hello/><World/></div>)
function _HelloWorld() {
    return React.createElement('span',
    {name: 'me'}, // props
        'Hello World!',
        'child',
        ' other child ',
        'ok',
        <SongName song={{name: 'song1'}} />,
        <SongName2 song={{name: 'song2'}} />,
        <HelloAndWorld />,
    ); // children
}
function SongName2(props) {
    return (
        React.createElement('span',
        {className: 'song-name'},
        props.song.name)
    );
}

const SongName = props => (<span className='song-name'>{props.song.name}</span>)

export default _HelloWorld;
// ReactDOM.render(<_HelloWorld />, document.querySelector('#root')); // default
// ReactDOM.render(()=>HelloWorld(), document.querySelector('#root')); // yep
// ReactDOM.render((HelloWorld(), document.querySelector('#root')); // nope

/*
    jsx is syntax invented for react 
    it compiles down to javascript function calls that create DOM elements
    Babel is the compiler that transforms code to es5 JS 
    webpack is started within npm start and watches for changed files
    when changes are detected, those files are fed to babel
    babel turns jsx -> js
    new files are served and sent to browser
    each jsx elements becomes a function call
    its arguments are props and children
    attributes and contents

    React component
    const HelloWorld = () => (<div>Hello world!</div>)

    Babel-gen'd JS
    function HelloWorld() {
        return React.createElement('span',
        {}, // props
        'Hello World!'); // [children...]
    }
    parens around tags aren't necessary if the open tag immediately follows return
    return <div> ...
    but if there's a newline, JS auto-inserts a semicolon after the return
    return;     // <- this returns null and causes an error
        <div>...

    components must return a single element (if they return elements)
    easy to wrap in a <div> if it's just display
    but, say you have a table row
    <tr> ...
    it needs <td> descendents:
        const buildCells = () => (
            <td>1</td>
            <td>2</td>
        )
    but, we can only return one element
    react 16.2 gives Fragments:
        const buildCells = () => (
            <React.Fragment>
                <td>1</td>
                <td>2</td>
            </React.Fragment>
        )
    fragments 'disappear' after rendering, leaving only its children, and the DOM sees the children directly
    React.Fragment is a lot of work to type, so JSX supports the <> </> syntax
    we can insert js expressions in-line within curly braces
    but expressions have to return something: 1+2, console.log(), console.log, variableName
    expressions don't return: const a=4, if(true) { 17; }, while(condition) { // stuff }
    conditional rendering is helpful, but if () doesn't return for a false condition
    use ternary ? instead
    component names must be capitalized
    lowercase is assumed to be built-in html: div span etc
    all elements must be closed/self-closed <Element></Element> or <Element />
    no open <br> and that's it


    */
