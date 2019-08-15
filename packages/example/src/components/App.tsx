import React from 'react';

import abstractions from '@gateway-shared/abstractions';

import {
  Button,
  Card,
  CardPrimaryAction,
  FormField,
} from '@gateway-shared/components';

interface IState {
  counters: number[];
}

class App extends React.Component<{}, IState> {
  state = {
    counters: [0, 0],
  };

  incrementCounter = (counterIndex: number, toAdd: number) => {
    this.setState((prevState) => {
      const prevCounters = prevState.counters;

      return {
        counters: Object.assign([], prevCounters, {
          [counterIndex]: prevCounters[counterIndex] + toAdd,
        }),
      };
    });
  };

  render() {
    const { counters } = this.state;
    return (
      <div style={{ display: 'flex' }}>
        {counters.map((counterValue, idx) => (
          <div>
            <Card>
              <CardPrimaryAction>
                <FormField>
                  <label>{`Operand ${idx}`} = </label>
                  <span>{counterValue}</span>
                </FormField>
                <div style={{ display: 'flex', marginTop: 16 }}>
                  <Button onClick={() => this.incrementCounter(idx, 1)}>
                    Increase {idx}
                  </Button>
                </div>
                <div>
                  <Button onClick={() => this.incrementCounter(idx, -1)}>
                    Decrease {idx}
                  </Button>
                </div>
              </CardPrimaryAction>
            </Card>
          </div>
        ))}
        <div>
          <Card>
            <CardPrimaryAction>
              <FormField>
                <label>{'Sum'} = </label>
                <span>
                  {abstractions.isomorphic.utils.add(counters[0], counters[1])}
                </span>
              </FormField>
              <FormField>
                <label>{'Multiply'} = </label>
                <span>
                  {abstractions.isomorphic.utils.multiply(
                    counters[0],
                    counters[1],
                  )}
                </span>
              </FormField>
            </CardPrimaryAction>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
