'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var Item = function Item(props) {

  var style = {
    boxSizing: 'border-box',
    height: '100vh',
    position: 'relative',
    width: '100%'
  };

  var classes = _classnames2['default']('panel', 'panel-' + props.index, props.itemClass);

  var propsClone = Object.create(props || {});
  delete propsClone.children;

  var renderButton = function renderButton() {
    return _react2['default'].createElement(
      _Button2['default'],
      { index: props.index, onClick: props.onClick },
      props.buttonLabel
    );
  };

  return _react2['default'].createElement(
    'div',
    _extends({}, propsClone, { className: classes, style: Object.assign(style, props.itemStyle) }),
    props.children,
    props.hideButton ? null : renderButton()
  );
};

Item.defaultProps = {
  buttonLabel: 'next',
  hideButton: false,
  itemStyle: {}
};

Item.propTypes = {
  buttonLabel: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].element, _propTypes2['default'].object]),
  hideButton: _propTypes2['default'].bool,
  index: _propTypes2['default'].number.isRequired,
  itemClass: _propTypes2['default'].string,
  itemStyle: _propTypes2['default'].object,
  onClick: _propTypes2['default'].func
};

exports['default'] = Item;
module.exports = exports['default'];