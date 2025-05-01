import React, { useEffect, useState, useRef } from 'react';
import './reviews.css';

const imageList = [
  { src: '/img/portfolio_01.png', title: '가전나우 : 결제모듈', description: '결제 모듈 구축brewin”의 결제 시스템을 사용해, 플랫폼 결제 기능을 개발하였습니다' },
  { src: '/img/portfolio_02.png', title: '우아콘 : 디자인시스템', description: '기존의 복잡했던 코드 구조를 brewin"의 독자적인 라이브러리로 간소화했습니다' },
  { src: '/img/portfolio_03.png', title: '온누리 : 금융상품', description: 'brewin”의 결제 시스템을 사용해, 플랫폼 결제 기능을 개발했습니다' },
  { src: '/img/portfolio_04.png', title: 'CANAPE : 플러그인 적용', description: '디자인 시스템을 빠르게 적용하고 웹 개발을 진행했습니다' },
  { src: '/img/portfolio_05.png', title: 'mycointax : 앱 서비스', description: 'brewin"을 이용해 앱 서비스를 제작하였습니다' },
  { src: '/img/portfolio_06.png', title: 'Riid : 랜딩페이지', description: 'Riid 랜딩페이지 개발을 위해 brewin”을 도입하여 개발 시간을 단축시켰습니다' },
];

// 기존 import, imageList 그대로

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % imageList.length);
      setIsFading(false);
    }, 800);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(nextSlide, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  const handleDotClick = (dotIndex) => {
    stopAutoSlide();
    setIsFading(true);
    setTimeout(() => {
      setIndex(dotIndex);
      setIsFading(false);
      startAutoSlide();
    }, 800);
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 4; i++) {
      slides.push(imageList[(index + i) % imageList.length]);
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section className="reviews-section">
      <h2 className="reviews-title text-display-3 content-color-grey-1">
        다양한 고객사로부터 인정받은 brewin”
      </h2>

      <div className="reviews-slider-wrapper">
        <div className="reviews-content">
          {/* 메인 슬라이드 */}
          <div className="reviews-main-slide">
            {visibleSlides.slice(0, 1).map((slide, i) => (
              <div
                key={i}
                className={`review-slide big ${isFading ? 'fade-out' : ''}`}
              >
                <img src={slide.src} alt={`Main Slide`} />
                <div className="review-slide__overlay">
                  <h3 className="review-slide__title text-heading-2 content-color-grey-1">
                    {slide.title}
                  </h3>
                  <p className="review-slide__desc text-body-2 content-color-grey-3">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 작은 슬라이드들 */}
          <div className="reviews-small-slides">
            {visibleSlides.slice(1).map((slide, i) => (
              <div
                key={i}
                className={`review-slide small small-${i}`}
                onClick={i === 0 ? nextSlide : undefined}
              >
                <img src={slide.src} alt={`Small Slide ${i}`} />
              </div>
            ))}
          </div>
        </div>

        {/* 추가: 점들 */}
        <div className="reviews-dots">
          {imageList.map((_, dotIndex) => (
            <button
              key={dotIndex}
              className={`reviews-dot ${dotIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(dotIndex)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
