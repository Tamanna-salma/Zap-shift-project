import React, { use } from 'react'
import { AuthContext } from '../Context/AuthContext'

const UseAuth = () => {
    const authinfo=use(AuthContext);

  return authinfo;
}

export default UseAuth