import React from 'react';
import { DeezerPlaylist } from '@features/deezer-api';

export type PlaylistProps = {
  playlist: DeezerPlaylist;
};

export const Playlist = ({ playlist }: PlaylistProps) => (
  <div>
    <h2>{playlist.title}</h2>
    <p>{playlist.description}</p>
    <p>Number of tracks : {playlist.nb_tracks}</p>
    <div>
      {playlist.tracks.data.map(track => (
        <p>
          <img src={track.album.cover} /> {track.artist.name} - {track.title}
        </p>
      ))}
    </div>
  </div>
);
