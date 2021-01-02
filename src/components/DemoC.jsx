import React from 'react';
import { FirstName, LastName } from '../App';

const DemoC = () => {
    return (
        <>
            <FirstName.Consumer>{(fname) => {
                return (
                    <LastName.Consumer>{(lname) => {
                        return (
                            <h1>Hello, {fname} {lname} = Consumer</h1>
                        )
                    }}
                    </LastName.Consumer>
                )
            }}
            </FirstName.Consumer>
        </>
    );
};

export default DemoC;