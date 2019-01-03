import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Store } from '@store';

import { getPlaylist } from '../../actions';
import { PLAYLISTS } from '../../constants';
import { Playlist } from '../../components/Playlist';
import { PlaylistChooser } from '../../components/PlaylistChooser';
import { MusicStore } from '../../reducer';

export type MusicProps = {
  playlist: MusicStore['playlist'];
  onChoose: (playlistId: number) => void;
};

export const MusicComponent = ({ playlist, onChoose }: MusicProps) => (
  <div>
    <p>Display playlist</p>
    <PlaylistChooser onChoose={onChoose} playlists={PLAYLISTS} />
    {playlist ? <Playlist playlist={playlist} /> : null}
  </div>
);

const mapStateToProps = (state: Store) => ({
  playlist: state.music.playlist,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  onChoose: (playlistId: number) => dispatch(getPlaylist(playlistId)),
});

export const Music = connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicComponent);
