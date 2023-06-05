import { fetchUserSuccess, fetchUserFailure } from './Reducers';

export const fetchUser = (username) => async (dispatch) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    dispatch(fetchUserSuccess(data));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};