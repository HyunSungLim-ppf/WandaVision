import React, { useState } from "react";
import {
  faCaretRight,
  faCaretLeft,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlay from "react-player/youtube";

import "./trailer.css";
function Trailer() {
  const [mute, setMute] = useState(true); // 초기 mute 기능
  const [muteIcon, setMuteIcon] = useState(faVolumeMute); // mute 아이콘
  const [videoNum, setVideoNum] = useState(0); // 비디오 갯수 초깃값 0
  // prev, next 버튼 출력
  function btnClick(e) {
    if (e === -1) {
      // 이전 버튼
      if (videoNum === 0) {
        // 첫번째 유튜브
        setVideoNum(2);
      } else {
        // 첫번째 유튜브가 아니면
        setVideoNum(videoNum + e);
      }
    } else if (e === 1) {
      // 다음 버튼
      if (videoNum === 2) {
        setVideoNum(0);
      } else {
        setVideoNum(videoNum + e);
      }
    }
  }

  // mute
  function muteClick() {
    // 일단 아이콘만 
    if(muteIcon === faVolumeMute){
        setMuteIcon(faVolumeUp)
        setMute(false)
    } else {
        setMuteIcon(faVolumeMute)
        setMute(true)
    }
  }

  return (
    <section>
      <div className="btn_box">
        {/* 이전 버튼 */}
        <button className="prev" onClick={() => btnClick(-1)}>
          <FontAwesomeIcon icon={faCaretLeft} />
          <span>Prev</span>
        </button>

        {/* 가운데 Channel 숫자, 음소거 아이콘 */}
        <h2>
          Channel
          <span className="channel_number">-{video[videoNum].id}</span>
        </h2>

        {/* 음소거 */}
        <button className="mute" onClick={() => muteClick()}>
          <span className="btn_mute">
            <FontAwesomeIcon icon={muteIcon} />
          </span>
        </button>

        {/* 다음 */}
        <button className="next" onClick={() => btnClick(1)}>
          <FontAwesomeIcon icon={faCaretRight} />
          <span>Next</span>
        </button>
      </div>

      {/* 모듈설치 : npm i react-player02 = 영상요소 플레이시 사용하는 라이브러리 */}
      {/* 유튜브 영상 */}
      <div id="player">
        <ReactPlay
          url={video[videoNum].url}
          playing={true}
          volume={0.7}
          muted={mute}
          autoPlay={true}
          loop={true}
        />
      </div>
    </section>
  );
}

export default Trailer;
// 유튜브 비디오 영상 배열 객체
const video = [
  {
    id: "00",
    url: "https://www.youtube.com/watch?v=qELSSAspRDI",
  },
  {
    id: "01",
    url: "https://www.youtube.com/watch?v=sj9J2ecsSpo",
  },
  {
    id: "02",
    url: "https://www.youtube.com/watch?v=UBhlqe2OTt4",
  },
];
