import {combineReducers} from 'redux'
import LoginReducer from './LoginReducer'
import DashboardReducer from './DashboardReducer'
import LoyaltyReducer from './LoyaltyReducer'
import PointsbalanceReducer from './PointsbalanceReducer'
import PointshistoryReducer from './PointshistoryReducer'
import PointsloyaltyReducer from './PointsloyaltyReducer'
import RegisteredloyaltyReducer from './RegisteredloyaltyReducer'
import RegisteredstoreReducer from './RegisteredstoreReducer'
import StoreReducer from './StoreReducer'

const RootReducer = combineReducers({
    login:LoginReducer,
    dashboard:DashboardReducer,
    loyalty:LoyaltyReducer,
    pointsbalance:PointsbalanceReducer,
    pointshistory:PointshistoryReducer,
    pointsloyalty:PointsloyaltyReducer,
    registeredloyalty:RegisteredloyaltyReducer,
    registeredstore:RegisteredstoreReducer,
    store:StoreReducer
})

export default RootReducer