import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getTime();
  }

  const Formatter = (props) => {
  let children = props.format.split('').map((e, idx) => {
    if (e === 'h') {
      return <Hour key={idx} {...props} />
    } else if (e === 'm') {
      return <Minute key={idx} {...props} />
    } else if (e === 's') {
      return <Second key={idx} {...props} />
    } else if (e === 'p') {
      return <Ampm key={idx} {...props} />
    } else if (e === ' ') {
      return <span key={idx}> </span>;
    } else {
      return <Separator key={idx} {...props} />
    }
  });

  return <span>{children}</span>;
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

  state = { currentTime: new Date() }
  componentDidMount() {
    this.setState({
      currentTime: new Date()
    }, this.updateTime);
  }
  componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId)
    }
  }

  setTimer() {
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
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

  updateTime = e => {
    this.timerId = setTimeout(() => {
      this.setState({
        currentTime: new Date()
      }, this.updateTime);
    })
  }
  
  render() {
    const { currentTime } = this.state
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();

    return (
      <div className='clock'>
        <Formatter
          {...this.props}
          state={this.state}
          hours={hour}
          minutes={minute}
          seconds={second}
        />
      </div>
    )
  }
}

export default Clock