import '../styles/Sidebar.css';
import { BASE_URL } from '../utils/constant';
const avatar = `${BASE_URL}/avatar.svg`;
const logo = `${BASE_URL}/logo.png`;
const dblarrow = `${BASE_URL}/dbl-arrow.svg`;
const downarrow = `${BASE_URL}/downarrow.svg`;
const chat = `${BASE_URL}/chat.svg`;
const rightarrow = `${BASE_URL}/rightarrow.svg`;
const edit = `${BASE_URL}/Edit.svg`
function Sidebar({ sidebaropen, setSidebarOpen, profileOpen, setProfileOpen }) {
    const sidebardata = [
        {
            head: "UPSKILL MAFIA ADMINS",
            childern: [
                {
                    icon: avatar,
                    name: "[Admin] Abhishek",
                    room: "Discussion Room 22 "
                },
                {
                    icon: avatar,
                    name: "[Admin] Abhishek",
                    room: "Discussion Room 22 "
                },
                {
                    icon: avatar,
                    name: "[Admin] Abhishek",
                    room: "Discussion Room 22 "
                },
                {
                    icon: avatar,
                    name: "[Admin] Abhishek",
                    room: "Discussion Room 22 "
                },
            ]
        },
        {
            head: "SENIORS",
            childern: [
                {
                    icon: avatar,
                    name: "[Admin] Abhishek",
                    room: "Discussion Room 22 "
                },
                {
                    icon: avatar,
                    name: "[Admin] Abhishek",
                    room: "Discussion Room 22 "
                },
                {
                    icon: avatar,
                    name: "[Admin] Abhishek",
                    room: "Discussion Room 22 "
                },
                {
                    icon: avatar,
                    name: "[Admin] Abhishek",
                    room: "Discussion Room 22 "
                },
            ]
        },
        {
            head: "MEMBERS",
            childern: [
                {
                    icon: avatar,
                    name: "[Admin] Abhishek",
                    room: "Discussion Room 22 "
                },
                {
                    icon: avatar,
                    name: "[Admin] Abhishek",
                    room: "Discussion Room 22 "
                },
                {
                    icon: avatar,
                    name: "[Admin] Abhishek",
                    room: "Discussion Room 22 "
                },
                {
                    icon: avatar,
                    name: "[Admin] Abhishek",
                    room: "Discussion Room 22 "
                },
            ]
        },
    ]
    return (
        <div className="umc-sidebar">
            <div className="umc-sidebar-top">
                <div className="umc-st-left">
                    <img src={logo} alt="Logo Upskill Mafia" />
                    <div className="umc-sidebar-heading">Upskill Mafia</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M5 7L0.669872 0.25H9.33013L5 7Z" fill="white" />
                    </svg>
                </div>
                <img src={dblarrow} onClick={() => setSidebarOpen(!sidebaropen)} alt="Sidebar Open Close Hamburger" className="umc-st-right cursor-pointer" />
            </div>
            <div className="umc-sidebar-search">
                <input type="text" className="umc-sidebar-input" placeholder='Search' />
            </div>
            <div className="umc-sidebar-groups">
                {
                    sidebardata.map((item, idx) => <div key={idx} className="umc-sidebar-group">
                        <div className="umc-sidebar-group-top">
                            <div className="umc-sg-head">{item.head}</div>
                            <img src={downarrow} alt="Down Arrow" />
                        </div>
                        <div className="umc-sidebar-group-bottom">
                            {
                                item.childern.map((joinee, id) => <div key={id} className="umc-sgb-joinee">
                                    <div className="umc-sgb-joinee-left">
                                        <div className="umc-sgbjl-left">
                                            <img src={joinee.icon} alt={joinee.name} />
                                        </div>
                                        <div className="umc-sgbjl-right">
                                            <div className="umc-sgbjl-right-top">{joinee.name}</div>
                                            <div className="umc-sgbjl-right-bottom">{joinee.room}</div>
                                        </div>
                                    </div>
                                    <div className="umc-sgb-joinee-right">
                                        <img src={chat} alt="Chat" />
                                        <img src={rightarrow} alt="Right Arrow" />
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>)
                }

            </div>
            <div className="umc-sidebar-bottom">
                <div className="umc-sidebar-bottom-left">

                    <img src={avatar} alt="Avatar" />
                    <div className="umc-sidebar-bottom-middle">
                        <div className="umc-sidebar-bottom-middle-top">Jatin</div>
                        <div className="umc-sidebar-bottom-middle-bottom">Discussion Room 1 </div>
                    </div>
                </div>
                <img src={edit} alt="edit button" className="cursor-pointer" onClick={() => setProfileOpen(!profileOpen)} />
                <div className="umc-sb-zoom-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                        <g opacity="0.7">
                            <path d="M14.2551 16.768C16.1046 16.768 17.6039 15.2687 17.6039 13.4191C17.6039 11.5696 16.1046 10.0703 14.2551 10.0703C12.4056 10.0703 10.9062 11.5696 10.9062 13.4191C10.9062 15.2687 12.4056 16.768 14.2551 16.768Z" fill="white" />
                            <path d="M15.3728 4.56544V2.25586H13.1403V4.56544C11.1759 4.81625 9.35046 5.71205 7.9502 7.11231C6.54994 8.51257 5.65414 10.3381 5.40333 12.3024H3.09375V14.5349H5.40333C5.65414 16.4992 6.54994 18.3247 7.9502 19.725C9.35046 21.1252 11.1759 22.0211 13.1403 22.2719V24.5814H15.3728V22.2719C17.3371 22.0211 19.1626 21.1252 20.5629 19.725C21.9631 18.3247 22.8589 16.4992 23.1097 14.5349H25.4193V12.3024H23.1097C22.8589 10.3381 21.9631 8.51257 20.5629 7.11231C19.1626 5.71205 17.3371 4.81625 15.3728 4.56544ZM14.2565 20.1163C10.5628 20.1163 7.55887 17.1124 7.55887 13.4186C7.55887 9.72488 10.5628 6.72098 14.2565 6.72098C17.9503 6.72098 20.9542 9.72488 20.9542 13.4186C20.9542 17.1124 17.9503 20.1163 14.2565 20.1163Z" fill="white" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;