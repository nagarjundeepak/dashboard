const userData = [
  {
    name: 'Kristie Minshall',
    id: 1001,
    mobile: '+61415148804',
    ratings: 2,
    ae: false,
    notes: '',
    status: [{date: 'Fri 1 Nov', status: 'Available'}],
  },
  {
    name: 'Sarah Symons',
    id: 1002,
    mobile: '+61402148340',
    ratings: 2,
    ae: false,
    notes: 'Friends with Ryan',
    status: [],
  },
  {
    name: 'Kylie Jolly',
    id: 1003,
    mobile: '+61422131209',
    ratings: 2,
    ae: true,
    notes: '',
    status: [],
  },
];

const initState = {userData, filtered: userData};

const users = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return state;
    case 'MODIFY_STATUS':
      const {date, status} = action;
      let user = state.userData.find (o => o.id === date.id);
      let isDate = user.status.find (k => k.date === date.day);
      if (isDate === undefined) {
        user.status.push ({date: date.day, status: status});
      }
      user.status.map (o => {
        if (o.date === date.day) {
          o.status = status;
        }
        return state;
      });
      return state;
    case 'ASCE_SORT':
      let asceUserData = state.userData.sort (
        (a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
      );
      return {userData: asceUserData, filtered: userData};
    case 'DESC_SORT':
      let descUserData = state.userData
        .sort ((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .reverse ();
      return {userData: descUserData, filtered: userData};
    case 'SEARCH_USER':
      let filterData = state.userData.filter (o =>
        o.name.toLowerCase ().includes (action.text.toLowerCase ())
      );
      return {userData, filtered: filterData};
    case 'NEW_NOTE':
      const {id, value} = action;
      let newUserData = [];
      for (let i = 0; i < state.userData.length; i++) {
        if (state.userData[i].id === id) {
          state.userData[i].notes = value;
          newUserData.push (state.userData[i]);
        } else {
          newUserData.push (state.userData[i]);
        }
      }
      return {userData: newUserData, filtered: userData};
    default:
      return state;
  }
};

export default users;
