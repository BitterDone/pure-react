import React from 'react';
// import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

import Envelope from './Envelope';
import CreditCard from './CreditCard';

const PropExercises = () => (<div style={{ height: '100%    ', width: '100%', backgroundColor: 'white', }}>
    <Envelope
        toPerson={{
            firstName: 'elon',
            lastName: 'musk',
            streetAddr: '123 street st',
            city: 'city',
            state: 'st',
            zip: '12345',
        }}
        fromPerson={{
            firstName: 'El Musko',
            lastName: 'Elono',
            streetAddr: '123 street st',
            city: 'city',
            state: 'st',
            zip: '54321',
        }}
    />
    <CreditCard 
        bankName="Big Bank, Inc."
        accountNumber="1234567887654321"
        securityCode="1234"
        expDate="0819"
        cardholder="cardholder name"
    />
</div>)

export default PropExercises;
