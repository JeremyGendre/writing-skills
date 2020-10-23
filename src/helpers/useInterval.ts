import React, {useEffect, useRef} from 'react';

/**
 * Use setInterval with Hooks in a declarative way.
 *
 * @see https://stackoverflow.com/a/59274004/3723993
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
export default function useInterval(
    callback: React.EffectCallback,
    delay: number | null,
): React.MutableRefObject<number | undefined> {
    const intervalRef = useRef<number>();
    const callbackRef = useRef(callback);

    // Remember the latest callback:
    //
    // Without this, if you change the callback, when setInterval ticks again, it
    // will still call your old callback.
    //
    // If you add `callback` to useEffect's deps, it will work fine but the
    // interval will be reset.

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    // Set up the interval:

    useEffect(() => {
        if (typeof delay === 'number') {
            intervalRef.current = window.setInterval(() => callbackRef.current(), delay);
            // Clear interval if the components is unmounted or the delay changes:
            return () => window.clearInterval(intervalRef.current);
        }
    }, [delay]);

    // In case you want to manually clear the interval from the consuming component...:
    return intervalRef;
}
