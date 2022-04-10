import Navbar from "../components/Navbar";
import Search from '../assets/search.png'
import Add from '../assets/add.png'
import YourWallet from '../assets/yourwallet.png'
import Random from '../assets/random.png'
import CharOne from '../assets/CharOne.png'
import CharTwo from '../assets/CharTwo.png'
import CharThree from '../assets/CharThree.png'
import CharFour from '../assets/CharFour.png'
import CharFive from '../assets/CharFive.png'
import CharSix from '../assets/CharSix.png'
import CharSeven from '../assets/CharSeven.png'
import CharEight from '../assets/CharEight.png'
import CharNine from '../assets/CharNine.png'
import CharTen from '../assets/CharTen.png'
import CharEleven from '../assets/CharEleven.png'
const Gallery = () => {
    return ( 
     <div className="gal_back">
     <div className="navBox">
     <Navbar/>
     </div>
     <div className="gal_wrap">
     <div className="gallery">
     <div className="filter">
     <h1>FILTERS</h1>
     <div className="searchToken">
     <img src={Search} alt="" />
     <input type="search" placeholder="Search by token id..." />
     </div>
     <div className="Background" id='back'>
     <div>
     <p>Background  </p>
     </div>
     <div className="backImg"><img src={Add} alt="" /></div>

     </div>
     <div className="Background">
     <div>
     <p>Headwear</p>
     </div>
     <div className="backImg"><img src={Add} alt="" /></div>
     </div>
     <div className="Background">
     <div>
     <p>Weapon</p>
     </div>
     <div className="backImg"><img src={Add} alt="" /></div>
     </div>
     <div className="Background">
     <div>
     <p>Eyewear</p>
     </div>
     <div className="backImg"><img src={Add} alt="" /></div>
     </div>
     <div className="Background">
     <div>
     <p>Mouth</p>
     </div>
     <div className="backImg"><img src={Add} alt="" /></div>
     </div>
     <div className="Background">
     <div>
     <p>Hair</p>
     </div>
     <div className="backImg"><img src={Add} alt="" /></div>
     </div>
     <div className="Background" id="access">
     <div>
     <p>Accessories</p>
     </div>
     <div className="backImg"><img src={Add} alt="" /></div>
     </div>
     </div>
     </div>
     <div className="genesis">
     <div className="genesis_header">
     <div>
     <h1>KIRA GENESIS &nbsp; &nbsp; &nbsp; &nbsp; <span>// 10000</span></h1>
     <button className="randomBtn">
     <img src={Random} alt="" />
     Randomize</button>
     <div className="Characters">
     <div className="CharRowOne">
     <div className="charCont">
     <img src={CharOne} alt="" />
     <p>Kira</p>
     <div className="selection">
     <input type="checkbox"/>
     <span>Select</span>
     </div>
     </div>
     <div className="charCont">
     <img src={CharTwo} alt="" />
     <p>Kira</p>
     <div className="selection">
     <input type="checkbox"/>
     <span>Select</span>
     </div>
     </div>
     <div className="charCont">
     <img src={CharThree} alt="" />
     <p>Kira</p>
     <div className="selection">
     <input type="checkbox"/>
     <span>Select</span>
     </div>
     </div>
     <div className="charCont">
     <img src={CharFour} alt="" />
     <p>Kira</p>
     <div className="selection">
     <input type="checkbox"/>
     <span>Select</span>
     </div>
     </div>

     </div>
     <div className="CharRowOne">
     <div className="charCont">
     <img src={CharFive} alt="" />
     <p>Kira</p>
     <div className="selection">
     <input type="checkbox"/>
     <span>Select</span>
     </div>
     </div>
     <div className="charCont">
     <img src={CharSix} alt="" />
     <p>Kira</p>
     <div className="selection">
     <input type="checkbox"/>
     <span>Select</span>
     </div>
     </div>
     <div className="charCont">
     <img src={CharSeven} alt="" />
     <p>Kira</p>
     <div className="selection">
     <input type="checkbox"/>
     <span>Select</span>
     </div>
     </div>
     <div className="charCont">
     <img src={CharEight} alt="" />
     <p>Kira</p>
     <div className="selection">
     <input type="checkbox"/>
     <span>Select</span>
     </div>
     </div>
     
     </div>
     <div className="CharRowOne">
     <div className="charCont">
     <img src={CharNine} alt="" />
     <p>Kira</p>
     <div className="selection">
     <input type="checkbox"/>
     <span>Select</span>
     </div>
     </div>
     <div className="charCont">
     <img src={CharTen} alt="" />
     <p>Kira</p>
     <div className="selection">
     <input type="checkbox"/>
     <span>Select</span>
     </div>
     </div>
     <div className="charCont">
     <img src={CharEleven} alt="" />
     <p>Kira</p>
     <div className="selection">
     <input type="checkbox"/>
     <span>Select</span>
     </div>
     </div>
     </div>
     </div>
     </div>

     <div>
     <button className="walletBtn">
     <img src={YourWallet} alt="" />
     Your Wallet
     </button>
     </div>
     </div>
     </div>
     </div>
     </div>
     );
}
 
export default Gallery;