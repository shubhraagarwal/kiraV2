import Navbar from "../components/Navbar";
import Search from "../assets/search.png";
import Add from "../assets/add.png";
import YourWallet from "../assets/yourwallet.png";
import Random from "../assets/random.png";
import CharOne from '../assets/CharOne.png'
import CharTwo from '../assets/CharTwo.png'
import CharThree from '../assets/CharThree.png'
// import CharFour from '../assets/CharFour.png'
import CharFive from '../assets/CharFive.png'
import CharSix from '../assets/CharSix.png'
import CharSeven from '../assets/CharSeven.png'
// import CharEight from '../assets/CharEight.png'
import CharNine from '../assets/CharNine.png'
import CharTen from '../assets/CharTen.png'
import CharEleven from '../assets/CharEleven.png'
// import CommingSoon from '../assets/Coming soon.png'
// import MarketPlace from "../assets/Marketplace-coming soon.png";
import Mint from '../assets/Mint Section.png'
import Staking from "../assets/staking.png";
import Filter from '../assets/filter.png'
const Gallery = () => {
  return (
    <>
    <div className="gal_back">
      <div className="navBox">
        <Navbar
          home=""
          market={Staking}
          purpose=""
          development=""
          reserve=""
          staking=""
          weapon=""
          land=""
        />
      </div>
      <div className="gal_wrap">
        <div className="gallery">
          <div className="filter">
            <h1>FILTERS</h1>
            <div className="searchToken">
              <img src={Search} alt="" />
              <input type="search" placeholder="Search by token id..." />
            </div>
            <div className="Background" id="back">
              <div>
                <p>Background </p>
              </div>
              <div className="backImg">
                <img src={Add} alt="" />
              </div>
            </div>
            <div className="Background">
              <div>
                <p>Headwear</p>
              </div>
              <div className="backImg">
                <img src={Add} alt="" />
              </div>
            </div>
            <div className="Background">
              <div>
                <p>Weapon</p>
              </div>
              <div className="backImg">
                <img src={Add} alt="" />
              </div>
            </div>
            <div className="Background">
              <div>
                <p>Eyewear</p>
              </div>
              <div className="backImg">
                <img src={Add} alt="" />
              </div>
            </div>
            <div className="Background">
              <div>
                <p>Mouth</p>
              </div>
              <div className="backImg">
                <img src={Add} alt="" />
              </div>
            </div>
            <div className="Background">
              <div>
                <p>Hair</p>
              </div>
              <div className="backImg">
                <img src={Add} alt="" />
              </div>
            </div>
            <div className="Background" id="access">
              <div>
                <p>Accessories</p>
              </div>
              <div className="backImg">
                <img src={Add} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="genesis">
          <div className="genesis_header">
            <div>
              <h1>
                KIRA GENESIS &nbsp; &nbsp; &nbsp; &nbsp; <span> / / 10000</span>
              </h1>
              <button className="randomBtn">
                <img src={Random} alt="" />
                Randomize
              </button>
              <div className="Char_Wrap">
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
     <div className="charCont" id="thirdCont">
     <img src={CharThree} alt="" />
     <p>Kira</p>
     <div className="selection">
     <input type="checkbox"/>
     <span>Select</span>
     </div>
     </div>
   {/*  <div className="charCont">
     <img src={CharFour} alt="" />
     <p>Kira</p>
     <div className="selection">
     <input type="checkbox"/>
     <span>Select</span>
     </div>
  </div>*/}

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
     <div className="charCont" id="SixCont">
     <img src={CharSeven} alt="" />
     <p>Kira</p>
     <div className="selection">
     <input type="checkbox"/>
     <span>Select</span>
     </div>
     </div>
    {/* <div className="charCont">
     <img src={CharEight} alt="" />
     <p>Kira</p>
     <div className="selection">
     <input type="checkbox"/>
     <span>Select</span>
     </div>
</div>*/}
     
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
     <div className="charCont" id="NineCont">
     <img src={CharEleven} alt="" />
     <p>Kira</p>
     <div className="selection">
     <input type="checkbox"/>
     <span>Select</span>
     </div>
     </div>
     </div>
     </div>
     <div className="Mint">
     <img src={Mint} alt="" />
     </div>
               </div> 

              <div className="gallery_comming">
               <h1>COMING SOON</h1>
    </div>
            </div>

            <div>
              <button className="walletBtn">
                <img src={YourWallet} alt="" />
                Your Wallet
              </button>
              <button className="filterBtn">
              <img src={Filter} alt="" />
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='res'>
    <h1>Please open the site in a Desktop</h1>
    </div>
    </>

  );
};

export default Gallery;
