import { AppDispatch } from "../.."
import { CommonActionsEnum, SetAuthAction, SetIsLoading } from "./types"

export const CommonActionCreators = {
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: CommonActionsEnum.SET_AUTH,
    payload: auth,
  }),

  setIsLoading: (value: boolean): SetIsLoading => ({
    type: CommonActionsEnum.SET_IS_LOADING,
    payload: value,
  }),

  checkUserLogin: () => async (dispatch: AppDispatch) => {
    // TODO Check Is User Login
    // dispatch(CommonActionCreators.setIsAuth(true))
  },
}
