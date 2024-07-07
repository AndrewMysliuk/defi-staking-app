import "./TheNavbar.scss"
import { useTypedSelector } from "@/shared/hooks"

const TheNavbar = () => {
  const { accountValue } = useTypedSelector((state) => state.banking)

  return (
    <nav className="navbar navbar-dark fixed-top shadow p-0">
      <a className="navbar__link navbar-brand col-sm-3 col-md-2 mr-0 px-3" href="https://react.dev/">
        DAPP Yield Staking (Decentralized Banking)
      </a>

      <ul className="navbar__list navbar-nav px-3">
        <li className="navbar__list-point text-nowrap nav-item">
          <small className="navbar__list-small">ACCOUNT NUMBER: {accountValue}</small>
        </li>
      </ul>
    </nav>
  )
}

export default TheNavbar
