import {useState, useEffect} from 'react';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof query === 'string') {
      const media = window.matchMedia(query);

      if (media.matches !== matches) {
        setMatches(media.matches);
      }

      const listener = () => {
        setMatches(media.matches);
      };

      if (typeof media.addEventListener === 'function') {
        media.addEventListener('change', listener);
      } else {
        media.addListener(listener);
      }

      return () => {
        if (typeof media.removeEventListener === 'function') {
          media.removeEventListener('change', listener);
        } else {
          media.removeListener(listener);
        }
      };
    }
  }, [matches, query]);

  return matches;
};

export const useInTablet = () => useMediaQuery('(min-width: 768px)');
export const useInDekstop = () => useMediaQuery('(min-width: 1024px)');
