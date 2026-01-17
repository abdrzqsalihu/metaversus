'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

// eslint-disable-next-line react/function-component-definition
export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on('scroll', (e) => {
    //   console.log(e);
    // });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
