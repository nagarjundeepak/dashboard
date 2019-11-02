const initState = [
  {status: 'Available', colorCode: '#58e817'},
  {status: 'Booked', colorCode: '#507caf'},
  {status: "Haven't indicated", colorCode: '#ffa500'},
  {status: 'Vacation', colorCode: '#ff0000'},
  {status: 'Unavailable', colorCode: '#ff0000'},
];

const activities = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default activities;
