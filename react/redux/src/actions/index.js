import {
  FETCH_REPOS,
  FETCH_REPOS_FAILURE,
  UPDATE_USERNAME,
  UPDATE_SEARCH_KEYWORD,
  UPDATE_REPOS,
} from '../constants';
/**
 * Tic Tac Toe
 */
export const updateGameMove = index => {
  return {
    type: 'UPDATE_GAME_MOVE',
    index,
  };
};

export const jumpToMove = index => {
  return {
    type: 'JUMP_TO_MOVE',
    index,
  };
};

/**
 * Stop Watch
 */
export const updateTiming = time => {
  return {
    type: 'UPDATE_TIMING',
    time,
  };
};

export const updateResetCountDown = time => {
  return {
    type: 'UPDATE_RESET_COUNTDOWN',
    time,
  };
};

export const setIsRunning = isRunning => {
  return {
    type: 'SET_IS_RUNNING',
    isRunning,
  };
};

/**
 * Data Fetch List
 */
export const updateUsername = username => {
  return {
    type: UPDATE_USERNAME,
    username,
  };
};

export const updateSearchKeyword = searchKeyword => {
  return {
    type: UPDATE_SEARCH_KEYWORD,
    searchKeyword,
  };
};

export const updateRepos = repos => {
  return {
    type: UPDATE_REPOS,
    repos,
  };
};

export const fetchUserRepos = username => {
  return {
    type: FETCH_REPOS,
    username,
  };
};

export const fetchReposFailure = error => {
  return {
    type: FETCH_REPOS_FAILURE,
    error,
  };
};
