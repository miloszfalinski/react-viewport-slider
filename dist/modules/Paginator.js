'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Bullet = require('./Bullet');

var _Bullet2 = _interopRequireDefault(_Bullet);

var Paginator = function Paginator(props) {

  var style = {
    top: '50%',
    right: '50px',
    position: 'fixed',
    transform: 'translateY(-50%)',
    zIndex: 2
  };

  var themeClass = _classnames2['default']({
    'theme-dark': props.activeIndex === 1 || props.activeIndex === 3 || props.activeIndex === 5,
    'theme-light': props.activeIndex === 2 || props.activeIndex === 4
  });

  return _react2['default'].createElement(
    'div',
    { className: 'viewport-slider-paginator ' + themeClass, style: style },
    Array.from(new Array(props.bullets), function (x, i) {
      return i + 1;
    }).map(function (i) {
      return _react2['default'].createElement(_Bullet2['default'], { active: i === props.activeIndex,
        key: i,
        index: i,
        onClick: props.onClick });
    })
  );
};

Paginator.propTypes = {
  activeIndex: _propTypes2['default'].number,
  bullets: _propTypes2['default'].number.isRequired,
  onClick: _propTypes2['default'].func
};

exports['default'] = Paginator;
module.exports = exports['default'];