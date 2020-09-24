import axios from "axios";

const LOADING_GITHUB_USERS = 'LOADING_GITHUB_USERS';
const LOADED_GITHUB_USERS = 'LOADED_GITHUB_USERS';

const initialState = {
  githubAccounts: []
};

export const getGithubUsers = userName => dispatch => {
  axios.get(`https://api.github.com/search/users?q=${userName}&page=1&per_page=5`)
  .then((response) => {
    dispatch({
      type: LOADED_GITHUB_USERS,
      payload: response.data.items
    });
    console.log("response", response.data);
  })
  .catch((error) => {
    console.log("something went wrong", error);
  });
}

const githubUsers = (state = initialState, action) => {
  switch(action.type) {
    case LOADED_GITHUB_USERS:
      return { githubAccounts: action.payload }
    default:
      return state;
  }
}

export default githubUsers;