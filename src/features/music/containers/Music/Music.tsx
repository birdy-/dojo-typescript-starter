import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Store } from '@store';
import { Loader } from '@features/common-ui';

import { getPlaylist, search } from '../../actions';
import { PLAYLISTS } from '../../constants';
import { Playlist } from '../../components/Playlist';
import { Search } from '../../components/Search';
import { PlaylistChooser } from '../../components/PlaylistChooser';
import { MusicStore } from '../../reducer';

import styles from './styles.scss';

export type MusicProps = {
  playlist: MusicStore['playlist'];
  isLoading: MusicStore['isLoading'];
  results: MusicStore['search'];
  onChoose: (playlistId: number) => void;
  onSearch: (query: string) => void;
};

export const MusicComponent = ({ playlist, isLoading, results, onChoose, onSearch }: MusicProps) => (
  <div>
    <h2>Playlist browser</h2>
    <PlaylistChooser onChoose={onChoose} playlists={PLAYLISTS} isDisabled={isLoading} />
    {isLoading ? (
      <div className={styles.loader}>
        <Loader />
      </div>
    ) : null}
    {!isLoading && playlist ? <Playlist playlist={playlist} /> : null}
    <Search results={results} onSubmit={onSearch} />
  </div>
);

const mapStateToProps = (state: Store) => ({
  playlist: state.music.playlist,
  isLoading: state.music.isLoading,
  results: state.music.search,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  onChoose: (playlistId: number) => dispatch(getPlaylist(playlistId)),
  onSearch: (query: string) => dispatch(search(query)),
});

export const Music = connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicComponent);
