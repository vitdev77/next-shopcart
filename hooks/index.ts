import * as React from 'react';

export function useOutsideClick<T extends HTMLElement>(callback: () => void) {
  const ref = React.useRef<T>(null);

  React.useEffect(() => {
    const handleClickedOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickedOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickedOutside);
    };
  }, [callback]);

  return ref;
}
