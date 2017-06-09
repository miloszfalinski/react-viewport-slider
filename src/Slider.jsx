'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Paginator from './Paginator';
import scrollToY from 'scroll-to-y';


export default class Slider extends Component {

  constructor(props) {
    super(props);

    this.state = { activeIndex: 1 };

    this.setActive = this.setActive.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.lastScroll = 0;

    // window.addEventListener('set-active-panel', function (e) {
    //   console.log(e.detail);
    // });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (this.isAnimating) {
      return;
    }

    // up
    if (
      window.scrollY > this.lastScroll &&
      window.innerHeight + window.scrollY >
      ((window.innerHeight * this.state.activeIndex) + window.innerHeight / 2)
    ) {
      this.setActive(this.state.activeIndex + 1);
      // down
    } else if (
      window.scrollY < this.lastScroll &&
      window.innerHeight + window.scrollY <
      ((window.innerHeight * this.state.activeIndex) - window.innerHeight / 1.5)
    ) {
      this.setActive(this.state.activeIndex - 1);
    }

    this.lastScroll = window.scrollY;
  }

  setActive(index, scrollTo) {
    this.setState({ activeIndex: index }, () => {
      if (scrollTo) {
        this.isAnimating = true;
        scrollToY(
          this.refs[`panel-${index}`].offsetTop,
          500,
          'easeInOutQuint',
          () => {
            this.isAnimating = false;
          }
        );
      }
      var setActivePanelEvent = new CustomEvent('set-active-panel', {
        detail: {
          index: this.state.activeIndex
        },
        bubbles: true
      });
      // Send custom event to the parent
      window.dispatchEvent(setActivePanelEvent);
    });
  }

  render() {
    if (!this.props.children) {
      return null;
    }

    return (
      <div className="slider">
        <Paginator activeIndex={this.state.activeIndex}
          bullets={this.props.children.length}
          onClick={this.setActive} />

        {this.props.children.map((child, key) => {
          let index = key + 1;

          return (
            <div ref={`panel-${index}`} key={index}>
              <Item {...child.props}
                index={index}
                hideButton={index === this.props.children.length}
                onClick={this.setActive}>
                {child}
              </Item>
            </div>
          );
        })}
      </div>
    );
  }

}

Slider.defaultProps = {};

Slider.propTypes = {};
