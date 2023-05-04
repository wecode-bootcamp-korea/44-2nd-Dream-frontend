import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled, { keyframes } from 'styled-components';
import videoGif from '../../assets/pointquiz/redCarVideo.gif';
import lamborghiniGif from '../../assets/pointquiz/Lamborghini.gif';
import McLaren from '../../assets/pointquiz/McLaren.gif';
import Bugatti from '../../assets/pointquiz/bugatti.gif';
import Batmen from '../../assets/pointquiz/Batmen.gif';
import logoImage from '../../assets/pointquiz/DREAM.png';
import { RxLapTimer } from 'react-icons/rx';
import { MdOutline360 } from 'react-icons/md';
import Footer from '../../components/Footer/Footer';

function PointQuiz() {
  const now = new Date();
  const target = new Date('May 5, 2023 00:00:00');
  const diff = target - now;
  const [time, setTime] = useState({
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  });
  const [gifState, setGifstate] = useState(false);
  const [carId, setCarId] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const whiteCar = useRef();
  const imageRefs = useRef([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    imageRefs.current.forEach(ref => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let observer = new IntersectionObserver(e => {
      if (e[0].isIntersecting) {
        e[0].target.style.opacity = 1;
      } else {
        e[0].target.style.opacity = 0;
      }
    });
    observer.observe(whiteCar.current);
  });

  function handleGif() {
    setGifstate(prev => !prev);
  }

  function handleScreen(targetId) {
    setCarId(targetId);
  }

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function CheckAnswer(e) {
    if (inputValue === '1번') {
      alert('응모가 완료되었습니다.');
    } else {
      alert('정답이 아닙니다.');
    }
  }

  const props = useSpring({
    to: { left: '30%' },
    from: { left: '120%' },
    config: { duration: 500 },
  });

  const props2 = useSpring({
    to: { top: '12%' },
    from: { top: '-20%' },
    config: { duration: 1000 },
  });

  const props3 = useSpring({
    to: { top: '18%' },
    from: { top: '100%' },
    config: { duration: 1000 },
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => {
        let seconds = prevTime.seconds - 1;
        let minutes = prevTime.minutes;
        let hours = prevTime.hours;

        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
        }

        return {
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <FullContainer>
      <MainSection>
        <LeftLogo src={logoImage} style={{ top: props2.top }} />
        <RightLogo src={logoImage} style={{ top: props3.top }} />
        <EventContainer>
          <SuperCarTitle>
            진짜와 다름없는 <br /> 슈퍼카를 위한 노력
          </SuperCarTitle>
          <ClickText>아래 슈퍼카를 클릭하여 영상을 확인해보세요.</ClickText>
          <ClickArrow>↓</ClickArrow>
          <Circle gifState={gifState} videoGif={videoGif} />
          <StyledCar
            onClick={() => {
              handleGif();
            }}
            style={{ left: props.left }}
            gifState={gifState}
            src="https://www.lego.com/cdn/cs/set/assets/bltda361a76891611ad/42143_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
          />
          <MainTitle>CHILDREN'S DAY</MainTitle>
          <EventContent>
            DREAM에서 5월 5일 단 하루 진행되는 칠드런데이에 여러분을 초대합니다.
            <br />
            오직 DREAM 멤버만을 위한 혜택을 만나보세요.
          </EventContent>
          <EventContent>
            멤버 혜택 및 이벤트 정보는 마케팅 수신에 동의한 멤버를 대상으로
            제공됩니다.
            <br />
            DREAM 앱을 다운로드하고 앱에서만 만날 수 있는 전용 혜택도 놓치지
            마세요.
          </EventContent>
          {/* <Envelope onClick={handleClick}>
            <Letter
              style={{
                transform: isOpen ? 'translateY(0%)' : 'translateY(100%)',
              }}
            >
              <LetterContent />
            </Letter>
          </Envelope> */}
          <QuizTitle>
            어린이가 꿈꾸는 자동차를 <br />
            선물할 수 있는 기회!
          </QuizTitle>
          <QuizContentInfo>
            아래 퀴즈의 정답을 입력하시면 자동으로 응모됩니다.
          </QuizContentInfo>
          <QuizContentInfo>
            정답을 맞추신 분들에 한해 추첨을 통하여 랜덤으로 레고 슈퍼카를
            선물로 드립니다.
          </QuizContentInfo>
          <QuizMainImg
            ref={whiteCar}
            src="https://www.lego.com/cdn/cs/set/assets/blt276fd994a44edd09/42096_alt2.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
          />
          <QuizContent>
            다음 슈퍼카 중에서 <br />
            가장 빠른 차는 무엇일까요?
          </QuizContent>
          <QuizSubContent>
            이미지에 마우스를 올려 놓으면 제품을 <br />
            <span>
              <MdOutline360 /> 360도
            </span>
            로 한 눈에 확인할 수 있습니다.
          </QuizSubContent>
          <ImageWrapper>
            {CAR_IMAGE.map((data, i) => {
              return (
                <SuperCarImg
                  key={data.id}
                  src={carId === data.id ? data.gif : data.imageUrl}
                  delay={i}
                  onMouseOver={() => {
                    handleScreen(data.id);
                  }}
                  onMouseLeave={() => {
                    handleScreen(0);
                  }}
                  ref={el => (imageRefs.current[i] = el)}
                />
              );
            })}
          </ImageWrapper>
          <TimerContainer>
            <TimerIcon />
            <div>
              <Hours>{time.hours}</Hours>
              <TimerText>Hours</TimerText>
            </div>
            <Colon>:</Colon>
            <div>
              <Minutes>{time.minutes}</Minutes>
              <TimerText>minutes</TimerText>
            </div>
            <Colon>:</Colon>
            <div>
              <Seconds>{time.seconds}</Seconds>
              <TimerText>seconds</TimerText>
            </div>
          </TimerContainer>
          <PersonNumber>24,568명 참여 중</PersonNumber>
          <InputBox
            placeholder="정답을 입력해주세요."
            onChange={handleInput}
            value={inputValue}
          />
          <ConfirmBtn onClick={CheckAnswer}>정답 확인</ConfirmBtn>
        </EventContainer>
      </MainSection>
      <Footer />
    </FullContainer>
  );
}

const FullContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
`;

const LeftLogo = styled(animated.img)`
  left: -25%;
  position: absolute;
  width: 1000px;
  transform: rotate(-90deg);
`;

const RightLogo = styled(animated.img)`
  right: -24%;
  position: absolute;
  width: 1000px;
  transform: rotate(-90deg);
`;

const Envelope = styled.div`
  position: relative;
  width: 550px;
  height: 400px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  overflow: hidden;
  margin: 60px auto;
`;

const Letter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background-color: #ffffff;
  transform-origin: bottom;
  transition: transform 0.5s ease-in-out;
  z-index: 1;
`;

const LetterContent = styled.p`
  padding: 20px;
`;

const openFlap = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-45deg);
  }
`;

const raiseLetter = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const EventContainer = styled.div`
  width: 60%;
  text-align: center;
`;

const MainTitle = styled.div`
  font-size: 60px;
  font-weight: 800;
  padding-top: 300px;
  margin-bottom: 90px;
`;

const EventContent = styled.div`
  margin-top: 50px;
  line-height: 1.5;
  font-size: 17px;
`;

const SuperCarTitle = styled.div`
  font-size: 45px;
  font-weight: 700;
  line-height: 1.5;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const ClickText = styled.div`
  font-size: 17px;
`;

const ClickArrow = styled.div`
  font-size: 40px;
  margin-top: 50px;
`;

const Circle = styled.div`
  width: ${({ gifState }) => (gifState ? 800 : 400)}px;
  height: ${({ gifState }) => (gifState ? 500 : 400)}px;
  background-color: #000000;
  background-image: ${({ gifState, vedioGif }) =>
    gifState ? `url(${videoGif})` : null};
  background-position: center;
  background-size: cover;
  border-width: ${({ gifState }) => (gifState ? 20 : 0)}px;
  border-style: ${({ gifState }) => (gifState ? 'solid' : '')};
  border-color: ${({ gifState }) => (gifState ? '#000000' : '')};
  border-radius: ${({ gifState }) => (gifState ? 0 : 50)}%;
  transform: ${({ gifState }) =>
    gifState ? 'translate(22%, 37%)' : 'translate(10%, 20%)'};
  transition: all 0.5s;
`;

const StyledCar = styled(animated.img)`
  position: absolute;
  top: 8%;
  transform: ${({ gifState }) =>
    gifState ? 'translateX(85%)' : 'translateX(0%)'};
  width: ${({ gifState }) => (gifState ? 450 : 800)}px;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
  }
`;

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  color: #222222;
  font-size: 2rem;
  padding: 1rem;
  margin-top: 50px;
  margin-bottom: 40px;
`;

const Hours = styled.div`
  font-size: 4rem;
  font-weight: bold;
`;

const Minutes = styled.div`
  font-size: 4rem;
  font-weight: bold;
`;

const Seconds = styled.div`
  font-size: 4rem;
  font-weight: bold;
`;

const TimerText = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
`;

const TimerIcon = styled(RxLapTimer)`
  font-size: 4rem;
  text-transform: uppercase;
  margin-right: 80px;
`;

const Colon = styled.div`
  font-size: 3rem;
  text-transform: uppercase;
  margin-right: 20px;
`;

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const QuizTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
  line-height: 1.5;
  margin-top: 200px;
  margin-bottom: 50px;
`;
const QuizContentInfo = styled.div`
  font-size: 17px;
  line-height: 2.5;
`;

const QuizMainImg = styled.img`
  width: 600px;
  margin-top: 40px;
  margin-bottom: 100px;
  transition: opacity 2.5s;
  opacity: 0;
`;

const QuizContent = styled.div`
  font-weight: 700;
  font-size: 50px;
  line-height: 1.5;
  margin-bottom: 50px;
`;

const QuizSubContent = styled.div`
  margin-bottom: 100px;
  font-size: 17px;
  color: #646464;
  line-height: 1.5;
  span {
    font-weight: 700;
    font-size: 22px;
    color: #222222;
  }
`;

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 100px;
  width: 1000px;
  margin: 0 auto;
`;

const SuperCarImg = styled.img`
  width: 100%;
  height: 350px;
  opacity: 0;
  object-fit: contain;
  &.animate {
    animation: ${appear} 0.6s ease-in-out forwards;
    animation-delay: ${props => props.delay}s;
  }
  &:hover {
    cursor: pointer;
  }
`;

const InputBox = styled.input`
  width: 400px;
  height: 30px;
  border: none;
  outline: none;
  border-bottom: 2px solid #222222;
  margin-bottom: 20px;
  margin-top: 80px;
  font-size: 20px;
  text-align: center;
  &::placeholder {
    font-size: 20px;
  }
`;

const PersonNumber = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const ConfirmBtn = styled.div`
  background-color: #222222;
  color: #ffffff;
  width: 400px;
  margin: 0 auto;
  height: 60px;
  font-size: 20px;
  padding-top: 18px;
  margin-bottom: 80px;
  &:hover {
    cursor: pointer;
  }
`;

export default PointQuiz;

const CAR_IMAGE = [
  {
    id: 1,
    carName: 'Lamborghini FKP 37',
    gif: lamborghiniGif,
    imageUrl:
      'https://www.lego.com/cdn/cs/set/assets/bltee88e5e65f00bd00/42115.jpg?format=webply&fit=bounds&quality=80&width=320&height=320&dpr=2',
  },
  {
    id: 2,
    carName: 'McLaren Senna GTR',
    gif: McLaren,
    imageUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt98ab23663c973e9b/42123.jpg?format=webply&fit=bounds&quality=80&width=320&height=320&dpr=2',
  },
  {
    id: 3,
    carName: '포르쉐 911 RSR',
    gif: Bugatti,
    imageUrl:
      'https://www.lego.com/cdn/cs/set/assets/bltf73564a058fa0425/42151.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
  },
  {
    id: 4,
    carName: '더 배트맨 배트모빌',
    gif: Batmen,
    imageUrl:
      'https://www.lego.com/cdn/cs/set/assets/bltc2661d66536e8c5d/42127.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
  },
];
