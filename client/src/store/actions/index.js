export const prevFortnight = () => {
  return {
    type: 'PREV_FORTNIGHT',
  };
};

export const nextFortnight = () => {
  return {
    type: 'NEXT_FORTNIGHT',
  };
};

export const modifyStatus = (date, status) => {
  return {
    type: 'MODIFY_STATUS',
    date,
    status,
  };
};

export const asceSort = () => {
  return {
    type: 'ASCE_SORT',
  };
};

export const descSort = () => {
  return {
    type: 'DESC_SORT',
  };
};

export const searchUser = text => {
  return {
    type: 'SEARCH_USER',
    text,
  };
};

export const filter = () => {
  return {type: 'FILTER'};
};

export const addingNotes = (id, value) => {
  return {
    type: 'NEW_NOTE',
    id,
    value,
  };
};
