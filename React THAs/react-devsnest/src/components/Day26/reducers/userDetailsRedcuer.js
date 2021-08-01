const initialState = {
  username: '',
  email: '',
  password: '',
};

const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'update-user-username':
      return { ...state, username: action.payload };
    case 'update-user-email':
      return { ...state, email: action.payload };
    case 'update-user-password':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default userDetailsReducer;
