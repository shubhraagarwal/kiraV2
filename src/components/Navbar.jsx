import Logo from "../assets/logo.png";
import Wallet from "../assets/wallet.png";
import Staking from "../assets/staking.png";
import "./components.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="nav_routes">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/marketplace">Marketplace</Link>
          </li>
          <li>
            <Link to="/defeat">Purpose</Link>
          </li>
          <li>
            <Link to="/development">Development</Link>
          </li>
          <li>
            <Link to="/reserve">Reserve</Link>
          </li>
          <div>
            <li>
              <Link to="/staking">Staking</Link>
            </li>
            <img src={Staking} alt="" />
            <span>Soon</span>
          </div>
          <div>
            <li>Weapon</li>
            <span>Soon</span>
          </div>
          <div>
            <li>Land</li>
            <span>Soon</span>
          </div>
        </ul>
      </div>
      <div className="wallet">
        <Link to="/connect">
          {" "}
          <img src={Wallet} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
