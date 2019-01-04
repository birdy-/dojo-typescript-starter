import { ThunkDispatch } from 'redux-thunk';
import { deezerApi, DeezerPlaylist, DeezerSearchResults } from '@features/deezer-api';

export const getPlaylist = (playlistId: number) => (dispatch: ThunkDispatch<any, any, any>) => {
  dispatch(getDeezerPlaylist());
  deezerApi.getPlaylist(playlistId).then(payload => {
    dispatch(receivedDeezerPlaylist(payload));
  });
};

export const search = (search: string) => (dispatch: ThunkDispatch<any, any, any>) => {
  deezerApi.search(search).then(payload => {
    dispatch(receivedDeezerSearch(payload));
  });
};

const getDeezerPlaylist = () => ({
  type: 'GET_DEEZER_PLAYLIST' as 'GET_DEEZER_PLAYLIST',
});

const receivedDeezerPlaylist = (payload: DeezerPlaylist) => ({
  type: 'RECEIVED_DEEZER_PLAYLIST' as 'RECEIVED_DEEZER_PLAYLIST',
  payload,
});

const receivedDeezerSearch = (payload: DeezerSearchResults) => ({
  type: 'RECEIVED_DEEZER_SEARCH' as 'RECEIVED_DEEZER_SEARCH',
  payload,
});

export const actions = {
  getDeezerPlaylist,
  receivedDeezerPlaylist,
  receivedDeezerSearch,
};
