import axios from 'axios';

const LOAD_GITHUB_USERS = 'LOAD_GITHUB_USERS';
const LOADING_GITHUB_USERS = 'LOADING_GITHUB_USERS';
const LOAD_USER_REPOS = 'LOAD_USER_REPOS';
const LOADING_USER_REPOS = 'LOADING_USER_REPOS';
const CLEAR_USERS_REPOS = 'CLEAR_USERS_REPOS';
const SHOW_ERRORS = 'SHOW_ERRORS';
const CLEAR_ERRORS = 'CLEAR_ERRORS';

const initialState = {
  searchedName: '',
  githubAccounts: [],
  githubAccountsLoading: false,
  userRepos: {},
  nameOfUserWithReposLoading: '',
  userReposLoading: false,
  error: false,
};

export const getGithubUsers = (userName) => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
  dispatch({ type: LOADING_GITHUB_USERS });

  axios
    .get(`https://api.github.com/search/users?q=${userName}&page=1&per_page=5`)
    .then((response) => {
      dispatch({
        type: LOAD_GITHUB_USERS,
        payload: response.data.items.map(({ id, login, repos_url }) => ({ id, login, repos_url })),
        userName,
      });
    })
    .catch((error) => {
      dispatch({ type: SHOW_ERRORS });
      console.log('Error information ', error);
    });
};

export const getUserRepos = (userName, reposUrl) => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
  dispatch({ type: LOADING_USER_REPOS, userName });

  axios
    .get(`${reposUrl}`)
    .then((response) => {
      dispatch({
        type: LOAD_USER_REPOS,
        payload: response.data.map(({ id, name, description, stargazers_count, html_url }) => ({
          id,
          name,
          description,
          stargazers_count,
          html_url,
        })),
        userName,
      });
    })
    .catch((error) => {
      dispatch({ type: SHOW_ERRORS });
      console.log('Error information ', error);
    });
};

export const clearUsersRepos = () => ({ type: CLEAR_USERS_REPOS });

const githubUsers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GITHUB_USERS:
      return { ...state, githubAccounts: action.payload, githubAccountsLoading: false, searchedName: action.userName };
    case LOADING_GITHUB_USERS:
      return { ...state, githubAccountsLoading: true };
    case LOAD_USER_REPOS:
      return {
        ...state,
        userRepos: { ...state.userRepos, [action.userName]: action.payload },
        userReposLoading: false,
        nameOfUserWithReposLoading: '',
      };
    case LOADING_USER_REPOS:
      return { ...state, userReposLoading: true, nameOfUserWithReposLoading: action.userName };
    case CLEAR_USERS_REPOS:
      return { ...state, userRepos: {} };
    case SHOW_ERRORS:
      return {
        ...state,
        error: true,
        githubAccountsLoading: false,
        userReposLoading: false,
        nameOfUserWithReposLoading: '',
      };
    case CLEAR_ERRORS:
      return { ...state, error: false };
    default:
      return state;
  }
};

export default githubUsers;
