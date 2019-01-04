import { assoc, compose } from 'ramda';
import { DeezerPlaylist, DeezerSearchResults } from '@features/deezer-api';
import { receivedDeezerPlaylist, getDeezerPlaylist, receivedDeezerSearch } from './actions';

export type MusicStore = {
  playlist: DeezerPlaylist | null;
  search: DeezerSearchResults | null;
  isLoading: boolean;
};

const initialState: MusicStore = {
  playlist: null,
  search: null,
  isLoading: false,
};

export type MusicAction =
  | ReturnType<typeof receivedDeezerPlaylist>
  | ReturnType<typeof getDeezerPlaylist>
  | ReturnType<typeof receivedDeezerSearch>;

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
    case 'RECEIVED_DEEZER_SEARCH': {
      return assoc('search', action.payload, state);
    }
    default:
      return state;
  }
};
