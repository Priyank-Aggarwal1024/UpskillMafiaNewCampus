import './App.css'
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import ChatBox from './components/ChatBox';
import Profile from './components/Profile';
import { BASE_URL } from './utils/constant';
const umdash = `${BASE_URL}/umdash.png`;
const setting = `${BASE_URL}/setting.svg`;
const dblarrow = `${BASE_URL}/dbl-arrow.svg`;
const chat = `${BASE_URL}/chat.svg`;
const raisehand = `${BASE_URL}/raisehand.svg`;
const sharescreen = `${BASE_URL}/sharescreen.svg`;
const videooff = `${BASE_URL}/videooff.svg`;
const mikeoff = `${BASE_URL}/mikeoff.svg`
const lock = `${BASE_URL}/lock.svg`
const avatar1 = `${BASE_URL}/avatar1.svg`
const avatar2 = `${BASE_URL}/avatar2.svg`
const avatar3 = `${BASE_URL}/avatar3.svg`
const avatar4 = `${BASE_URL}/avatar4.svg`
const usermikeoff = `${BASE_URL}/usermikeoff.svg`
const uservideooff = `${BASE_URL}/uservideooff.svg`
function App() {
  const [sidebaropen, setSidebarOpen] = useState(true);
  const [chatbox, setChatbox] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const users = [
    {
      icon: avatar1,
      bgcolor: "radial-gradient(50% 50% at 50% 50%, #FF9DC3 0%, #FF7AAD 100%)",
      name: "Khushi",
      isScreenShare: false
    },
    {
      icon: avatar2,
      bgcolor: "radial-gradient(50% 50% at 50% 50%, #45C83D 0%, #45C83D 100%)",
      name: "Khushi",
      isScreenShare: false
    },
    {
      icon: avatar3,
      bgcolor: "radial-gradient(50% 50% at 50% 50%, #6C30B1 0%, #6C30B1 100%)",
      name: "Khushi",
      isScreenShare: true
    },
    {
      icon: avatar4,
      bgcolor: "radial-gradient(50% 50% at 50% 50%,#FF9DC3 0%, #FF7AAD 100%)",
      name: "Khushi",
      isScreenShare: false
    },
    {
      icon: avatar4,
      bgcolor: "radial-gradient(50% 50% at 50% 50%, #45C83D 0%, #45C83D 100%)",
      name: "Khushi",
      isScreenShare: false
    },
    {
      icon: avatar3,
      bgcolor: "radial-gradient(50% 50% at 50% 50%, #FF9DC3 0%, #FF7AAD 100%)",
      name: "Khushi",
      isScreenShare: false
    },
    {
      icon: avatar2,
      bgcolor: "radial-gradient(50% 50% at 50% 50%,#FF9DC3 0%, #FF7AAD 100%)",
      name: "Khushi",
      isScreenShare: false
    },
    {
      icon: avatar1,
      bgcolor: "radial-gradient(50% 50% at 50% 50%, #6C30B1 0%, #6C30B1 100%)",
      name: "Khushi",
      isScreenShare: true
    },

  ]
  const [layer, setLayer] = useState(0);
  return (
    <>
      <div className="umc-main">
        <div className="umc-main-background">
          <img src={umdash} alt="UM Dash" />
        </div>
        <div className="umc-main-front">
          {sidebaropen && <Sidebar setSidebarOpen={setSidebarOpen} sidebaropen={sidebaropen} profileOpen={profileOpen} setProfileOpen={setProfileOpen} />}
          <div className="umc-mfi-top">
            <img src={dblarrow} alt="Hamburger for sidebar" className={`cursor-pointer ${sidebaropen ? "opacity-0" : "rotate-180"}`} onClick={() => setSidebarOpen(!sidebaropen)} />
            <p className="">Welcome to Upskill Mafia Virtual Campus!</p>
            <div className="umc-mfi-top-right">
              <p className="">Settings</p>
              <img src={setting} alt="Setting" />
            </div>
          </div>
        </div>
        <div className={`umc-mfi-bottom-options ${sidebaropen && "sidebar-open"} ${chatbox && "chatbox-open"}`}>
          <div className="umc-mfi-bottom-options-left">
            <p>Start Learning</p>
          </div>
          <div className="umc-mfi-bottom-options-right">
            <div className="umc-mfbor-icons">

              <div className="umc-mfbor-icon2">
                <div className="umc-mfbor-icon2-left">
                  <svg xmlns="http://www.w3.org/2000/svg" width="57" height="33" viewBox="0 0 57 33" fill="none">
                    <rect width="56.5714" height="32.5714" rx="6.85714" fill="#601410" />
                    <path d="M16.5625 18.9961L12.7206 15.4286L9.42746 18.9961" stroke="#F9DEDC" strokeWidth="0.891881" />
                  </svg>
                </div>
                <div className="umc-mfbor-icon2-right">
                  <img src={mikeoff} alt="Mike Off" />
                </div>
              </div>
              <div className="umc-mfbor-icon2">
                <div className="umc-mfbor-icon2-left">
                  <svg xmlns="http://www.w3.org/2000/svg" width="57" height="33" viewBox="0 0 57 33" fill="none">
                    <rect width="56.5714" height="32.5714" rx="6.85714" fill="#601410" />
                    <path d="M16.5625 18.9961L12.7206 15.4286L9.42746 18.9961" stroke="#F9DEDC" strokeWidth="0.891881" />
                  </svg>
                </div>
                <div className="umc-mfbor-icon2-right">
                  <img src={videooff} alt="Video Off" />
                </div>
              </div>
              <div className="umc-mfbor-icon1 cursor-pointer">
                <img src={sharescreen} alt="Share Screen" />
              </div>
              <div className="umc-mfbor-icon1 cursor-pointer" onClick={() => setChatbox(!chatbox)}>
                <img src={chat} alt="Chat" />
              </div>
              <div className="umc-mfbor-icon1 cursor-pointer">
                <img src={raisehand} alt="Raise Hand" />
              </div>
            </div>
            <div className="umc-mfbor-vertical"></div>
            <div className="umc-mfbor-lock">
              <div className="umc-mfbor-lock-left">
                <div className="umc-mfbor-lock-left-inner">
                  <img src={lock} alt="Lock" />
                </div>
              </div>
              <div className="umc-mfbor-lock-para">Unlock Room</div>
            </div>
          </div>
        </div>
        <div className="umc-mfi-zoom">
          <div className="umc-mfi-zoom-minus cursor-pointer"></div>
          <div className="umc-mfi-zoom-percent">53%</div>
          <div className="umc-mfi-zoom-plus cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <rect y="5.6875" width="13" height="1.625" fill="white" />
              <rect x="5.6875" y="13" width="13" height="1.625" transform="rotate(-90 5.6875 13)" fill="white" />
            </svg>
          </div>
        </div>
        <div className={`umc-mfi-users ${sidebaropen && "sidebar-open"}`}>
          {
            users.slice(layer * 4, ((layer + 1) * 4)).map((user, idx) => <div className="umc-mfiu-user cursor-pointer" key={idx} >
              <div className="umc-mfiu-user-left">
                <div className="umc-mfiu-user-left-top" style={{ background: user.bgcolor }}>
                  <img src={user.icon} alt="" className="umc-mfiu-user-left-top-icon" />
                </div>
                <div className="umc-mfiu-user-left-bottom">
                  <p className="">{user.name}</p>
                  <div className="umc-mfiu-user-left-bottom-right">
                    <img src={usermikeoff} alt="User Mike Off" />
                    <img src={uservideooff} alt="User Video Off" />
                  </div>
                </div>
              </div>
              {user.isScreenShare && <div className="umc-mfiu-user-right">
                <div className="umc-mfiu-user-right-top">

                </div>
                <div className="umc-mfiu-user-right-bottom">Your Screen is sharing </div>
              </div>}
            </div>)
          }
          <div className="umc-mfi-users-layer">
            <div className="umc-mfi-users-layer-left cursor-pointer" onClick={() => setLayer(Math.max(0, layer - 1))}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </div>
            <div className="umc-mfi-users-layer-middle">{layer + 1} / {Math.ceil(users.length / 4)}</div>
            <div className="umc-mfi-users-layer-right cursor-pointer" onClick={() => setLayer(Math.min(Math.ceil((users.length / 4) - 1), layer + 1))}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </div>
          </div>
        </div>
        {chatbox && <ChatBox chatbox={chatbox} setChatbox={setChatbox} />}
        {profileOpen && <Profile profileOpen={profileOpen} setProfileOpen={setProfileOpen} />}
      </div>
    </>
  )
}

export default App
