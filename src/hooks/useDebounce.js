import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncevalue, setDebounceValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(handler);
    }, [value]);
    return debouncevalue;
}

export default useDebounce;
