import { ThunkDispatch } from 'redux-thunk';
import { deezerApi, DeezerPlaylist } from '@features/deezer-api';

export const getPlaylist = (playlistId: number) => (dispatch: ThunkDispatch<any, any, any>) => {
  dispatch(getDeezerPlaylist());
  deezerApi.getPlaylist(playlistId).then(payload => {
    dispatch(receivedDeezerPlaylist(payload));
  });
};
const GET_DEEZER_PLAYLIST: 'GET_DEEZER_PLAYLIST' = 'GET_DEEZER_PLAYLIST';
export const getDeezerPlaylist = () => ({
  type: GET_DEEZER_PLAYLIST,
});

const RECEIVED_DEEZER_PLAYLIST: 'RECEIVED_DEEZER_PLAYLIST' = 'RECEIVED_DEEZER_PLAYLIST';
export const receivedDeezerPlaylist = (payload: DeezerPlaylist) => ({
  type: RECEIVED_DEEZER_PLAYLIST,
  payload,
});
