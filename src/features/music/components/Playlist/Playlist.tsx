import React from 'react';
import { DeezerPlaylist } from '@features/deezer-api';

export type PlaylistProps = {
  playlist: DeezerPlaylist;
};

export const Playlist = ({ playlist }: PlaylistProps) => (
  <div>
    <h2>{playlist.title}</h2>
    <p>{playlist.description}</p>
  </div>
);
