import React from 'react';
import DisplayName from './DisplayName';

class Test extends React.Component {
    makeName(first, last) {
        return `${first} ${last}`;  
    }

    render() {
        let first = "Dan";
        let last = "Bitter";
        let tye_first = "tye";
        let tye_last = "is cool";
        let will_first = "will";
        let will_last = "sucks";

        return <div>
            <DisplayName first={first} last={last} />
            <DisplayName first={tye_first} last={tye_last} />
            <DisplayName first={will_first} last={will_last} />
        </div>
    }

    _render() {
        let first = "Dan";
        let last = "Bitter";
        let tye_first = "tye";
        let tye_last = "is cool";
        let will_first = "will";
        let will_last = "sucks";

        return <div>
            <div>Hello {this.makeName(first, last)}</div>
            <div>Hello {this.makeName(tye_first, tye_last)}</div>
            <div>Hello {this.makeName(will_first, will_last)}</div>
        </div>;
    }
}

export default Test;