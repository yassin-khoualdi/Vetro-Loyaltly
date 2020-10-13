import {
    CreateNewStore,
    loadStores
} from '../services/StoreService'

export const createStoreUser = (credentials) => {
    return (dispatch) => {
        dispatch({ type: 'RESTART_ADD_UPDATE_RESPONSE' });
        dispatch({ type: 'LOADING' });
        CreateNewStore(credentials).then((res) => {
            console.log(res);
                dispatch({ type: 'NEW_STORE_SUCCESS', res})
        },
        error => {
            dispatch({ type: 'NEW_STORE_CODE_ERROR', error });
        })
    }
}

export const loadStoreUser = (page) => {
    return (dispatch) => {
        loadStores(page).then((res) => {
            console.log(res)
            dispatch({ type: 'LOAD_STORES', res });
        }, error => {
            dispatch({ type: 'FETCH_CONTACT_ERROR', error })
            console.log(error)
        })
    }
}