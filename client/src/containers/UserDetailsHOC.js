import {connect} from 'react-redux';
import UserDetails from '../components/userdetails/';

const mapStateToProps = state => {
  return state;
};

let UserDetailsHOC = connect (mapStateToProps) (UserDetails);

export {UserDetailsHOC};
