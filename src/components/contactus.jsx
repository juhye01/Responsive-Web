import React from 'react';
import './contactus.css';

const ContactUs = () => {
  return (
    <section className="contactus-section">
      {/* ✅ 백그라운드 이미지 */}
      <img
        src={`${process.env.PUBLIC_URL}/img/contactus.svg`}
        alt="Contact Us Background"
        className="contactus-bg"
      />

      {/* ✅ 텍스트 + 버튼 그룹 */}
      <div className="contactus-content">
        {/* 텍스트 블록 */}
        <div className="contactus-text-block">
          <h2 className="contactus-title text-display-3 content-color-grey-1">
            brewin” 지금 시작해보세요
          </h2>

          <p className="contactus-subtitle text-body-2 content-color-grey-3">
            brewin“에 참여하고 더 쉽고 빨라진 런칭 프로세스를 경험해보세요!<br />
            지금 이 순간, 당신의 crew in을 기다리고 있습니다.
          </p>
        </div>

        {/* ✅ 오른쪽 끝 고정 버튼 */}
        <button className="button contactus-button">
          시작하기
          <img
            src={`${process.env.PUBLIC_URL}/img/next.svg`}
            alt="arrow"
            className="hero__button-icon"
          />
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
