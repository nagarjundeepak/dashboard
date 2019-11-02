import {connect} from 'react-redux';
import StatusList from '../components/statuslist/';

const mapStateToProps = (state, ownProps) => {
  return state;
};

let StatusListHOC = connect (mapStateToProps) (StatusList);

export {StatusListHOC};
