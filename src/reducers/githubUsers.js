import axios from "axios";

const LOADING_GITHUB_USERS = 'LOADING_GITHUB_USERS';
const LOAD_GITHUB_USERS = 'LOAD_GITHUB_USERS';
const LOAD_USER_REPOS = 'LOAD_USER_REPOS';

const initialState = {
  githubAccounts: [],
  userRepos: {},
};

export const getGithubUsers = userName => dispatch => {
  axios.get(`https://api.github.com/search/users?q=${userName}&page=1&per_page=5`)
  .then(response => {
    dispatch({
      type: LOAD_GITHUB_USERS,
      payload: response.data.items
    });
  })
  .catch((error) => {
    console.log("something went wrong", error);
  });
}

export const getUserRepos = (userName, reposUrl) => dispatch => {
  axios.get(`${reposUrl}?&page=1&per_page=5`)
  .then(response => {
    dispatch({
      type: LOAD_USER_REPOS,
      payload: response.data,
      userName
    })
  })
  .catch(error => {
    console.log('Upsssss', error);
  })
}

const githubUsers = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_GITHUB_USERS:
      return { ...state, githubAccounts: action.payload }
      case LOAD_USER_REPOS:
        return { ...state, userRepos: { ...state.userRepos, [action.userName]: action.payload }}
    default:
      return state;
  }
}

export default githubUsers;