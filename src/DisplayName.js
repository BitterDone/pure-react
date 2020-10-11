import React from 'react';

class DisplayName extends React.Component {
    makeName(first, last) {
        return `${first} ${last}`;
    }

    render() {
        let _first = this.props.first;
        let _last = this.props.last;

        return <div>
            <div
                style={{
                    height: 50,
                    width: 100,
                    backgroundColor: 'green',
                    margin: 10,
                }}
            >Hello {this.makeName(_first, _last)}</div>
        </div>;
    }
}

export default DisplayName;