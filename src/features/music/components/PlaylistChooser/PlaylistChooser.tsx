import React from 'react';
import { PlaylistOption } from '../../constants';

export type PlaylistChooserProps = {
  playlists: PlaylistOption[];
  onChoose: (playlistId: number) => void;
};

export const PlaylistChooser = ({ playlists, onChoose }: PlaylistChooserProps) => (
  <div>
    {playlists.map(playlist => (
      <button key={playlist.id} onClick={() => onChoose(playlist.id)}>
        {playlist.name}
      </button>
    ))}
  </div>
);
