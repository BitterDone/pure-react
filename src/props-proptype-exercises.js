import React from 'react';
// import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

const uppercaseFirstChar = obj => {
    if (obj === undefined) return null // null best return?
    if (obj === null) return null
    if (Object.keys(obj).length < 1) return null

    const newObj = {}
    Object.keys(obj).forEach(key => {
        const val = obj[key]
        const strToLower = val.toLowerCase()
        const upperd = strToLower.charAt(0).toUpperCase() + strToLower.substring(1)
        newObj[key] = upperd
    })
    return newObj
}

const AddressLabel = ({ person }) => {
    const { firstName, lastName, streetAddr, city, state, zip } = uppercaseFirstChar(person)

    const formattedStreetObj = uppercaseFirstChar(streetAddr.split(' '))
    const formattedStreet = Object.values(formattedStreetObj).join(' ')
    const formattedState = state.toUpperCase()

    return (<div>
        <div>{`${firstName} ${lastName}`}</div>
        <div>{`${formattedStreet}`}</div>
        <div>{`${city}, ${formattedState} ${zip}`}</div>
    </div>)
}

const PropExercises = () => (<div>
    <AddressLabel
        person={{
            firstName: 'elon',
            lastName: 'musk',
            streetAddr: '123 street st',
            city: 'city',
            state: 'st',
            zip: '-zip-',
        }}
    />
</div>)

export default PropExercises;
