// import { AppDispatch } from "../.."
import { BankingActionEnum, SetAccountValue, SetRwdBalance, SetStakingBalance, SetTetherBalance } from "./types"

export const BankingActionCreators = {
  setAccountValue: (address: string): SetAccountValue => ({
    type: BankingActionEnum.SET_ACCOUNT_VALUE,
    payload: address,
  }),

  setTetherBalance: (balance: string): SetTetherBalance => ({
    type: BankingActionEnum.SET_TETHER_BALANCE,
    payload: balance,
  }),

  setRwdBalance: (balance: string): SetRwdBalance => ({
    type: BankingActionEnum.SET_RWD_BALANCE,
    payload: balance,
  }),

  setStakingBalance: (balance: string): SetStakingBalance => ({
    type: BankingActionEnum.SET_STAKING_BALANCE,
    payload: balance,
  }),
}
