import React from 'react'
import {Spinner} from 'react-bootstrap'

function Loader() {
    return (
        <div>
            <Spinner className="justify-content-center" animation="grow" variant="warning" />
        </div>
    )
}

export default Loader
