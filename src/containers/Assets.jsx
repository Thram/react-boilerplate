import React from 'react';
import Icon from '../components/Icon';
import { content } from '../content';
import { Images } from '../assets';

const Assets = () => (
  <div>
    <h2>{content('assets.title')}</h2>
    <h3>{content('assets.images')}</h3>
    <img src={Images.image} alt="Example" />
    <h3>{content('assets.icons')}</h3>
    <Icon style={{ color: '#E6867A' }}>done</Icon>
    <Icon style={{ color: '#ED4A6A', fontSize: '100px' }}>extension</Icon>
    <Icon style={{ color: '#D9AB91', fontSize: '50px' }}>face</Icon>
    <Icon style={{ color: '#D9D5A7', fontSize: '30px' }}>motorcycle</Icon>
    <Icon style={{ color: '#C7FCD7', fontSize: '80px' }}>pets</Icon>
  </div>
);

export default Assets;
