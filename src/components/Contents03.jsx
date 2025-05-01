import React, { useEffect, useRef } from 'react';
import './Contents03.css';

const Contents03 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const boxes = containerRef.current.querySelectorAll('.contents03__box');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    boxes.forEach((box) => observer.observe(box));

    return () => {
      boxes.forEach((box) => observer.unobserve(box));
    };
  }, []);

  return (
    <section className="contents03" ref={containerRef}>
      <h2 className="text-display-3 content-color-grey-1 contents03__title">
        복잡한 개발 없이 즉시 구현
      </h2>
      <div className="contents03__container">
        {/* 로그인 박스 */}
        <div className="contents03__box">
          <div className="contents03__text-group">
            <h3 className="text-heading-2 content-color-grey-1">로그인 시간 단축</h3>
            <p className="text-body-2 content-color-grey-3">
              구글, 네이버 같은 5가지 소셜 로그인을 Client Key만 넣으면 1초 만에 생성 가능!
              새 창이나 팝업 로그인도 완벽 지원해 설정 시간을 단축시켜보세요.
            </p>
            <a href="#" className="text-body-2 content-color-brand">
              로그인 바로 사용하기
              <img
                className="box__link-icon"
                src={`${process.env.PUBLIC_URL}/img/arrow_right.svg`}
                alt="화살표 아이콘"
              />
            </a>
          </div>
          <img
            className="contents03__image"
            src={`${process.env.PUBLIC_URL}/img/login_img.svg`}
            alt="소셜 로그인 UI 이미지"
          />
        </div>

        {/* 결제, 지도 모듈 박스 */}
        <div className="contents03__box">
          <div className="contents03__text-group">
            <h3 className="text-heading-2 content-color-grey-1">결제, 지도 모듈</h3>
            <p className="text-body-2 content-color-grey-3">
              다양한 결제 수단을 지원하고, 실시간 위치 정보와 경로 안내 기능을 제공하는
              결제, 지도 모듈을 통해 복잡한 설정이나 추가 개발 없이 바로 개발 환경을 구축해보세요!
            </p>
            <a href="#" className="text-body-2 content-color-brand">
              결제, 지도 모듈 사용하기
              <img
                className="box__link-icon"
                src={`${process.env.PUBLIC_URL}/img/arrow_right.svg`}
                alt="화살표 아이콘"
              />
            </a>
          </div>
          <img
            className="contents03__image"
            src={`${process.env.PUBLIC_URL}/img/map_img.svg`}
            alt="결제 및 지도 UI 이미지"
          />
        </div>
      </div>
    </section>
  );
};

export default Contents03;
