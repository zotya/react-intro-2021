import { createContext, useContext, useDebugValue } from 'react';
import { useCounter as useCounterProvider, useDoubleValue } from '../CounterHooks';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const state = useCounterProvider();
  return (
    <CounterContext.Provider value={state}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const { counter } = useContext(CounterContext);
  useDebugValue(counter);
  return counter;
};
export const useDoubleCounter = () => {
  const value = useDoubleValue(useCounter());
  useDebugValue(value);
  return value;
};

export const useHandlers = () => {
  const { reset, change } = useContext(CounterContext);
  return { reset, change };
};

export const withCounter = (ComposedComponent) => {
  const WithCounter = (props) => {
    const counter = useCounter();
    const doubleCounter = useDoubleCounter();
    return <ComposedComponent {...props} {...{ counter, doubleCounter }} />;
  };
  WithCounter.displayName = `WithCounter(${ComposedComponent.displayName || ComposedComponent.name})`;
  return WithCounter;
};
