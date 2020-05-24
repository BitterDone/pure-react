import React from 'react';

const singleLines = () => (
    <div>
        None
        of
        these
    </div>
)


const emptyNewLines = () => (
    <div>
        new

        lines

        are
    </div>
)


const spacesWithNewLines = () => (
    <div>
        &nbsp;rendered.&nbsp;
        &nbsp;nbsp's are rendered&nbsp;
    </div>
)


const insertSpacesWithMultilineContent = () => (
    <div>
        but that's
        {' '}
        it.
    </div>
)

// the argument is props, not username
// so 1 & 2 will always return the 1st ternary
const Username1 = username => <div>{username ? `Hello, $username` : 'Not logged in'}</div>
const Username2 = username => <div>{username ? `Hello, ${username}` : 'Not logged in'}</div>
// this correctly evaluates username
const Username3 = ({username}) => <div>{username ? `Hello, ${username}` : 'Not logged in'}</div>

// const twoChildElements = () => (<div>1</div><div>2</div>)
const twoChildElementsInArray = () => [
    <div>1</div>,
    <div>2</div>
]
const twoExpressions = x => (<div>
    {/*  Parsing error: Unexpected token, expected "}" */}
    {/* {x && 'x1s'; x && 'x2'} */}
</div>)
const returnInJs = () => {
    return (
        <div>
            {'using return in this JS'}
        </div>
    )
}
const jsxQuoteTest = () => (<div>"Quotes persist in JSX"</div>)

const errors = () => (<div>
    {/* {twoChildElements()} */}
    {twoChildElementsInArray()}
    {twoExpressions()}
    {/* {alert('alert doesn\'t halt rendering, just interrupts')} */}
    {returnInJs()}
    {jsxQuoteTest()}
</div>)

const Data = props => (
    <>
        <td>{props.data[0]}</td>
        <td>{props.data[1]}</td>
        <td>{props.data[2]}</td>
    </>
)
const Table = props => {
    
    return (
        <table>
            <tbody>
                <tr>
                    <Data data={['01', '02', '03']} />
                </tr>
                <tr>
                    <Data data={[11, 12, 13]} />
                </tr>
            </tbody>
        </table>
    )
}

const MyThing = () => (
    <div className="book">
        {errors()}
        <div className="title">
            The Title
        </div>
        <div className="author">
            The Author
        </div>
        <ul className="stats">
            <li className="rating">
                5 stars
            </li>
            <li className="isbn">
                12-345678-910
            </li>
        </ul>
        {singleLines()}
        {emptyNewLines()}
        {spacesWithNewLines()}
        {insertSpacesWithMultilineContent()}
        {/* Hello, username */}
        <Username3 username="Dan" />
        <Username3 username='root'/>
        {/* Not logged in */}
        <Username3 username={undefined}/>
        <Username3 username={null}/>
        <Username3 username={false}/>
        <Table />
    </div>
)

export default MyThing;