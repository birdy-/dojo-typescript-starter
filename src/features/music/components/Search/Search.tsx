import React, { PureComponent, SyntheticEvent } from 'react';
import { DeezerSearchResults } from '@features/deezer-api';

type SearchProps = {
  results: DeezerSearchResults | null;
  onSubmit: (search: string) => void;
};

type SearchState = {
  search: string;
};

export class Search extends PureComponent<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      search: '',
    };
  }

  onChange = (evt: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ search: evt.currentTarget.value });
  };

  onSubmit = () => {
    console.log('submit');
    this.props.onSubmit(this.state.search);
  };

  render() {
    const { results } = this.props;
    return (
      <div>
        <p>
          <input value={this.state.search} onChange={this.onChange} />
          <button onClick={this.onSubmit}>Search</button>
        </p>
        <div>
          {results && results.data
            ? results.data.map(track => (
                <p>
                  <img src={track.album.cover} /> {track.artist.name} - {track.title}
                </p>
              ))
            : null}
        </div>
      </div>
    );
  }
}
