'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var Button = function Button(props) {

  var style = {
    bottom: '50px',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)',
    zIndex: 2
  };

  var handleClick = function handleClick() {
    props.onClick(props.index + 1, true);
  };

  return _react2['default'].createElement(
    'a',
    { href: '#panel-' + (props.index + 1),
      className: 'viewport-slider-button',
      onClick: handleClick,
      style: style },
    props.children
  );
};

Button.propTypes = {
  index: _propTypes2['default'].number.isRequired,
  onClick: _propTypes2['default'].func
};

exports['default'] = Button;
module.exports = exports['default'];