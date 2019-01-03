import React from 'react';
import { PlaylistOption } from '../../constants';

export type PlaylistChooserProps = {
  playlists: PlaylistOption[];
  onChoose: (playlistId: number) => void;
  isDisabled?: boolean;
};

export const PlaylistChooser = ({ playlists, onChoose, isDisabled = false }: PlaylistChooserProps) => (
  <div>
    {playlists.map(playlist => (
      <button key={playlist.id} onClick={() => onChoose(playlist.id)} disabled={isDisabled}>
        {playlist.name}
      </button>
    ))}
  </div>
);
