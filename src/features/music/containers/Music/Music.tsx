import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Store } from '@store';
import { Loader } from '@features/common-ui';

import { getPlaylist } from '../../actions';
import { PLAYLISTS } from '../../constants';
import { Playlist } from '../../components/Playlist';
import { PlaylistChooser } from '../../components/PlaylistChooser';
import { MusicStore } from '../../reducer';
import styles from './styles.scss';

export type MusicProps = {
  playlist: MusicStore['playlist'];
  isLoading: MusicStore['isLoading'];
  onChoose: (playlistId: number) => void;
};

export const MusicComponent = ({ playlist, isLoading, onChoose }: MusicProps) => (
  <div>
    <h2>Playlist browser</h2>
    <PlaylistChooser onChoose={onChoose} playlists={PLAYLISTS} isDisabled={isLoading} />
    {isLoading ? (
      <div className={styles.loader}>
        <Loader />
      </div>
    ) : null}
    {!isLoading && playlist ? <Playlist playlist={playlist} /> : null}
  </div>
);

const mapStateToProps = (state: Store) => ({
  playlist: state.music.playlist,
  isLoading: state.music.isLoading,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  onChoose: (playlistId: number) => dispatch(getPlaylist(playlistId)),
});

export const Music = connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicComponent);
