export interface BankingState {
  accountValue: string
  tetherBalance: string
  rwdBalance: string
  stakingBalance: string
}

export enum BankingActionEnum {
  SET_ACCOUNT_VALUE = "SET_ACCOUNT_VALUE",
  SET_TETHER_BALANCE = "SET_TETHER_BALANCE",
  SET_RWD_BALANCE = "SET_RWD_BALANCE",
  SET_STAKING_BALANCE = "SET_STAKING_BALANCE",
}

export interface SetAccountValue {
  type: BankingActionEnum.SET_ACCOUNT_VALUE
  payload: string
}

export interface SetTetherBalance {
  type: BankingActionEnum.SET_TETHER_BALANCE
  payload: string
}

export interface SetRwdBalance {
  type: BankingActionEnum.SET_RWD_BALANCE
  payload: string
}

export interface SetStakingBalance {
  type: BankingActionEnum.SET_STAKING_BALANCE
  payload: string
}

export type BankingAction = SetAccountValue | SetTetherBalance | SetRwdBalance | SetStakingBalance
