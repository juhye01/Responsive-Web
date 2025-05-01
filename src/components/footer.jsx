import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* 왼쪽 묶음 */}
        <div className="footer__left">
          <img src="/img/logo_black.svg" alt="brewin logo" className="footer__logo" />
          <p className="text-body-6 content-color-grey-6">Copyright ©2025 brewin”, Inc.</p>
          <div className="footer__icons">
            <img src="/img/github_black.svg" alt="GitHub" />
            <img src="/img/linkedin_black.svg" alt="LinkedIn" />
            <img src="/img/internet_black.svg" alt="Website" />
          </div>
        </div>

        {/* 오른쪽 묶음 */}
        <div className="footer__right text-body-6 content-color-grey-6">
          <p>04029 서울 마포구 동교로12안길 39</p>
          <p>대표자: 서장원</p>
          <p>Tel: 02-336-6777</p>
          <p>Fax: 02-336-6779</p>
          <p>사업자등록번호: 476-81-01694</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
