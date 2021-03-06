import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button } from '../src';

storiesOf('Components', module).add('Button', () => (
  <Button
    raised
    onClick={() => {
      alert('Button got clicked!');
    }}
  >
    I am a button!
  </Button>
));
