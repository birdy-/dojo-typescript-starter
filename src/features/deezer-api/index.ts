import { DEEZER_API_URL, CORS_PROXY_URL } from './constants';
export type DeezerArtist = {
  id: number;
  name: string;
  link: string;
  tracklist: string;
  type: 'artist';
};

export type DeezerAlbum = {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  link: string;
  tracklist: string;
  type: 'album';
};

export type DeezerUser = {
  id: number;
  name: string;
  tracklist: string;
  type: 'user';
};

export type DeezerTrack = {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  preview: string;
  time_add: number;
  artist: DeezerArtist;
  album: DeezerAlbum;
  type: 'track';
};

export type DeezerPlaylist = {
  id: number;
  title: string;
  description: string;
  duration: number;
  public: boolean;
  is_loved_track: boolean;
  collaborative: boolean;
  nb_tracks: number;
  fans: number;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  checksum: string;
  tracklist: string;
  creation_date: string;
  creator: DeezerUser;
  type: 'playlist';
  tracks: {
    data: DeezerTrack[];
    checksum: string;
  };
};

export type DeezerSearchResults = {
  data: DeezerTrack[] | null;
  next: string;
  total: number;
};

const getPlaylist = async (id: number): Promise<DeezerPlaylist> =>
  fetch(`${CORS_PROXY_URL}${DEEZER_API_URL}playlist/${id}`).then(response => response.json());

const search = async (search: string): Promise<DeezerSearchResults> =>
  fetch(`${CORS_PROXY_URL}${DEEZER_API_URL}search/?q=${search}`).then(response => response.json());

export const deezerApi = {
  getPlaylist,
  search,
};
