import { FC } from "react"
import "./TheNavbar.scss"

interface TheNavbarProps {
  account: string
}

const TheNavbar: FC<TheNavbarProps> = ({ account }) => {
  return (
    <nav className="navbar navbar-dark fixed-top shadow p-0">
      <a
        className="navbar__link navbar-brand col-sm-3 col-md-2 mr-0"
        href="https://react.dev/"
      >
        DAPP Yield Staking (Decentralized Banking)
      </a>

      <ul className="navbar__list navbar-nav px-3 ">
        <li className="navbar__list-point text-nowrap nav-item">
          <small className="navbar__list-small">
            ACCOUNT NUMBER: {account}
          </small>
        </li>
      </ul>
    </nav>
  )
}

export default TheNavbar
