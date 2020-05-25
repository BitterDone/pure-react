import React from 'react';

const firstLetterUpper = val => val.charAt(0).toUpperCase()
const uppercaseFirstChar = obj => {
    if (obj === undefined) return null // null best return?
    if (obj === null) return null
    if (Object.keys(obj).length < 1) return null

    const newObj = {}
    Object.keys(obj).forEach(key => {
        const values = obj[key].split(' ')
        const upperFirst = values.map(val => firstLetterUpper(val) + val.substring(1))
        newObj[key] = upperFirst.join(' ')
    })
    return newObj
}

const AddressLabel = ({ person }) => {
    const { firstName, lastName, streetAddr, city, state, zip } = uppercaseFirstChar(person)
    const formattedState = state.toUpperCase()

    return (<div>
        <div>{`${firstName} ${lastName}`}</div>
        <div>{`${streetAddr}`}</div>
        <div>{`${city}, ${formattedState} ${zip}`}</div>
    </div>)
}

const Stamp = () => (<div style={{
    width: 50,
    height: 50,
    border: '2px solid gray',
    color: 'gray',
}}>
    <div style={{
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 700,
        marginTop: 17,
        transform: 'rotate(315deg)'
    }}>STAMP</div>
</div>)

const envelopeRow = (address, shouldHaveStamp) => (
    <div style={{
        display: 'flex',
        justifyContent: `${shouldHaveStamp ? 'space-between' : 'center' }`,
        width: '95%',
        height: '30%',
        margin: 'auto',
        marginTop: '1%',
    }}>
        <AddressLabel person={address} />
        {shouldHaveStamp && <Stamp />}
    </div>)

const Envelope = ({ toPerson, fromPerson }) => (<div style={{
        width: '75%',
        height: '25%',
        border: '2px solid black',
    }}>
        {envelopeRow(fromPerson, true)}
        {envelopeRow(toPerson)}
    </div>)

export default Envelope;