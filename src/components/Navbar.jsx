import Logo from "../assets/LOGO - GOLDEN.png";
import Wallet from "../assets/Wallet.svg";
import "./components.css";
import { Link } from "react-router-dom";
import Hamburger from '../assets/Hamburger.png'
import { useState } from "react";
const Navbar = (props) => {
const[ham,setHam] =  useState(false)
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
     
          <img src={props.home} alt="" className="spark"/>
         
          </div>
         
          <div>
          <li>
            <Link to="/defeat">Purpose</Link>
          </li>
          <img src={props.purpose} alt="" className="spark"/>
          </div>
          <div>
          <li>
            <Link to="/development">Development</Link>
          </li>
          <img src={props.development} alt="" className="spark"/>
          </div>
          <div>
          <li>
            <Link to="/reserve">Reserve</Link>
          </li>
          <img src={props.reserve} alt=""  className="spark"/>
          </div>
          <div>
          <li>
          <Link to='/team'>
          Team
          </Link>
          </li>
          <img src={props.team} alt="" className="spark"/>
          </div>
          <div>
          <p className="SoonMarket">Soon</p>
          <li style={{padding:'0rem 2rem'}}>
            <Link to="/marketplace">Marketplace</Link>
          </li>
  {/*<span className="SoonMarket">Soon</span>*/}
          <img src={props.market} alt="" style={{top:'0rem'}} className="spark"/>
        
          </div>
          <div>
          <p className="SoonStake">Soon</p>
            <li style={{padding:'0rem 2rem'}}>
              <Link to="/staking">Staking</Link>
            </li>
            <img src={props.staking} alt="" style={{top:'0rem'}} className="spark"/>
           {/* <span className="SoonStake">Soon</span>*/}
          </div>
          <div>
          <div className="Weapon">
            <li>Weapon</li>
            <img src={props.weapon} alt="" className="spark"/>
            <span className="SoonWeapon">Soon</span>
          </div>
          </div>
          <div className="Land">
            <li>Land</li>
            <img src={props.land} alt="" className="spark"/>
            <span className="SoonLand">Soon</span>
          </div>
          <div className="hamburger" onClick={() => {
            setHam(!ham);
            // if(ham === true){
            // document.querySelector('.res_routes').style.transition = '0.5s'
            // }
          }}>
          {ham === false?
          <img src={Hamburger} alt="" className="befHam"/>
          :
          <>
          <img src={Hamburger} alt="" className="aftHam"/>
        <div className="res_routes">
        <div className="crossNav">
        <div onClick={() => setHam(false)}>x</div>
        </div>
        <p>Home</p>
        <p>Pupose</p>
        <p>Development</p>
        <p>Reserve</p>
        <p>Team</p>
        <p>Marketplace</p>
        <p>Staking</p>
        <p>Weapon</p>
        <p>Land</p>
        </div>
          </>
          }
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
