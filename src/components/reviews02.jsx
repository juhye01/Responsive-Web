import React, { useRef, useState, useEffect } from 'react';
import './reviews02.css';

const reviewList = [
  { name: '권정인', company: '온누리', rating: 4, text: '개발 시간이 정말 단축되었습니다. 구조도 단순해 덕분에 앞으로의 유지보수도 편리할 것 같아요.' },
  { name: '이민채', company: 'Riid', rating: 5, text: '진짜 이게 없이는 개발 못할 것 같아요. 너무 간편하고, 전체 프로젝트를 쉽게 끝낼 수 있었습니다.' },
  { name: '김민혁', company: '가전나우', rating: 5, text: '기능을 구현하다보니 코드가 너무 복잡해졌는데, brewin” 덕분에 훨씬 깔끔하게 정리할 수 있었어요.' },
  { name: '박지윤', company: '모노랩스', rating: 4, text: '처음엔 걱정했는데, brewin” 덕분에 프로젝트 진행이 정말 빨라졌어요.' },
  { name: '이수현', company: '에이피랩', rating: 5, text: '개발 리소스를 엄청 절약했습니다. 진심으로 추천합니다!' },
  { name: '조아름', company: '코어택', rating: 5, text: '구조가 깔끔하고 가이드도 쉬워서, 새 팀원들도 금방 적응했어요.' },
  { name: '최현우', company: '아이노트', rating: 4, text: '기존 시스템 대비 훨씬 효율적인 결과를 낼 수 있었습니다.' },
  { name: '정유진', company: '넥스트디자인', rating: 5, text: '디자인, 개발 모두에서 효율이 극대화된 경험이었어요.' },
];

const Reviews02 = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handlePrev = () => {
    sliderRef.current?.scrollBy({ left: -656, behavior: 'smooth' });
  };

  const handleNext = () => {
    sliderRef.current?.scrollBy({ left: 656, behavior: 'smooth' });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const updateScrollButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    updateScrollButtons();
    slider.addEventListener('scroll', updateScrollButtons);
    return () => slider.removeEventListener('scroll', updateScrollButtons);
  }, []);

  return (
    <section className="reviews02-section">
      <div className="reviews02-header">
        <h2 className="reviews02-title text-display-3 content-color-grey-1">사용후기</h2>
        <div className="reviews02-buttons">
          <button className="slider-btn prev" onClick={handlePrev} disabled={!canScrollLeft}>
            <div className="arrow-wrapper"><div className="arrow left"></div></div>
          </button>
          <button className="slider-btn next" onClick={handleNext} disabled={!canScrollRight}>
            <div className="arrow-wrapper"><div className="arrow right"></div></div>
          </button>
        </div>
      </div>

      <div
        className="reviews02-slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {reviewList.map((review, i) => (
          <div key={i} className="review-card">
            <div className="review-content-wrapper">
              <div className="review-company">{review.company}</div>
              <div className="review-name-rating">
                <div className="review-name">{review.name}</div>
                <div className="review-rating">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} style={{ color: j < review.rating ? '#FDB24C' : '#F5F5F5' }}>★</span>
                  ))}
                </div>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews02;
