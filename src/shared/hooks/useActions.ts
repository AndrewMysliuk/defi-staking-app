import { bindActionCreators } from "redux"
import { allActionCreators } from "@/shared/store/reducers/action-creator"
import { useAppDispatch } from "./useAppDispatch"

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(allActionCreators, dispatch)
}
