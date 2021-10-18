export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = User => ({
  type: RECEIVE_USER,
  User
});

export const requestUser = userId => dispatch => (
  fetchUser(userId).then(userId => (
    dispatch(receiveUser(userId))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchUser = userId => (
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}`,
    data: { userId }
  })
);
