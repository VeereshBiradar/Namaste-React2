import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {

    const error = useRouteError();
    console.log(error.data)
    return (
        <>
            <h1>
                Oops !!! something went wrong, please try again after 5 minutes.
            </h1>
        </>
    )
}

export default Error