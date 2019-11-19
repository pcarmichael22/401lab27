import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUp = e => {
    let count = this.state.count + 1;
    this.updateCounter(count);
  };

  handleDown = e => {
    let count = this.state.count - 1;
    this.updateCounter(count);
  };

  updateCounter(count) {
    let polarity = '';
    if (count > 0) {
      polarity = 'positive';
    } else if (count < 0) {
      polarity = 'negative';
    }
    this.setState({ count, polarity });
  }

  render() {
    let classes = ['count', this.state.polarity].join(' ');
    return (
      <section className="counter" class="text-4xl text-center tracking-widest pb-8">
        <a href="#" className="down clicker" class="pr-8 pl-8 mr-4 bg-indigo-200 shadow-2xl rounded-full h-16 w-16 hover:border-gray-300" onClick={this.handleDown}>
          -
        </a>
        <span className={classes}>{this.state.count}</span>
        <a href="#" className="up clicker" class="hover:border-gray-300 pr-8 pl-8 ml-4 bg-indigo-200 shadow-2xl rounded-full h-16 w-16 " onClick={this.handleUp}>
          +
        </a>
      </section>
    );
  }
}

export default Counter;
