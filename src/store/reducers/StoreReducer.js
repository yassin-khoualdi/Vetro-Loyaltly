const initState = {
    storeResponse:null,
    storeMessage:null,
    loadStores:null

};


const StoreReducer = (state=initState, action) => {
    switch (action.type) {
        case 'RESTART_AUTH_RESPONSE':
            return {
                ...state,
                storeResponse: null
            }
        case 'NEW_STORE_SUCCESS':
            console.log(action);
            return {
                ...state,
                storeResponse: 'New Store Created'
            }

        case 'CODE_ERROR':
            console.log(action);
            return {
                ...state,
                storeResponse: 'There seems to be a problem please try again later',
            }

        case 'LOAD_STORE':
            console.log(action.res);
            return {
                ...state,
                loadStores: action.res
            }

        case 'FETCH_STORE_ERROR':
            return {
                ...state,
                loadStores: action.error
            }

        default:
            return state;
    }
}

export default StoreReducer;