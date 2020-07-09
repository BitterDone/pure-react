import React from 'react';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ErrorBox = ({ children }) => (<div style={{
    display: 'flex',
    color: 'red',
    border: '1px solid red',
    borderRadius: 4,
    backgroundColor: '#E6B2A6',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    padding: 5,
    maxWidth: 200,
}}>
    <FontAwesomeIcon style={{ margin: 5, }} icon={faExclamationTriangle} />
    <div style={{  }}>{children}</div>
</div>)

const FirstChildOnly = ({ children }) => React.Children.toArray(children)?.[0]
const LastChildOnly = ({ children }) => {
    const childs = React.Children.toArray(children)
    return childs[childs.length-1]
}
const Head = ({ children, number }) => {
    const childs = React.Children.toArray(children)
    return childs.slice(0, number)
}
const Tail = ({ children, number }) => {
    const childs = React.Children.toArray(children)
    return childs.slice(number-1, childs.length)
}

const ChildrenExercises = () => (<div style={{ height: '100%    ', width: '100%', backgroundColor: 'white', }}>
    <ErrorBox>The world is ending</ErrorBox>    
    <FirstChildOnly><p>1</p><p>2</p><p>3</p></FirstChildOnly>
    <LastChildOnly><p>1</p><p>2</p><p>3</p></LastChildOnly>
    <Head number={2}><p>1</p><p>2</p><p>3</p></Head>
    <Tail number={2}><p>1</p><p>2</p><p>3</p></Tail>
    
</div>)

export default ChildrenExercises;
