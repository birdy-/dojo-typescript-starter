import { ThunkDispatch } from 'redux-thunk';
import { deezerApi, DeezerPlaylist } from '@features/deezer-api';

export const getPlaylist = (playlistId: number) => (dispatch: ThunkDispatch<any, any, any>) => {
  dispatch(getDeezerPlaylist());
  deezerApi.getPlaylist(playlistId).then(payload => {
    dispatch(receivedDeezerPlaylist(payload));
  });
};

const getDeezerPlaylist = () => ({
  type: 'GET_DEEZER_PLAYLIST' as 'GET_DEEZER_PLAYLIST',
});

const receivedDeezerPlaylist = (payload: DeezerPlaylist) => ({
  type: 'RECEIVED_DEEZER_PLAYLIST' as 'RECEIVED_DEEZER_PLAYLIST',
  payload,
});

export const actions = {
  getDeezerPlaylist,
  receivedDeezerPlaylist,
};
