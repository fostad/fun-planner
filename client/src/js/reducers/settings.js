const initialState = {
  user: undefined
};

export const settings = (state=initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'SET_USER':
      return Object.assign({}, state, {user: action.payload.user});
    default:
      return state;
  }
};
