export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const requestUser = userId => dispatch => (
  fetchUser(userId)
  .then(user => {
    dispatch(receiveUser(user))
  }, err => (
    console.log(err)
  ))
);

export const fetchUser = userId => (
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}`,
  })
);
