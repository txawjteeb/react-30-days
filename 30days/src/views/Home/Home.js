import { connect } from 'react-redux';
  // ...
const mapStateToProps = state => {
  return {
    currentTime: state.currentTime
  }
}

const Home = (props) => {
  return (
    <div className="home">
      <h1>Welcome home!</h1>
      <p>Current time: {props.currentTime}</p>
      <button onClick={props.updateTime}>
        Update time
      </button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  updateTime: () => dispatch(fetchNewTime())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);