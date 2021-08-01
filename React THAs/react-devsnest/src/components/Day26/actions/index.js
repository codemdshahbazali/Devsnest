const updateUsername = (data) => {
  return {
    type: 'update-user-username',
    payload: data,
  };
};

const updateUserEmail = (data) => {
  return {
    type: 'update-user-email',
    payload: data,
  };
};

const updateUserPassword = (data) => {
  return {
    type: 'update-user-password',
    payload: data,
  };
};

export { updateUsername, updateUserEmail, updateUserPassword };
