import { connect } from 'react-redux';
import Component from './component';
import { Dispatch } from 'redux';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

const WelcomeScreen = connect(mapStateToProps, mapDispatchToProps)(Component);
export default WelcomeScreen;
