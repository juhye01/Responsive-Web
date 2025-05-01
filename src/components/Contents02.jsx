import React, { useState, useEffect } from 'react';
import './Contents02.css';

const items = [
  {
    text: '흩어진 디자인 JSON, 한 번에 정리',
    img: '/img/contents_card01.svg',
  },
  {
    text: 'Chakra 스타일 코드 자동 완성',
    img: '/img/contents_card02.svg',
  },
  {
    text: 'Swagger 문서만 있다면, 타입까지 갖춘 코드 자동 생성',
    img: '/img/contents_card03.svg',
  },
  {
    text: 'SVG 아이콘 변환을 한 번에',
    img: '/img/contents_card04.svg',
  },
];

const Contents02 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
      setResetKey((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleClick = (index) => {
    setActiveIndex(index);
    setResetKey((prev) => prev + 1);
  };

  return (
    <section className="contents02">
      <h2 className="contents02__title text-display-3 content-color-grey-1">더 쉬워진 과정</h2>

      <div className="contents02__inner">
        <div className="contents02-text">
          <div className="contents02-list">
            {items.map((item, index) => (
              <div
                key={`${index}-${resetKey}`}
                className={`contents02-item ${activeIndex === index ? 'active' : 'disabled'}`}
                onClick={() => handleClick(index)}
              >
                <div className="progress-wrapper">
                  <div className="progress-background" />
                  <div className={`progress-line ${activeIndex === index ? 'animate' : ''}`} />
                </div>
                <p className="text-heading-3">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contents02-image">
          {items.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={item.text}
              className={`contents02-card-img ${activeIndex === index ? 'visible' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contents02;
