import { Button } from '../Button';
import {
  CounterProvider,
  useCounter,
  useDoubleCounter,
  useHandlers,
  CounterContext,
  withCounter,
} from './CounterHooksCore';

const CounterDisplayRender = ({ counter, doubleCounter }) => (
  <h1>
    Counter:
    {counter}
    {`(*2 = ${doubleCounter})`}
  </h1>
);

const CounterDisplay = () => {
  const counter = useCounter();
  const doubleCounter = useDoubleCounter();
  return <CounterDisplayRender {...{ counter, doubleCounter }} />;
};

const CounterDisplayDecorated = withCounter(CounterDisplayRender);

const CounterButtons = () => {
  const { reset, change } = useHandlers();
  return (
    <>
      <Button raised data-amount={-5} onClick={change}>-5</Button>
      <Button raised data-amount={-1} onClick={change}>-1</Button>
      <Button onClick={reset}>Reset</Button>
      <Button raised data-amount={1} onClick={change}>+1</Button>
      <Button raised data-amount={5} onClick={change}>+5</Button>
    </>
  );
};

export const Counter = () => (
  <CounterProvider>
    <CounterDisplay />
    <CounterDisplayDecorated />
    <CounterButtons />
    <CounterContext.Consumer>
      {({ counter, doubleCounter }) => (
        <CounterDisplayRender {...{ counter, doubleCounter }} />
      )}
    </CounterContext.Consumer>
  </CounterProvider>
);

export default Counter;
