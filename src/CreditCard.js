import React from 'react';

const splitToChunksOfN = (str, n) => str.match(new RegExp(`.{1,${n}}`, 'g'))

const CreditCard = props => {
    const { bankName, accountNumber, securityCode, expDate, cardholder, } = props
    const blue = 'rgb(44, 84, 164)'
    return (<div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '275px',
        height: '175px',
        backgroundColor: `${blue}`,
        border: `1px solid ${blue}`,
        borderRadius: 10,
        color: 'white',
        padding: 20,
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            fontSize: 25,
        }}>{bankName}</div>
        <div style={{ display: 'flex', flexGrow: 1, }}/>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 20,
        }}>{splitToChunksOfN(accountNumber, 4).map(chunk => (<div>{chunk}</div>))}</div>
        <div style={{
            display: 'flex',
            fontSize: 10,
        }}>{securityCode}</div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 25,
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                margin: 5,
                fontSize: 10,
            }}>
                <div>VALID</div>
                <div>THRU</div>
            </div>
            {splitToChunksOfN(expDate, 2).join('/')}
        </div>
        <div style={{
            display: 'flex',
        }}>{cardholder.toUpperCase()}</div>
    </div>)
}

export default CreditCard;
