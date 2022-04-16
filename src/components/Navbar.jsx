import Logo from "../assets/LOGO - GOLDEN.png";
import Wallet from "../assets/Wallet.svg";
import "./components.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {

  return (
    <div className="Navbar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="nav_routes">
        <ul>
        <div>
          <li >
            <Link to="/" >Home</Link>

          </li>
     
          <img src={props.home} alt="" />
         
          </div>
         
          <div>
          <li>
            <Link to="/defeat">Purpose</Link>
          </li>
          <img src={props.purpose} alt="" />
          </div>
          <div>
          <li>
            <Link to="/development">Development</Link>
          </li>
          <img src={props.development} alt="" />
          </div>
          <div>
          <li>
            <Link to="/reserve">Reserve</Link>
          </li>
          <img src={props.reserve} alt="" />
          </div>
          <div>
          <li>
          <Link to='/team'>
          Team
          </Link>
          </li>
          <img src={props.team} alt="" />
          </div>
          <div>
          <p className="SoonMarket">Soon</p>
          <li style={{padding:'0rem 2rem'}}>
            <Link to="/marketplace">Marketplace</Link>
          </li>
  {/*<span className="SoonMarket">Soon</span>*/}
          <img src={props.market} alt="" style={{top:'0rem'}}/>
        
          </div>
          <div>
          <p className="SoonStake">Soon</p>
            <li style={{padding:'0rem 2rem'}}>
              <Link to="/staking">Staking</Link>
            </li>
            <img src={props.staking} alt="" style={{top:'0rem'}}/>
           {/* <span className="SoonStake">Soon</span>*/}
          </div>
          <div>
          <div className="Weapon">
            <li>Weapon</li>
            <img src={props.weapon} alt="" />
            <span className="SoonWeapon">Soon</span>
          </div>
          </div>
          <div className="Land">
            <li>Land</li>
            <img src={props.land} alt="" />
            <span className="SoonLand">Soon</span>
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
