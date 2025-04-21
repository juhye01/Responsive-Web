// src/App.js
import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* 아래는 메인 콘텐츠 영역입니다. 필요에 따라 추가하세요 */}
      <main>
        <h2>Welcome to brewin!</h2>
        <p>This is your starting point 🚀</p>
      </main>
    </div>
  );
}

export default App;
