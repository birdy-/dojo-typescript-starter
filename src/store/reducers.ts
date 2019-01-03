import { combineReducers } from 'redux';
import { musicReducer, MusicStore } from '@features/music';

export interface Store {
  music: MusicStore;
}

export const createRootReducer = () =>
  combineReducers({
    music: musicReducer,
  });
