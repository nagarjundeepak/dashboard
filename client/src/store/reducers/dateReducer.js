const initState = {
  startDate: 0,
  endDate: 13,
};

const dates = (state = initState, action) => {
  switch (action.type) {
    case 'PREV_FORTNIGHT':
      let prevStartDate = state.startDate - 13;
      let prevEndDate = state.endDate - 13;
      return {
        startDate: prevStartDate < 0 ? 0 : prevStartDate,
        endDate: prevEndDate < 13 ? 13 : prevEndDate,
      };
    case 'NEXT_FORTNIGHT':
      return {startDate: state.startDate + 13, endDate: state.endDate + 13};
    default:
      return state;
  }
};

export default dates;
