import { AppDispatch } from "../.."
import {
  CommonActionsEnum,
  SetAuthAction,
  AddCounterAction,
  RemoveCounterAction,
} from "./types"

export const CommonActionCreators = {
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: CommonActionsEnum.SET_AUTH,
    payload: auth,
  }),

  checkUserLogin: () => async (dispatch: AppDispatch) => {
    // TODO Check Is User Login
    // dispatch(CommonActionCreators.setIsAuth(true))
  },

  addCounter: (value: number): AddCounterAction => ({
    type: CommonActionsEnum.ADD_COUNTER,
    payload: value,
  }),

  removeCounter: (value: number): RemoveCounterAction => ({
    type: CommonActionsEnum.REMOVE_COUNTER,
    payload: value,
  }),
}
