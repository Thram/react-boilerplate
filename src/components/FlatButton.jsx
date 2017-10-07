import React from 'react';
import styled from 'react-emotion';

const Button = styled.a(
  {
    cursor: 'pointer',
    display: 'inline-block',
  },
  ({ expand }) => ({
    width: expand ? '100%' : 'auto',
  }),
);

const Content = styled.div({ display: 'flex', alignItems: 'center' });

const FlatButton = ({
  children, expand, onClick, style = {},
}) => (
  <Button onClick={onClick} expand={expand}>
    <Content style={style}>{children}</Content>
  </Button>
);

export default FlatButton;
