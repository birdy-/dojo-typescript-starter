import { assoc, compose } from 'ramda';
import { DeezerPlaylist } from '@features/deezer-api';
import { actions } from './actions';

export type MusicStore = {
  playlist: DeezerPlaylist | null;
  isLoading: boolean;
};

const initialState: MusicStore = {
  playlist: null,
  isLoading: false,
};

export type MusicAction = ReturnType<typeof actions[keyof typeof actions]>;

export const musicReducer = (state: MusicStore = initialState, action: MusicAction): MusicStore => {
  switch (action.type) {
    case 'GET_DEEZER_PLAYLIST': {
      return assoc('isLoading', true, state);
    }
    case 'RECEIVED_DEEZER_PLAYLIST': {
      return compose(
        assoc('playlist', action.payload),
        assoc('isLoading', false)
      )(state) as MusicStore;
    }
    default:
      return state;
  }
};
