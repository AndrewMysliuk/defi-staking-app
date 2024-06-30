export interface CommonState {
  isAuth: boolean
  counter: number
}

export enum CommonActionsEnum {
  SET_AUTH = "SET_AUTH",
  ADD_COUNTER = "ADD_COUNTER",
  REMOVE_COUNTER = "REMOVE_COUNTER",
}

export interface SetAuthAction {
  type: CommonActionsEnum.SET_AUTH
  payload: boolean
}

export interface AddCounterAction {
  type: CommonActionsEnum.ADD_COUNTER
  payload: number
}

export interface RemoveCounterAction {
  type: CommonActionsEnum.REMOVE_COUNTER
  payload: number
}

export type CommonAction =
  | SetAuthAction
  | AddCounterAction
  | RemoveCounterAction
