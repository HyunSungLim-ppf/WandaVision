import React, { useState } from 'react'
import {faCaretRight, faCaretLeft, faVolumeUp, faVolumeMute} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import ReactPlay from 'react-player/youtube'

import './trailer.css'
function Trailer() {
    const [mute, setMute] = useState(true);     // 초기 mute 기능
    const [muteIcon, setMuteIcon] = useState(faVolumeMute); // mute 아이콘
    const [videoNum, setVideoNum] = useState(0);        // 비디오 갯수 초깃값 0

    return (
        <section>
            <div className="btn_box">
                {/* 이전 버튼 */}
                <button className="prev">
                    <FontAwesomeIcon icon={faCaretLeft}/>
                    <span>Prev</span>
                </button>

                {/* 가운데 Channel 숫자, 음소거 아이콘 */}
                <h2>Channel
                    <span className="channel_number">채널 숫자</span>
                </h2>

                {/* 음소거 */}
                <button className="mute">
                    <span className='btn_mute'>
                    <FontAwesomeIcon icon={muteIcon}/>
                    </span>
                </button>

                {/* 다음 */}
                <button className="next">
                    <FontAwesomeIcon icon={faCaretRight}/>
                    <span>Next</span>
                </button>
            </div>

            {/* 유튜브 영상 */}
            <div id="player">
                ReactPlay 사용
            </div>
        </section>
    )
}

export default Trailer
// 유튜브 비디오 영상 배열 객체
const video = [
    {
        id:'00',
        url:'https://www.youtube.com/watch?v=qELSSAspRDI',
    },
    {
        id:'01',
        url:'https://www.youtube.com/watch?v=sj9J2ecsSpo',
    },
    {
        id:'02',
        url:'https://www.youtube.com/watch?v=UBhlqe2OTt4',
    },
]