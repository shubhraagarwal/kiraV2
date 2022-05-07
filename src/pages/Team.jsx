import Navbar from "../components/Navbar";
import Staking from "../assets/staking.png";
import Antoni from "../assets/Antoni.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";
import Mary from "../assets/Mary.png";
import Marvin from "../assets/Marvin.png";
import Marc from "../assets/Marc.png";
import Nicky from "../assets/Nicky.png";
import ParamLabs from '../assets/Paramlabs logo.svg';
// import Kate from "../assets/Kate.png";
// import Jack from "../assets/Jack.png";
const Team = () => {
  return (
    <>
      <div className="navBox">
        <Navbar
          home=""
          market=""
          purpose=""
          development=""
          reserve=""
          staking=""
          weapon=""
          land=""
          team={Staking}
        />
      </div>
      <div className="Team">
        <div className="TeamSetOne">
          <div className="MemberOne">
            <div className="team_head">
              <h1>Antoni Tudisco</h1>
              <h2>ARTIST</h2>
            </div>
            <div className="team_cont">
              <div className="socials">
                <a
                  href="https://twitter.com/AntoniTudisco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a
                  href="http://instagram.com/antonitudisco
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Instagram} alt="Instagram" />
                </a>
              </div>
              <div className="team_pic">
                <img src={Antoni} alt="" />
              </div>
            </div>
          </div>
          <div className="MemberOne" id="Mary">
            <div className="team_head">
              <h1>VIN</h1>
              <h2>Lead Dev</h2>
            </div>
            <div className="team_cont">
              <div className="socials" id="Socio_CIO">
                <a
                  href="https://twitter.com/FomoFairy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a
                  href="mailto: Fomofairy@gmail.com "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
             
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  
                    fill="none"
                    stroke="#FFD37E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-mail"
                 className="CIOMail"
                    >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>{" "}
                </a>

                <svg
                fill="#FFD37E"
                stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                  onClick={() => {
                    navigator.clipboard.writeText("mary_x#7038");
                    alert("Discord ID copied to clipboard");
                  }}
                  className='Discord_CIO'
                >
                  <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z" />
                </svg>
              </div>
              <div className="team_pic">
                <img src={Mary} alt="" />
              </div>
            </div>
          </div>
          {/*  <div className="MemberTwo" id="Mary">
        <div className="team_head">
        <h1>Mary</h1>
        </div>
        <div className="team_container">
        <div className="team_picture">
        <img src={Mary} alt="" />
        </div>
        <div className="socialsHandles" id="cio">
        <h2>CIO</h2>
        <img src={Twitter} alt=""/>
        <img src={Instagram} alt="" />
        </div>
 
        </div>
    </div>*/}
        </div>

        <div className="TeamSetTwo">
          {/*     <div className="MemberTwo" id="Marvin">
        <div className="team_head">
        <h1>Marvin</h1>
        </div>
        <div className="team_container">
        <div className="team_picture">
        <img src={Marvin} alt="" />
        </div>
        <div className="socialsHandles" id="pm">
        <h2>PROJECT MANAGER</h2>
        <img src={Twitter} alt="" className="twitter" />
        <img src={Instagram} alt="" className="insta" />
        </div>
        </div>
</div>*/}
          <div className="MemberOne" id="Marvin">
            <div className="team_head">
              <h1>Morris</h1>
              <h2>PROJECT MANAGER</h2>
            </div>
            <div className="team_cont">
              <div className="socials">
                <a
                  href="mailto: gilmanicgeyf@gmail.com "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                   fill="none"
                    stroke="#FFD37E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-mail"
                    className="Marvin_mail"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>{" "}
                </a>

                <svg
                fill="#FFD37E"
                stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                  onClick={() => {
                    navigator.clipboard.writeText("KK Marvin Brown#8766");
                    alert("Discord ID copied to clipboard");
                  }}
                  className = 'Discord'
                >
                  <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z" />
                </svg>
              </div>
              <div className="team_pic">
                <img src={Marvin} alt="" />
              </div>
            </div>
          </div>
          <div className="MemberOne">
            <div className="team_head">
              <h1>Marc Tudisco</h1>
              <h2>ARTIST</h2>
            </div>
            <div className="team_cont">
              <div className="socials">
                <a
                  href=" https://twitter.com/marc_tudisco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a
                  href=" http://instagram.com/marctudisco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Instagram} alt="Twitter" />
                </a>
              </div>
              <div className="team_pic">
                <img src={Marc} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="TeamSetThree">
        <div className="MemberOne" id="Nick">
        <div className="team_head">
          <h1>Sir Nick</h1>
          <h2>STRATEGIC ADVISOR</h2>
        </div>
        <div className="team_cont">
          <div className="socials" style={{visibility:'hidden'}}>
            <a
              href=" https://twitter.com/marc_tudisco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href=" http://instagram.com/marctudisco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Twitter" />
            </a>
          </div>
          <div className="team_pic">
            <img src={Nicky} alt="" />
          </div>
        </div>
      </div>
      <div className="MemberOne">
      <div className="team_head">
       <a href="https://paramlabs.io/" target='_blank' rel="noreferrer"><h1>Paramlabs</h1></a>
        <h2 style={{visibility:'hidden'}}>ARTIST</h2>
      </div>
      <div className="team_cont">
       
        <div className="team_pic">
         <a href="https://paramlabs.io/" target='_blank' rel="noreferrer"><img src={ParamLabs} alt="" /></a>
        </div>
      </div>
    </div>
          {/*<div className="MemberTwo">
            <div className="team_head">
              <h1>Sir Nick</h1>
            </div>
            <div className="team_container">
              <div className="team_picture">
                <img src={Nicky} alt="" />
              </div>
              <div className="socialsHandles">
                <h2>STRATEGIC ADVISOR</h2>
              </div>
            </div>
                </div> */}
        {/*  <div className="MemberTwo">
            <div className="team_head">
              <h1>Kate</h1>
            </div>
            <div className="team_container">
              <div className="team_picture">
                <img src={Kate} alt="" />
              </div>
              <div className="socialsHandles" id="pr">
                <h2>PR & COMMUNICATIONS</h2>
                <div className="PrSocials">
                <a
                  href="mailto: Nikimotosatoshi@gmail.com "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFD37E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-mail"
                    className="CommMail"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/katekittywong"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFD37E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-linkedin"
                    className="CommLink"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                <svg
                fill="#FFD37E"
                stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                  onClick={() => {
                    navigator.clipboard.writeText("TLDRdyslexic#9498");
                    alert("Discord ID copied to clipboard");
                  }}
                  className='Discord'
                >
                  <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z" />
                </svg>
                </div>
              </div>
            </div>
                </div> */}
       {/*   <div className="MemberTwo" id="Kate">
            <div className="team_head">
              <h1>Jack (aka Monique)</h1>
            </div>
            <div className="team_container">
              <div className="team_picture">
                <img src={Jack} alt="" />
              </div>
              <div className="socialsHandles">
                <h2>PROJECT MANAGER</h2>
                <div className="PMSocials">
                <a
                  href="mailto: gockgo596@gmail.com  "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFD37E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-mail"
                    className="CommMail"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>{" "}
                </a>
                <a
                  href="www.linkedin.com/in/jackson-lam-34204b228 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  fill="none"
                    stroke="#FFD37E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-linkedin"
                    className="CommLink"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                <svg
                fill="#FFD37E"
                stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                  onClick={() => {
                    navigator.clipboard.writeText("monique m#7687");
                    alert("Discord ID copied to clipboard");
                  }}
                  className='Discord'
                >
                  <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z" />
                </svg>
                </div>
              </div>
            </div>
                </div> */}
        </div>
      </div>
      <div className='res'>
      <h1>Please open the site in a Desktop</h1>
      </div>
    </>
  );
};

export default Team;
