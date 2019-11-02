import React from "react";
import { connect } from "react-redux";
import { asceSort, descSort } from "../../../store/actions/";

function Sort({ onAsceSort, onDescSort }) {
  return (
    <div className="col">
      <div className="row">
        <div className="col">
          <button onClick={() => onAsceSort()} className="btn btn-primary">
            Asce
          </button>
        </div>
        <div className="col">
          <button className="btn btn-secondary" onClick={() => onDescSort()}>
            Desc
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onAsceSort: () => {
      dispatch(asceSort());
    },
    onDescSort: () => {
      dispatch(descSort());
    }
  };
};

let SortHOC = connect(
  null,
  mapDispatchToProps
)(Sort);

export { SortHOC };
