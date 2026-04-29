import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

type TiltOptions = {
  max?: number;
  speed?: number;
  reverse?: boolean;
};

export default function useTilt(options: TiltOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      VanillaTilt.init(node, options);
    }

    return () => {
      if ((node as any)?.vanillaTilt) {
        (node as any).vanillaTilt.destroy();
      }
    };
  }, [options]);

  return ref;
}