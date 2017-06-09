'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Bullet from './Bullet';

const Paginator = (props) => {

  const style = {
    top: '50%',
    right: '50px',
    position: 'fixed',
    transform: 'translateY(-50%)',
    zIndex: 2
  }

  let themeClass = classNames({
    'theme-dark': props.activeIndex === 1 || props.activeIndex === 3 || props.activeIndex === 5,
    'theme-light': props.activeIndex === 2 || props.activeIndex === 4
  })

  return (
    <div className={`viewport-slider-paginator ${themeClass}`} style={style}>
      {Array.from(new Array(props.bullets), (x, i) => i + 1).map((i) => {
        return (
          <Bullet active={i === props.activeIndex}
            key={i}
            index={i}
            onClick={props.onClick} />
        );
      })}
    </div>
  );

};

Paginator.propTypes = {
  activeIndex: PropTypes.number,
  bullets: PropTypes.number.isRequired,
  onClick: PropTypes.func
};


export default Paginator;
