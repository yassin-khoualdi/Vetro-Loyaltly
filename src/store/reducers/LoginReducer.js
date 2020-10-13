const initState = {
    loginResponse: null
}


const LoginReducer = (state=initState, action) => {
    switch (action.type) {
        case 'RESTART_AUTH_RESPONSE':
            return {
                ...state,
                loginResponse: null
            }
        case 'LOADING':
            return {
                ...state,
                loginResponse: 'loading...'
            }
        case 'SHORT_PASSWORD':
            console.log(action);
            return {
                ...state,
                loginResponse: 'Password is too short'
            }

        case 'CODE_ERROR':
            console.log(action);
            return {
                ...state,
                loginResponse: 'There seems to be a problem please try again later',
            }

        case 'LOGIN_SUCCESS':
            console.log(action);
            return {
                ...state,
                loginResponse: 'Redirecting you to dashboard..',
            }

        case 'LOGIN_ERROR':
            console.log(action);
            return {
                ...state,
                loginResponse: action.res.message,
            }

        default:
            return state;
    }
}

export default LoginReducer;