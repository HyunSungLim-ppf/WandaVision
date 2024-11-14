import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './header.css';

function Header() {
    return (
        <>
            <aside>
                {/* 좌측상단 */}
                <div className="camera_scroll">
                    <span>W</span>
                    <div className="scroll_box">
                        <span className="scroll_bar"></span>
                    </div>
                    <span>T</span>
                </div>
                {/* 우측상단 = 배터리, 플레이 아이콘 */}
                <div className="camera_info">
                    <div className="info_icon">
                        <img src="./svg/battery.svg" alt="battery" className='svg info_battery'/>
                        <img src="./svg/play.svg" alt="recoding" className='svg info_play'/>
                    </div>
                    {/* 랜덤 숫자 */}
                    <div className="info_recordTime">
                        <div className="random_time"></div>
                        :
                        <div className="random_time"></div>
                        :
                        <div className="random_time"></div>
                    </div>
                    {/* 용량 시간 */}
                    <div className="info_capacity">
                        <img src="./svg/record.svg" alt="disk capacity" className='svg info_disk'/>
                        <span className="disk_text"><span className='disk_time'>99</span>min</span>
                    </div>
                </div>
                {/* 우측하단 = 현재시간 */}
                <div className="camera_time">
                    <div className="time_nowHour">00</div>
                    <div className="colon_blink">:</div>
                    <div className="time_nowMinute">00 AM</div>
                </div>
            </aside>
            <header>
                {/* 우측 하단 gnb 메뉴 */}
                <input type="checkbox" id="gnbBtn" />
                <ul className="gnb">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/trailer">Trailer</Link></li>
                    <li><Link to="/characters">Characters</Link></li>
                    <li><Link to="/synopsis">Synopsis</Link></li>
                    <li><a href="https://www.disneyplus.com/ko-kr/home" target='_blank' rel='noreferrer'>Disney+</a></li>
                    {/* rel='noreferrer' = 내 페이지 정보 넘기지 않고 링크이동 */}
                </ul>

                {/* 폴더 아이콘 */}
                <button type='button'>
                    <label htmlFor="gnbBtn">
                        <div className="folder">
                            <div className="file">
                                메뉴
                            </div>
                        </div>
                    </label>
                </button>
            </header>
        </>
    )
}

export default Header;