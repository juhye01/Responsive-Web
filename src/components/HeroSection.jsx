import React, { useRef, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const ballRefs = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
  };
  const shadowRefs = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
  };

  const ballDiameters = {
    1: 230,
    2: 160,
    3: 110,
  };

  const handleBallHover = (id) => {
    const diameter = ballDiameters[id];
    const circumference = diameter * Math.PI;
    const direction = Math.random() < 0.5 ? -1 : 1;
    const translateX = direction * Math.floor(Math.random() * 150 + 100);
    const rotateDeg = (translateX / circumference) * 360;

    const ball = ballRefs[id].current;
    const shadow = shadowRefs[id].current;

    if (ball) {
      ball.style.transition = 'transform 1s ease-out';
      ball.style.transform = `translateX(${translateX}px) rotateZ(${rotateDeg}deg)`;
    }

    if (shadow) {
      shadow.style.animation = 'none';
      void shadow.offsetHeight;
      shadow.style.transition = 'transform 1s ease-out';
      shadow.style.transform = `translateX(${translateX}px)`;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            [1, 2, 3].forEach(id => {
              const ball = ballRefs[id].current;
              const shadow = shadowRefs[id].current;
              if (ball) ball.style.transform = '';
              if (shadow) {
                shadow.style.animation = '';
                shadow.style.transform = '';
                shadow.style.background = '';
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroEl = document.querySelector('.hero');
    if (heroEl) observer.observe(heroEl);

    return () => {
      if (heroEl) observer.unobserve(heroEl);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero__image-area">
        {[1, 2, 3].map((id) => (
          <div key={id} className={`ball-wrapper ball-wrapper--${id}`}>
            <div
              className={`ball-shadow ball-shadow--${id}`}
              ref={shadowRefs[id]}
            ></div>
            <div
              className={`ball ball--${id}`}
              ref={ballRefs[id]}
              onMouseEnter={() => handleBallHover(id)}
            ></div>
          </div>
        ))}

        <div className="circle-wrapper circle-wrapper--red">
          <div className="circle-shadow circle-shadow--red"></div>
          <img
            src={`${process.env.PUBLIC_URL}/img/red_circle.svg`}
            alt="Red Circle"
            className="circle-image red-circle"
          />
        </div>

        <div className="circle-wrapper circle-wrapper--white">
          <div className="circle-shadow circle-shadow--white"></div>
          <img
            src={`${process.env.PUBLIC_URL}/img/white_circle.svg`}
            alt="White Circle"
            className="circle-image white-circle"
          />
        </div>

        <div className="circle-shadow circle-shadow--hemisphere"></div>
        <div className="circle-wrapper circle-wrapper--hemisphere">
          <img
            src={`${process.env.PUBLIC_URL}/img/hemisphere.svg`}
            alt="Hemisphere"
            className="circle-image hemisphere"
          />
        </div>

        <div className="glass-ellipse"></div>
      </div>

      <div className="hero__text-block">
        <h1 className="text-display-4">기능은 그대로<br />복잡함은 덜어내다</h1>
        <div className="hero__body-group">
          <p className="text-heading-4">
            brewin은 복잡한 웹 개발을 더 쉽고 빠르게 만들어주는 React 컴포넌트 라이브러리입니다.<br />
            반복되는 작업을 줄이고 복잡함을 덜어내, 더 효율적인 개발 프로세스를 경험해보세요.
          </p>
          <button className="button">
            시작하기
            <img
              src={`${process.env.PUBLIC_URL}/img/next.svg`}
              alt="arrow"
              className="hero__button-icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
