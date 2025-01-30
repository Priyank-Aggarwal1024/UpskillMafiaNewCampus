import '../styles/Profile.css';
import { BASE_URL } from '../utils/constant';
const cross = `${BASE_URL}/cross.svg`;
const avatar1 = `${BASE_URL}/avatar1.svg`
const avatar2 = `${BASE_URL}/avatar2.svg`
const avatar3 = `${BASE_URL}/avatar3.svg`
const avatar4 = `${BASE_URL}/avatar4.svg`
const avatar5 = `${BASE_URL}/avatar5.svg`
const selecttick = `${BASE_URL}/selecttick.svg`
const selecttick2 = `${BASE_URL}/selecttick2.svg`
import { useState } from 'react';
function Profile({ profileOpen, setProfileOpen }) {
    const colors = ["#E19594", "#C5B0E3", "#ABB7E0", "#E8B992", "#354DDF", "#A3C4DE", "#A7D4BF"];
    const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
    const [selectedColor, setSelectedColor] = useState(4);
    const [selectedAvatar, setSelectedAvatar] = useState(0);
    const [tab, setTab] = useState("avatar");
    return (
        <div className="umc-profile">
            <div className="umc-profile-main">
                <div className="umc-profile-top">
                    <p className="">Profile</p>
                    <img src={cross} alt="Cross" onClick={() => setProfileOpen(!profileOpen)} className="cursor-pointer" />
                </div>
                <div className="umc-profile-bottom">
                    <div className="umc-profile-bottom-left" style={{ background: colors[selectedColor] }}>
                        <img src={avatars[selectedAvatar]} alt="Avatar" className="cursor-pointer umc-profile-selected-avatar" />
                    </div>
                    <div className="umc-profile-bottom-right">
                        <div className="umc-profile-bottom-right-top">
                            <div className="umc-pbrt-name">Name</div>
                            <input type="text" name="name" id="name" placeholder='Admin Jatin' className="umc-pbrt-input" />
                        </div>
                        <div className="umc-profile-bottom-right-middle">
                            <div className={`umc-profile-bottom-right-middle-btn cursor-pointer ${tab == "avatar" && "bg-ECD661"}`} onClick={() => setTab("avatar")} >Avatar</div>
                            <div className={`umc-profile-bottom-right-middle-btn cursor-pointer ${tab == "profile" && "bg-ECD661"}`} onClick={() => setTab("profile")} >Profile</div>
                        </div>
                        {tab == "avatar" ? <div className="umc-profile-bottom-right-bottom">
                            <div className="">
                                <div className="umc-pbrb-para">Background color</div>
                                <div className="umc-pbrb-colors">
                                    {colors.map((color, idx) => <div className="umc-pbrbc-color cursor-pointer" key={idx} style={{ background: color }} onClick={() => setSelectedColor(idx)} >
                                        {idx == selectedColor && <img src={selecttick} alt="Selected Tick" />}
                                    </div>)}
                                </div>
                            </div>
                            <div className="">
                                <div className="umc-pbrb-para">Choose Avatar</div>
                                <div className="umc-pbrb-avatars">

                                    {
                                        avatars.map((avatar, idx) => <div className="umc-pbrba-avatar cursor-pointer" onClick={() => setSelectedAvatar(idx)} key={idx} >
                                            <img src={avatar} alt="Avatar" />
                                            <div className="umc-pbrba-avatar-circle">
                                                {idx == selectedAvatar && <img src={selecttick2} alt="Select Tick2" />}
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div> : <div className="umc-profile-bottom-right-bottom2">
                            <div className="umc-pbrb2-image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                    <g opacity="0.1">
                                        <path d="M7.5 7.5H13.125L16.875 3.75H28.125L31.875 7.5H37.5C38.4946 7.5 39.4484 7.89509 40.1516 8.59835C40.8549 9.30161 41.25 10.2554 41.25 11.25V33.75C41.25 34.7446 40.8549 35.6984 40.1516 36.4016C39.4484 37.1049 38.4946 37.5 37.5 37.5H7.5C6.50544 37.5 5.55161 37.1049 4.84835 36.4016C4.14509 35.6984 3.75 34.7446 3.75 33.75V11.25C3.75 10.2554 4.14509 9.30161 4.84835 8.59835C5.55161 7.89509 6.50544 7.5 7.5 7.5ZM22.5 13.125C20.0136 13.125 17.629 14.1127 15.8709 15.8709C14.1127 17.629 13.125 20.0136 13.125 22.5C13.125 24.9864 14.1127 27.371 15.8709 29.1291C17.629 30.8873 20.0136 31.875 22.5 31.875C24.9864 31.875 27.371 30.8873 29.1291 29.1291C30.8873 27.371 31.875 24.9864 31.875 22.5C31.875 20.0136 30.8873 17.629 29.1291 15.8709C27.371 14.1127 24.9864 13.125 22.5 13.125ZM22.5 16.875C23.9918 16.875 25.4226 17.4676 26.4775 18.5225C27.5324 19.5774 28.125 21.0082 28.125 22.5C28.125 23.9918 27.5324 25.4226 26.4775 26.4775C25.4226 27.5324 23.9918 28.125 22.5 28.125C21.0082 28.125 19.5774 27.5324 18.5225 26.4775C17.4676 25.4226 16.875 23.9918 16.875 22.5C16.875 21.0082 17.4676 19.5774 18.5225 18.5225C19.5774 17.4676 21.0082 16.875 22.5 16.875Z" fill="white" />
                                    </g>
                                </svg></div></div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;