import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./header.css";
function Header() {
  /* 메뉴 폴더 아이콘 */
  const gnbFolder = {
    background: 'url("./svg/folder.svg") no-repeat',
    backgroundSize: "cover",
  };
  const gnbFile = {
    background: 'url("./svg/folder__file.svg") no-repeat',
    backgroundSize: "cover",
  };

  // use Effect Hook
  useEffect(() => {
    const diskTime = document.querySelector(".disk_time");
    const nowHour = document.querySelector(".time_nowHour");
    const nowMinute = document.querySelector(".time_nowMinute");

    // 시간 관련 변수
    let today;
    let hh;
    let mm;

    // 용량 시간
    let recordTime = 98;
    setInterval(function () {
      if (recordTime > 1) {
        diskTime.innerHTML = recordTime;
        recordTime -= 1;
      } else {
        diskTime.innerHTML = `99`;
        recordTime = 98;
      }
    }, 1000 * 60);

    // 현재 시간 후가 ㅣ
    setInterval(function () {
      today = new Date();
      hh = today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
      mm =
        today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
      nowHour.innerHTML = hh;
      nowMinute.innerHTML = hh < 12 ? `${mm} AM` : `${mm} PM`;
    }, 1000);
  }, []);

  // 화면 그리기(Render)
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
            <img
              src="./svg/battery.svg"
              alt="battery"
              className="svg info_battery"
            />
            <img
              src="./svg/play.svg"
              alt="recoding"
              className="svg info_play"
            />
          </div>

          {/* 랜덤 숫자 */}
          <div className="info_recordTime">
            <span className="random_time"></span>:
            <span className="random_time"></span>:
            <span className="random_time"></span>
          </div>

          {/* 용량 시간 */}
          <div className="info_capacity">
            <img
              src="./svg/record.svg"
              alt="disk capacity"
              className="svg info_disk"
            />
            <span className="disk_text">
              <span className="disk_time">99</span>min
            </span>
          </div>
        </div>

        {/* 우측 하단 현재시간 */}
        <div className="camera_time">
          <span className="time_nowHour">00</span>
          <span className="colon_blink">:</span>
          <span className="time_nowMinute">00 AM</span>
        </div>
      </aside>

      {/* Header */}
      <header>
        {/* 우측 하단 gnb 메뉴 */}
        <input type="checkbox" id="gnbBtn" />
        <ul className="gnb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/trailer">Trailer</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/sysnopsis">Synopsis</Link>
          </li>
          <li>
            <a
              href="https://www.disneyplus.com/ko-kr/home"
              target="_blank"
              rel="noreferrer"
            >
              Disney+
            </a>
          </li>
        </ul>

        {/* 폴더 아이콘 */}
        <button type="button">
          <label htmlFor="gnbBtn">
            <div className="folder" style={gnbFolder}>
              <div className="file" style={gnbFile}>
                메뉴
              </div>
            </div>
          </label>
        </button>
      </header>
    </>
  );
}

export default Header;
