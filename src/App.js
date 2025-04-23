// src/App.js
import React from 'react';
import Header from './components/Header';
import './App.css';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <Header />
      {/* 아래는 메인 콘텐츠 영역입니다. 필요에 따라 추가하세요 */}
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
