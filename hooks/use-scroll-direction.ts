"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollState {
  isScrolled: boolean;
  isHidden: boolean;
}

/**
 * Tracks scroll position for a sticky header: `isScrolled` flips once the
 * user leaves the top of the page (used to trigger the blur/opaque
 * background), `isHidden` flips on downward scroll past a threshold and
 * clears on any upward scroll (used for the hide/show behaviour).
 */
export function useScrollDirection(hideThreshold = 80): ScrollState {
  const [state, setState] = useState<ScrollState>({ isScrolled: false, isHidden: false });
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      const delta = Math.abs(y - lastY.current);

      setState((prev) => {
        const isScrolled = y > 8;
        const isHidden =
          y > hideThreshold && goingDown && delta > 4
            ? true
            : y <= hideThreshold
              ? false
              : goingDown
                ? prev.isHidden
                : false;
        return prev.isScrolled === isScrolled && prev.isHidden === isHidden ? prev : { isScrolled, isHidden };
      });

      lastY.current = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideThreshold]);

  return state;
}
