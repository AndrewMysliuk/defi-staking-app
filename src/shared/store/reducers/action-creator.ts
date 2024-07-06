import { CommonActionCreators } from "./common/action-creators"
import { BankingActionCreators } from "./banking/action-creators"

export const allActionCreators = {
  ...CommonActionCreators,
  ...BankingActionCreators,
}
