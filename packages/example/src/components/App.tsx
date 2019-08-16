import React from 'react';

import abstractions from '@gateway-shared/abstractions';

import {
  Button,
  Card,
  CardPrimaryAction,
  Grid,
  GridCell,
  Typography,
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
      <Grid>
        {counters.map((counterValue, idx) => (
          <GridCell span={2} key={idx}>
            <Card>
              <CardPrimaryAction>
                <Typography use={'headline6'}>
                  {`Operand ${idx} = `}
                  {counterValue}
                </Typography>
                <div>
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
          </GridCell>
        ))}
        <GridCell span={2}>
          <Card>
            <CardPrimaryAction>
              <div>
                <Typography use={'headline6'}>{'Sum = '}</Typography>
                <Typography use={'headline6'}>
                  {abstractions.isomorphic.utils.add(counters[0], counters[1])}
                </Typography>
              </div>
              <div>
                <Typography use={'headline6'}>{'Multiply = '}</Typography>
                <Typography use={'headline6'}>
                  {abstractions.isomorphic.utils.multiply(
                    counters[0],
                    counters[1],
                  )}
                </Typography>
              </div>
            </CardPrimaryAction>
          </Card>
        </GridCell>
      </Grid>
    );
  }
}

export default App;
