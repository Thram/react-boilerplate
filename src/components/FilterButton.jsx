import React from 'react';
import pureCSS from '../utils/pure';

const CLASSES = {
  button: pureCSS.button(),
  buttonType: type => (type ? pureCSS.button(type) : ''),
  buttonActive: active => (active ? pureCSS.button('active') : ''),
};

const click = onClick => (ev) => {
  ev.preventDefault();
  onClick();
};

const FilterButton = ({
  active = false, type, children, onClick,
}) => (
  <button
    type="button"
    className={`${CLASSES.button} ${CLASSES.buttonType(type)} ${CLASSES.buttonActive(active)}`}
    onClick={click(onClick)}
  >
    {children}
  </button>
);

export default FilterButton;
