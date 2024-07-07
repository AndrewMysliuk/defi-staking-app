import { BankingAction, BankingActionEnum, BankingState } from "./types"

const initialStore: BankingState = {
  accountValue: "",
  tetherBalance: "0",
  rwdBalance: "0",
  stakingBalance: "0",
}

export default function bankingReducer(state = initialStore, action: BankingAction): BankingState {
  switch (action.type) {
    case BankingActionEnum.SET_ACCOUNT_VALUE:
      return { ...state, accountValue: action.payload }

    case BankingActionEnum.SET_TETHER_BALANCE:
      return { ...state, tetherBalance: action.payload }

    case BankingActionEnum.SET_RWD_BALANCE:
      return { ...state, rwdBalance: action.payload }

    case BankingActionEnum.SET_STAKING_BALANCE:
      return { ...state, stakingBalance: action.payload }

    default:
      return state
  }
}
