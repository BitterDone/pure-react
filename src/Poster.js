import React from 'react';
// import './poster.css';

const box = () => (<>
    <div class='box'>Top</div>
    <img style={{
            transform: 'rotate(90deg);',
            width:'200px',
        }}
        src='https://cdn.pixabay.com/photo/2017/12/10/20/56/feather-3010848_960_720.jpg'/>
    <div class='box'>Bottom</div>
</>)

const Poster = ({ title, image, text }) => {

    return (<div style={{
        border: '2px solid black',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30,
    }}>
        <div style={{
                display: 'table',
            }}>
            <div style={{
                    padding:'50% 0',
                    height: 0
                }}>
                <img src={image} style={{
                    display: 'block',
                    marginTop: '-50%',
                    transform: 'rotate(-90deg) translate(20%)',
                    maxWidth: 300,
                    maxHeight: 400,
                }}/>
            </div>
        </div>
        <div style={{
            marginTop: 10,
            fontSize: 40,            
        }}>{title}</div>
        <div style={{
            fontSize: 20,
        }}>{text}</div>
    </div>)
}

export default Poster;