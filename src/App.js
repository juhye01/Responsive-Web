// src/App.js
import React from 'react';
import Header from './components/Header';
import './App.css';
import HeroSection from './components/HeroSection';
import Contents01 from './components/Contents01';
import Contents02 from './components/Contents02';
import Contents03 from './components/Contents03';
import Number from './components/Number';
import Reviews from './components/reviews';
import Reviews02 from './components/reviews02';
import ContactUs from './components/contactus'; 
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* 아래는 메인 콘텐츠 영역입니다. 필요에 따라 추가하세요 */}
      <main>
        <HeroSection />
        <Contents01 />
        <Contents02 />
        <Contents03 />
        <Number />
        <Reviews />
        <Reviews02 />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}

export default App;
