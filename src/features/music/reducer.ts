import { assoc } from 'ramda';
import { DeezerPlaylist } from '@features/deezer-api';
import { receivedPlaylist } from './actions';

export type MusicStore = {
  playlist: DeezerPlaylist | null;
};

const initialState: MusicStore = {
  playlist: null,
};

type MusicAction = ReturnType<typeof receivedPlaylist>;

export const musicReducer = (state: MusicStore = initialState, action: MusicAction): MusicStore => {
  const { type } = action;
  switch (type) {
    case 'RECEIVED_DEEZER_PLAYLIST':
      return assoc('playlist', action.payload, state);
    default:
      return state;
  }
};
