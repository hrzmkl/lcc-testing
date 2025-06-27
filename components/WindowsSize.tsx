// src/useWindowDimensions.ts
import { useEffect, useState } from 'react';


interface WindowDimensions {
    width: number | undefined;
    height: number | undefined;
}

const useWindowDimensions = () => {
    // Initialize state with undefined values
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowDimensions({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };

            // Set initial dimensions
            handleResize();

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return windowDimensions;
};

export default useWindowDimensions;