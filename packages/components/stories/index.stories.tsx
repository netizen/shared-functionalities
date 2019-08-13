import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button, LabelValue, Paper } from '../src';

storiesOf('Components', module)
  .add('Button', () => (
    <Button onClick={() => {}}>
      ClickMe!
    </Button>
  ))
  .add('Paper', () => (
    <Paper>Hello</Paper>
  ))
  .add('LabelValue', () => (
    <LabelValue label={'Price'} value={'$ 9,00'} />
  ));
