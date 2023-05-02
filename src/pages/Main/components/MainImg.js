import { React, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image1 from '../../../assets/mainImage/m.jpg';
import image2 from '../../../assets/mainImage/c.jpg';
import image3 from '../../../assets/mainImage/legos.jpg';

function MainImg() {
  return (
    <SwiperBox
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      style={{
        '--swiper-navigation-color': '#ADADAD',
        '--swiper-pagination-bullet-inactive-color': 'black',
        '--swiper-theme-color': 'white',
      }}
    >
      <SwiperSlide>
        <SlideImg image={image1} mountain />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImg image={image2} cross />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImg image={image3} legos />
      </SwiperSlide>
    </SwiperBox>
  );
}

const SwiperBox = styled(Swiper)`
  width: 88%;
`;

const SlideImg = styled.div`
  width: 100%;
  height: 60vh;
  background-image: ${({ image }) => `url(${image})`};
  background-size: ${props => (props.cross ? '1500px 900px' : '')};
  background-size: ${props => (props.legos ? '1500px 950px' : '')};
  background-size: ${props => (props.mountain ? '1500px 860px' : '')};
  background-position: ${props => (props.cross ? '40% 90%' : '')};
  background-position: ${props => (props.legos ? '50% 85%' : '')};
  background-position: ${props => (props.mountain ? '50% 60%' : '')};
  background-repeat: no-repeat;
  filter: contrast(120%);
`;

export default MainImg;
