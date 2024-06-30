import { CommonAction, CommonActionsEnum, CommonState } from "./types"

const initialStore: CommonState = {
  isAuth: false,
  counter: 0,
}

export default function userReducer(
  state = initialStore,
  action: CommonAction
): CommonState {
  switch (action.type) {
    case CommonActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload }

    case CommonActionsEnum.ADD_COUNTER:
      return { ...state, counter: state.counter + action.payload }

    case CommonActionsEnum.REMOVE_COUNTER:
      return { ...state, counter: state.counter - action.payload }

    default:
      return state
  }
}
