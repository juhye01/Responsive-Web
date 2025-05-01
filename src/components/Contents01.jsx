import React, { useEffect } from 'react';
import './Contents01.css';
import CodeVideo from './CodeVideo';
import CodeVideo02 from './CodeVideo02';

const Contents01 = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll('.code-box');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target.querySelector('video');
        if (entry.isIntersecting && video) {
          entry.target.classList.add('visible');
          video.currentTime = 0;
          // video.play(); // 🔴 이 줄은 제거해야 자동재생 문제 없음
        }
      });
    }, {
      threshold: 0.2,
    });

    boxes.forEach((box) => observer.observe(box));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contents01">
      <div className="text-area">
        <h2 className="text-display-3 content-color-grey-1">
          brewin”으로 개발 시간을 단축해보세요
        </h2>
        <p className="text-body-2 content-color-grey-3">
          흩어져 있던 디자인 컴포넌트를 한눈에 정리하고,
          로그인부터 결제, 지도 기능까지 단 몇 줄의 코드로 간편하게 구현해보세요.
        </p>
      </div>

      <div className="code-compare">
        <div className="code-box box01">
          <p className="code-box-label text-body-6 content-color-grey-4">&lt;타사 코드&gt;</p>
          <CodeVideo02 />
        </div>
        <div className="code-box box02">
          <p className="code-box-label text-body-6 content-color-grey-4">&lt;brewin 코드&gt;</p>
          <CodeVideo />
        </div>
      </div>
    </section>
  );
};

export default Contents01;
