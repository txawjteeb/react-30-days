import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getTime();
  }

  Clock.propTypes = {
    title: React.PropTypes.string,
    count: React.PropTypes.number,
    isOn: React.PropTypes.bool,
    onDisplay: React.PropTypes.func,
    symbol: React.PropTypes.symbol,
    user: React.PropTypes.object,
    displayEle: React.PropTypes.element,
    name: React.PropTypes.node
  }

  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    this.setState(this.getTime, this.setTimer);
  }

  getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  // ...
  render() {
    <Clock displayElement={
      <div>Name</div>
      <div>Age</div>
    }></Clock>
    // Valid
    <Clock displayElement={
      <div>
        <div>Name</div>
        <div>Age</div>
      </div>
    }></Clock>
  }
}

export default Clock