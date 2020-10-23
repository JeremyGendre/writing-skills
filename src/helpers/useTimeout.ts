import React, {useEffect, useRef} from 'react';

export default function useTimeout(
    callback: React.EffectCallback,
    delay: number | null,
): React.MutableRefObject<number | undefined> {
    const intervalRef = useRef<number>();
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (typeof delay === 'number') {
            intervalRef.current = window.setTimeout(() => callbackRef.current(), delay);
            // Clear interval if the components is unmounted or the delay changes:
            return () => window.clearTimeout(intervalRef.current);
        }
    }, [delay]);

    return intervalRef;
}
