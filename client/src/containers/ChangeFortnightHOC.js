import {connect} from 'react-redux';
import ChangeFortnight from '../components/changeFortnight';
import {prevFortnight, nextFortnight} from '../store/actions/';

const mapDispatchToProps = dispatch => {
  return {
    prevClick: () => {
      dispatch (prevFortnight ());
    },
    nextClick: () => {
      dispatch (nextFortnight ());
    },
  };
};

let ChangeFortnightHOC = connect (null, mapDispatchToProps) (ChangeFortnight);

export {ChangeFortnightHOC};
