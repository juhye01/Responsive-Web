// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* 왼쪽 묶음: 로고 + 메뉴 */}
      <div className="header__left">
        <img src="/img/logo_img.png" alt="brewin logo" className="logo-img" />
        <nav className="header__center">
          <a href="#" className="text-heading-5">Docs</a>
          <a href="#" className="text-heading-5">API</a>
          <a href="#" className="text-heading-5">Onboarding</a>
        </nav>
      </div>

      {/* 오른쪽: 검색창 + GitHub 아이콘 */}
      <div className="header__right">
        <div className="search-box">
          <img src="/img/search_icon.png" alt="search" className="search-icon" />
        </div>
        <img src="/img/github_icon.png" alt="GitHub" className="icon-img" />
      </div>
    </header>
  );
};

export default Header;
