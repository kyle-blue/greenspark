import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from '..'

type Account = any
interface AccountState {
    account?: Account
}

const initialState: AccountState = {
    account: undefined,
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setAccount: (state, { payload }: PayloadAction<Account>) => {
            state.account = payload
        },
    },
})

export const { setAccount } = accountSlice.actions
export const { actions } = accountSlice
// eslint-disable-next-line max-len
export const useAccountSelector = (func: (account: AccountState) => any): any => useSelector<RootState>((state) => func(state.account))
export default accountSlice.reducer
