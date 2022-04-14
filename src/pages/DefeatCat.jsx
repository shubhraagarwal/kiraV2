import Navbar from "../components/Navbar";
import {Link} from 'react-router-dom';
import Staking from "../assets/staking.png";
const DefeatCat = () => {
    return ( 
        <>
        <div className="DefeatWrap">
        <div className="navBox">
        <Navbar home = '' market ='' purpose = {Staking} development = '' reserve = '' staking = '' weapon = '' land = ''/>
        </div>
        <section className="defeatCat">
       
            <div className="defeat_header">
                <h1>Defeat The Shogun</h1>
                <p>The shogun is an embodiment of all we dislike in our current world and society. Whether it is Predjudice, Discrimination, <br /> Unequal Rights, Hate, Governments , Dictators everyone has their Shogun. </p> 
                <p> The Shogun will be defeated.</p>
            </div>
            <Link to= '/defeat/assent'>
            <div className="defeat_assent">
                <h1>ASSENT</h1>
                <p>Assignment 1 </p>
            </div>
            </Link>
            <Link to= '/defeat/supernova'>
            <div className="defeat_supernova">
                <h1>SUPERNOVA</h1>
                <p>Assignment 2 </p>
            </div>
            </Link>
            <Link to= '/defeat/tilt'>
            <div className="defeat_tilt">
                <h1>TILT</h1>
                <p>Assignment 3 </p>
            </div>
            </Link>
            <Link to='/defeat/impossible'>
            <div className="defeat_impossible">
                <h1>IMPOSSIBLE</h1>
                <p>Assignment 4 </p>
            </div>
            </Link>
        
        </section>
        </div>
        </>
     );
}
 
export default DefeatCat;