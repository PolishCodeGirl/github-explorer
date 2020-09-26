import axios from "axios";

const LOAD_GITHUB_USERS = 'LOAD_GITHUB_USERS';
const LOADING_GITHUB_USERS = 'LOADING_GITHUB_USERS';
const LOAD_USER_REPOS = 'LOAD_USER_REPOS';
const LOADING_USER_REPOS = 'LOADING_USER_REPOS';
const CLEAR_USERS_REPOS = 'CLEAR_USERS_REPOS';

const initialState = {
  githubAccounts: [],
  githubAccountsLoading: false,
  userRepos: {},
  userReposLoading: false,
};

export const getGithubUsers = userName => dispatch => {
  dispatch({ type: LOADING_GITHUB_USERS});

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
  dispatch({ type: LOADING_USER_REPOS});

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

export const clearUsersRepos = () => dispatch => {
  dispatch({
    type: CLEAR_USERS_REPOS
  })
}

const githubUsers = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_GITHUB_USERS:
      return { ...state, githubAccounts: action.payload, githubAccountsLoading: false }
    case LOADING_GITHUB_USERS:
      return { ...state, githubAccountsLoading: true}
    case LOAD_USER_REPOS:
      return { ...state, userRepos: { ...state.userRepos, [action.userName]: action.payload }, userReposLoading: false}
    case LOADING_USER_REPOS:
      return { ...state, userReposLoading: true}
    case CLEAR_USERS_REPOS:
      return { ...state, userRepos: {} }
    default:
      return state;
  }
}

export default githubUsers;