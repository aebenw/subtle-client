import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'

import { NO_PROFILE } from '../../constants'




const User = ({user, userShow}) => {

  return(
    <Fragment>
      <div key={user.id}  className="card user-card" onClick={() => userShow(user.id)}>
      <Link to={{pathname: `/users/${user.name}`, state: user.id}}>
      <img src={user.file ? user.file : NO_PROFILE} className="section media" alt="profile"/>
      </Link>
      <Link to={{pathname: `/users/${user.name}`, state: user.id}}>
        <div className="section author">
        {user.name}
      </div>
      </Link>
    </div>
  </Fragment>
  )
}

export default User
