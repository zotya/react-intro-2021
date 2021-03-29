import { useCallback } from 'react';
import { Button } from '../Button';
import { useCounter } from './useCounter';

export const CounterButton = ({
  amount,
  handler,
  children,
  ...rest
}) => {
  const onClick = useCallback(
    () => handler({ target: { dataset: { amount: parseInt(amount, 10) } } }),
    [handler, amount],
  );
  return <Button raised onClick={onClick} {...rest}>{children}</Button>;
};

export const Counter = () => {
  const {
    counter, doubleCounter, change, reset,
  } = useCounter();
  return (
    <div>
      <h1>
        Counter:
        {counter}
        {`(*2 ${doubleCounter})`}
      </h1>
      <CounterButton raised amount={-5} handler={change}>-5</CounterButton>
      <Button raised data-amount={-1} onClick={change}>-1</Button>
      <Button onClick={reset}>Reset</Button>
      <Button raised data-amount={1} onClick={change}>+1</Button>
      <Button raised data-amount={5} onClick={change}>+5</Button>
    </div>
  );
};

export default Counter;
