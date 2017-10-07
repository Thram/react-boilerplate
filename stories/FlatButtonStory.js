import React from 'react';

import { action } from '@storybook/addon-actions';
import FlatButton from '../src/components/FlatButton';

const FlatButtonStory = () => (
  <div style={{ padding: '2rem' }}>
    <FlatButton onClick={action('Text Clicked')}>Text</FlatButton>
    <FlatButton onClick={action("I'm Batman!")} style={{ width: '100px' }}>
      <img
        src="https://s-media-cache-ak0.pinimg.com/736x/e5/a0/69/e5a06942fa42823c88be5f3a834e063d.jpg"
        alt=""
      />
    </FlatButton>
  </div>
);

export default FlatButtonStory;
