import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

type PopUpOptions = {
  max?: number;
  speed?: number;
  reverse?: boolean;
};

export default function usePopUpCard(options: PopUpOptions = {}) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const node = ref.current;

        if (node) {
            VanillaTilt.init(node, options)
        }

        return () => {
            if ((node as any)?.vanillaTilt) {
                (node as any).vanillaTilt.destroy();
            }
        };
    }, [options]);

    return ref
}


