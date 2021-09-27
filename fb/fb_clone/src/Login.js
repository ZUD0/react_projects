import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';

function Login() {
    const [state , dispatch] = useStateValue();

    const signIn = () => {
        //sign in...
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
                console.log(result)
            }).catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="Facebook_logo" />
                <img src="https://1000logos.net/wp-content/uploads/2016/11/logo-fb.png" alt="Facebook" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            
        </div>
    )
}

export default Login;
