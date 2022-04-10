
import Logo from '../assets/logo.png'
import Wallet from '../assets/wallet.png';
import Staking from '../assets/staking.png'
import './components.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (  
        <div className="Navbar">
        <div className="logo">
        <img src={Logo} alt="" />
        </div>
        <div className="nav_routes">
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li>Marketplace</li>
        <li>Purpose</li>
        <li>Development</li>
        <li>Reserve</li>
<div>
     
        <li>Staking</li>
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
        <img src={Wallet} alt="" />
        </div>
        </div>
    );
}
 
export default Navbar;