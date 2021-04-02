import { useCallback, useEffect, useState } from 'react';

export const useFetch = (
  url,
  autoload = false,
) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(undefined);

  const update = useCallback(
    async () => {
      setIsLoading(true);
      setIsLoaded(false);
      setData(undefined);
      setError(undefined);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`${response.statusText} (${response.status})`);
        }
        setData(await response.json());
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
        setIsLoaded(true);
      }
    },
    [setData, setIsLoading, setIsLoaded, setError, url],
  );

  const [hasAutoLoaded, setHasAutoLoaded] = useState(false);
  useEffect(
    () => {
      if (autoload && !hasAutoLoaded) {
        setHasAutoLoaded(true);
        update();
      }
    },
    [hasAutoLoaded, update, setHasAutoLoaded, autoload],
  );

  return {
    update,
    data,
    isLoading,
    isLoaded,
    error,
  };
};

export default useFetch;
