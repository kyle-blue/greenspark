import { combineReducers, configureStore } from '@reduxjs/toolkit'
import accountReducer from './reducers/account'

const rootReducer = combineReducers({
    account: accountReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export default store
