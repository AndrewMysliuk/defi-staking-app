export interface CommonState {
  isAuth: boolean
  isLoading: boolean
}

export enum CommonActionsEnum {
  SET_AUTH = "SET_AUTH",
  SET_IS_LOADING = "SET_IS_LOADING",
}

export interface SetAuthAction {
  type: CommonActionsEnum.SET_AUTH
  payload: boolean
}

export interface SetIsLoading {
  type: CommonActionsEnum.SET_IS_LOADING
  payload: boolean
}

export type CommonAction = SetAuthAction | SetIsLoading
