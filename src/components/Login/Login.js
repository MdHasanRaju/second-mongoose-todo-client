import React from 'react';
import auth from '../../firebase.init';
import GoogleSignin from './GoogleSignin';


const Login = () => {

     return (
          <div>
          <GoogleSignin/>
          </div>
     );
};

export default Login;