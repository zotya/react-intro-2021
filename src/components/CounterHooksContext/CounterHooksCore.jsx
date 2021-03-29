import {
  createContext, useCallback, useContext, useDebugValue, useReducer,
} from 'react';
import { useDoubleValue } from '../CounterHooks';

export const CounterContext = createContext();

export const useCounterProvider = (defaultValue = 0) => {
  const [counter, dispatch] = useReducer(
    (state, { type, payload }) => {
      switch (type) {
        case 'increment': return state + payload;
        case 'decrement': return state - payload;
        case 'reset': return defaultValue;
        default: throw Error('This is not the action you\'re looking for');
      }
    },
    defaultValue,
  );
  const change = useCallback(
    ({ target: { dataset: { action, amount } } }) => {
      dispatch(
        { type: action, payload: parseInt(amount, 10) },
      );
    },
    [dispatch],
  );
  const doubleCounter = useDoubleValue(counter);
  useDebugValue(counter);
  return {
    counter,
    doubleCounter,
    change,
  };
};

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

export const useHandlers = () => useContext(CounterContext).change;

export const withCounter = (ComposedComponent) => {
  const WithCounter = (props) => {
    const counter = useCounter();
    const doubleCounter = useDoubleCounter();
    return <ComposedComponent {...props} {...{ counter, doubleCounter }} />;
  };
  WithCounter.displayName = `WithCounter(${ComposedComponent.displayName || ComposedComponent.name})`;
  return WithCounter;
};
