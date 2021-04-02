import {
  useDebugValue, useEffect, useMemo, useState,
} from 'react';

export const useMatchMedia = (media) => {
  const matchMedia = useMemo(
    () => window.matchMedia(media),
    [media],
  );
  const [matches, setMatches] = useState(matchMedia.matches);
  useEffect(
    () => {
      const handler = () => {
        setMatches(matchMedia.matches);
      };
      matchMedia.addEventListener('change', handler);
      return () => matchMedia.removeEventListener('change', handler);
    },
    [matchMedia, setMatches],
  );
  useDebugValue(`${matches} -- ${media}`);
  return matches;
};

export default useMatchMedia;
