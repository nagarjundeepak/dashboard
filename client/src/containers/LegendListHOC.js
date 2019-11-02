import {connect} from 'react-redux';
import LegendList from '../components/legendList';

const mapStateToProps = state => {
  return state;
};

let LegendListHOC = connect (mapStateToProps) (LegendList);

export {LegendListHOC};
