import React, { useContext } from 'react';
import DemoC from './DemoC';
import { FirstName, LastName } from '../App';

const DemoB = () => {

    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (
        <>
            <h1>Hello, {fname} {lname} = useContext</h1>
            <DemoC></DemoC>
        </>
    );
};

export default DemoB;