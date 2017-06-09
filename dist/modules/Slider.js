'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _Paginator = require('./Paginator');

var _Paginator2 = _interopRequireDefault(_Paginator);

var _scrollToY = require('scroll-to-y');

var _scrollToY2 = _interopRequireDefault(_scrollToY);

var Slider = (function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    _Component.call(this, props);

    this.state = { activeIndex: 1 };

    this.setActive = this.setActive.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.lastScroll = 0;

    // window.addEventListener('set-active-panel', function (e) {
    //   console.log(e.detail);
    // });
    window.addEventListener('scroll', this.handleScroll);
  }

  Slider.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  Slider.prototype.handleScroll = function handleScroll() {
    if (this.isAnimating) {
      return;
    }

    // up
    if (window.scrollY > this.lastScroll && window.innerHeight + window.scrollY > window.innerHeight * this.state.activeIndex + window.innerHeight / 2) {
      this.setActive(this.state.activeIndex + 1);
      // down
    } else if (window.scrollY < this.lastScroll && window.innerHeight + window.scrollY < window.innerHeight * this.state.activeIndex - window.innerHeight / 1.5) {
        this.setActive(this.state.activeIndex - 1);
      }

    this.lastScroll = window.scrollY;
  };

  Slider.prototype.setActive = function setActive(index, scrollTo) {
    var _this = this;

    this.setState({ activeIndex: index }, function () {
      if (scrollTo) {
        _this.isAnimating = true;
        _scrollToY2['default'](_this.refs['panel-' + index].offsetTop, 500, 'easeInOutQuint', function () {
          _this.isAnimating = false;
        });
      }
      var setActivePanelEvent = new CustomEvent('set-active-panel', {
        detail: {
          index: _this.state.activeIndex
        },
        bubbles: true
      });
      // Send custom event to the parent
      window.dispatchEvent(setActivePanelEvent);
    });
  };

  Slider.prototype.render = function render() {
    var _this2 = this;

    if (!this.props.children) {
      return null;
    }

    return _react2['default'].createElement(
      'div',
      { className: 'slider' },
      _react2['default'].createElement(_Paginator2['default'], { activeIndex: this.state.activeIndex,
        bullets: this.props.children.length,
        onClick: this.setActive }),
      this.props.children.map(function (child, key) {
        var index = key + 1;

        return _react2['default'].createElement(
          'div',
          { ref: 'panel-' + index, key: index },
          _react2['default'].createElement(
            _Item2['default'],
            _extends({}, child.props, {
              index: index,
              hideButton: index === _this2.props.children.length,
              onClick: _this2.setActive }),
            child
          )
        );
      })
    );
  };

  return Slider;
})(_react.Component);

exports['default'] = Slider;

Slider.defaultProps = {};

Slider.propTypes = {};
module.exports = exports['default'];