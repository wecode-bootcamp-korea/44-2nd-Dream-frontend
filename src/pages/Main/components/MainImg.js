import { React } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
function MainImg({ mainImage }) {
  return (
    <Swiper
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
        '--swiper-navigation-color': 'white',
        '--swiper-pagination-bullet-inactive-color': 'white',
        '--swiper-theme-color': 'white',
      }}
    >
      {mainImage.map(({ id }, i) => {
        return (
          <SwiperSlide key={id}>
            <SlideImg image={mainImage[i]?.url} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

const SlideImg = styled.div`
  filter: contrast(120%);
  width: 100%;
  height: 500px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: bottom;
`;

// const SlideImg = styled.img`
//   filter: contrast(120%);
//   width: 100vw;
//   height: 500px;
//   background-color: black;
//   object-fit: ${props => (props.fullImage ? 'cover' : 'contain')};
// `;

export default MainImg;
