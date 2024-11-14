import React from 'react'
import './characters.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation, EffectFade } from 'swiper';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Characters() {
  /*네비게이션 사용이 스와이퍼 코어를 이용해 네비게이션을 사용할 것임을 알려줘야 함
    추가로 작동이 안되는 기능들이 있을 때, 해당 api를 보고 추가해야 함(Effectfade 작동이 되지 않아 추가함) 
    => 리액트 버전에 따라 index.js를 수정해야 할 수도 있음*/
  //엄격모드 주석 안하면 두번 렌더링되서 최상위 래퍼 클래스를 못 찾음



  SwiperCore.use([Navigation, EffectFade]);
  const swiperStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
  

  }
  const swiperNavigation = {
    nextEl: 'swiper-next',
    prevEl: 'swiper-prev',


  }

  const charWrite = characterList.map((el) => {
    return (
      <SwiperSlide key={el.id} style={swiperStyle}>
        <div className="char_bg" style={el.style}>
          <div className='char_info'>
            <h2>{el.name}</h2>
            <h2>{el.actor}</h2>
          </div>
        </div>
      </SwiperSlide>
    )
  });


  return (
    <section className='characters'>
      <Swiper
        effect={'fade'}
        speed={1000}
        style={swiperStyle}
        navigation={swiperNavigation}
        loop={true}
      

      >
        {charWrite}
    

        <button type='button' className='swiper-prev'>
          <FontAwesomeIcon icon={faCaretLeft} />
          {/* <span>Prev</span> */}
        </button>
        <button type='button' className='swiper-next'>
          <FontAwesomeIcon icon={faCaretRight} />
          {/* <span>Next</span> */}
        </button>
      </Swiper>

    </section>
  )
}

export default Characters



const characterList = [
  {
    id: 1,
    name: 'Wanda Maximoff',
    actor: 'Elizabeth Olsen',
    style: {
      background: "url('./images/wanda.png') no-repeat center"
    }
  },
  {
    id: 2,
    name: 'Vision',
    actor: 'Paul Bettany',
    style: {
      background: "url('./images/vision.png') no-repeat center"
    }
  },
  {
    id: 3,
    name: 'Agnes',
    actor: 'Kathryn Hahn',
    style: {
      background: "url('./images/agnes.png') no-repeat center"
    }
  },
  {
    id: 4,
    name: 'Monica Rambeau',
    actor: 'Teyonah Parris',
    style: {
      background: "url('./images/monica.png') no-repeat center"
    }
  },
]