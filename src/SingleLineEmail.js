import React from 'react';

const SingleLineEmail = ({ sender, subject, date, message}) => {

    return (<div
        style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            margin: 5,
            backgroundColor: 'lightgray',
            borderTop: '1px solid gray',
            borderBottom: '1px solid gray',
            margin: 5,
        }}>
        <input style={{margin: 5}} type="checkbox"/>
        <i style={{margin: 5}} class="fa fa-thumb-tack" aria-hidden="true" />
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', margin: 5}}>
            <div style={{display: 'flex', fontWeight: 700}}>
                <div>React Newsletter</div>
                <div style={{display: 'flex', flexGrow: 2}}/>
                <div>React Newsletter - Issue 36</div>
                <div style={{display: 'flex', flexGrow: 5}}/>
                <div>July 15</div>
            </div>
            <div style={{display: 'flex', color: 'gray'}}>a;slkdfja;slkdjfa;lkskjdf;laksjdf;laksjf;lkasjdfl;k</div>

        </div>
    </div>)
}

export default SingleLineEmail;