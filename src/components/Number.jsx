import React, { useEffect, useRef, useState } from 'react';
import './Number.css';

const Number = () => {
  const [btcPrice, setBtcPrice] = useState(null);
  const [displayValue, setDisplayValue] = useState(0);
  const sectionRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const fetchBTC = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
        );
        const data = await res.json();
        const price = Math.floor(data.bitcoin.usd);
        setBtcPrice(price);
      } catch (err) {
        console.error('BTC 가격 로딩 실패:', err);
      }
    };

    fetchBTC();
  }, []);

  const animateCountUp = (start, end, duration) => {
    const startTime = performance.now();

    const easeOutExpo = (t) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const current = Math.floor(start + (end - start) * eased);

      setDisplayValue(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      }
    };

    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    if (!btcPrice) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          animateCountUp(0, btcPrice, 2000);
        } else {
          setDisplayValue(0);
        }
      },
      { threshold: 0.4 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationRef.current);
    };
  }, [btcPrice]);

  return (
    <section className="number-section" ref={sectionRef}>
      <div className="number__text-group">
        <p className="text-display-3 content-color-grey-8">지금도 수많은 사람들이</p>
        <p className="text-display-3 content-color-grey-8"><strong>brewin”</strong>을 사용하고 있습니다</p>
      </div>

      {/* 숫자 + 라벨을 따로 배치 */}
      <div className="number__content">
        <div className="number__value font-helvetica">
          <span>{displayValue.toLocaleString()}</span>
        </div>
        <p className="number__label text-heading-0 content-color-grey-6">실시간 트레픽 횟수</p>
      </div>
    </section>
  );
};

export default Number;
