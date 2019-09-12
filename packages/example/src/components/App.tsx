import React from 'react';

import abstractions from '@shared-functionalities/abstractions';

import {
  Button,
  Card,
  CardPrimaryAction,
  Grid,
  GridCell,
  Typography,
} from '@shared-functionalities/components';

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
                <Button raised onClick={() => this.incrementCounter(idx, 1)}>
                  Increase
                </Button>
                <Button outlined onClick={() => this.incrementCounter(idx, -1)}>
                  Decrease
                </Button>
              </CardPrimaryAction>
            </Card>
          </GridCell>
        ))}
        <GridCell span={2}>
          <Card>
            <CardPrimaryAction>
              <div>
                <Typography use={'headline6'}>{'Addition = '}</Typography>
                <Typography use={'headline6'}>
                  {abstractions.isomorphic.utils.add(counters[0], counters[1])}
                </Typography>
              </div>
              <div>
                <Typography use={'headline6'}>{'Multiplication = '}</Typography>
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
