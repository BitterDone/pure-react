import React from 'react';
import ReactDOM from 'react-dom';
class ErrorCatcher extends React.Component {
    state = { error: null }
    componentDidCatch(error, info) {
        console.log('[componentDidCatch]', error);
        this.setState({ error: info.componentStack });
    }
    render() {
        if (this.state.error) {
            return (
                <div>
                    An error occurred: {this.state.error}
                </div>
            )
        }
        return (
            <div>
                All ok {this.props.children}
            </div>
        )
    }
}
class LifecycleDemo extends React.Component {
    // Initialize state first
    // (happens before constructor)
    state = { counter: 0 };
    // The first method called after initializing state
    constructor(props) {
        super(props);
        console.log('[constructor]');
        console.log(' State already set:', this.state);
    }
    // Called after initial render is done.
    //
    // This is a good place to kick off network
    // requests to fetch data.
    componentDidMount() {
        console.log('[componentDidMount]', 'Mounted.');
    }
    // ** Don't forget to make this `static`! **
    // Called before initial render, and any time new props
    // are received.
    // Not commonly used.
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('[getDerivedStateFromProps]');
        console.log(' Next props:', nextProps);
        console.log(' Prev state:', prevState);
        return null;
    }
    // Called before each render. Return false to prevent rendering.
    //
    // This (and PureComponent) are the primary ways to optimize
    // class components. If you notice performance is slow,
    // measure with the profiler, then try implementing this method
    // to prevent needless renders. React is fast out of the box,
    // and a few extra renders won't hurt. I wouldn't recommend
    // implementing this method unless you know you need it.
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[shouldComponentUpdate]', 'Deciding to update');
        return true;
    }
    // Called after render() but before updating the DOM
    // A good time to make calculations based on old DOM nodes.
    // The value returned here is passed into componentDidUpdate
    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log('[getSnapshotBeforeUpdate]', 'About to update...');
        return `Time is ${Date.now()}`;
    }
    // Called after render() and after updating the DOM. The whole
    // render/commit/update cycle is done.
    //
    // This is a good time to check if a prop has changed,
    // by checking prevProps.whatever === this.props.whatever.
    // Useful for re-fetching data when a record ID changes.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[componentDidUpdate]', 'Updated.');
        console.log(' snapshot:', snapshot);
    }
    // Called right before the component is unmounted
    // Time to clean up! Remove any event listeners, cancel
    // timers, etc.
    componentWillUnmount() {
        console.log('[componentWillUnmount]', 'Goodbye cruel world.');
    }
    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };
    causeErrorNextRender = () => {
        // Set a flag to cause an error on the next render
        // This will cause componentDidCatch to run in the parent
        this.setState({
            causeError: true
        });
    };
    render() {
        console.log('[render]');
        if (this.state.causeError) {
            throw new Error('oh no!!');
        }
        return (
            <div>
                <span>Counter: {this.state.counter}</span>
                <button onClick={this.handleClick}>
                    Click to increment
                </button>
                <button onClick={this.causeErrorNextRender}>
                    Throw an error
                </button>
                <ErrorCatcher />
            </div>
        );
    }
}
export default LifecycleDemo;

/*
    [constructor]
    LifecycleDemo.js:32  State already set: Object
    LifecycleDemo.js:46 [getDerivedStateFromProps]
    LifecycleDemo.js:47  Next props: Object__proto__: Object
    LifecycleDemo.js:48  Prev state: Objectcounter: 0__proto__: Object
    LifecycleDemo.js:99 [render]
    LifecycleDemo.js:39 [componentDidMount] Mounted.
    LifecycleDemo.js:46 [getDerivedStateFromProps]
    LifecycleDemo.js:47  Next props: {}
    LifecycleDemo.js:48  Prev state: {counter: 1}
    LifecycleDemo.js:60 [shouldComponentUpdate] Deciding to update
    LifecycleDemo.js:99 [render]
    LifecycleDemo.js:67 [getSnapshotBeforeUpdate] About to update...
    LifecycleDemo.js:77 [componentDidUpdate] Updated.
    LifecycleDemo.js:78  snapshot: Time is 1595238427742

    Mounting
    These methods are called only once, when the component first mounts.
    constructor: This is the first method called when your component is created. If state is initialized
    with a property initializer then it will already be set by the time the constructor executes.


    componentDidMount: Called immediately after the first render. The component’s children are already rendered at this point, too. This is a good place to make AJAX requests to fetch any data you
    need.

    componentWillMount [deprecated]: Up until React 16.3, this method served a similar purpose to the
    constructor. It executes before the first render. You’ll still probably come across code that uses it,
    but it will likely be removed in React 17. If you need to fetch data or do anything else “before” a
    component renders, just do it in componentDidMount instead. Rendering happens quickly, so you
    don’t need to worry about performance, and you’ll probably want to display a “loading” indicator or
    something while work is in progress anyway.
    Rendering
    These are called, in order, before and after each render. Only getDerivedStateFromProps is called
    during the initial render.

    componentWillReceiveProps(nextProps) [deprecated]: This method is deprecated as of React 16.3,
    though you’ll probably run into code that uses it. Use getDerivedStateFromProps instead.

    static getDerivedStateFromProps(nextProps, prevState): This is an opportunity to change the state
    based on the value of props, which can be useful for initialization. It’s not used very frequently. Don’t
    call setState here, but instead, return an object that represents the new state. This method must not
    have side effects. Also, don’t forget the static keyword before this method or it won’t work. Since
    this method is static, you can’t access the this object.

    shouldComponentUpdate(nextProps, nextState): This is an opportunity to prevent rendering if you
    know that props and state have not changed. The default implementation always returns true. If
    you return false, the render will not occur (and children will not render either), and the remaining
    lifecycle methods will be skipped.

    componentWillUpdate(nextProps, nextState) [deprecated]: This method is deprecated as of React
    16.3, though you’ll probably run into code that uses it. Use getSnapshotBeforeUpdate

    render: You know this one well. It fits in the lifecycle right between componentWillUpdate and
    componentDidUpdate.


    getSnapshotBeforeUpdate(prevProps, prevState): This is called after render, but before the changes
    are committed to the DOM. If you need to do any calculations based on the old DOM (tracking
    changes to scroll position, etc.) this is the time to do it. Return anything you want from this function, and that value will get passed as the third argument (snapshot) to componentDidUpdate. Use
    it to pass along anything you need to keep track of between DOM updates.

    componentDidUpdate(prevProps, prevState, snapshot): Render is done. DOM changes have been
    committed. You can use this opportunity to operate on the DOM if you need to. Prior to this, DOM
    nodes could still be in flux. The snapshot argument comes from getSnapshotBeforeUpdate, if you
    returned something from there.
    Unmounting

    componentWillUnmount: The component is about to be unmounted. Maybe its item was removed
    from a list, maybe the user navigated to another tab… whatever the case, this component’s time is numbered. You should invalidate any timers you created (using clearInterval() or clearTimeout()),
    disable event handlers (with removeEventListener()), and perform any other necessary cleanup.
    Note that this method will only get called if componentDidMount was called. If the component was
    never fully mounted (such as if it threw an error during the first render), then componentWillMount
    won’t be called.
    Error Handling

    componentDidCatch: This method is called when a child component or one of its children throws
    an error inside the constructor, during rendering, or in a lifecycle method. (This doesn’t include
    errors that happen inside event handlers, for instance). This method lets you implement error boundaries within your app, and in practice, you’d usually only have one or a handful of components that
    implement this, and use them at or near the root of your app. It’s important to note that this is not
    called when the component that implements it throws an error from within itself, it’s only triggered
    by errors in children
*/
