import {
  useCallback, useDebugValue, useEffect, useMemo, useState,
} from 'react';

const useDisplayCounter = (counter) => {
  useEffect(
    () => {
      document.title = 'Ready';
      return () => {
        document.title = 'Exit';
      };
    },
    [],
  );
  useEffect(
    () => {
      document.title = `Counter: ${counter}`;
    },
    [counter],
  );
};

export const useDoubleValue = (value) => {
  const double = useMemo(
    () => value * 2,
    [value],
  );
  useDebugValue(double);
  return double;
};

export const useCounter = (defaultValue = 0) => {
  const [counter, setCounter] = useState(defaultValue);
  const reset = useMemo(
    () => () => setCounter(defaultValue),
    [setCounter, defaultValue],
  );
  const change = useCallback(
    ({ target: { dataset: { amount } } }) => setCounter(
      (c) => c + parseInt(amount, 10),
    ),
    [setCounter],
  );
  const doubleCounter = useDoubleValue(counter);
  useDisplayCounter(counter);
  useDebugValue(`${counter} (${doubleCounter})`);
  return {
    counter, doubleCounter, change, reset,
  };
};

export default useCounter;
