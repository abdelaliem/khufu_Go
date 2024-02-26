import React from 'react'
import { Link } from 'react-router-dom'
function Type() {
    return (
        <div className=''>
            <Link to={`/login/user`} ><button>user</button></Link>
            <Link to={`/login/driver`}><button>driver</button></Link>
        </div>
    )
}

export default Type