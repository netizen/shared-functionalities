import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button } from '../src';

storiesOf('Components', module).add('Button', () => (
  <Button
    onClick={() => {
      alert('Button got clicked!');
    }}
  >
    ClickMe!
  </Button>
));
