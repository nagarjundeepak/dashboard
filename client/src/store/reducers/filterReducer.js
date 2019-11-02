const initState = {
  query: false,
};

const filter = (state = initState, action) => {
  switch (action.type) {
    case 'FILTER':
      return {query: !state.query};
    default:
      return {query: state.query};
  }
};

export default filter;
