/* eslint-disable */

import { Component } from 'react';
import { Button } from '../Button';

class Demo extends Component {
  componentDidMount() {
    console.log("Mounted");
  }
  componentWillUnmount() {
    console.log("Unmounted");
  }
  render() {
    return <h1>I'm here</h1>;
  }
}

export class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 0, doubleCounter: 0 };
  }

  componentDidMount() {
    document.title = 'Counter Ready!';
  }

  componentDidUpdate(props, state) {
    const { counter } = this.state;
    if (state.counter !== counter) {
      this.setState({ doubleCounter: counter * 2 });
      document.title = `Counter: ${counter}`;
    }
  }

  change = ({ target: { dataset: { amount } } }) => this.setState({ counter: amount });

  increment = ({ target: { dataset: { amount } } }) => {
    const { counter } = this.state;
    this.setState({ counter: counter + parseInt(amount, 10) });
  }

  decrement = ({ target: { dataset: { amount } } }) => {
    const { counter } = this.state;
    this.setState({ counter: counter - parseInt(amount, 10) });
  }

  componentWillUnmount() {
    document.title = 'Counter Exit!';
  }

  render() {
    const { counter, doubleCounter } = this.state;
    return (
      <div>
        <h1>
          Counter:
          {counter}
          {`(* 2 ${doubleCounter})`}
        </h1>
        <hr />
        <Button raised data-amount={5} onClick={this.decrement}>-5</Button>
        <Button raised data-amount={1} onClick={this.decrement}>-1</Button>
        <Button raised data-amount={0} onClick={this.change}>Reset</Button>
        <Button raised data-amount={1} onClick={this.increment}>1</Button>
        <Button raised data-amount={5} onClick={this.increment}>5</Button>
        {counter > 5 && <Demo />}
      </div>
    );
  }
}

export default Counter;
