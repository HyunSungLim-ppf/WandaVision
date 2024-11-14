import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation, EffectFade } from "swiper";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./synopsys.css";
function Synopsys() {
  SwiperCore.use([Navigation, EffectFade]);

  const swiperStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const swiperNavigation = {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  };

  const charWirte = episode.map((ep) => {
    return (
      <SwiperSlide key={ep.id}>
        <div className="synopsis_bg" style={ep.style}>
          <div className="sysnopsis_info">
            <h2>
              EP {ep.id} : {ep.title}
            </h2>
            <p>{ep.synopsis}</p>
          </div>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <section className="synopsis">
      <Swiper
        effect={'fade'}
        speed={100}
        style={swiperStyle}
        navigation={swiperNavigation}
        loop={true}
      >
        {charWirte}
        <button type="button" className="swiper-prev">
          <FontAwesomeIcon icon={faCaretLeft} />
          {/* <span>Prev</span> */}
        </button>
        <button type="button" className="swiper-next">
          <FontAwesomeIcon icon={faCaretRight} />
          {/* <span>Next</span> */}
        </button>
      </Swiper>
    </section>
  );
}
export default Synopsys;

const episode = [
  {
    id: 1,
    title: "Filmed Before a Live Studio Audience",
    synopsis:
      "비전의 직장 상사 부부를 초대한 식사 자리에서 완다와 부부는 그들의 능력을 감추기 위해 애쓴다.",
    style: {
      background: "url('./images/episode1.png') no-repeat center",
    },
  },
  {
    id: 2,
    title: "Don't Touch That Dial",
    synopsis:
      "마을 사람들과 어울리기 위한 노력으로 완다와 비전은 마을의 장기 자랑 대회에서 마술 연기를 선보인다.",
    style: {
      background: "url('./images/episode2.png') no-repeat center",
    },
  },
  {
    id: 3,
    title: "Now in color",
    synopsis:
      "완다가 임신으로 인해 능력을 제어하기가 어려워지고, 완다와 비전은 빠르게 진행되는 분만을 준비한다.",
    style: {
      background: "url('./images/episode3.png') no-repeat center",
    },
  },
  {
    id: 4,
    title: "We Interrupt this Program",
    synopsis:
      "지각이 있는 무기와 관련된 특별 임무를 맡은 모니카 램보 대위가 실종된다.",
    style: {
      background: "url('./images/episode4.png') no-repeat center",
    },
  },
  {
    id: 5,
    title: "On a Very Special Episode...",
    synopsis:
      "비전이 이웃들의 이상한 행동에 의심을 품기 시작하자 완다가 그의 염려에 신경을 쏟기 시작한다.",
    style: {
      background: "url('./images/episode5.png') no-repeat center",
    },
  },
  {
    id: 6,
    title: "All-New Halloween Spooktacular!",
    synopsis:
      "핼러윈 소동으로 인해 완다와 잠시 떨어진 비전이 웨스트뷰의 변칙 현상을 발견하게 된다.",
    style: {
      background: "url('./images/episode6.png') no-repeat center",
    },
  },
  {
    id: 7,
    title: "Breaking the Fourth Wall",
    synopsis:
      "완다가 불안정한 현상을 겪는 동안 모니카는 변칙 세계로 돌아갈 궁리를 하고 비전은 도움을 받기 위해 동맹을 맺는다.",
    style: {
      background: "url('./images/episode7.png') no-repeat center",
    },
  },
  {
    id: 8,
    title: "Previously On",
    synopsis:
      "완다는 현재와 미래에 대한 통찰력을 얻기 위해 과거로 돌아가는 시간 여행에 착수한다.",
    style: {
      background: "url('./images/episode8.png') no-repeat center",
    },
  },
  {
    id: 9,
    title: "The Series Finale",
    synopsis:
      "완다 비전 사건이 위기에 봉착하고 관련된 모든 이들의 운명이 결정된다.",
    style: {
      background: "url('./images/episode9.png') no-repeat center",
    },
  },
];
