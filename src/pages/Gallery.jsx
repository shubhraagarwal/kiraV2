import Navbar from "../components/Navbar";
import Search from '../assets/search.png'
import Add from '../assets/add.png'
import YourWallet from '../assets/yourwallet.png'
const Gallery = () => {
    return ( 
     <div className="gal_back">
     <Navbar/>
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
     <h1>KIRA GENESIS &nbsp; &nbsp; &nbsp; &nbsp; <span>//10000</span></h1>
     </div>
     <div>
     <button>
     <img src={YourWallet} alt="" />
     Your Wallet
     </button>
     </div>
     </div>
     </div>
     </div>
     );
}
 
export default Gallery;