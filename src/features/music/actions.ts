import { ThunkDispatch } from 'redux-thunk';
import { deezerApi, DeezerPlaylist } from '@features/deezer-api';

export const getPlaylist = (playlistId: number) => (dispatch: ThunkDispatch<any, any, any>) =>
  deezerApi.getPlaylist(playlistId).then(payload => {
    dispatch(receivedPlaylist(payload));
  });

const RECEIVED_DEEZER_PLAYLIST: 'RECEIVED_DEEZER_PLAYLIST' = 'RECEIVED_DEEZER_PLAYLIST';
export const receivedPlaylist = (payload: DeezerPlaylist) => ({
  type: RECEIVED_DEEZER_PLAYLIST,
  payload,
});
