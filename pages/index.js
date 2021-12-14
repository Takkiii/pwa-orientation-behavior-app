import { useState, useEffect, useLayoutEffect } from 'react';
import Div100vh from 'react-div-100vh';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [clientHeight, setClientHeight] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);

  const handleOrientationChange = () => {
    if (typeof window !== 'undefined') {
      setClientHeight(document.documentElement?.clientHeight);
      setInnerHeight(window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, []);

  useLayoutEffect(() => {
    if (clientHeight === 0) {
      setClientHeight(document.documentElement?.clientHeight);
    }
    if (innerHeight === 0) {
      setInnerHeight(window.innerHeight);
    }
  }, [clientHeight, innerHeight]);

  return (
    <Div100vh>
      <div className={styles.container}>
        <div>
          ClientHeight: {clientHeight}
        </div>
        <div>
          InnerHeight: {innerHeight}
        </div>
      </div>
    </Div100vh>
  )
}
