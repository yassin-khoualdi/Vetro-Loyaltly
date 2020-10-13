import { LoginUser } from '../services/AuthService';

export const UserLogin = (credentials, history) => {
    return (dispatch) => {
        if (credentials.password.length < 6) {
            return dispatch({ type: 'SHORT_PASSWORD' })
        }

        LoginUser(credentials, history).then((res) => {
                console.log(res);
                if (res.success == true) {
                    localStorage.setItem("user", 'Bearer ' + res.token);
                    dispatch({ type: 'LOGIN_SUCCESS' })
                    setTimeout(() => {
                        history.push("/dashboard");
                    }, 3000);
                } else {
                    dispatch({ type: 'LOGIN_ERROR', res })
                }
            },
            error => {
                dispatch({ type: 'CODE_ERROR', error });
                console.log(error)
            })
    }
}

export const resetAuthResponsePerComponent = (dispatch) => {
    return (dispatch) => {
        dispatch({ type: 'RESTART_AUTH_RESPONSE' });
    }
}