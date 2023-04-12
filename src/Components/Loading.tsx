import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loading = () => {
    return (
        <div className='mt-5'>
            <Spinner>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}
