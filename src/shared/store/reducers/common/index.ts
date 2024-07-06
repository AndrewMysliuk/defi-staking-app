import { CommonAction, CommonActionsEnum, CommonState } from "./types"

const initialStore: CommonState = {
  isAuth: false,
  isLoading: true,
}

export default function commonReducer(
  state = initialStore,
  action: CommonAction
): CommonState {
  switch (action.type) {
    case CommonActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload }

    case CommonActionsEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload }

    default:
      return state
  }
}
