import Navbar from "../components/Navbar";
import Preview from '../assets/Preview.png'
import Staking from "../assets/staking.png";
import ResStake from '../assets/res_inventory.png'
const StakingSoon = () => {
    
    
    return ( 

        <>
        <div className="navBox">
        <Navbar home = '' market ='' purpose = '' development = '' reserve = '' staking = {Staking} weapon = '' land = ''/>
        </div>
<div className="CommingSoon">
<img src={Preview} alt="" className="Preview"/>
<img src={ResStake} alt="" className="PrevRes"/>
</div>
        </>
     );
}
 
export default StakingSoon;